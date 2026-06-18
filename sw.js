/* Lern-Held Service-Worker — macht die App offline-fähig.
   Strategie: cache-first. Beim ersten Laden werden alle Dateien gespeichert;
   danach läuft alles ohne Internet. CACHE-Version erhöhen, wenn das Spiel
   aktualisiert wird, damit Geräte die neue Fassung holen. */
const CACHE = "lern-held-v47";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
  "./apple-touch-icon.png",
];

/* Jede Datei EINZELN cachen: ein einzelner Fehler (z. B. ein Icon hakt) darf
   nicht – wie bei caches.addAll – das komplette Offline-Caching scheitern lassen. */
async function precache(){
  const c = await caches.open(CACHE);
  await Promise.allSettled(ASSETS.map((u) => c.add(new Request(u, { cache: "reload" }))));
}
/* Sind die wichtigsten Dateien wirklich im Cache? (für die „Offline-bereit"-Meldung) */
async function isReady(){
  const c = await caches.open(CACHE);
  const must = ["./index.html", "./"];
  for (const u of must){ if (await c.match(u)) return true; }
  return false;
}
async function tellClients(){
  if (!(await isReady())) return;
  const cs = await self.clients.matchAll({ includeUncontrolled: true });
  cs.forEach((c) => c.postMessage({ type: "offline-ready", version: CACHE }));
}

self.addEventListener("install", (e) => {
  e.waitUntil(precache().then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
      .then(() => tellClients())
  );
});

/* Die App kann aktiv nachfragen, ob alles offline-bereit ist. */
self.addEventListener("message", (e) => {
  if (e.data === "are-you-ready") e.waitUntil(tellClients());
});

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then((hit) => {
      if (hit) return hit;
      return fetch(e.request)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(e.request, copy)).catch(() => {});
          return res;
        })
        .catch(() => caches.match("./index.html")); // Fallback für Navigation offline
    })
  );
});
