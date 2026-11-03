/* KK Monitoring V65 — consolidated maintenance + UX upgrade layer.
   Additive by design: keeps v62/cloud/command features, owns the final edge-case fixes. */
(() => {
  'use strict';
  if (window.__kkV65Loaded) return;
  window.__kkV65Loaded = true;

  const $ = (s, root=document) => root.querySelector(s);
  const $$ = (s, root=document) => [...root.querySelectorAll(s)];
  const today = () => typeof window.getSafeDateStr === 'function' ? window.getSafeDateStr() : new Date().toISOString().slice(0,10);
  const escape = v => typeof window.escapeHTML === 'function' ? window.escapeHTML(v) : String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const save = reason => { try { window.saveDataLocally?.(reason); } catch (_) {} };
  const toast = (msg, err=false) => { try { window.showToast?.(msg, err); } catch (_) {} };

  function ensureAppData() {
    window.appData = window.appData && typeof window.appData === 'object' ? window.appData : {};
    const d = window.appData;
    d.tasks = d.tasks && typeof d.tasks === 'object' && !Array.isArray(d.tasks) ? d.tasks : {};
    d.dailySessions = d.dailySessions && typeof d.dailySessions === 'object' && !Array.isArray(d.dailySessions) ? d.dailySessions : {};
    d.attendance = d.attendance && typeof d.attendance === 'object' && !Array.isArray(d.attendance) ? d.attendance : {};
    d.vaultFolders = Array.isArray(d.vaultFolders) ? d.vaultFolders : [];
    d.vaultNotes = Array.isArray(d.vaultNotes) ? d.vaultNotes : [];
    d.vocabProgress = d.vocabProgress && typeof d.vocabProgress === 'object' ? d.vocabProgress : {};
    d.grammarProgress = d.grammarProgress && typeof d.grammarProgress === 'object' ? d.grammarProgress : {};
    d.studyLogs = Array.isArray(d.studyLogs) ? d.studyLogs : [];
    d.mocks = Array.isArray(d.mocks) ? d.mocks : [];
    d.quizHistory = Array.isArray(d.quizHistory) ? d.quizHistory : [];
    return d;
  }

  // ---------- Daily streak: use date-specific schedules for each day ----------
  function refreshTaskStreak() {
    try {
      const d = ensureAppData();
      let streak = 0;
      const curr = new Date();
      while (streak < 366) {
        const key = typeof window.getSafeDateStr === 'function' ? window.getSafeDateStr(curr) : curr.toISOString().slice(0,10);
        const state = d.tasks[key] || {};
        const plan = typeof window.generateDailySchedule === 'function' ? window.generateDailySchedule(key) : [];
        const taskIds = plan.filter(x => !x.isBreak).map(x => x.id);
        const completed = taskIds.filter(id => !!state[id]).length;
        if (!completed) break;
        streak += 1;
        curr.setDate(curr.getDate() - 1);
      }
      const el = $('#taskStreak');
      if (el) el.textContent = String(streak);
      return streak;
    } catch (e) { console.warn('V65 streak refresh:', e); return 0; }
  }

  // ---------- IndexedDB helpers for safe Vault cleanup ----------
  const DB_NAME = 'KKMonitoringFilesDB';
  const DB_VERSION = 1;
  const STORE = 'vaultFiles';
  function openDB() {
    return new Promise((resolve, reject) => {
      if (!('indexedDB' in window)) return reject(new Error('IndexedDB unavailable'));
      const req = indexedDB.open(DB_NAME, DB_VERSION);
      req.onupgradeneeded = () => { const db=req.result; if(!db.objectStoreNames.contains(STORE)) db.createObjectStore(STORE,{keyPath:'id'}); };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error || new Error('IndexedDB open failed'));
    });
  }
  async function allVaultRecords() {
    const db = await openDB();
    return new Promise((resolve,reject)=>{
      const tx=db.transaction(STORE,'readonly');
      const req=tx.objectStore(STORE).getAll();
      req.onsuccess=()=>resolve(req.result||[]);
      req.onerror=()=>reject(req.error||new Error('Vault read failed'));
    });
  }
  async function deleteVaultIds(ids) {
    const list=[...new Set((ids||[]).filter(Boolean))];
    if(!list.length) return;
    const db=await openDB();
    return new Promise((resolve,reject)=>{
      const tx=db.transaction(STORE,'readwrite'), store=tx.objectStore(STORE);
      list.forEach(id=>store.delete(id));
      tx.oncomplete=()=>resolve(true); tx.onerror=()=>reject(tx.error||new Error('Vault delete failed'));
    });
  }
  async function clearVaultStore() {
    const db=await openDB();
    return new Promise((resolve,reject)=>{
      const tx=db.transaction(STORE,'readwrite'); tx.objectStore(STORE).clear();
      tx.oncomplete=()=>resolve(true); tx.onerror=()=>reject(tx.error||new Error('Vault clear failed'));
    });
  }
  async function putVaultRecords(records) {
    if(!records?.length) return;
    const db=await openDB();
    return new Promise((resolve,reject)=>{
      const tx=db.transaction(STORE,'readwrite'), store=tx.objectStore(STORE);
      records.forEach(r=>store.put(r));
      tx.oncomplete=()=>resolve(true); tx.onerror=()=>reject(tx.error||new Error('Vault restore failed'));
    });
  }
  function descendantIds(rootId) {
    const d=ensureAppData(), ids=new Set([String(rootId)]), folders=d.vaultFolders||[];
    let changed=true;
    while(changed){ changed=false; for(const f of folders){ if(f.parentId!=null && ids.has(String(f.parentId)) && !ids.has(String(f.id))){ids.add(String(f.id));changed=true;} } }
    return ids;
  }
  function noteFileIds(notes) {
    const ids=[]; (notes||[]).forEach(n => (n.fileRefs||[]).forEach(ref => ref?.id && ids.push(ref.id)));
    return ids;
  }

  async function deleteFolderCascade(id, ask=true) {
    try {
      const d=ensureAppData();
      if(ask && !(await window.kkDialogConfirm('Delete this folder and all nested folders, notes and files?', 'Delete All', true))) return false;
      const ids=descendantIds(id);
      const doomedNotes=d.vaultNotes.filter(n=>ids.has(String(n.folderId)));
      const doomedFiles=noteFileIds(doomedNotes);
      try { await deleteVaultIds(doomedFiles); } catch (e) { console.warn('V65 vault file cleanup:', e); }
      d.vaultFolders=d.vaultFolders.filter(f=>!ids.has(String(f.id)));
      d.vaultNotes=d.vaultNotes.filter(n=>!ids.has(String(n.folderId)));
      doomedNotes.forEach(n => (n.fileRefs||[]).forEach(ref=>window.vaultFileCache?.delete(ref.id)));
      save('delete');
      window.kkCloudReplaceNow?.();
      window.renderVaultFolders?.(null);
      window.renderDashboardStickyNotes?.();
      $('#folderModal')?.classList.remove('show');
      toast('Folder and all nested data deleted.');
      refreshStorageHealth();
      return true;
    } catch(e) { console.error('V65 folder delete:',e); toast('Could not delete folder completely.',true); return false; }
  }
  window.deleteFolder = id => deleteFolderCascade(id, true);

  const previousOpenFolderModal=window.openFolderModal;
  window.openFolderModal=function(id,name){
    window.__kkCurrentFolderId=Number(id);
    return typeof previousOpenFolderModal==='function' ? previousOpenFolderModal.apply(this,arguments) : undefined;
  };
  window.deleteCurrentFolder=async function(){
    const id=window.__kkCurrentFolderId;
    if(!id) return toast('Cannot delete the root view.',true);
    await deleteFolderCascade(id,true);
    window.__kkCurrentFolderId=null;
  };

  // ---------- Revision Radar ----------
  function dueItems(store) {
    const d=ensureAppData(), now=today(), src=d[store]||{};
    return Object.entries(src).filter(([,p])=>p&&p.nextReview&&p.nextReview<=now).map(([key,p])=>({key, nextReview:p.nextReview, status:p.status||'new'}));
  }
  function openRevision(type){
    const store=type==='vocab'?'vocabProgress':'grammarProgress';
    const due=dueItems(store);
    if(!due.length) return toast(`No ${type==='vocab'?'vocabulary':'grammar'} revision due today.`);
    document.querySelector('[data-tab="view-learn"]')?.click();
    const first=due[0].key;
    setTimeout(()=>{
      if(type==='vocab' && typeof vocabData!=='undefined'){
        const idx=vocabData.findIndex(v=>String(v.word)===String(first)); if(idx>=0) window.renderVocabWord?.(idx);
      } else if(type==='grammar' && typeof grammarData!=='undefined'){
        const idx=Number(first); if(Number.isFinite(idx)) window.renderGrammarRule?.(idx);
      }
    },40);
  }
  window.renderRevisionDue=function(){
    try{
      const dash=$('#view-dashboard'); if(!dash) return;
      let row=$('#v65RevisionRadar');
      if(!row){
        row=document.createElement('section'); row.id='v65RevisionRadar'; row.className='v65-smart-row';
        dash.appendChild(row);
      }
      const vocab=dueItems('vocabProgress'), grammar=dueItems('grammarProgress');
      const overdue=[...vocab,...grammar].filter(x=>x.nextReview<today()).length;
      const total=vocab.length+grammar.length;
      row.innerHTML=`<article class="cc-card v65-radar-card"><div class="cc-card-head"><div><div class="cc-label">REVISION RADAR</div><h3>${total} Due Today</h3></div><span class="v65-radar-count ${overdue?'hot':''}">${overdue} overdue</span></div><div class="v65-radar-list"><button type="button" data-revision="vocab"><b>Vocabulary</b><span>${vocab.length} due</span><em>Review →</em></button><button type="button" data-revision="grammar"><b>Grammar Rules</b><span>${grammar.length} due</span><em>Review →</em></button></div><div class="v65-radar-footer"><span>Next review intervals: 1d · 3d · 7d · 15d · 30d</span><button type="button" class="cc-link" data-revision="all">Open Learn Hub →</button></div></article>`;
      row.querySelectorAll('[data-revision]').forEach(btn=>btn.addEventListener('click',()=>{
        const type=btn.dataset.revision;
        if(type==='all') document.querySelector('[data-tab="view-learn"]')?.click();
        else openRevision(type);
      }));
    } catch(e) { console.warn('V65 revision radar:',e); }
  };

  // ---------- Weekly Review ----------
  function dateKeyOffset(n){ const d=new Date(); d.setDate(d.getDate()+n); return typeof window.getSafeDateStr==='function'?window.getSafeDateStr(d):d.toISOString().slice(0,10); }
  function weeklyStats(){
    const d=ensureAppData(), days=[]; let focus=0,waste=0,done=0,total=0;
    for(let i=-6;i<=0;i++){
      const key=dateKeyOffset(i), plan=typeof window.generateDailySchedule==='function'?window.generateDailySchedule(key):[], state=d.tasks[key]||{};
      const ids=plan.filter(x=>!x.isBreak).map(x=>x.id); total+=ids.length; done+=ids.filter(id=>state[id]).length;
      focus+=d.studyLogs.filter(x=>x.date===key&&x.type==='Focus').reduce((s,x)=>s+(Number(x.duration)||0),0);
      waste+=d.studyLogs.filter(x=>x.date===key&&x.type==='Waste').reduce((s,x)=>s+(Number(x.duration)||0),0);
      days.push(key);
    }
    const mocks=d.mocks.filter(m=>days.includes(m.date));
    const avg=mocks.length?mocks.reduce((s,m)=>{const max=Number(m.maxScore)||100; return s+(Number(m.totalMarks)||0)/max*100;},0)/mocks.length:0;
    return {focus,waste,done,total,completion:total?done/total*100:0,mocks:mocks.length,avgMock:avg};
  }
  function hms(sec){const h=Math.floor(sec/3600),m=Math.floor((sec%3600)/60);return h?`${h}h ${m}m`:`${m}m`;}
  window.renderWeeklyReview=function(){
    try{
      const dash=$('#view-dashboard'); if(!dash) return;
      let row=$('#v65WeeklyReview'); if(!row){row=document.createElement('section');row.id='v65WeeklyReview';row.className='v65-smart-row';dash.appendChild(row);}
      const s=weeklyStats();
      row.innerHTML=`<article class="cc-card v65-week-card"><div class="cc-card-head"><div><div class="cc-label">WEEKLY REVIEW</div><h3>Last 7 days</h3></div><button type="button" class="cc-secondary small" id="v65RefreshWeek">Refresh</button></div><div class="v65-week-grid"><div><b>${hms(s.focus)}</b><span>Focus time</span></div><div><b>${hms(s.waste)}</b><span>Waste time</span></div><div><b>${Math.round(s.completion)}%</b><span>Plan completion</span></div><div><b>${s.mocks?Math.round(s.avgMock)+'%':'—'}</b><span>Mock average</span></div></div><div class="v65-week-note">${s.completion>=80?'Strong plan consistency. Protect the routine and keep quality high.':s.completion>=50?'Good base. Use the replanner when a block slips.':'The week has several unfinished plan blocks. Rebalance the next 2–3 days instead of cramming.'}</div></article>`;
      $('#v65RefreshWeek')?.addEventListener('click',()=>window.renderWeeklyReview());
    } catch(e){ console.warn('V65 weekly review:',e); }
  };

  // ---------- Smart Replanner ----------
  function round15(min){return Math.ceil(min/15)*15;}
  function minToClock(m){const h=Math.floor(m/60)%24,mm=String(m%60).padStart(2,'0'),ap=h>=12?'PM':'AM',hh=h%12||12;return `${hh}:${mm} ${ap}`;}
  function replanItems(){
    const d=ensureAppData(), key=today(), state=d.tasks[key]||{}, plan=typeof window.generateDailySchedule==='function'?window.generateDailySchedule(key):[];
    return plan.filter(x=>!x.isBreak&&!state[x.id]).map(x=>({id:x.id,title:x.title,duration:Number(x.duration)||30,sectionLabel:x.sectionLabel||'Flex'}));
  }
  window.openSmartReplanner=function(){
    $('#v65ReplanModal')?.remove();
    const modal=document.createElement('div'); modal.id='v65ReplanModal'; modal.className='cmd-modal';
    const remaining=replanItems(); let now=new Date(); let start=now.getHours()*60+now.getMinutes(); start=Math.max(8*60,round15(start)); const end=20*60+30;
    if(start>=end){ modal.innerHTML='<div class="cmd-modal-card"><button class="btn-secondary cmd-modal-close">Close</button><div class="cc-eyebrow">SMART REPLANNER</div><h2>No study window left today</h2><p class="v65-muted">Your planned window has ended. Keep the remaining blocks for tomorrow instead of forcing a late catch-up.</p></div>'; document.body.appendChild(modal); $('.cmd-modal-close',modal).onclick=()=>modal.remove(); return; }
    const rows=[]; let cursor=start; const scheduledIds=new Set();
    const breaks=[{start:13*60,end:15*60,title:'Lunch Break'},{start:18*60,end:18*60+30,title:'Walk Break'}];
    for(const item of remaining){
      if(cursor>=end) break;
      if(breaks.some(b=>cursor>=b.start&&cursor<b.end)){const b=breaks.find(b=>cursor>=b.start&&cursor<b.end);rows.push({break:true,time:`${minToClock(b.start)} – ${minToClock(b.end)}`,title:`🍱 ${b.title}`});cursor=b.end;}
      if(cursor>=end) break;
      const crossing=breaks.find(b=>cursor<b.start&&cursor+item.duration>b.start);
      if(crossing){rows.push({break:true,time:`${minToClock(crossing.start)} – ${minToClock(crossing.end)}`,title:`🍱 ${crossing.title}`});cursor=crossing.end;}
      if(cursor+item.duration>end) break;
      rows.push({id:item.id,time:`${minToClock(cursor)} – ${minToClock(cursor+item.duration)}`,title:item.title,duration:item.duration});
      scheduledIds.add(item.id); cursor+=item.duration;
    }
    const delayed=remaining.filter(item=>!scheduledIds.has(item.id));
    modal.innerHTML=`<div class="cmd-modal-card v65-replan-card"><button class="btn-secondary cmd-modal-close">Close</button><div class="cc-eyebrow">SMART REPLANNER</div><h2>Preview a better rest-of-day plan</h2><p class="v65-muted">${remaining.length} incomplete blocks detected. The preview keeps lunch/walk breaks and never splits a task across a break or the 8:30 PM cutoff.</p><div class="v65-replan-list">${rows.map(r=>`<div class="v65-replan-row ${r.break?'break':''}"><time>${escape(r.time)}</time><span>${escape(r.title)}</span>${!r.break?`<em>${r.duration}m</em>`:''}</div>`).join('')||'<div class="v65-empty">Nothing left to replan today.</div>'}</div>${delayed.length?`<div class="v65-replan-warning">${delayed.length} block(s) do not fit before 8:30 PM. Keep them in backlog instead of extending the window.</div>`:''}<div class="v65-replan-actions"><button type="button" class="cc-primary" id="v65ReplanOpen">Open Daily Plan</button><button type="button" class="cc-secondary cmd-modal-close">Done</button></div></div>`;
    document.body.appendChild(modal);
    $$('.cmd-modal-close',modal).forEach(b=>b.addEventListener('click',()=>modal.remove()));
    $('#v65ReplanOpen',modal).onclick=()=>{modal.remove();document.querySelector('[data-tab="view-daily-tasks"]')?.click();};
  };

  // Add Smart Replan CTA to the Daily Plan heading exactly once.
  function injectReplanButton(){
    const header=$('#view-daily-tasks .streak-badge'); if(!header || $('#v65ReplanBtn')) return;
    const btn=document.createElement('button'); btn.id='v65ReplanBtn'; btn.type='button'; btn.className='cc-secondary'; btn.innerHTML='↻ Replan Day'; btn.style.marginLeft='8px'; btn.onclick=()=>window.openSmartReplanner();
    header.parentElement?.appendChild(btn);
  }

  // ---------- Backup / Restore: replace the actual local vault atomically ----------
  function normalizeImportedData(incoming){
    const d=JSON.parse(JSON.stringify(incoming||{}));
    d.tasks=d.tasks&&typeof d.tasks==='object'&&!Array.isArray(d.tasks)?d.tasks:{};
    d.dailySessions=d.dailySessions&&typeof d.dailySessions==='object'&&!Array.isArray(d.dailySessions)?d.dailySessions:{};
    d.attendance=d.attendance&&typeof d.attendance==='object'&&!Array.isArray(d.attendance)?d.attendance:{};
    d.vaultFolders=Array.isArray(d.vaultFolders)?d.vaultFolders:[];
    d.vaultNotes=Array.isArray(d.vaultNotes)?d.vaultNotes:[];
    d.mocks=Array.isArray(d.mocks)?d.mocks:[]; d.studyLogs=Array.isArray(d.studyLogs)?d.studyLogs:[]; d.quizHistory=Array.isArray(d.quizHistory)?d.quizHistory:[];
    return d;
  }
  function dataUrlToBlob(dataUrl){
    const [meta,raw]=String(dataUrl||'').split(','); if(!raw) throw new Error('Invalid data URL');
    const mime=(meta.match(/data:([^;]+)/i)||[])[1]||'application/octet-stream'; const bin=atob(raw), bytes=new Uint8Array(bin.length); for(let i=0;i<bin.length;i++) bytes[i]=bin.charCodeAt(i); return new Blob([bytes],{type:mime});
  }
  async function blobToDataUrl(blob){
    return new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve(reader.result);reader.onerror=()=>reject(reader.error||new Error('File read failed'));reader.readAsDataURL(blob);});
  }
  window.exportFullBackup=async function(){
    try{
      ensureAppData(); await window.ensureVaultStorageReady?.();
      const refs=[...new Set(noteFileIds(window.appData.vaultNotes))], records=await allVaultRecords(), byId=new Map(records.map(r=>[r.id,r]));
      const vaultFiles=[]; for(const id of refs){const rec=byId.get(id);if(rec?.blob){vaultFiles.push({id:rec.id,type:rec.type||rec.blob.type,name:rec.name||'Vault File',size:rec.size||rec.blob.size,createdAt:rec.createdAt||Date.now(),data:await blobToDataUrl(rec.blob)});}}
      const payload={app:'KK Monitoring',version:'V65',exportedAt:new Date().toISOString(),data:window.appData,vaultFiles};
      await window.kkDownloadFile(`KK_Monitoring_Full_Backup_${today()}.json`, JSON.stringify(payload,null,2), 'application/json');
      toast(`Full backup exported (${vaultFiles.length} Vault file(s)).`);
    }catch(e){console.error('V65 backup export:',e);toast('Backup export failed.',true);}
  };

  window.importFullBackup=async function(input){
    const file=input?.files?.[0]; if(!file) return;
    try{
      const parsed=JSON.parse(await file.text()); const incoming=normalizeImportedData(parsed?.data||parsed); if(!Array.isArray(incoming.mocks)) throw new Error('Invalid backup');
      if(!(await window.kkDialogConfirm('Import this backup? Current local study data and Vault files will be replaced.', 'Import & Replace', true))) return;
      const files=[]; for(const f of (Array.isArray(parsed?.vaultFiles)?parsed.vaultFiles:[])){ if(!f?.id||!f?.data) continue; const blob=dataUrlToBlob(f.data); files.push({id:f.id,blob,type:f.type||blob.type,name:f.name||'Vault File',size:blob.size,createdAt:Number(f.createdAt)||Date.now()}); }
      await clearVaultStore(); await putVaultRecords(files);
      window.appData=incoming; save();
      await window.ensureVaultStorageReady?.();
      if(window.vaultStorageReady) await window.vaultStorageReady;
      toast(`Backup imported successfully (${files.length} vault file(s)). Reloading…`);
      setTimeout(()=>location.reload(),600);
    } catch(e){ console.error('V65 backup import:',e); toast('Invalid or unreadable backup file.',true); }
    finally { if(input) input.value=''; }
  };

  // ---------- Storage Health ----------
  async function refreshStorageHealth(){
    const status=$('#v65StorageHealth'); if(!status) return;
    try{
      const d=ensureAppData(), records=await allVaultRecords();
      const refs=new Set(noteFileIds(d.vaultNotes)); const orphan=records.filter(r=>!refs.has(r.id));
      const missingRefs=[...refs].filter(id=>!records.some(r=>r.id===id));
      status.innerHTML=`<div class="v65-health-grid"><div><b>${d.vaultNotes.length}</b><span>Vault notes</span></div><div><b>${records.length}</b><span>IndexedDB files</span></div><div><b>${orphan.length}</b><span>Orphan files</span></div><div><b>${missingRefs.length}</b><span>Broken refs</span></div></div><div class="v65-health-actions"><button type="button" class="cc-secondary" id="v65CleanOrphans">Clean Orphans</button><button type="button" class="cc-secondary" id="v65RescanHealth">Rescan</button></div>`;
      $('#v65CleanOrphans')?.addEventListener('click', async()=>{ try{await deleteVaultIds(orphan.map(x=>x.id)); toast(orphan.length?`${orphan.length} orphan file(s) removed.`:'No orphan files found.'); await refreshStorageHealth();}catch(e){toast('Could not clean orphan files.',true);} });
      $('#v65RescanHealth')?.addEventListener('click',()=>refreshStorageHealth());
    } catch(e){ status.textContent='Vault health information unavailable.'; }
  }

  function injectHealthCard(){
    const grid=$('#view-settings .settings-grid'); if(!grid || $('#v65HealthCard')) return;
    const card=document.createElement('section'); card.id='v65HealthCard'; card.className='glass-panel settings-card';
    card.innerHTML='<h3>🩺 Data Health</h3><p>Check for unused Vault blobs or broken file references after imports, restores and migrations.</p><div id="v65StorageHealth" class="settings-status">Scanning…</div>';
    grid.appendChild(card); refreshStorageHealth();
  }

  // ---------- Final Dashboard layout / UX ----------
  function renderDashboardEnhancements(){
    injectReplanButton();
    window.renderRevisionDue?.();
    window.renderWeeklyReview?.();
    injectHealthCard();
    refreshTaskStreak();
  }

  // ---------- Weekly Review shortcut ----------
  function injectWeeklyShortcut(){
    const welcome=$('#view-dashboard .cc-actions'); if(!welcome || $('#v65WeekBtn')) return;
    const btn=document.createElement('button'); btn.id='v65WeekBtn'; btn.type='button'; btn.className='cc-secondary'; btn.textContent='Weekly Review'; btn.onclick=()=>window.renderWeeklyReview?.();
    welcome.appendChild(btn);
  }

  // Keep final day-window UI consistent with Daily Plan 08:00–20:30.
  function normalizeDayWindow(){
    const card=$('.cmd-day-card'), bar=$('#commandDayBar'), clock=$('#commandDayClock'), status=$('#commandDayStatus'), pct=$('#commandDayPercent');
    if(!card || !bar || !clock || !status || !pct) return;
    const meta=card.querySelector('.cmd-day-meta'); if(meta){const spans=meta.querySelectorAll('span');if(spans[0])spans[0].textContent='8:00 AM';if(spans[2])spans[2].textContent='8:30 PM';}
    window.kkUpdateDayWindow=function(){
      const now=new Date(), start=new Date(now), end=new Date(now); start.setHours(8,0,0,0); end.setHours(20,30,0,0);
      const total=end-start; let remaining,label;
      if(now<start){remaining=start-now;label='Your planned study window starts at 8:00 AM.';} else if(now>=end){remaining=0;label='Today’s planned study window is complete. Plan tomorrow calmly.';} else {remaining=end-now;label='Time left for today’s planned study.';}
      const percent=Math.max(0,Math.min(100,Math.round(remaining/total*100))); clock.textContent=new Date(remaining).toISOString().slice(11,19); status.textContent=label; pct.textContent=`${percent}% left`; bar.style.width=`${percent}%`;
    };
    window.kkUpdateDayWindow();
  }

  // ---------- Small accessibility/wording cleanup ----------
  function finalizeCopy(){
    const unlock=$('#unlockBtn'); if(unlock) unlock.textContent='Unlock App';
  }

  function boot(){
    ensureAppData();
    setTimeout(()=>{
      try{
        normalizeDayWindow();
        injectWeeklyShortcut();
        renderDashboardEnhancements();
        finalizeCopy();
        window.renderRevisionDue?.();
        window.renderWeeklyReview?.();
        window.renderProgressWidgets?.();
      }catch(e){console.warn('V65 boot:',e);}
    },80);
    window.addEventListener('kk:data-saved',()=>{refreshTaskStreak();window.renderRevisionDue?.();window.renderWeeklyReview?.();});
    window.addEventListener('kk:core-ready',()=>setTimeout(()=>{normalizeDayWindow();renderDashboardEnhancements();},50),{once:true});
    if(!window.__kkV65HealthTimer){window.__kkV65HealthTimer=true;setTimeout(refreshStorageHealth,500);}
  }
  boot();
})();
