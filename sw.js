// Precificador Relimax — service worker: deixa o app abrir sem internet.
// Ao publicar uma versão nova, troque o número abaixo para o app atualizar.
const VERSION = 'v7-2026-10-16';
const CACHE = 'precificador-' + VERSION;
const FILES = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './icon-512-maskable.png', './apple-touch-icon.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) { // fontes do Google: rede primeiro, sem travar offline
    e.respondWith(fetch(e.request).catch(() => new Response('', {status: 503}))); return;
  }
  // arquivos do app: rede primeiro (pega atualização), cache se estiver offline
  e.respondWith(fetch(e.request).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return r; }).catch(() => caches.match(e.request, {ignoreSearch: true}).then(r => r || caches.match('./index.html'))));
});
