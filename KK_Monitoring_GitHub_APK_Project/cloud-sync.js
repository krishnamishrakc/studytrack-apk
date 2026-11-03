/* KK Monitoring V67 Android + Multi-Device Real-Time Cloud Sync
   Supports:
   1. Firebase Auth & Firestore JS SDK with real-time onSnapshot listener
   2. Firebase Auth + Firestore REST API fallback for Android APK file:// WebViews
   3. Sign In + Sign Up (Create Account) + Password Reset + Account Profile / Manual Sync
   4. Timestamp-aware + Deletion-tombstone merge so same-account login syncs cleanly across Android & PC
*/
(() => {
  'use strict';
  if (window.__kkCloudV56) return;
  window.__kkCloudV56 = true;

  const CFG = {
    apiKey: 'AIzaSyCMx9i7ydiEo2O3nNTyhL2AHSVVUEoNpw8',
    authDomain: 'kk-monitoring.firebaseapp.com',
    projectId: 'kk-monitoring',
    storageBucket: 'kk-monitoring.firebasestorage.app',
    messagingSenderId: '776725192537',
    appId: '1:776725192537:web:0c7a3e31e13b9358e8f648'
  };
  const COLLECTION = 'kkMonitoring';
  const STATUS_IDS = ['v42Cloud', 'ccCloudStatus', 'ccCloudHint'];
  const PENDING_MOCK_DELETE_KEY = 'kkMonitoringPendingMockDeletesV65';
  const TOMBSTONE_KEY = 'kkMonitoringTombstonesV67';
  const REST_SESSION_KEY = 'kkMonitoringRestAuthSessionV67';
  const LOCAL_META_KEY = 'kkMonitoringSyncMetaV67';

  let auth = null, db = null, syncing = false, saveTimer = null, firebasePromise = null, pendingReplace = false;
  let unsubscribeSnapshot = null;
  let restSession = null;
  let restPollTimer = null;
  let lastSyncedAt = 0;

  const pendingMockDeletes = new Set();
  const tombstones = { mocks: {}, countdowns: {}, vaultFolders: {}, vaultNotes: {} };
  try {
    const raw = JSON.parse(window.kkSafeLocal.getItem(PENDING_MOCK_DELETE_KEY) || '[]');
    if (Array.isArray(raw)) raw.forEach(id => { pendingMockDeletes.add(String(id)); tombstones.mocks[String(id)] = Date.now(); });
  } catch (_) {}
  try {
    const tRaw = JSON.parse(window.kkSafeLocal.getItem(TOMBSTONE_KEY) || '{}');
    if (tRaw && typeof tRaw === 'object') {
      ['mocks', 'countdowns', 'vaultFolders', 'vaultNotes'].forEach(k => {
        if (tRaw[k] && typeof tRaw[k] === 'object') Object.assign(tombstones[k], tRaw[k]);
      });
    }
  } catch (_) {}
  try {
    const sRaw = JSON.parse(window.kkSafeLocal.getItem(REST_SESSION_KEY) || 'null');
    if (sRaw && sRaw.uid && sRaw.refreshToken) restSession = sRaw;
  } catch (_) {}

  function saveTombstones() {
    try {
      window.kkSafeLocal.setItem(PENDING_MOCK_DELETE_KEY, JSON.stringify([...pendingMockDeletes]));
      window.kkSafeLocal.setItem(TOMBSTONE_KEY, JSON.stringify(tombstones));
    } catch (_) {}
  }
  function rememberDeletion(bucket, id) {
    if (id === undefined || id === null) return;
    const key = String(id);
    if (bucket === 'mocks') pendingMockDeletes.add(key);
    if (tombstones[bucket]) tombstones[bucket][key] = Date.now();
    saveTombstones();
  }
  function clearCompletedMockDeletions(snapshot) {
    for (const id of snapshot || []) pendingMockDeletes.delete(String(id));
    saveTombstones();
  }
  function mergeTombstones(remoteT, localT) {
    const out = { mocks: {}, countdowns: {}, vaultFolders: {}, vaultNotes: {} };
    ['mocks', 'countdowns', 'vaultFolders', 'vaultNotes'].forEach(k => {
      out[k] = { ...(remoteT?.[k] || {}), ...(localT?.[k] || {}) };
    });
    return out;
  }
  function applyTombstones(data, combinedTombstones) {
    if (!data || typeof data !== 'object') return data;
    const t = combinedTombstones || tombstones;
    if (Array.isArray(data.mocks)) {
      data.mocks = data.mocks.filter(m => !pendingMockDeletes.has(String(m?.id)) && !t.mocks?.[String(m?.id)]);
    }
    if (Array.isArray(data.countdowns)) {
      data.countdowns = data.countdowns.filter(c => !t.countdowns?.[String(c?.id)]);
    }
    if (Array.isArray(data.vaultFolders)) {
      data.vaultFolders = data.vaultFolders.filter(f => !t.vaultFolders?.[String(f?.id)]);
    }
    if (Array.isArray(data.vaultNotes)) {
      data.vaultNotes = data.vaultNotes.filter(n => !t.vaultNotes?.[String(n?.id)]);
    }
    return data;
  }

  const clone = o => JSON.parse(JSON.stringify(o || {}));
  function currentUserInfo() {
    if (auth?.currentUser) return { uid: auth.currentUser.uid, email: auth.currentUser.email || 'Cloud Account', mode: 'sdk' };
    if (restSession?.uid) return { uid: restSession.uid, email: restSession.email || 'Cloud Account', mode: 'rest' };
    return null;
  }
  window.kkCloudGetUser = currentUserInfo;

  const setStatus = (text, state = 'offline') => {
    for (const id of STATUS_IDS) {
      const el = document.getElementById(id);
      if (!el) continue;
      if (id === 'v42Cloud') {
        el.classList.toggle('online', state === 'online');
        el.classList.toggle('offline', state !== 'online');
        const b = el.querySelector('b');
        if (b) b.textContent = text;
      } else if (id === 'ccCloudHint') {
        el.textContent = text;
      } else {
        el.innerHTML = `<i></i> ${text}`;
        el.classList.toggle('online', state === 'online');
      }
    }
    updateSettingsCloudCard(text, state);
  };

  function quizKey(item) {
    if (window.kkQuizRecordId) return window.kkQuizRecordId(item);
    if (item?.id !== undefined && item?.id !== null && String(item.id) !== '') return String(item.id);
    return `quiz-${String(item?.date || '')}-${Number(item?.timestamp) || 0}-${Number(item?.score) || 0}-${Number(item?.timeTakenMs) || 0}-${Number(item?.correct) || 0}-${Number(item?.wrong) || 0}`;
  }

  function mergeArrays(remote, local, kind = 'generic') {
    const map = new Map();
    const add = (item) => {
      if (!item || typeof item !== 'object') return;
      const key = kind === 'quiz'
        ? quizKey(item)
        : String(item?.id ?? `${item?.date || ''}|${item?.timestamp || ''}|${item?.name || ''}|${item?.content || ''}`);
      if (!map.has(key)) {
        map.set(key, item);
      } else {
        const existing = map.get(key);
        const tNew = Number(item.updatedAt || item.timestamp || item.id) || 0;
        const tOld = Number(existing?.updatedAt || existing?.timestamp || existing?.id) || 0;
        if (tNew >= tOld) map.set(key, { ...existing, ...item });
      }
    };
    for (const item of Array.isArray(remote) ? remote : []) add(item);
    for (const item of Array.isArray(local) ? local : []) add(item);
    return [...map.values()];
  }

  function mergeTaskDayMaps(remote, local) {
    const r = remote && typeof remote === 'object' ? remote : {};
    const l = local && typeof local === 'object' ? local : {};
    const out = { ...r };
    const allDays = new Set([...Object.keys(r), ...Object.keys(l)]);
    allDays.forEach(day => {
      const rv = r[day] && typeof r[day] === 'object' ? r[day] : {};
      const lv = l[day] && typeof l[day] === 'object' ? l[day] : {};
      const mergedDay = { ...rv, ...lv };
      Object.keys(mergedDay).forEach(taskId => {
        if (typeof rv[taskId] === 'boolean' || typeof lv[taskId] === 'boolean') {
          mergedDay[taskId] = Boolean(rv[taskId] || lv[taskId]);
        }
      });
      out[day] = mergedDay;
    });
    return out;
  }

  function mergeDayMaps(remote, local) {
    const r = remote && typeof remote === 'object' ? remote : {};
    const l = local && typeof local === 'object' ? local : {};
    const out = { ...r };
    Object.keys(l).forEach(key => {
      const rv = r[key], lv = l[key];
      if (rv && typeof rv === 'object' && !Array.isArray(rv) && lv && typeof lv === 'object' && !Array.isArray(lv)) {
        const rTime = Number(rv.updatedAt) || 0;
        const lTime = Number(lv.updatedAt) || 0;
        out[key] = lTime >= rTime ? { ...rv, ...lv } : { ...lv, ...rv };
      } else {
        out[key] = lv;
      }
    });
    return out;
  }

  function mergeNumericDayMaps(remote, local, mode = 'max') {
    const r = remote && typeof remote === 'object' ? remote : {};
    const l = local && typeof local === 'object' ? local : {};
    const out = { ...r };
    const keys = new Set([...Object.keys(r), ...Object.keys(l)]);
    keys.forEach(key => {
      const a = Number(r[key]);
      const b = Number(l[key]);
      if (Number.isFinite(a) && Number.isFinite(b)) out[key] = mode === 'sum' ? a + b : Math.max(a, b);
      else if (key in l) out[key] = l[key];
    });
    return out;
  }

  function mergeXP(remote, local) {
    const r = remote && typeof remote === 'object' ? remote : {};
    const l = local && typeof local === 'object' ? local : {};
    const daily = mergeNumericDayMaps(r.daily, l.daily, 'max');
    const logs = mergeArrays(r.logs, l.logs);
    const dailySum = Object.values(daily).reduce((s, v) => s + (Number(v) || 0), 0);
    return {
      ...r,
      ...l,
      total: Math.max(Number(r.total) || 0, Number(l.total) || 0, dailySum),
      daily,
      logs
    };
  }

  function mergeData(remote, local, remoteTombstones) {
    const r = remote && typeof remote === 'object' ? remote : {};
    const l = local && typeof local === 'object' ? local : {};
    const combinedTombstones = mergeTombstones(remoteTombstones, tombstones);
    Object.assign(tombstones, combinedTombstones);
    saveTombstones();
    const merged = {
      ...r,
      ...l,
      mocks: mergeArrays(r.mocks, l.mocks),
      studyLogs: mergeArrays(r.studyLogs, l.studyLogs),
      quizHistory: mergeArrays(r.quizHistory, l.quizHistory, 'quiz'),
      vaultFolders: mergeArrays(r.vaultFolders, l.vaultFolders),
      vaultNotes: mergeArrays(r.vaultNotes, l.vaultNotes),
      countdowns: mergeArrays(r.countdowns, l.countdowns),
      tasks: mergeTaskDayMaps(r.tasks, l.tasks),
      dailySessions: mergeNumericDayMaps(r.dailySessions, l.dailySessions, 'max'),
      attendance: mergeDayMaps(r.attendance, l.attendance),
      xp: mergeXP(r.xp, l.xp),
      vocabProgress: mergeDayMaps(r.vocabProgress, l.vocabProgress),
      grammarProgress: mergeDayMaps(r.grammarProgress, l.grammarProgress)
    };
    return applyTombstones(merged, combinedTombstones);
  }

  function hasMeaningfulData(d) {
    return !!(d && (
      (d.mocks || []).length ||
      (d.studyLogs || []).length ||
      (d.quizHistory || []).length ||
      (d.vaultFolders || []).length ||
      (d.vaultNotes || []).length ||
      (d.countdowns || []).length ||
      Object.keys(d.tasks || {}).length ||
      Object.keys(d.dailySessions || {}).length ||
      Object.keys(d.attendance || {}).length ||
      Number(d.xp?.total) > 0
    ));
  }

  function updateUI() {
    try {
      window.ensureDataShape?.();
      window.updateDashboardKPIs?.();
      window.renderTracker?.();
      window.renderCountdowns?.();
      window.kkRenderExamCountdowns?.();
      window.renderDailySchedule?.();
      window.renderCalendar?.();
      window.renderDashboardStickyNotes?.();
      window.updateMockUI?.();
      window.renderVaultFolders?.(null);
      window.commandRenderMission?.();
      window.renderRevisionDue?.();
      window.renderWeeklyReview?.();
      if (document.getElementById('view-analytics')?.classList.contains('active')) window.renderCharts?.();
    } catch (e) { console.warn('Cloud UI refresh:', e); }
  }

  async function restSignIn(email, password, isSignUp = false) {
    const endpoint = isSignUp ? 'signUp' : 'signInWithPassword';
    const res = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:${endpoint}?key=${CFG.apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, returnSecureToken: true })
    });
    const data = await res.json();
    if (!res.ok) {
      const msg = data?.error?.message || 'AUTH_FAILED';
      const codeMap = {
        EMAIL_NOT_FOUND: 'auth/user-not-found',
        INVALID_PASSWORD: 'auth/wrong-password',
        INVALID_LOGIN_CREDENTIALS: 'auth/invalid-credential',
        EMAIL_EXISTS: 'auth/email-already-in-use',
        WEAK_PASSWORD: 'auth/weak-password',
        INVALID_EMAIL: 'auth/invalid-email'
      };
      const err = new Error(msg);
      err.code = codeMap[msg] || msg;
      throw err;
    }
    restSession = {
      uid: data.localId,
      email: data.email || email,
      idToken: data.idToken,
      refreshToken: data.refreshToken,
      expiresAt: Date.now() + (Number(data.expiresIn || 3600) * 1000) - 60000
    };
    try { window.kkSafeLocal.setItem(REST_SESSION_KEY, JSON.stringify(restSession)); } catch (_) {}
    startRestPolling();
    return restSession;
  }

  async function ensureRestToken() {
    if (!restSession?.refreshToken) return null;
    if (restSession.idToken && Date.now() < (restSession.expiresAt || 0)) return restSession.idToken;
    try {
      const res = await fetch(`https://securetoken.googleapis.com/v1/token?key=${CFG.apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `grant_type=refresh_token&refresh_token=${encodeURIComponent(restSession.refreshToken)}`
      });
      const data = await res.json();
      if (!res.ok || !data.id_token) return null;
      restSession.idToken = data.id_token;
      restSession.refreshToken = data.refresh_token || restSession.refreshToken;
      restSession.uid = data.user_id || restSession.uid;
      restSession.expiresAt = Date.now() + (Number(data.expires_in || 3600) * 1000) - 60000;
      try { window.kkSafeLocal.setItem(REST_SESSION_KEY, JSON.stringify(restSession)); } catch (_) {}
      return restSession.idToken;
    } catch (_) {
      return null;
    }
  }

  async function restGetDoc() {
    const token = await ensureRestToken();
    if (!token || !restSession?.uid) return null;
    const url = `https://firestore.googleapis.com/v1/projects/${CFG.projectId}/databases/(default)/documents/${COLLECTION}/${restSession.uid}`;
    const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
    if (res.status === 404) return { exists: false };
    if (!res.ok) throw new Error('REST Firestore GET failed');
    const doc = await res.json();
    const jsonStr = doc?.fields?.appDataJson?.stringValue;
    const tombStr = doc?.fields?.tombstonesJson?.stringValue;
    let parsed = null, parsedTomb = null;
    if (jsonStr) { try { parsed = JSON.parse(jsonStr); } catch (_) {} }
    if (tombStr) { try { parsedTomb = JSON.parse(tombStr); } catch (_) {} }
    return { exists: true, appData: parsed, tombstones: parsedTomb };
  }

  async function restWriteDoc(appDataObj) {
    const token = await ensureRestToken();
    if (!token || !restSession?.uid) return false;
    const url = `https://firestore.googleapis.com/v1/projects/${CFG.projectId}/databases/(default)/documents/${COLLECTION}/${restSession.uid}?updateMask.fieldPaths=appDataJson&updateMask.fieldPaths=tombstonesJson&updateMask.fieldPaths=updatedAtMs`;
    const body = {
      fields: {
        appDataJson: { stringValue: JSON.stringify(appDataObj || {}) },
        tombstonesJson: { stringValue: JSON.stringify(tombstones || {}) },
        updatedAtMs: { integerValue: String(Date.now()) }
      }
    };
    const res = await fetch(url, {
      method: 'PATCH',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    return res.ok;
  }

  function startRestPolling() {
    if (restPollTimer) clearInterval(restPollTimer);
    if (!restSession?.uid) return;
    restPollTimer = setInterval(() => {
      if (!document.hidden && navigator.onLine && restSession?.uid && !auth?.currentUser) {
        pullCloud();
      }
    }, 15000);
  }

  function loadFirebase() {
    if (window.firebase?.auth && window.firebase?.firestore) return Promise.resolve(true);
    if (firebasePromise) return firebasePromise;
    const add = (src) => new Promise(resolve => {
      const s = document.createElement('script');
      s.async = true;
      s.src = src;
      s.onload = () => resolve(true);
      s.onerror = () => resolve(false);
      document.head.appendChild(s);
    });
    firebasePromise = (async () => {
      if (!await add('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js')) return false;
      const results = await Promise.all([
        add('https://www.gstatic.com/firebasejs/8.10.1/firebase-auth.js'),
        add('https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js')
      ]);
      return results.every(Boolean) && !!window.firebase;
    })();
    return firebasePromise;
  }

  function initFirebase() {
    if (!window.firebase?.auth || !window.firebase?.firestore) return false;
    try {
      if (!firebase.apps.length) firebase.initializeApp(CFG);
      auth = firebase.auth();
      db = firebase.firestore();
      return true;
    } catch (e) {
      console.error('Firebase init:', e);
      return false;
    }
  }

  function applyRemoteData(remote, remoteTombstones) {
    if (!remote || typeof remote !== 'object') return false;
    const merged = mergeData(remote, window.appData, remoteTombstones);
    if (window.kkDedupeQuizHistory) merged.quizHistory = window.kkDedupeQuizHistory(merged.quizHistory);
    window.appData = merged;
    window.kkSafeLocal.setItem('kkMonitoringV53', JSON.stringify(window.appData));
    lastSyncedAt = Date.now();
    try { window.kkSafeLocal.setItem(LOCAL_META_KEY, JSON.stringify({ lastSyncedAt })); } catch (_) {}
    updateUI();
    return true;
  }

  function attachRealtimeSnapshot() {
    if (unsubscribeSnapshot) { try { unsubscribeSnapshot(); } catch (_) {} unsubscribeSnapshot = null; }
    if (!auth?.currentUser || !db) return;
    try {
      unsubscribeSnapshot = db.collection(COLLECTION).doc(auth.currentUser.uid).onSnapshot(snap => {
        if (syncing || !snap.exists) return;
        const docData = snap.data() || {};
        let remote = docData.appData;
        if (!remote && docData.appDataJson) {
          try { remote = JSON.parse(docData.appDataJson); } catch (_) {}
        }
        let remoteTomb = docData.tombstones;
        if (!remoteTomb && docData.tombstonesJson) {
          try { remoteTomb = JSON.parse(docData.tombstonesJson); } catch (_) {}
        }
        if (remote) {
          applyRemoteData(remote, remoteTomb);
          setStatus('Cloud synced', 'online');
        }
      }, err => {
        console.warn('Realtime listener warning:', err);
      });
    } catch (e) {
      console.warn('Could not attach realtime listener:', e);
    }
  }

  async function pullCloud(forceOverwriteLocal = false) {
    const user = currentUserInfo();
    if (syncing || !user || !window.appData) return false;
    syncing = true;
    setStatus('Syncing cloud…', 'online');
    try {
      if (auth?.currentUser && db) {
        const snap = await db.collection(COLLECTION).doc(auth.currentUser.uid).get();
        if (!snap.exists) { setStatus('Cloud connected', 'online'); return false; }
        const docData = snap.data() || {};
        let remote = docData.appData;
        if (!remote && docData.appDataJson) { try { remote = JSON.parse(docData.appDataJson); } catch (_) {} }
        let remoteTomb = docData.tombstones;
        if (!remoteTomb && docData.tombstonesJson) { try { remoteTomb = JSON.parse(docData.tombstonesJson); } catch (_) {} }
        if (!remote) { setStatus('Cloud connected', 'online'); return false; }
        if (forceOverwriteLocal) {
          window.appData = applyTombstones(clone(remote), remoteTomb);
          window.kkSafeLocal.setItem('kkMonitoringV53', JSON.stringify(window.appData));
          lastSyncedAt = Date.now();
          updateUI();
        } else {
          applyRemoteData(remote, remoteTomb);
        }
        setStatus('Cloud synced', 'online');
        return true;
      } else if (restSession?.uid) {
        const res = await restGetDoc();
        if (!res?.exists || !res.appData) { setStatus('Cloud connected', 'online'); return false; }
        if (forceOverwriteLocal) {
          window.appData = applyTombstones(clone(res.appData), res.tombstones);
          window.kkSafeLocal.setItem('kkMonitoringV53', JSON.stringify(window.appData));
          lastSyncedAt = Date.now();
          updateUI();
        } else {
          applyRemoteData(res.appData, res.tombstones);
        }
        setStatus('Cloud synced', 'online');
        return true;
      }
      return false;
    } catch (e) {
      console.warn('Cloud pull:', e);
      setStatus('Cloud offline', 'offline');
      return false;
    } finally {
      syncing = false;
      if (pendingReplace && currentUserInfo()) setTimeout(() => replaceCloud(), 0);
    }
  }

  async function pushCloud() {
    const user = currentUserInfo();
    if (syncing || !user || !window.appData) return false;
    syncing = true;
    try {
      const payloadData = applyTombstones(clone(window.appData), tombstones);
      if (auth?.currentUser && db) {
        await db.collection(COLLECTION).doc(auth.currentUser.uid).set({
          appData: payloadData,
          appDataJson: JSON.stringify(payloadData),
          tombstones: clone(tombstones),
          tombstonesJson: JSON.stringify(tombstones),
          updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
          updatedAtMs: Date.now()
        }, { merge: true });
      } else if (restSession?.uid) {
        const ok = await restWriteDoc(payloadData);
        if (!ok) throw new Error('REST push failed');
      }
      lastSyncedAt = Date.now();
      setStatus('Cloud saved', 'online');
      return true;
    } catch (e) {
      console.warn('Cloud push:', e);
      setStatus('Cloud offline', 'offline');
      return false;
    } finally {
      syncing = false;
      if (pendingReplace && currentUserInfo()) setTimeout(() => replaceCloud(), 0);
    }
  }

  async function replaceCloud() {
    pendingReplace = true;
    const user = currentUserInfo();
    if (!user || !window.appData || syncing) return false;
    syncing = true;
    const deletionSnapshot = [...pendingMockDeletes];
    try {
      const payloadData = applyTombstones(clone(window.appData), tombstones);
      if (auth?.currentUser && db) {
        await db.collection(COLLECTION).doc(auth.currentUser.uid).set({
          appData: payloadData,
          appDataJson: JSON.stringify(payloadData),
          tombstones: clone(tombstones),
          tombstonesJson: JSON.stringify(tombstones),
          updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
          updatedAtMs: Date.now()
        });
      } else if (restSession?.uid) {
        const ok = await restWriteDoc(payloadData);
        if (!ok) throw new Error('REST replace failed');
      }
      pendingReplace = false;
      clearCompletedMockDeletions(deletionSnapshot);
      lastSyncedAt = Date.now();
      setStatus('Cloud updated', 'online');
      return true;
    } catch (e) {
      console.warn('Cloud replace:', e);
      setStatus('Cloud offline', 'offline');
      return false;
    } finally {
      syncing = false;
    }
  }

  window.kkCloudReplaceNow = replaceCloud;
  window.kkCloudSyncNow = async () => {
    await pullCloud(false);
    await pushCloud();
    window.showToast?.('Cloud data synced across devices!');
  };
  function schedulePush() { clearTimeout(saveTimer); saveTimer = setTimeout(() => pushCloud(), 900); }

  function authError(e) {
    const map = {
      'auth/invalid-email': 'Invalid email address.',
      'auth/user-not-found': 'No account found for this email. Use Create Account tab if new.',
      'auth/wrong-password': 'Incorrect password.',
      'auth/invalid-credential': 'Incorrect email or password.',
      'auth/email-already-in-use': 'This email is already registered. Please Sign In.',
      'auth/weak-password': 'Password should be at least 6 characters.',
      'auth/too-many-requests': 'Too many attempts. Try again later.',
      'auth/network-request-failed': 'Network connection failed. Check your internet.'
    };
    return map[e?.code] || e?.message || 'Authentication failed.';
  }

  function styleAuth() {
    if (document.getElementById('kkCloudAuthStyle')) return;
    const s = document.createElement('style');
    s.id = 'kkCloudAuthStyle';
    s.textContent = `
      .kk-cloud-auth{position:fixed;inset:0;z-index:100000;background:rgba(3,7,18,.72);display:flex;align-items:center;justify-content:center;padding:16px;backdrop-filter:blur(14px)}
      .kk-cloud-auth-card{position:relative;width:min(440px,96vw);padding:26px;border-radius:24px;background:rgba(15,23,42,.96);border:1px solid rgba(56,189,248,.25);box-shadow:0 28px 80px rgba(0,0,0,.6);color:#f8fafc}
      .kk-cloud-auth-card h2{margin:4px 0 6px;font-size:1.35rem}
      .kk-cloud-auth-card p{color:var(--text-muted,#94a3b8);line-height:1.45;font-size:.86rem;margin:0 0 12px}
      .kk-cloud-auth-card label{display:block;margin:12px 0 5px;font-size:.8rem;font-weight:700}
      .kk-cloud-auth-card input{width:100%;box-sizing:border-box}
      .kk-cloud-tabs{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:12px 0}
      .kk-cloud-tabs button{padding:10px;border-radius:12px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.04);color:#cbd5e1;font-weight:700;cursor:pointer}
      .kk-cloud-tabs button.active{background:linear-gradient(135deg,#0ea5e9,#22d3ee);color:#04131d;border-color:transparent}
      .kk-cloud-auth-actions{display:flex;gap:10px;margin-top:16px;flex-wrap:wrap}
      .kk-cloud-auth-actions button{flex:1;min-width:130px}
      .kk-cloud-auth-msg{min-height:22px;margin-top:12px;color:#38bdf8;font-size:.85rem;text-align:center;font-weight:600}
      .kk-cloud-account-box{padding:14px;border-radius:16px;background:rgba(56,189,248,.08);border:1px solid rgba(56,189,248,.22);margin:12px 0}
      .kk-cloud-account-box b{display:block;font-size:.95rem;color:#38bdf8;word-break:break-all}
      .kk-cloud-account-box span{font-size:.76rem;color:#94a3b8}
    `;
    document.head.appendChild(s);
  }

  function showAuth() {
    document.getElementById('kkCloudAuth')?.remove();
    styleAuth();
    const user = currentUserInfo();
    const m = document.createElement('div');
    m.id = 'kkCloudAuth';
    m.className = 'kk-cloud-auth';

    if (user) {
      const syncTimeStr = lastSyncedAt ? new Date(lastSyncedAt).toLocaleTimeString() : 'Connected';
      m.innerHTML = `
        <div class="kk-cloud-auth-card" role="dialog" aria-modal="true">
          <button id="kkCloudClose" type="button" aria-label="Close" style="position:absolute;right:14px;top:14px;width:36px;height:36px;border-radius:50%;border:1px solid rgba(255,255,255,.16);background:rgba(255,255,255,.06);color:inherit;font-size:1.2rem;cursor:pointer">×</button>
          <div style="font-size:2rem">☁️</div>
          <h2>Firebase Cloud Sync Active</h2>
          <p>Logged in with the same account across Android APK & Web. Changes sync automatically.</p>
          <div class="kk-cloud-account-box">
            <span>SIGNED IN ACCOUNT</span>
            <b>${window.escapeHTML ? window.escapeHTML(user.email) : user.email}</b>
            <span>UID: ${user.uid.slice(0, 10)}… • Last sync: ${syncTimeStr} (${user.mode.toUpperCase()})</span>
          </div>
          <div class="kk-cloud-auth-actions">
            <button id="kkCloudSyncNowBtn" class="btn-primary" type="button">🔄 Sync Now (Merge)</button>
            <button id="kkCloudPullForceBtn" class="btn-secondary" type="button">⬇ Restore from Cloud</button>
          </div>
          <div class="kk-cloud-auth-actions" style="margin-top:10px;">
            <button id="kkCloudPushForceBtn" class="btn-secondary" type="button">⬆ Push Local to Cloud</button>
            <button id="kkCloudLogoutBtn" class="btn-danger" type="button">Sign Out</button>
          </div>
          <div id="kkCloudMsg" class="kk-cloud-auth-msg"></div>
        </div>`;
      document.body.appendChild(m);
      const close = () => m.remove();
      document.getElementById('kkCloudClose').onclick = close;
      m.addEventListener('click', e => { if (e.target === m) close(); });
      const msg = t => { const el = document.getElementById('kkCloudMsg'); if (el) el.textContent = t; };
      document.getElementById('kkCloudSyncNowBtn').onclick = async () => {
        msg('Syncing with Firebase…');
        await pullCloud(false);
        await pushCloud();
        msg('✓ Synced! Both Android & Web are up to date.');
      };
      document.getElementById('kkCloudPullForceBtn').onclick = async () => {
        msg('Downloading latest cloud backup…');
        await pullCloud(true);
        msg('✓ Cloud data restored to this device!');
      };
      document.getElementById('kkCloudPushForceBtn').onclick = async () => {
        msg('Uploading local data to cloud…');
        await replaceCloud();
        msg('✓ This device data uploaded to cloud!');
      };
      document.getElementById('kkCloudLogoutBtn').onclick = async () => {
        await window.kkCloudSignOut();
        close();
        window.showToast?.('Signed out of Firebase Cloud.');
      };
      return;
    }

    let mode = 'signin';
    m.innerHTML = `
      <div class="kk-cloud-auth-card" role="dialog" aria-modal="true" aria-labelledby="kkCloudTitle">
        <button id="kkCloudClose" type="button" aria-label="Close" style="position:absolute;right:14px;top:14px;width:36px;height:36px;border-radius:50%;border:1px solid rgba(255,255,255,.16);background:rgba(255,255,255,.06);color:inherit;font-size:1.2rem;cursor:pointer">×</button>
        <div style="font-size:2rem">☁️</div>
        <h2 id="kkCloudTitle">Firebase Account Sync</h2>
        <p>Log in with the same email on Android APK and PC/Web to keep all Mocks, Tasks, Timers, XP & Vault Notes synced automatically.</p>
        <div class="kk-cloud-tabs">
          <button type="button" id="kkTabSignIn" class="active">Sign In (Existing)</button>
          <button type="button" id="kkTabSignUp">Create Account</button>
        </div>
        <label>Email Address</label>
        <input id="kkCloudEmail" class="modern-input" type="email" autocomplete="email" placeholder="you@example.com">
        <label>Password</label>
        <input id="kkCloudPass" class="modern-input" type="password" autocomplete="current-password" placeholder="Your cloud password">
        <div class="kk-cloud-auth-actions">
          <button id="kkCloudSubmit" class="btn-primary" type="button">Sign In & Sync</button>
          <button id="kkCloudSkip" class="btn-secondary" type="button">Use Offline</button>
        </div>
        <button id="kkCloudForgot" class="btn-secondary" style="width:100%;margin-top:10px" type="button">Forgot Password?</button>
        <div id="kkCloudMsg" class="kk-cloud-auth-msg"></div>
      </div>`;
    document.body.appendChild(m);

    const close = () => m.remove();
    document.getElementById('kkCloudClose').onclick = close;
    m.addEventListener('click', e => { if (e.target === m) close(); });
    const msg = t => { const el = document.getElementById('kkCloudMsg'); if (el) el.textContent = t; };

    const tabIn = document.getElementById('kkTabSignIn');
    const tabUp = document.getElementById('kkTabSignUp');
    const submitBtn = document.getElementById('kkCloudSubmit');
    tabIn.onclick = () => { mode = 'signin'; tabIn.classList.add('active'); tabUp.classList.remove('active'); submitBtn.textContent = 'Sign In & Sync'; };
    tabUp.onclick = () => { mode = 'signup'; tabUp.classList.add('active'); tabIn.classList.remove('active'); submitBtn.textContent = 'Create Account & Sync'; };

    document.getElementById('kkCloudSkip').onclick = () => { close(); setStatus('Local mode', 'offline'); };

    submitBtn.onclick = async () => {
      const email = document.getElementById('kkCloudEmail').value.trim();
      const pass = document.getElementById('kkCloudPass').value;
      if (!email || !pass) { msg('Please enter both email and password.'); return; }
      submitBtn.disabled = true;
      msg('Connecting to Firebase Cloud…');
      try {
        let sdkSuccess = false;
        if (!auth) {
          const ok = await loadFirebase();
          if (ok) initFirebase();
        }
        if (auth) {
          try {
            if (mode === 'signup') await auth.createUserWithEmailAndPassword(email, pass);
            else await auth.signInWithEmailAndPassword(email, pass);
            sdkSuccess = true;
            attachRealtimeSnapshot();
          } catch (sdkErr) {
            if (sdkErr?.code === 'auth/operation-not-supported-in-this-environment' || sdkErr?.code === 'auth/web-storage-unsupported' || location.protocol === 'file:') {
              await restSignIn(email, pass, mode === 'signup');
              sdkSuccess = true;
            } else {
              throw sdkErr;
            }
          }
        } else {
          await restSignIn(email, pass, mode === 'signup');
          sdkSuccess = true;
        }
        if (sdkSuccess) {
          close();
          const hadRemote = await pullCloud(false);
          await pushCloud();
          window.showToast?.(hadRemote ? 'Cloud account synced & restored!' : 'Connected to Firebase Cloud!');
        }
      } catch (e) {
        msg(authError(e));
        submitBtn.disabled = false;
      }
    };

    document.getElementById('kkCloudForgot').onclick = async () => {
      const email = document.getElementById('kkCloudEmail').value.trim();
      if (!email) { msg('Enter your email first.'); return; }
      try {
        const res = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${CFG.apiKey}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ requestType: 'PASSWORD_RESET', email })
        });
        if (!res.ok) throw new Error('Could not send reset email.');
        msg('Password reset email sent! Check your inbox.');
      } catch (e) {
        msg(authError(e));
      }
    };
  }

  function updateSettingsCloudCard(statusText = 'Checking…', state = 'offline') {
    const grid = document.querySelector('#view-settings .settings-grid');
    if (!grid) return;
    let card = document.getElementById('kkSettingsCloudCard');
    if (!card) {
      card = document.createElement('section');
      card.id = 'kkSettingsCloudCard';
      card.className = 'glass-panel settings-card';
      grid.insertBefore(card, grid.firstElementChild);
    }
    const user = currentUserInfo();
    card.innerHTML = `
      <h3>☁️ Firebase Multi-Device Cloud Sync</h3>
      <p>${user ? `Signed in as <b>${window.escapeHTML ? window.escapeHTML(user.email) : user.email}</b>. Data syncs automatically across Android APK & Web.` : 'Sign in with your Firebase account so your data stays synced across your Android APK and computer.'}</p>
      <div class="settings-status">${statusText} ${user ? `• Mode: ${user.mode.toUpperCase()}` : ''}</div>
      <div class="settings-inline">
        <button type="button" class="btn-primary" id="kkSettingsCloudOpenBtn">${user ? 'Manage Account / Sync' : 'Sign In / Create Account'}</button>
        ${user ? '<button type="button" class="btn-secondary" id="kkSettingsSyncNowBtn">🔄 Sync Now</button>' : ''}
      </div>`;
    card.querySelector('#kkSettingsCloudOpenBtn').onclick = () => showAuth();
    const syncBtn = card.querySelector('#kkSettingsSyncNowBtn');
    if (syncBtn) syncBtn.onclick = () => window.kkCloudSyncNow();
  }

  window.kkCloudOpenAuth = showAuth;
  window.addEventListener('kk:cloud-open-request', () => showAuth());

  async function boot() {
    setStatus('Connecting cloud…', 'offline');
    ['v42Cloud', 'ccCloudStatus', 'ccCloudHint'].forEach(id => {
      const el = document.getElementById(id);
      if (el && !el.dataset.kkCloudClickBound) {
        el.dataset.kkCloudClickBound = '1';
        el.addEventListener('click', () => showAuth());
        el.style.cursor = 'pointer';
      }
    });

    window.addEventListener('kk:mock-deleted', event => rememberDeletion('mocks', event.detail?.id));

    const sdkLoaded = await loadFirebase();
    const sdkReady = sdkLoaded && initFirebase();

    if (sdkReady) {
      try { await auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL); } catch (_) {}
      auth.onAuthStateChanged(async user => {
        if (!user) {
          if (restSession?.uid) {
            const token = await ensureRestToken();
            if (token) {
              setStatus('Cloud synced', 'online');
              startRestPolling();
              await pullCloud(false);
              await pushCloud();
              return;
            }
          }
          setStatus('Tap to Sign In', 'offline');
          return;
        }
        setStatus('Restoring cloud…', 'online');
        attachRealtimeSnapshot();
        if (pendingReplace) {
          await replaceCloud();
          updateUI();
          return;
        }
        const hadRemote = await pullCloud(false);
        if (pendingReplace) {
          await replaceCloud();
        } else if (!hadRemote && hasMeaningfulData(window.appData)) {
          await pushCloud();
        }
        if (hadRemote || pendingReplace) updateUI();
      });
    } else if (restSession?.uid) {
      const token = await ensureRestToken();
      if (token) {
        setStatus('Cloud synced', 'online');
        startRestPolling();
        await pullCloud(false);
      } else {
        setStatus('Tap to Sign In', 'offline');
      }
    } else {
      setStatus('Tap to Sign In', 'offline');
    }

    window.addEventListener('online', () => {
      if (!currentUserInfo()) return;
      if (pendingReplace) replaceCloud();
      else { pullCloud(false).then(() => pushCloud()); }
    });
    window.addEventListener('kk:data-saved', event => {
      if (event.detail?.reason === 'delete') { clearTimeout(saveTimer); replaceCloud(); }
      else schedulePush();
    });
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden && currentUserInfo()) pullCloud(false);
    });
    setTimeout(() => updateSettingsCloudCard(currentUserInfo() ? 'Cloud connected' : 'Tap to Sign In', currentUserInfo() ? 'online' : 'offline'), 500);
  }

  boot().catch(e => { console.warn('Cloud boot:', e); setStatus('Local mode', 'offline'); });
  window.kkCloudSignOut = async () => {
    if (unsubscribeSnapshot) { try { unsubscribeSnapshot(); } catch (_) {} unsubscribeSnapshot = null; }
    if (restPollTimer) { clearInterval(restPollTimer); restPollTimer = null; }
    restSession = null;
    try { window.kkSafeLocal.removeItem(REST_SESSION_KEY); } catch (_) {}
    try { await auth?.signOut(); } catch (_) {}
    setStatus('Tap to Sign In', 'offline');
  };
})();
