// ════════════════════════════════════════════
// GZplan Service Worker — 푸시 알림
// ════════════════════════════════════════════

self.addEventListener('install',  () => self.skipWaiting());

// ── 메시지 수신 → 알림 표시 ──
self.addEventListener('message', e => {
  if (e.data?.type === 'notify') {
    self.registration.showNotification(e.data.title, {
      body:  e.data.body,
      icon:  '/favicon.ico',
      badge: '/favicon.ico',
      tag:   'gzplan-task',
    });
  }
});
self.addEventListener('activate', e  => e.waitUntil(clients.claim()));

// ── 푸시 수신 → 알림 표시 ──
self.addEventListener('push', e => {
  const data    = e.data ? e.data.json() : {};
  const title   = data.title || 'GZplan 알림';
  const options = {
    body:  data.body  || '업무 알림이 있어요',
    icon:  '/favicon.ico',
    badge: '/favicon.ico',
    tag:   data.tag   || 'gzplan',
    data:  { url: data.url || '/' },
    requireInteraction: false,
  };
  e.waitUntil(self.registration.showNotification(title, options));
});

// ── 알림 클릭 → 탭 포커스 or 열기 ──
self.addEventListener('notificationclick', e => {
  e.notification.close();
  const url = e.notification.data?.url || '/';
  e.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
      const existing = list.find(c => c.url.includes(location.origin));
      if (existing) return existing.focus();
      return clients.openWindow(url);
    })
  );
});
