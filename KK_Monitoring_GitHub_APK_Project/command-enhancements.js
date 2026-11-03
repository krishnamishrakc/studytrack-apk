/* KK Monitoring: consolidated feature layer for the Command Center. */
(function () {
  'use strict';
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const today = () => window.getSafeDateStr ? window.getSafeDateStr() : new Date().toISOString().slice(0, 10);
  const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const schedule = () => typeof window.generateDailySchedule === 'function' ? window.generateDailySchedule() : [];
  const tasks = () => schedule().filter(item => !item.isBreak);
  const fmt = seconds => {
    seconds = Math.max(0, Math.floor(seconds));
    const h = Math.floor(seconds / 3600), m = Math.floor(seconds / 60) % 60, s = seconds % 60;
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };
  const dateKey = date => window.getSafeDateStr ? window.getSafeDateStr(date) : date.toISOString().slice(0, 10);

  function taskProgress(key = today()) {
    const isSunday = new Date(`${key}T12:00:00`).getDay() === 0;
    const ids = isSunday ? [] : tasks().map(item => item.id);
    const state = window.appData?.tasks?.[key] || {};
    const done = ids.filter(id => state[id] === true).length;
    return { ids, state, done, total: ids.length, percent: ids.length ? Math.round(done / ids.length * 100) : 0 };
  }

  function renderMission() {
    const progress = taskProgress();
    const setText = (id, text) => { const element = document.getElementById(id); if (element) element.textContent = text; };
    setText('ccTaskPct', `${progress.percent}%`);
    setText('ccTaskMeta', `${progress.done} / ${progress.total} tasks`);
    const bar = $('#ccTaskBar'); if (bar) bar.style.width = `${progress.percent}%`;
    const isSunday = new Date(`${today()}T12:00:00`).getDay() === 0;
    setText('ccTaskRemain', isSunday ? 'Sunday rest day — recharge for Monday.' : progress.total ? `${progress.total - progress.done} task${progress.total - progress.done === 1 ? '' : 's'} remaining` : 'Daily plan is loading');
    const next = isSunday ? null : tasks().find(item => !progress.state[item.id]);
    setText('ccNextAction', isSunday ? 'Rest & reset' : next ? next.title.replace(/^Shift \d+:\s*/, '') : 'Daily plan complete');
    setText('ccNextSub', isSunday ? 'No scheduled study block today. Keep it light or take a complete break.' : next ? `${next.time} · Your next planned work block.` : 'Excellent consistency. Use Focus or review a mock.');
  }
  window.commandRenderMission = renderMission;

  function formatExamRemaining(ms) {
    if (ms <= 0) return 'Passed';
    let sec = Math.floor(ms / 1000);
    const d = Math.floor(sec / 86400); sec %= 86400;
    const h = Math.floor(sec / 3600); sec %= 3600;
    const m = Math.floor(sec / 60); const s = sec % 60;
    return `${d}d ${String(h).padStart(2,'0')}h ${String(m).padStart(2,'0')}m ${String(s).padStart(2,'0')}s`;
  }
  function sortedExams() { return (window.appData?.countdowns || []).slice().sort((a,b)=>Number(a.targetTime)-Number(b.targetTime)); }
  function renderExamCountdownPanel() {
    const box = $('#todayExamCountdowns');
    if (!box) return;
    const list = sortedExams();
    if (!list.length) {
      box.innerHTML = '<div class="exam-empty">No exam countdowns yet. Add your first exam above.</div>';
      return;
    }
    box.innerHTML = list.map((item,index)=>{
      const id = String(item.id);
      const when = new Date(Number(item.targetTime));
      return `<article class="today-exam-item" data-exam-id="${escapeHTML(id)}"><div class="today-exam-rank">#${index+1}</div><div class="today-exam-main"><strong title="${escapeHTML(item.name||'Exam')}">${escapeHTML(item.name||'Exam')}</strong><span>${when.toLocaleDateString(undefined,{day:'numeric',month:'short',year:'numeric'})} · ${when.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})}</span></div><b class="today-exam-time" data-exam-time="${escapeHTML(id)}">--d --:--:--</b><button class="today-exam-delete" type="button" data-delete-exam="${escapeHTML(id)}" aria-label="Delete ${escapeHTML(item.name||'Exam')}">×</button></article>`;
    }).join('');
    updateExamCountdownTimes();
  }
  function updateExamCountdownTimes() {
    const now = Date.now();
    sortedExams().forEach(item=>{
      const el = document.querySelector(`[data-exam-time="${CSS.escape(String(item.id))}"]`);
      if (el) el.textContent = formatExamRemaining(Number(item.targetTime)-now);
    });
    const active = document.getElementById('activeCountdowns');
    if (active) {
      const list=sortedExams();
      active.innerHTML=list.map(cd=>`<div class="cd-card"><i class="ph-bold ph-x cd-del" onclick="deleteCountdown('${String(cd.id).replace(/'/g,"\\'")}')"></i><h4>${escapeHTML(cd.name||'Exam')}</h4><p>${formatExamRemaining(Number(cd.targetTime)-now)}</p></div>`).join('');
    }
  }
  window.commandRenderCountdowns = renderExamCountdownPanel;
  window.kkRenderExamCountdowns = renderExamCountdownPanel;
  window.kkUpdateExamCountdownTimes = updateExamCountdownTimes;


  function installCompactExamStyle(){
    if(document.getElementById('kkCompactExamStyle')) return;
    const st=document.createElement('style'); st.id='kkCompactExamStyle'; st.textContent=`.today-exam-card{padding:14px 16px!important}.today-exam-card .cc-card-head{margin-bottom:8px!important}.today-exam-card h3{font-size:1rem!important;margin:0}.today-exam-sub{font-size:.72rem!important;margin:.2rem 0!important}.today-exam-list{display:grid;gap:6px!important}.today-exam-item{display:grid!important;grid-template-columns:24px minmax(0,1fr) auto 28px!important;align-items:center;gap:8px!important;padding:7px 9px!important;border-radius:10px!important}.today-exam-main strong{font-size:.82rem!important}.today-exam-main span{font-size:.68rem!important}.today-exam-time{font-size:.78rem!important;white-space:nowrap}.today-exam-delete{width:26px!important;height:26px!important;font-size:1rem!important}.today-exam-card #todayAddExam{padding:7px 10px!important;font-size:.78rem!important}`; document.head.appendChild(st);
  }
  function installCountdownForm() {
    const dashboard = document.getElementById('view-dashboard');
    if (!dashboard || document.getElementById('todayExamCard')) return;
    const card = document.createElement('section');
    card.id='todayExamCard'; card.className='cc-card today-exam-card';
    card.innerHTML=`<div class="cc-card-head"><div><div class="cc-label">EXAM COUNTDOWN</div><h3>How much time is left?</h3><p class="today-exam-sub">Add multiple exams. Each one keeps its own live countdown.</p></div><button id="todayAddExam" class="cc-primary small" type="button">+ Add Exam</button></div><form id="todayExamForm" class="today-exam-form" hidden><input id="todayExamName" class="modern-input" maxlength="80" required placeholder="Exam name, e.g. SBI PO Prelims"><input id="todayExamDate" class="modern-input" type="datetime-local" required><button class="cc-primary small" type="submit">Save Exam</button></form><div id="todayExamCountdowns" class="today-exam-list"></div>`;
    const anchor=dashboard.querySelector('.cc-grid-top');
    anchor?.insertAdjacentElement('afterend',card);
    const form=document.getElementById('todayExamForm'), add=document.getElementById('todayAddExam');
    add?.addEventListener('click',()=>{ form.hidden=!form.hidden; if(!form.hidden) document.getElementById('todayExamName')?.focus(); });
    form?.addEventListener('submit',event=>{
      event.preventDefault();
      const name=document.getElementById('todayExamName').value.trim();
      const value=document.getElementById('todayExamDate').value;
      const targetTime=new Date(value).getTime();
      if(!name || Number.isNaN(targetTime)){ window.showToast?.('Enter a valid exam name and date/time.',true); return; }
      const id=`exam-${Date.now()}-${Math.random().toString(36).slice(2,8)}`;
      window.appData.countdowns=Array.isArray(window.appData.countdowns)?window.appData.countdowns:[];
      window.appData.countdowns.push({id,name,targetTime});
      window.saveDataLocally?.(); form.reset(); form.hidden=true; renderExamCountdownPanel(); window.showToast?.('Exam countdown added.');
    });
    card.addEventListener('click',event=>{
      const btn=event.target.closest('[data-delete-exam]'); if(!btn) return;
      const id=btn.dataset.deleteExam;
      window.appData.countdowns=(window.appData.countdowns||[]).filter(item=>String(item.id)!==String(id));
      window.saveDataLocally?.('delete'); renderExamCountdownPanel(); window.kkCloudReplaceNow?.(); window.showToast?.('Exam countdown removed.');
    });
    renderExamCountdownPanel();
  }

  function installDayWindow() {
    const card = $('.clock-card');
    if (!card || card.dataset.commandDay) return;
    card.dataset.commandDay = '1';
    card.classList.add('cmd-day-card');
    card.innerHTML = `<div class="cc-label">TODAY'S WORK WINDOW</div><strong class="cmd-day-count" id="commandDayClock">--:--:--</strong><p id="commandDayStatus">Calculating your 8 AM–8:30 PM planned window…</p><div class="cmd-sun-track"><i id="commandDayBar"></i></div><div class="cmd-day-meta"><span>8:00 AM</span><span id="commandDayPercent">0% left</span><span>8:30 PM</span></div><span class="legacy-clock" id="ccBigClock"></span><span class="legacy-clock" id="ccBigDate"></span>`;
    const update = () => {
      const now = new Date(); const start = new Date(now); start.setHours(8, 0, 0, 0); const end = new Date(now); end.setHours(20, 30, 0, 0);
      const total = (12.5 * 3600 * 1000); let remaining, label;
      if (now < start) { remaining = start - now; label = 'Your planned study window starts at 8:00 AM.'; }
      else if (now >= end) { remaining = 0; label = 'Today’s work window is complete. Plan tomorrow calmly.'; }
      else { remaining = end - now; label = 'Time left for today’s planned work.'; }
      const percent = Math.max(0, Math.min(100, Math.round(remaining / total * 100)));
      $('#commandDayClock').textContent = fmt(remaining / 1000); $('#commandDayStatus').textContent = label; $('#commandDayPercent').textContent = `${percent}% left`; $('#commandDayBar').style.width = `${percent}%`;
    };
    update();
    window.kkUpdateDayWindow = update;
  }

  function installSettings() {
    const grid = $('#view-settings .settings-grid'); if (!grid || $('#commandAppearance')) return;
    const card = document.createElement('section'); card.id = 'commandAppearance'; card.className = 'glass-panel settings-card command-settings-card';
    card.innerHTML = `<h3>🌄 Wallpapers & Focus Effects</h3><p>Choose one calm background and one subtle effect. Your preference stays on this device.</p><div class="command-wallpaper-grid"><button class="command-wallpaper-option" data-wallpaper="mountain"><b>Zen Mountain</b><small>Cool focus ambience</small></button><button class="command-wallpaper-option" data-wallpaper="sunrise"><b>Golden Sunrise</b><small>Warm early energy</small></button><button class="command-wallpaper-option" data-wallpaper="ocean"><b>Deep Ocean</b><small>Calm blue flow</small></button><button class="command-wallpaper-option" data-wallpaper="forest"><b>Quiet Forest</b><small>Natural green calm</small></button><button class="command-wallpaper-option" data-wallpaper="night"><b>Night Focus</b><small>Deep-purple study mode</small></button><button class="command-wallpaper-option" data-wallpaper="minimal"><b>Minimal</b><small>Low-distraction canvas</small></button></div><div class="command-effect-row"><button class="command-effect" data-effect="aurora">Aurora glow</button><button class="command-effect" data-effect="stars">Star field</button><button class="command-effect" data-effect="grid">Focus grid</button><button class="command-effect" data-effect="none">No effect</button></div><label class="command-quote-toggle"><input type="checkbox" id="commandQuoteToggle"> Show rotating motivational quote on background</label>`;
    grid.insertBefore(card, grid.firstElementChild); card.addEventListener('click', event => {
      const wallpaper = event.target.closest('[data-wallpaper]'); const effect = event.target.closest('[data-effect]');
      if (wallpaper) setAppearance(wallpaper.dataset.wallpaper, null); if (effect) setAppearance(null, effect.dataset.effect);
    });
    $('#commandQuoteToggle').addEventListener('change', event => { window.kkSafeLocal.setItem('commandQuoteVisible', event.target.checked ? '1' : '0'); renderAppearance(); });
    renderAppearance();
  }

  function setAppearance(wallpaper, effect) { if (wallpaper) window.kkSafeLocal.setItem('commandWallpaper', wallpaper); if (effect) window.kkSafeLocal.setItem('commandEffect', effect); renderAppearance(); }
  function renderAppearance() {
    const wallpaper = window.kkSafeLocal.getItem('commandWallpaper') || 'mountain', effect = window.kkSafeLocal.getItem('commandEffect') || 'aurora', quotes = window.kkSafeLocal.getItem('commandQuoteVisible') !== '0';
    document.body.dataset.cmdWallpaper = wallpaper; document.body.dataset.cmdEffect = effect;
    $$('[data-wallpaper]').forEach(button => button.classList.toggle('active', button.dataset.wallpaper === wallpaper)); $$('[data-effect]').forEach(button => button.classList.toggle('active', button.dataset.effect === effect)); const check = $('#commandQuoteToggle'); if (check) check.checked = quotes; const quote = $('.cmd-wallpaper-quote'); if (quote) quote.style.display = quotes ? '' : 'none';
  }

  function installWallpaper() {
    if (!$('#commandWallpaper')) { const wallpaper = document.createElement('div'); wallpaper.id = 'commandWallpaper'; wallpaper.innerHTML = '<div class="cmd-wallpaper-quote"><span></span><small>KK MONITORING · KEEP GOING</small></div>'; document.body.prepend(wallpaper); }
    const quotes = ['Small progress is still progress.', 'Accuracy first. Speed follows.', 'You only need the next focused block.', 'Discipline is a quiet superpower.', 'One mock analysed well beats three rushed mocks.', 'Consistency is your competitive advantage.']; let index = 0;
    const rotate = () => { const text = $('.cmd-wallpaper-quote span'); if (text) text.textContent = `“${quotes[index++ % quotes.length]}”`; };
    rotate(); setInterval(rotate, 7000); renderAppearance();
  }

  function installTrackerPaging() {
    const original = window.renderTracker; if (typeof original !== 'function' || original.__commandPager) return;
    let page = 1, perPage = 15;
    window.renderTracker = function () { const result = original.apply(this, arguments); setTimeout(() => drawPager(), 0); return result; };
    window.renderTracker.__commandPager = true;
    function drawPager() {
      const body = $('#trackerBody'); if (!body) return; const rows = [...body.querySelectorAll('tr')]; const pages = Math.max(1, Math.ceil(rows.length / perPage)); page = Math.min(page, pages);
      rows.forEach((row, index) => { row.style.display = index >= (page - 1) * perPage && index < page * perPage ? '' : 'none'; });
      let holder = $('#commandTrackerPager'); if (!holder) { holder = document.createElement('div'); holder.id = 'commandTrackerPager'; holder.className = 'command-tracker-pager'; body.closest('.table-responsive')?.insertAdjacentElement('afterend', holder); }
      holder.innerHTML = rows.length > perPage ? (()=>{ const buttons=Array.from({length:pages},(_,i)=>{const p=i+1;return `<button class="btn-secondary ${p===page?'active':''}" type="button" data-page="${p}">${p}</button>`;}).join(''); return `<span>Showing ${(page - 1) * perPage + 1}–${Math.min(page * perPage, rows.length)} of ${rows.length} mock entries</span><div class="command-pager-actions"><button class="btn-secondary" type="button" data-page="prev" ${page === 1 ? 'disabled' : ''}>← Prev</button>${buttons}<button class="btn-secondary" type="button" data-page="next" ${page === pages ? 'disabled' : ''}>Next →</button></div>`; })() : `<span>${rows.length} mock entr${rows.length === 1 ? 'y' : 'ies'}</span>`;
      holder.onclick = event => { const button = event.target.closest('[data-page]'); if (!button) return; page += button.dataset.page === 'next' ? 1 : -1; drawPager(); };
    }
  }

  function showAchievement(title, detail) {
    $('.command-achievement')?.remove(); const toast = document.createElement('aside'); toast.className = 'command-achievement'; toast.innerHTML = `<b>🏆 ${escapeHTML(title)}</b><span>${escapeHTML(detail)}</span>`; document.body.appendChild(toast); setTimeout(() => toast.remove(), 4400);
  }

  function levelData(total) { const safe=Math.max(0,Number(total)||0), level=Math.floor(safe/100)+1, next=level*100; return { level, next, remaining: Math.max(0,next-safe) }; }
  function renderXP() { renderConsistencyPreview(); }
  function patchXPAchievements() {
    const original = window.submitFocusTimer; if (typeof original !== 'function' || original.__commandAchievement) return;
    window.submitFocusTimer = function () { const before = Number(window.appData?.xp?.total) || 0, oldLevel = levelData(before).level; const result = original.apply(this, arguments); setTimeout(() => { const after = Number(window.appData?.xp?.total) || 0; if (after > before) { showAchievement(`+${after - before} Study XP`, 'Focus logged. Keep the momentum going.'); const newLevel = levelData(after).level; if (newLevel > oldLevel) showAchievement(`Level ${newLevel} unlocked!`, `You reached ${after} XP. Your next milestone is waiting.`); } renderXP(); }, 20); return result; };
    window.submitFocusTimer.__commandAchievement = true;
  }

  /* ---------- MENTAL LOAD + CONSISTENCY ENGINE ---------- */
  const COOL_DOWN_ACTIONS = [
    { id:'water', icon:'💧', title:'Drink Water', detail:'2–3 minutes · hydrate + reset', reduction:10 },
    { id:'walk', icon:'🚶', title:'Walk Break', detail:'5–10 minutes · move your body', reduction:16 },
    { id:'breathe', icon:'🌬️', title:'Breathing Reset', detail:'3 minutes · slow breathing', reduction:12 },
    { id:'screen', icon:'👀', title:'Screen Break', detail:'5 minutes · eyes off screen', reduction:14 },
    { id:'stretch', icon:'🧘', title:'Stretch & Reset', detail:'4 minutes · release tension', reduction:11 }
  ];
  const xpRules = [
    { label:'Focused Study', rule:'1 XP per completed 5 minutes', cap:'60 XP / day' },
    { label:'Daily Task', rule:'1 XP per completed 10 planned minutes', cap:'No separate cap' },
    { label:'Brain Gym', rule:'2 XP per correct answer', cap:'As recorded by Brain Gym' },
    { label:'Cooldown', rule:'0 XP · protects your consistency score without rewarding burnout', cap:'Unlimited' }
  ];
  const parseClock = text => {
    const m = String(text||'').match(/(\d+):(\d+)\s*(AM|PM)/i); if(!m) return 0;
    let h=Number(m[1])%12; if(m[3].toUpperCase()==='PM') h+=12; return h*60+Number(m[2]);
  };
  const planFor = key => {
    try { return typeof window.generateDailySchedule==='function' ? window.generateDailySchedule(key) : tasks(); } catch(_) { return tasks(); }
  };
  const ensureFeatureData = () => {
    const a=window.appData || (window.appData={});
    if(!a.xp || typeof a.xp!=='object' || Array.isArray(a.xp)) a.xp={total:0,daily:{}};
    if(!a.xp.daily || typeof a.xp.daily!=='object' || Array.isArray(a.xp.daily)) a.xp.daily={};
    if(!Array.isArray(a.xp.logs)) a.xp.logs=[];
    if(!a.mentalLoad || typeof a.mentalLoad!=='object' || Array.isArray(a.mentalLoad)) a.mentalLoad={events:[]};
    if(!Array.isArray(a.mentalLoad.events)) a.mentalLoad.events=[];
    return a;
  };
  const addXPLog = (amount, reason, meta={}) => {
    amount=Math.max(0,Math.floor(Number(amount)||0)); if(!amount) return false;
    const a=ensureFeatureData(), d=today(), id=String(meta.id || `xp-${d}-${Date.now()}-${Math.random().toString(36).slice(2,7)}`);
    a.xp.total=(Number(a.xp.total)||0)+amount;
    a.xp.daily[d]=(Number(a.xp.daily[d])||0)+amount;
    a.xp.logs.unshift({id,date:d,timestamp:Date.now(),amount,reason,...meta});
    if(a.xp.logs.length>1000) a.xp.logs.length=1000;
    window.saveDataLocally?.(); return true;
  };
  const removeXPLog = id => {
    const a=ensureFeatureData(), index=a.xp.logs.findIndex(x=>String(x.id)===String(id)); if(index<0)return false;
    const item=a.xp.logs[index], amount=Math.max(0,Number(item.amount)||0), d=item.date||today();
    a.xp.total=Math.max(0,(Number(a.xp.total)||0)-amount);
    a.xp.daily[d]=Math.max(0,(Number(a.xp.daily[d])||0)-amount);
    if(a.xp.daily[d]===0) delete a.xp.daily[d];
    a.xp.logs.splice(index,1); window.saveDataLocally?.(); return true;
  };
  const taskXP = minutes => Math.max(0,Math.floor((Number(minutes)||0)/10));
  const findTaskById = id => tasks().find(t=>String(t.id)===String(id));
  function patchTaskXP() {
    if(window.__kkConsistencyTaskXP) return;
    const original=window.toggleTask; if(typeof original!=='function') return;
    window.__kkConsistencyTaskXP=true;
    window.toggleTask=function(tId, checked){
      const d=today(), a=ensureFeatureData(), task=findTaskById(tId);
      const existingId=`taskxp-${d}-${tId}`;
      const existing=a.xp.logs.find(x=>String(x.id)===existingId);
      original.apply(this,arguments);
      if(checked && !existing && task && !String(task.id).startsWith('flex-')) {
        const gain=taskXP(task.duration); addXPLog(gain, `Completed: ${task.taskTitle||task.title}`, {id:existingId,type:'task',taskId:String(tId),duration:Number(task.duration)||0});
      } else if(!checked && existing) {
        removeXPLog(existingId);
      }
      renderMission(); renderMentalLoad(); renderConsistencyPreview();
    };
  }
  function mentalLoadSnapshot(key=today()) {
    const a=ensureFeatureData(), logs=Array.isArray(a.studyLogs)?a.studyLogs:[], focus=logs.filter(x=>x.date===key&&x.type==='Focus').reduce((n,x)=>n+(Number(x.duration)||0),0), waste=logs.filter(x=>x.date===key&&x.type==='Waste').reduce((n,x)=>n+(Number(x.duration)||0),0);
    const plan=planFor(key).filter(x=>!x.isBreak && !String(x.id).startsWith('flex-')), state=a.tasks?.[key]||{}, done=plan.filter(x=>state[x.id]).length;
    const mocks=logs.filter(x=>x.date===key && /mock/i.test(String(x.subject||''))).length;
    const mockRecords=(a.mocks||[]).filter(x=>x.date===key || x.testDate===key).length;
    const raw=Math.round(Math.min(46,focus/60/5*46) + Math.min(22,waste/60*11) + Math.min(16,done*2.5) + Math.min(10,(mocks+mockRecords)*3));
    const cooldown=(a.mentalLoad.events||[]).filter(x=>x.date===key).reduce((n,x)=>n+(Number(x.reduction)||0),0);
    const score=Math.max(0,Math.min(100,raw-cooldown));
    const stateLabel=score<35?'LOW':score<65?'MODERATE':score<80?'HIGH':'VERY HIGH';
    const guidance=score<35?'You are relatively fresh. Use the next block for high-focus work.':score<65?'Load is balanced. Keep one task at a time and use short resets.':score<80?'You are carrying a meaningful load. A cooldown before the next hard block will help.':'Your load is high. Cool down first, then choose only the lightest useful task.';
    return {key,score,state:stateLabel,guidance,focus,waste,done,total:plan.length,cooldown,mocks:Math.max(mocks,mockRecords)};
  }
  function renderMentalLoad() {
    const snap=mentalLoadSnapshot(), state=$('#ccLoadState'), score=$('#ccLoadScore'), bar=$('#ccLoadBar'), text=$('#ccLoadText');
    if(state) state.textContent=snap.state; if(score) score.textContent=snap.score; if(bar) bar.style.width=`${snap.score}%`; if(text) text.textContent=snap.guidance;
    const card=$('.load-card'); if(card){ card.dataset.loadState=snap.state.toLowerCase().replace(/\s+/g,'-'); card.setAttribute('aria-label',`Mental Load ${snap.score} out of 100. Click to cool down.`); }
    return snap;
  }
  function renderConsistencyPreview(){
    const a=ensureFeatureData(), total=Number(a.xp.total)||0, daily=Number(a.xp.daily[today()])||0, level=Math.floor(total/100)+1, progress=total%100;
    const label=$('#ccLevel'), xp=$('#ccXP'), todayEl=$('#ccTodayXP'), bar=$('#ccXPBar'), hint=$('#ccXPNext');
    if(label) label.textContent=`LEVEL ${level}`; if(xp) xp.textContent=`${total} XP`; if(todayEl) todayEl.textContent=`+${daily} today`; if(bar) bar.style.width=`${progress}%`; if(hint) hint.textContent=`${100-progress} XP to Level ${level+1}`;
  }
  function cooldownEvent(action){
    const a=ensureFeatureData(), d=today();
    a.mentalLoad.events.unshift({id:`cool-${d}-${action.id}-${Date.now()}`,date:d,timestamp:Date.now(),action:action.id,title:action.title,reduction:action.reduction});
    if(a.mentalLoad.events.length>1000)a.mentalLoad.events.length=1000;
    window.saveDataLocally?.(); renderMentalLoad(); renderConsistencyPreview();
  }
  function openMentalLoad(){
    $('.cmd-modal')?.remove(); const snap=renderMentalLoad();
    const modal=document.createElement('div'); modal.className='cmd-modal kk-mental-modal'; modal.innerHTML=`<div class="cmd-modal-card kk-mental-card" role="dialog" aria-modal="true" aria-labelledby="kkMentalTitle">
      <button class="btn-secondary cmd-modal-close" type="button" aria-label="Close">Close</button>
      <div class="cc-eyebrow">MENTAL LOAD</div><div class="kk-modal-head"><div><h2 id="kkMentalTitle"><span id="kkMentalScore">${snap.score}</span>/100 · ${snap.state}</h2><p id="kkMentalGuidance">${escapeHTML(snap.guidance)}</p></div><div class="kk-cooldown-orb" aria-hidden="true"><span>🧠</span><i></i></div></div>
      <div class="kk-mental-meter"><i id="kkMentalMeter" style="width:${snap.score}%"></i></div>
      <div class="kk-load-stats"><div><b>${Math.round(snap.focus/60)}m</b><span>Focus</span></div><div><b>${Math.round(snap.waste/60)}m</b><span>Waste</span></div><div><b>${snap.done}/${snap.total}</b><span>Tasks</span></div><div><b>−${snap.cooldown}</b><span>Cooldown</span></div></div>
      <div class="kk-cooldown-head"><div><h3>Click to Cool Down</h3><p>Pick one reset. The load meter cools down immediately.</p></div><span class="kk-cooldown-pulse">● LIVE</span></div>
      <div class="kk-cooldown-grid">${COOL_DOWN_ACTIONS.map(x=>`<button type="button" class="kk-cooldown-btn" data-cooldown="${x.id}"><span class="kk-cooldown-icon">${x.icon}</span><span><b>${x.title}</b><small>${x.detail}</small></span><em>−${x.reduction}</em></button>`).join('')}</div>
      <div id="kkCooldownFeedback" class="kk-cooldown-feedback" aria-live="polite">Choose a reset to lower the load.</div>
    </div>`;
    document.body.appendChild(modal);
    const close=()=>modal.remove(); $('.cmd-modal-close',modal).onclick=close; modal.addEventListener('click',e=>{if(e.target===modal)close();});
    $$('.kk-cooldown-btn',modal).forEach(btn=>btn.onclick=()=>{
      const action=COOL_DOWN_ACTIONS.find(x=>x.id===btn.dataset.cooldown); if(!action)return;
      cooldownEvent(action); btn.classList.add('is-done'); setTimeout(()=>btn.classList.remove('is-done'),800);
      const newSnap=mentalLoadSnapshot(); $('#kkMentalScore',modal).textContent=newSnap.score; $('#kkMentalMeter',modal).style.width=`${newSnap.score}%`;
      $('.kk-cooldown-feedback',modal).innerHTML=`<b>✓ Cooldown applied.</b> Mental load reduced by ${action.reduction}.`; modal.querySelector('.kk-cooldown-orb')?.classList.add('cooling'); setTimeout(()=>modal.querySelector('.kk-cooldown-orb')?.classList.remove('cooling'),900);
    });
  }
  function xpDays(count=14){
    const out=[]; const now=new Date(); for(let i=count-1;i>=0;i--){const d=new Date(now);d.setDate(now.getDate()-i);const key=dateKey(d);out.push({key,label:d.toLocaleDateString(undefined,{weekday:'short'}),short:d.toLocaleDateString(undefined,{day:'numeric',month:'short'}),xp:Number(ensureFeatureData().xp.daily[key])||0});} return out;
  }
  function levelFromXP(total){return Math.floor(Math.max(0,Number(total)||0)/100)+1;}
  function consistencyLogs(){
    const a=ensureFeatureData(), rows=[];
    (a.xp.logs||[]).forEach(x=>rows.push({ts:Number(x.timestamp)||0,date:x.date||'',kind:'XP',title:x.reason||'Study XP',detail:`+${Number(x.amount)||0} XP`}));
    (a.studyLogs||[]).forEach(x=>rows.push({ts:Number(x.id)||0,date:x.date||'',kind:x.type||'Study',title:x.subject||x.type||'Study',detail:x.durationStr||`${Math.round((Number(x.duration)||0)/60)} min`}));
    (a.mentalLoad?.events||[]).forEach(x=>rows.push({ts:Number(x.timestamp)||0,date:x.date||'',kind:'Cooldown',title:x.title||'Cooldown',detail:`−${Number(x.reduction)||0} load`}));
    Object.entries(a.tasks||{}).forEach(([d,state])=>Object.entries(state||{}).filter(([,v])=>v).forEach(([id])=>{const task=planFor(d).find(t=>String(t.id)===String(id)); if(task)rows.push({ts:0,date:d,kind:'Task',title:task.taskTitle||task.title,detail:`${Number(task.duration)||0} min complete`});}));
    return rows.sort((a,b)=>b.ts-a.ts || b.date.localeCompare(a.date));
  }
  function openConsistencyEngine(){
    $('.cmd-modal')?.remove(); const a=ensureFeatureData(), total=Number(a.xp.total)||0, level=levelFromXP(total), progress=total%100, days=xpDays(14), logs=consistencyLogs();
    const modal=document.createElement('div'); modal.className='cmd-modal kk-consistency-modal'; modal.innerHTML=`<div class="cmd-modal-card kk-consistency-card" role="dialog" aria-modal="true" aria-labelledby="kkConsistencyTitle">
      <button class="btn-secondary cmd-modal-close" type="button">Close</button><div class="cc-eyebrow">CONSISTENCY ENGINE</div><div class="kk-consistency-hero"><div><h2 id="kkConsistencyTitle">🏆 Study XP Engine</h2><p>Every useful action is logged here. Your dashboard, daily plan and cloud data use the same state.</p></div><div class="kk-level-badge"><small>CURRENT LEVEL</small><b>LEVEL ${level}</b><span>${total} XP total</span></div></div>
      <div class="kk-xp-overview"><div><span>Total XP</span><b>${total}</b></div><div><span>Today</span><b>+${Number(a.xp.daily[today()])||0}</b></div><div><span>Next Level</span><b>${100-progress} XP</b></div><div><span>Logged Events</span><b>${logs.length}</b></div></div>
      <div class="kk-engine-grid"><section><div class="kk-section-head"><div><div class="cc-label">XP RULES</div><h3>How XP is earned</h3></div></div><div class="kk-xp-rules">${xpRules.map(r=>`<div class="kk-xp-rule"><b>${escapeHTML(r.label)}</b><span>${escapeHTML(r.rule)}</span><em>${escapeHTML(r.cap)}</em></div>`).join('')}</div><div class="kk-level-track"><div class="kk-level-track-head"><span>Level ${level} progress</span><b>${progress}/100</b></div><div><i style="width:${progress}%"></i></div></div></section>
      <section><div class="kk-section-head"><div><div class="cc-label">XP EARNED BY DAY</div><h3>Last 14 days</h3></div></div><div class="kk-xp-chart" role="img" aria-label="XP earned by day">${days.map(d=>`<div class="kk-xp-day" title="${d.short}: ${d.xp} XP"><div class="kk-xp-bar-wrap"><i style="height:${Math.min(100,Math.max(4,d.xp/(Math.max(10,...days.map(x=>x.xp))*1.15)*100))}%"></i></div><b>${d.xp}</b><span>${escapeHTML(d.label)}</span></div>`).join('')}</div></section></div>
      <section class="kk-log-section"><div class="kk-section-head"><div><div class="cc-label">ALL LOGS</div><h3>Recent activity</h3></div><span>${logs.length} entries</span></div><div class="kk-log-list">${logs.slice(0,120).map(x=>`<div class="kk-log-row"><time>${escapeHTML(x.date)}</time><span class="kk-log-kind kk-${String(x.kind).toLowerCase().replace(/\s+/g,'-')}">${escapeHTML(x.kind)}</span><strong>${escapeHTML(x.title)}</strong><em>${escapeHTML(x.detail)}</em></div>`).join('') || '<div class="kk-empty-log">No logs yet. Complete a task or focus block to start your history.</div>'}</div></section>
    </div>`;
    document.body.appendChild(modal); $('.cmd-modal-close',modal).onclick=()=>modal.remove(); modal.addEventListener('click',e=>{if(e.target===modal)modal.remove();});
  }


  function openBrainGym() {
    $('#commandBrainModal')?.remove(); const key = `commandBrain_${today()}`, startingUsed = Number(window.kkSafeLocal.getItem(key) || 0); let used = startingUsed, game = null, round = 0, score = 0, interval = null, roundTimer = null, roundEnd = 0; const modal = document.createElement('div'); modal.id = 'commandBrainModal'; modal.className = 'cmd-modal'; modal.innerHTML = `<div class="cmd-modal-card"><button class="btn-secondary cmd-modal-close" type="button">Close</button><div class="command-brain-header"><div><div class="cc-eyebrow">BRAIN GYM</div><h2>10-minute sharpness session</h2><p>Choose a 5-question set. Every question has 30 seconds.</p></div><b class="command-brain-timer" id="commandBrainTimer">10:00</b></div><div class="command-brain-progress"><i id="commandBrainBar"></i></div><div id="commandBrainBody"></div></div>`; document.body.appendChild(modal);
    const body = $('#commandBrainBody', modal), close = () => { clearInterval(interval); clearInterval(roundTimer); window.kkSafeLocal.setItem(key, String(Math.min(600, used))); modal.remove(); };
    $('.cmd-modal-close', modal).onclick = close; modal.addEventListener('click', event => { if (event.target === modal) close(); });
    const update = () => { const remaining = Math.max(0, 600 - used); $('#commandBrainTimer', modal).textContent = fmt(remaining); $('#commandBrainBar', modal).style.width = `${Math.min(100, used / 600 * 100)}%`; if (!remaining) { clearInterval(interval); body.innerHTML = '<div class="command-brain-round"><h3>Daily limit reached</h3><p>Great. Return tomorrow with a fresh mind.</p></div>'; } };
    /* interval moved to active game state */ update();
    const games = { maths: ['Quick Maths', '5 questions · 30 sec each'], word: ['Word Recall', '5 meanings · 30 sec each'], pattern: ['Number Pattern', '5 sequences · 30 sec each'] };
    const lobby = () => { game = null; body.innerHTML = `<div class="command-brain-games">${Object.entries(games).map(([id, value]) => `<button class="command-brain-game" data-brain-game="${id}"><b>${value[0]}</b><span>${value[1]}</span></button>`).join('')}</div>`; $$('[data-brain-game]', body).forEach(button => button.onclick = () => { game = button.dataset.brainGame; round = 0; score = 0; nextRound(); }); };
    const nextRound = () => { clearInterval(roundTimer); if (used >= 600) return update(); round += 1; if (round > 5) { const gain = score * 2; if (gain) { window.appData.xp = window.appData.xp || { total: 0, daily: {} }; window.appData.xp.total = (Number(window.appData.xp.total) || 0) + gain; window.appData.xp.daily = window.appData.xp.daily || {}; window.appData.xp.daily[today()] = (Number(window.appData.xp.daily[today()]) || 0) + gain; window.saveDataLocally?.(); showAchievement('Brain Gym complete', `${score}/5 correct · +${gain} XP earned`); } body.innerHTML = `<div class="command-brain-round"><h3>Set complete: ${score}/5</h3><p>${gain ? `You earned ${gain} XP. ` : ''}Try another set or return to your study plan.</p><button class="cc-primary" type="button" id="commandBrainAgain">Choose another set</button></div>`; $('#commandBrainAgain', body).onclick = lobby; renderXP(); return; }
      let question, answers, actual;
      if (game === 'maths') { const a = Math.floor(Math.random() * 30) + 10, b = Math.floor(Math.random() * 15) + 3; actual = a + b; question = `${a} + ${b} = ?`; answers = [actual, actual + 2, actual - 3, actual + 5].sort(() => Math.random() - .5); }
      else if (game === 'word') { const list = typeof vocabData === 'undefined' ? [] : vocabData; const word = list[Math.floor(Math.random() * list.length)] || { word: 'Prudent', meaning: 'wise and careful' }; actual = word.meaning; question = `Meaning of “${word.word}”`; const defaults = ['wise and careful', 'easy to ignore', 'very noisy', 'impossible to solve']; answers = [actual, ...defaults.filter(item => item !== actual).slice(0, 3)].sort(() => Math.random() - .5); }
      else { const start = Math.floor(Math.random() * 8) + 2, step = Math.floor(Math.random() * 7) + 2; actual = start + step * 3; question = `${start}, ${start + step}, ${start + step * 2}, ?`; answers = [actual, actual + step, actual - step, actual + 2].sort(() => Math.random() - .5); }
      roundEnd = Date.now() + 30000; const draw = () => { const left = Math.max(0, Math.ceil((roundEnd - Date.now()) / 1000)); body.innerHTML = `<div class="command-brain-round"><span>Question ${round}/5 · <b id="commandBrainQuestionTimer">${left}s</b></span><div class="command-brain-question">${escapeHTML(question)}</div><div class="command-brain-options">${answers.map(answer => `<button class="command-brain-option" type="button" data-answer="${escapeHTML(answer)}">${escapeHTML(answer)}</button>`).join('')}</div></div>`; $$('[data-answer]', body).forEach(button => button.onclick = () => { const ok = String(button.dataset.answer) === String(actual); if (ok) score += 1; nextRound(); }); }; draw(); roundTimer = setInterval(() => { const left = Math.max(0, Math.ceil((roundEnd - Date.now()) / 1000)); const timer = $('#commandBrainQuestionTimer', body); if (timer) timer.textContent = `${left}s`; if (!left) nextRound(); }, 250); };
    lobby();
  }

  function wireInteractions() {
    const loadCard=$('.load-card');
    if(loadCard && !loadCard.dataset.mentalBound){ loadCard.dataset.mentalBound='1'; loadCard.setAttribute('role','button'); loadCard.setAttribute('tabindex','0'); loadCard.addEventListener('click',openMentalLoad); loadCard.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openMentalLoad();}}); }
    const xpCard=$('.xp-card');
    if(xpCard && !xpCard.dataset.consistencyBound){ xpCard.dataset.consistencyBound='1'; xpCard.setAttribute('role','button'); xpCard.setAttribute('tabindex','0'); xpCard.addEventListener('click',openConsistencyEngine); xpCard.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openConsistencyEngine();}}); }
    patchTaskXP(); renderMentalLoad(); renderConsistencyPreview();
    if(!window.__kkFeatureSaveRefresh){ window.__kkFeatureSaveRefresh=true; window.addEventListener('kk:data-saved',()=>{ renderMentalLoad(); renderConsistencyPreview(); }); }
    if(!window.__kkBrainGymClickBound){
      window.__kkBrainGymClickBound = true;
      document.addEventListener('click', event => {
        const trigger = event.target.closest?.('#navBrainGym, #ccBrainGym');
        if(!trigger) return;
        event.preventDefault();
        event.stopPropagation();
        openBrainGym();
      });
    }
  }

  function init() {
    if (window.__commandEnhancementBooted) return;
    window.__commandEnhancementBooted = true;
    installWallpaper(); installCompactExamStyle(); installCountdownForm(); installDayWindow(); installSettings(); installTrackerPaging(); patchXPAchievements(); wireInteractions(); renderMission(); renderExamCountdownPanel(); renderXP(); renderMentalLoad(); renderConsistencyPreview();
    // Shared lightweight intervals: existing clocks + low-cost state refresh for Mental Load.
    if (!window.__kkV57SecondTimer) {
      window.__kkV57SecondTimer = setInterval(() => { window.kkUpdateExamCountdownTimes?.(); window.kkUpdateDayWindow?.(); }, 1000);
    }
    if (!window.__kkFeatureRefreshTimer) {
      window.__kkFeatureRefreshTimer = setInterval(() => { renderMentalLoad(); renderConsistencyPreview(); }, 5000);
    }
  }
  window.commandEnhancementsInit = init;
})();
