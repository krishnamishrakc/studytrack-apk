/* KK Monitoring V56 — single owner for navigation + live header clock + lightweight command updates. */
(() => {
  'use strict';
  if (window.__kkV56CommandLoaded) return;
  window.__kkV56CommandLoaded = true;

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const today = () => window.getSafeDateStr ? window.getSafeDateStr() : new Date().toISOString().slice(0,10);
  let booted = false, navBound = false, clockTimer = null, schedulerTimer = null;

  function switchTab(tab) {
    const target = document.getElementById(tab);
    if (!target) return false;
    $$('.nav-links li[data-tab]').forEach(li => li.classList.toggle('active', li.dataset.tab === tab));
    $$('.view-section').forEach(view => view.classList.remove('active'));
    target.classList.add('active');
    try {
      if (tab === 'view-dashboard') {
        window.renderDashboardStickyNotes?.();
        window.updateDashboardKPIs?.();
        window.renderDailySchedule?.();
      } else if (tab === 'view-daily-tasks') {
        window.renderDailySchedule?.();
      } else if (tab === 'view-tracker') {
        window.renderTracker?.();
      } else if (tab === 'view-analytics') {
        window.renderCharts?.();
      } else if (tab === 'view-add-data') {
        window.updateMockUI?.();
      } else if (tab === 'view-study-room') {
        window.renderVaultFolders?.(null);
      } else if (tab === 'view-learn') {
        window.bindLearnHubControls?.();
        window.renderGrammarRule?.();
        window.renderVocabWord?.();
      } else if (tab === 'view-settings') {
        window.refreshStorageStatus?.();
        window.updateThemeStatus?.();
      }
    } catch (e) { console.warn('Tab refresh:', e); }
    window.scrollTo?.({ top: 0, behavior: 'smooth' });
    return true;
  }

  function bindNavigation() {
    if (navBound) return;
    navBound = true;
    document.addEventListener('click', event => {
      const tabEl = event.target.closest?.('.nav-links li[data-tab], [data-tab].cc-link');
      if (tabEl?.dataset?.tab) {
        event.preventDefault();
        switchTab(tabEl.dataset.tab);
        if (window.innerWidth < 760) $('.sidebar')?.classList.remove('mobile-open');
        return;
      }
    });
  }

  function renderClock() {
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const date = now.toLocaleDateString([], { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
    for (const id of ['v42LiveTime', 'ccBigClock']) {
      const el = document.getElementById(id);
      if (el) el.textContent = time;
    }
    for (const id of ['v42LiveDate', 'ccBigDate']) {
      const el = document.getElementById(id);
      if (el) el.textContent = date;
    }
  }

  function renderCloudStatus() {
    const user = (() => {
      try { return window.firebase?.auth?.().currentUser || null; } catch (_) { return null; }
    })();
    const online = !!user && navigator.onLine;
    const text = online ? 'Cloud online' : user ? 'Cloud offline' : 'Sign in required';
    const pill = document.getElementById('v42Cloud');
    if (pill) {
      pill.classList.toggle('online', online);
      pill.classList.toggle('offline', !online);
      const b = pill.querySelector('b'); if (b) b.textContent = text;
      pill.title = 'Cloud account — click to sign in or restore';
      pill.style.cursor = 'pointer';
    }
    const status = document.getElementById('ccCloudStatus');
    if (status) {
      status.innerHTML = `<i></i> ${text}`;
      status.classList.toggle('online', online);
      status.title = 'Cloud account — click to sign in or restore';
      status.style.cursor = 'pointer';
    }
    const hint = document.getElementById('ccCloudHint');
    if (hint) hint.textContent = text;
  }

  function refreshLightweightCommand() {
    try {
      window.commandRenderMission?.();
      renderCloudStatus();
    } catch (e) { console.warn('Command refresh:', e); }
  }

  function startTimers() {
    if (!clockTimer) {
      renderClock();
      clockTimer = setInterval(renderClock, 1000);
    }
    if (!schedulerTimer) {
      refreshLightweightCommand();
      schedulerTimer = setInterval(refreshLightweightCommand, 5000);
    }
  }

  function bindCloudClicks() {
    for (const id of ['v42Cloud', 'ccCloudStatus', 'ccCloudHint']) {
      const el = document.getElementById(id);
      if (!el || el.dataset.kkCloudClickBound) continue;
      el.dataset.kkCloudClickBound = '1';
      el.addEventListener('click', event => {
        event.preventDefault();
        const open = window.kkCloudOpenAuth;
        if (typeof open === 'function') open();
        else window.dispatchEvent(new Event('kk:cloud-open-request'));
      });
    }
  }

  function bindActions() {
    $('#ccStartFocus')?.addEventListener('click', () => { switchTab('view-study-room'); setTimeout(() => $('#btnFocus')?.click(), 150); });
    $('#ccNextBtn')?.addEventListener('click', () => switchTab('view-daily-tasks'));
    $('#v42ThemeBtn')?.addEventListener('click', () => window.toggleTheme?.());
  }

  function init() {
    if (booted) return;
    booted = true;
    bindNavigation();
    bindActions();
    bindCloudClicks();
    startTimers();
    renderClock();
    window.renderDashboardStickyNotes?.();
  }

  window.v42SwitchTab = switchTab;
  window.switchTab = switchTab;
  window.v42Init = init;
  window.v42RenderDashboard = refreshLightweightCommand;
  window.v42RefreshCloudStatus = renderCloudStatus;
})();
