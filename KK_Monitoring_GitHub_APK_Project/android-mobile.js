/* KK Monitoring V67 — Android APK / Mobile Drawer, Bottom Nav, Back Button & Sidebar Fix */
(() => {
  'use strict';
  if (window.__kkAndroidMobileLoaded) return;
  window.__kkAndroidMobileLoaded = true;

  function setupMobileShell() {
    const main = document.querySelector('.main-content');
    const sidebar = document.querySelector('.sidebar');
    if (!main || !sidebar) return;

    // Ensure v42 navigation is initialized so clicking sidebar items always works
    if (typeof window.v42Init === 'function') {
      try { window.v42Init(); } catch (_) {}
    }

    if (!document.getElementById('kkMobileTopBar')) {
      const topBar = document.createElement('div');
      topBar.id = 'kkMobileTopBar';
      topBar.innerHTML = `
        <button type="button" id="kkMobileMenuBtn" aria-label="Open side panel"><i class="ph-bold ph-list"></i></button>
        <div id="kkMobileBrand"><img src="icon-192.png" alt="KK Logo" class="kk-mobile-logo-img"><span>KK's MONITORING</span></div>
        <button type="button" id="kkMobileCloudBtn"><i class="ph-fill ph-cloud"></i> <span id="kkMobileCloudTxt">Sync</span></button>
      `;
      main.insertBefore(topBar, main.firstElementChild);
    }

    // Add a close button inside sidebar dock for mobile drawer
    const dock = document.getElementById('kkSidebarDock');
    if (dock && !document.getElementById('kkMobileCloseDrawerBtn')) {
      const closeBtn = document.createElement('button');
      closeBtn.type = 'button';
      closeBtn.id = 'kkMobileCloseDrawerBtn';
      closeBtn.style.display = 'none';
      closeBtn.title = 'Close side panel';
      closeBtn.setAttribute('aria-label', 'Close side panel');
      closeBtn.innerHTML = '<i class="ph-bold ph-x"></i>';
      dock.appendChild(closeBtn);
    }

    if (!document.getElementById('kkSidebarBackdrop')) {
      const backdrop = document.createElement('div');
      backdrop.id = 'kkSidebarBackdrop';
      sidebar.parentElement.insertBefore(backdrop, sidebar);
    }

    if (!document.getElementById('kkAndroidBottomNav')) {
      const bnav = document.createElement('nav');
      bnav.id = 'kkAndroidBottomNav';
      bnav.setAttribute('aria-label', 'Mobile Bottom Navigation');
      bnav.innerHTML = `
        <button type="button" class="kk-bnav-btn active" data-bnav-tab="view-dashboard"><i class="ph-fill ph-house"></i><span>Today</span></button>
        <button type="button" class="kk-bnav-btn" data-bnav-tab="view-study-room"><i class="ph-fill ph-timer"></i><span>Focus</span></button>
        <button type="button" class="kk-bnav-btn" data-bnav-tab="view-daily-tasks"><i class="ph-fill ph-list-checks"></i><span>Plan</span></button>
        <button type="button" class="kk-bnav-btn" data-bnav-tab="view-tracker"><i class="ph-fill ph-table"></i><span>Tracker</span></button>
        <button type="button" class="kk-bnav-btn" data-bnav-menu="1"><i class="ph-fill ph-squares-four"></i><span>Menu</span></button>
      `;
      document.body.appendChild(bnav);
    }

    // Guard event listeners so they are NEVER bound twice!
    if (window.__kkMobileListenersBound) return;
    window.__kkMobileListenersBound = true;

    const backdrop = document.getElementById('kkSidebarBackdrop');
    const toggleDrawer = (open) => {
      const willOpen = typeof open === 'boolean' ? open : !sidebar.classList.contains('mobile-open');
      sidebar.classList.toggle('mobile-open', willOpen);
      backdrop?.classList.toggle('show', willOpen);
    };
    window.kkToggleSidePanel = toggleDrawer;

    document.getElementById('kkMobileMenuBtn')?.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggleDrawer();
    });
    document.getElementById('kkMobileCloseDrawerBtn')?.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggleDrawer(false);
    });
    backdrop?.addEventListener('click', () => toggleDrawer(false));

    document.getElementById('kkMobileCloudBtn')?.addEventListener('click', () => {
      if (typeof window.kkCloudOpenAuth === 'function') window.kkCloudOpenAuth();
      else window.dispatchEvent(new Event('kk:cloud-open-request'));
    });

    const syncBottomNavActive = (tabId) => {
      document.querySelectorAll('#kkAndroidBottomNav .kk-bnav-btn[data-bnav-tab]').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.bnavTab === tabId);
      });
    };

    document.getElementById('kkAndroidBottomNav')?.addEventListener('click', e => {
      const btn = e.target.closest('.kk-bnav-btn');
      if (!btn) return;
      if (btn.dataset.bnavMenu) {
        e.preventDefault();
        e.stopPropagation();
        toggleDrawer();
        return;
      }
      const tab = btn.dataset.bnavTab;
      if (tab) {
        toggleDrawer(false);
        window.switchTab?.(tab);
        syncBottomNavActive(tab);
      }
    });

    // Direct listener on sidebar items so every item in the side panel works reliably on both desktop & mobile
    sidebar.addEventListener('click', e => {
      const navItem = e.target.closest('.nav-links li[data-tab]');
      if (navItem?.dataset?.tab) {
        e.preventDefault();
        const tab = navItem.dataset.tab;
        window.switchTab?.(tab);
        syncBottomNavActive(tab);
        if (window.innerWidth <= 820) {
          toggleDrawer(false);
        }
        return;
      }
      const brainBtn = e.target.closest('#navBrainGym');
      if (brainBtn && window.innerWidth <= 820) {
        toggleDrawer(false);
      }
    });

    document.addEventListener('click', e => {
      const linkItem = e.target.closest('[data-tab].cc-link');
      if (linkItem?.dataset?.tab) {
        toggleDrawer(false);
        syncBottomNavActive(linkItem.dataset.tab);
      }
    });

    setInterval(() => {
      const mainCloud = document.querySelector('#v42Cloud b')?.textContent || 'Sync';
      const mTxt = document.getElementById('kkMobileCloudTxt');
      if (mTxt) mTxt.textContent = mainCloud.includes('online') || mainCloud.includes('synced') || mainCloud.includes('saved') ? 'Synced' : 'Cloud';
    }, 2000);

    try {
      if (location.protocol !== 'file:') {
        history.pushState({ kkRoot: true }, '');
      }
      window.addEventListener('popstate', () => {
        const openModal = document.querySelector('.modal-overlay.show, .cmd-modal, #kkCloudAuth');
        if (openModal) {
          if (openModal.classList.contains('modal-overlay')) openModal.classList.remove('show');
          else openModal.remove();
          try { if (location.protocol !== 'file:') history.pushState({ kkRoot: true }, ''); } catch (_) {}
          return;
        }
        if (sidebar.classList.contains('mobile-open')) {
          toggleDrawer(false);
          try { if (location.protocol !== 'file:') history.pushState({ kkRoot: true }, ''); } catch (_) {}
          return;
        }
        const activeView = document.querySelector('.view-section.active');
        if (activeView && activeView.id !== 'view-dashboard') {
          window.switchTab?.('view-dashboard');
          syncBottomNavActive('view-dashboard');
          try { if (location.protocol !== 'file:') history.pushState({ kkRoot: true }, ''); } catch (_) {}
        }
      });
    } catch (_) {}
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', setupMobileShell, { once: true });
  else setupMobileShell();
  window.addEventListener('kk:core-ready', setupMobileShell);
})();
