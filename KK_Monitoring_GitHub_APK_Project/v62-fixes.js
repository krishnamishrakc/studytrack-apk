/* KK Monitoring V62 — compact workspace, XP recovery, reliable analytics. */
(() => {
  'use strict';

  if (window.__kkV62Loaded) return;
  window.__kkV62Loaded = true;

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const SUBJECTS = ['English', 'Quants', 'Reasoning', 'Mock & Analysis'];
  const STORAGE = {
    compact: 'kkSidebarCompact_v62',
    locked: 'kkSidebarLocked_v62'
  };
  const todayKey = () => window.getSafeDateStr ? window.getSafeDateStr() : new Date().toISOString().slice(0,10);

  /* ---------- 1) GLOBAL SIDEBAR COMPACT / LOCK MODE ---------- */
  function injectWorkspaceCSS() {
    if ($('#kkV62WorkspaceCSS')) return;
    const style = document.createElement('style');
    style.id = 'kkV62WorkspaceCSS';
    style.textContent = `
      .kk-sidebar-controls{display:flex;gap:6px;align-items:center}
      .kk-sidebar-btn{border:1px solid var(--cc-border,#24404a);background:rgba(255,255,255,.04);color:var(--text-main,#eaf6f8);border-radius:11px;width:35px;height:35px;display:inline-grid;place-items:center;cursor:pointer;transition:transform .18s ease,background .18s ease,border-color .18s ease}
      .kk-sidebar-btn:hover{transform:translateY(-1px);background:rgba(56,189,248,.08);border-color:rgba(56,189,248,.3)}
      .kk-sidebar-btn.is-active{background:rgba(56,189,248,.12);border-color:rgba(56,189,248,.38)}
      .kk-sidebar-btn.is-locked{background:rgba(34,197,94,.10);border-color:rgba(34,197,94,.34)}
      .kk-sidebar-btn i{font-size:1.05rem}
      body.kk-sidebar-compact .app-container{grid-template-columns:76px minmax(0,1fr)!important}
      body.kk-sidebar-compact .sidebar{width:76px!important;padding-left:10px!important;padding-right:10px!important}
      body.kk-sidebar-compact .sidebar .logo{justify-content:center}
      body.kk-sidebar-compact .sidebar .logo h2,
      body.kk-sidebar-compact .sidebar .nav-section-label,
      body.kk-sidebar-compact .sidebar .nav-links li span,
      body.kk-sidebar-compact .sidebar .nav-links li b,
      body.kk-sidebar-compact .sidebar-footer{display:none!important}
      body.kk-sidebar-compact .sidebar .nav-links li{justify-content:center;padding:11px 7px}
      body.kk-sidebar-compact .sidebar .nav-links li i{width:auto;font-size:1.22rem}
      body.kk-sidebar-compact .sidebar .nav-links li:hover{transform:none}
      .top-header .kk-sidebar-controls{margin-right:1px}
      .tracker-focus-mode .kk-sidebar-btn[data-sidebar-action="compact"]{box-shadow:0 0 0 1px rgba(56,189,248,.12)}
      @media (max-width:820px){
        .kk-sidebar-btn[data-sidebar-action]{display:none!important}
      }

      /* Reliable native charts: no dependency on Chart.js for these two requested graphs. */
      .kk-native-graph{position:relative;width:100%;height:320px;min-height:260px}
      .kk-native-graph canvas{display:block;width:100%!important;height:100%!important}
      .kk-native-graph .kk-graph-empty{position:absolute;inset:0;display:grid;place-items:center;color:var(--text-muted,#78909a);font-size:.82rem;pointer-events:none}
      @media (max-width:760px){.kk-native-graph{height:260px;min-height:220px}}

      /* Study timers: keep both cards balanced and all three actions aligned. */
      #view-study-room .study-timer-grid{align-items:stretch}
      #view-study-room .timer-box{min-height:340px!important;box-sizing:border-box}
      #view-study-room .timer-box>h3{min-height:2.6em;display:flex;align-items:center;justify-content:center;text-align:center;margin:0}
      #view-study-room .timer-box>.modern-input{width:100%;max-width:360px;box-sizing:border-box}
      #view-study-room .timer-box .timer-text{min-height:58px;display:flex;align-items:center;justify-content:center;margin:12px 0 4px}
      #view-study-room .timer-actions{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px!important;width:100%;max-width:420px;margin-top:15px!important}
      #view-study-room .timer-actions button{width:100%;min-width:0;white-space:nowrap}
      #view-study-room .study-session-header{align-items:flex-start!important}
      #view-study-room .study-session-controls{justify-content:flex-end;flex-wrap:wrap}
      #view-study-room .study-session-controls #sessionTimeDisplay{margin:0;min-width:150px}
      #view-study-room .study-session-controls button{min-width:112px}
      #view-learn #learnRuleText,#view-learn #learnRuleExample{white-space:pre-wrap;overflow:auto;overflow-wrap:anywhere}
      #view-learn #learnRuleText{max-height:250px}
      #view-learn #learnRuleExample{max-height:430px}
      @media(max-width:900px){
        #view-study-room .study-timer-grid{grid-template-columns:1fr!important}
        #view-study-room .study-session-controls{justify-content:flex-end}
      }
      @media(max-width:620px){
        #view-study-room .study-session-controls{justify-content:stretch}
        #view-study-room .study-session-controls #sessionTimeDisplay{width:100%;min-width:0;text-align:center}
        #view-study-room .study-session-controls button{flex:1 1 120px}
        #view-study-room .timer-actions{max-width:none}
      }

      /* Keep the two requested analytics boxes from collapsing after tab switches. */
      #view-analytics .chart-box:has(#chartStudySubjects),
      #view-analytics .chart-box:has(#chartWasteTime){min-height:360px}
      #view-analytics .canvas-container:has(#chartStudySubjects),
      #view-analytics .canvas-container:has(#chartWasteTime){height:300px!important;min-height:300px!important}

      /* Consistency totals stay visibly numeric even in legacy/corrupt records. */
      .kk-xp-total-recovered{animation:kkXpPulse .38s ease}
      @keyframes kkXpPulse{0%{transform:scale(.98);opacity:.65}100%{transform:scale(1);opacity:1}}
    `;
    document.head.appendChild(style);
  }

  function readBool(key, fallback=false) {
    try { return window.kkSafeLocal.getItem(key) === '1' ? true : window.kkSafeLocal.getItem(key) === '0' ? false : fallback; }
    catch (_) { return fallback; }
  }
  function writeBool(key, value) { try { window.kkSafeLocal.setItem(key, value ? '1' : '0'); } catch (_) {} }

  function ensureSidebarControls() {
    const dock = $('#kkSidebarDock');
    if (!dock) return;
    const wrap = dock;
    wrap.id = 'kkSidebarControls';
    wrap.classList.add('kk-sidebar-controls', 'kk-sidebar-dock');
    const compactBtn = $('[data-sidebar-action="compact"]', wrap);
    const lockBtn = $('[data-sidebar-action="lock"]', wrap);
    const themeBtn = $('#v42ThemeBtn');
    if (themeBtn && themeBtn.parentElement !== wrap) wrap.appendChild(themeBtn);
    if (wrap.dataset.kkBound === '1') return;
    wrap.dataset.kkBound = '1';
    wrap.addEventListener('click', event => {
      const btn = event.target.closest('[data-sidebar-action]');
      if (!btn) return;
      const action = btn.dataset.sidebarAction;
      if (action === 'compact') {
        setCompactMode(!document.body.classList.contains('kk-sidebar-compact'), false);
      } else if (action === 'lock') {
        const next = !readBool(STORAGE.locked, false);
        writeBool(STORAGE.locked, next);
        syncSidebarControls();
        window.showToast?.(next ? 'Menu layout locked.' : 'Menu layout unlocked.');
      }
    });
  }

  function setCompactMode(compact, persist=true) {
    document.body.classList.toggle('kk-sidebar-compact', !!compact);
    if (persist) writeBool(STORAGE.compact, !!compact);
    syncSidebarControls();
  }

  function syncSidebarControls() {
    const compact = document.body.classList.contains('kk-sidebar-compact');
    const locked = readBool(STORAGE.locked, false);
    const compactBtn = $('[data-sidebar-action="compact"]');
    const lockBtn = $('[data-sidebar-action="lock"]');
    if (compactBtn) {
      compactBtn.classList.toggle('is-active', compact);
      compactBtn.setAttribute('aria-pressed', String(compact));
      compactBtn.title = compact ? 'Expand menu' : 'Compact menu';
      compactBtn.innerHTML = `<i class="ph ${compact ? 'ph-sidebar' : 'ph-sidebar-simple'}"></i>`;
    }
    if (lockBtn) {
      lockBtn.classList.toggle('is-locked', locked);
      lockBtn.setAttribute('aria-pressed', String(locked));
      lockBtn.title = locked ? 'Unlock menu layout' : 'Lock current menu layout';
      lockBtn.innerHTML = `<i class="ph ${locked ? 'ph-lock-key' : 'ph-lock-open'}"></i>`;
    }
  }

  function trackerAwareNavigation() {
    const locked = () => readBool(STORAGE.locked, false);
    const applyForTab = tab => {
      if (!tab) return;
      if (!locked() && window.innerWidth > 820) {
        setCompactMode(tab === 'view-tracker', true);
      } else if (window.innerWidth <= 820) {
        setCompactMode(false, false);
      }
      document.body.classList.toggle('tracker-focus-mode', tab === 'view-tracker');
      $('#view-tracker')?.classList.toggle('tracker-focus-mode', tab === 'view-tracker');
    };

    document.addEventListener('click', event => {
      const trigger = event.target.closest?.('.nav-links li[data-tab], [data-tab].cc-link');
      if (!trigger?.dataset?.tab) return;
      applyForTab(trigger.dataset.tab);
    }, true);

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && !locked()) setCompactMode(false, true);
    });

    const active = $('.nav-links li.active[data-tab]')?.dataset?.tab;
    const startupCompact = readBool(STORAGE.compact, active === 'view-tracker');
    setCompactMode(startupCompact, false);
    document.body.classList.toggle('tracker-focus-mode', active === 'view-tracker');
  }

  /* ---------- 2) XP NORMALIZATION / LEGACY RECOVERY ---------- */
  function normalizeXP() {
    const app = window.appData || (window.appData = {});
    if (!app.xp || typeof app.xp !== 'object' || Array.isArray(app.xp)) app.xp = {};
    if (!app.xp.daily || typeof app.xp.daily !== 'object' || Array.isArray(app.xp.daily)) app.xp.daily = {};
    if (!Array.isArray(app.xp.logs)) app.xp.logs = [];

    const stored = Math.max(0, Math.floor(Number(app.xp.total) || 0));
    const dailySum = Object.values(app.xp.daily).reduce((n, v) => n + Math.max(0, Math.floor(Number(v) || 0)), 0);
    const logSum = app.xp.logs.reduce((n, x) => n + Math.max(0, Math.floor(Number(x?.amount) || 0)), 0);

    // Legacy V41 stored total/daily, newer V57+ also stores explicit logs.
    // Preserve the largest trustworthy aggregate and backfill total when legacy total was zero.
    const recovered = Math.max(stored, dailySum, logSum);
    if (recovered !== stored) {
      app.xp.total = recovered;
      try { window.saveDataLocally?.(); } catch (_) {}
    } else {
      app.xp.total = stored;
    }
    return app.xp;
  }

  function renderXPRecovery() {
    const xp = normalizeXP();
    const total = Math.max(0, Math.floor(Number(xp.total) || 0));
    const daily = Math.max(0, Math.floor(Number(xp.daily?.[todayKey()]) || 0));
    const level = Math.floor(total / 100) + 1;
    const progress = total % 100;
    const set = (id, value) => { const el = document.getElementById(id); if (el) el.textContent = value; };
    set('ccLevel', `LEVEL ${level}`);
    set('ccXP', `${total} XP`);
    set('ccTodayXP', `+${daily} today`);
    const bar = $('#ccXPBar'); if (bar) bar.style.width = `${progress}%`;
    set('ccXPNext', `${progress} / 100 to next level`);
    const card = $('.xp-card');
    if (card) card.classList.add('kk-xp-total-recovered');
    return { xp, total, daily, level, progress };
  }

  function bindXPSafety() {
    const xpCard = $('.xp-card');
    if (!xpCard || xpCard.dataset.kkV62Xp) return;
    xpCard.dataset.kkV62Xp = '1';

    // Run before the existing bubble listener opens the Consistency modal.
    xpCard.addEventListener('click', () => renderXPRecovery(), true);
    xpCard.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') renderXPRecovery();
    }, true);
  }

  /* ---------- 3) RELIABLE STUDY / WASTE GRAPHS ---------- */
  function prepareNativeCanvas(id) {
    const canvas = document.getElementById(id);
    if (!canvas) return null;
    const holder = canvas.closest('.canvas-container');
    if (!holder) return null;

    holder.classList.add('kk-native-graph');
    const existing = holder.querySelector('.kk-graph-empty');
    if (existing) existing.remove();

    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    const rect = holder.getBoundingClientRect();
    const width = Math.max(320, Math.round(rect.width || holder.clientWidth || 640));
    const height = Math.max(240, Math.round(rect.height || holder.clientHeight || 300));
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { canvas, holder, ctx, width, height };
  }

  function cssVar(name, fallback) {
    const value = getComputedStyle(document.body).getPropertyValue(name).trim();
    return value || fallback;
  }

  function roundRect(ctx, x, y, w, h, r) {
    const rr = Math.min(r, w/2, h/2);
    ctx.beginPath();
    ctx.moveTo(x+rr,y);
    ctx.arcTo(x+w,y,x+w,y+h,rr);
    ctx.arcTo(x+w,y+h,x,y+h,rr);
    ctx.arcTo(x,y+h,x,y,rr);
    ctx.arcTo(x,y,x+w,y,rr);
    ctx.closePath();
  }

  function drawBarChart(canvasId, labels, values, title, unit='hrs') {
    const prepared = prepareNativeCanvas(canvasId);
    if (!prepared) return;
    const {ctx, width, height, holder} = prepared;
    const text = cssVar('--text-main', '#dcecf2');
    const muted = cssVar('--text-muted', '#7d929b');
    const border = cssVar('--cc-border', '#29444e');
    const bar = cssVar('--cc-blue', '#38bdf8');

    ctx.clearRect(0,0,width,height);
    const pad = {l:48,r:18,t:20,b:52};
    const plotW = width-pad.l-pad.r, plotH = height-pad.t-pad.b;
    const safeValues = values.map(v => Math.max(0, Number(v)||0));
    const max = Math.max(1, ...safeValues);
    const count = Math.max(1, labels.length);
    const slot = plotW / count;
    const bw = Math.max(14, Math.min(54, slot * .58));

    ctx.font = '700 11px system-ui, sans-serif';
    ctx.fillStyle = muted;
    ctx.textAlign = 'right';
    for (let i=0;i<=4;i++) {
      const v=max*i/4, y=pad.t+plotH-(plotH*i/4);
      ctx.strokeStyle = border;
      ctx.globalAlpha = 0.55;
      ctx.beginPath(); ctx.moveTo(pad.l,y); ctx.lineTo(pad.l+plotW,y); ctx.stroke();
      ctx.globalAlpha=1;
      ctx.fillText(v.toFixed(1), pad.l-7, y+4);
    }

    labels.forEach((label, i) => {
      const value=safeValues[i]||0;
      const h=(value/max)*plotH;
      const x=pad.l + slot*i + (slot-bw)/2;
      const y=pad.t + plotH - h;
      ctx.fillStyle=bar;
      roundRect(ctx,x,y,bw,Math.max(3,h),Math.min(8,bw/4));
      ctx.fill();
      ctx.fillStyle=text;
      ctx.textAlign='center';
      ctx.font='700 10px system-ui, sans-serif';
      ctx.fillText(value.toFixed(2), x+bw/2, Math.max(pad.t+12,y-6));
      ctx.fillStyle=muted;
      ctx.font='600 10px system-ui, sans-serif';
      const short = String(label).length>12 ? String(label).slice(0,11)+'…' : String(label);
      ctx.fillText(short, x+bw/2, height-pad.b+22);
    });

    ctx.fillStyle=text;
    ctx.font='800 12px system-ui, sans-serif';
    ctx.textAlign='left';
    ctx.fillText(title, pad.l, 13);
    ctx.fillStyle=muted;
    ctx.font='600 10px system-ui, sans-serif';
    ctx.fillText(unit, pad.l+Math.min(160, title.length*7+8), 13);

    if (!safeValues.some(v => v > 0)) {
      const empty = document.createElement('div');
      empty.className='kk-graph-empty';
      empty.textContent='No data recorded yet';
      holder.appendChild(empty);
    }
  }

  function getStudyHours() {
    const totals = Object.fromEntries(SUBJECTS.map(s => [s,0]));
    const logs = Array.isArray(window.appData?.studyLogs) ? window.appData.studyLogs : [];
    logs.forEach(log => {
      if (String(log.type||'') !== 'Focus') return;
      const subject = String(log.subject||'').trim();
      if (!Object.prototype.hasOwnProperty.call(totals, subject)) return;
      totals[subject] += Math.max(0, Number(log.duration)||0);
    });
    return SUBJECTS.map(s => +(totals[s]/3600).toFixed(2));
  }

  function getWasteHours() {
    const dayMap = {};
    const logs = Array.isArray(window.appData?.studyLogs) ? window.appData.studyLogs : [];
    logs.forEach(log => {
      if (String(log.type||'') !== 'Waste') return;
      const d = String(log.date||'');
      if (!d) return;
      dayMap[d]=(dayMap[d]||0)+Math.max(0,Number(log.duration)||0);
    });
    const keys=Object.keys(dayMap).sort();
    const last=keys.slice(-14);
    return {
      labels:last.length ? last.map(d=>d.slice(5)) : ['No Data'],
      values:last.length ? last.map(d=>+(dayMap[d]/3600).toFixed(2)) : [0]
    };
  }

  function renderRequestedCharts() {
    const waste=getWasteHours();
    drawBarChart('chartWasteTime', waste.labels, waste.values, 'Time Waste by Day', 'hours');
  }

  function ensureWasteCard() {
    const studyCanvas=$('#chartStudySubjects');
    const wrapper=studyCanvas?.closest('.charts-wrapper');
    if (!wrapper || $('#chartWasteTimeBox')) return;

    const card=document.createElement('div');
    card.className='chart-box glass-panel hover-lift';
    card.id='chartWasteTimeBox';
    card.innerHTML='<h3>⏳ Time Waste by Day</h3><div class="canvas-container"><canvas id="chartWasteTime" aria-label="Time Waste by Day"></canvas></div>';
    const studyBox=studyCanvas.closest('.chart-box');
    (studyBox ? studyBox.insertAdjacentElement('afterend', card) : wrapper.appendChild(card));
  }

  function bindAnalyticsReliably() {
    ensureWasteCard();

    document.addEventListener('click', event => {
      const tab=event.target.closest?.('[data-tab="view-analytics"]');
      if (!tab) return;
      ensureWasteCard();
      setTimeout(renderRequestedCharts, 50);
    }, true);

    const analytics=$('#view-analytics');
    if (analytics && !analytics.dataset.kkV62Observed) {
      analytics.dataset.kkV62Observed='1';
      const observer=new MutationObserver(() => {
        if (analytics.classList.contains('active')) {
          ensureWasteCard();
          requestAnimationFrame(renderRequestedCharts);
        }
      });
      observer.observe(analytics,{attributes:true,attributeFilter:['class']});
    }

    window.addEventListener('resize', () => {
      if ($('#view-analytics')?.classList.contains('active')) renderRequestedCharts();
    }, {passive:true});
  }

  /* ---------- 4) MENTAL BRIEF REFRESH ---------- */
  function renderMentalBrief() {
    const card=$('.load-card');
    if (!card) return;
    let brief=$('#kkMentalBrief',card);
    if (!brief) {
      brief=document.createElement('div');
      brief.id='kkMentalBrief';
      brief.className='kk-mental-brief';
      card.appendChild(brief);
    }
    const logs=window.appData?.studyLogs||[];
    const key=todayKey();
    const focus=logs.filter(x=>x.date===key&&x.type==='Focus').reduce((n,x)=>n+(Number(x.duration)||0),0);
    const waste=logs.filter(x=>x.date===key&&x.type==='Waste').reduce((n,x)=>n+(Number(x.duration)||0),0);
    const sitting=Number(window.appData?.dailySessions?.[key])||0;
    const hms=sec=>{
      const h=Math.floor(sec/3600),m=Math.floor((sec%3600)/60);
      return h?`${h}h ${m}m`:`${m}m`;
    };
    brief.innerHTML=`<span><b>Focus</b>${hms(focus)}</span><span><b>Waste</b>${hms(waste)}</span><span><b>Sitting</b>${hms(sitting)}</span>`;
  }

  function applyTrackerFit() {
    const view=$('#view-tracker');
    if (!view) return;
    view.querySelectorAll('.table-responsive').forEach(el=>el.classList.add('tracker-fit-table'));
  }

  function init() {
    injectWorkspaceCSS();
    ensureSidebarControls();
    syncSidebarControls();
    trackerAwareNavigation();
    bindXPSafety();
    renderXPRecovery();
    renderMentalBrief();
    ensureWasteCard();
    bindAnalyticsReliably();
    applyTrackerFit();

    window.addEventListener('kk:core-ready', () => {
      ensureSidebarControls();
      syncSidebarControls();
      bindXPSafety();
      renderXPRecovery();
      renderMentalBrief();
      ensureWasteCard();
      bindAnalyticsReliably();
      applyTrackerFit();
      setTimeout(renderRequestedCharts, 120);
    }, { once:true });

    if (!window.__kkV62LightRefresh) {
      window.__kkV62LightRefresh=true;
      setInterval(() => {
        renderXPRecovery();
        renderMentalBrief();
      }, 5000);
    }
  }

  window.kkV62Init=init;
  init();
})();
