# 🦁 Lern-Held

Kleine, bunte **Offline-Lernspiele für Kindergartenkinder** – alles in **einer einzigen HTML-Datei**, ohne Werbung, ohne Konto, ohne Internet.

👉 **Zum Spielen:** https://dallmi.github.io/lern-held/

---

## Was ist das?

Lern-Held ist eine Spielesammlung, die komplett im Browser läuft und sich als App auf den Home-Bildschirm legen lässt (PWA – funktioniert danach offline). Alles ist auf kleine Kinder zugeschnitten:

- große Tipp-Flächen 👆
- sofortiges Erfolgserlebnis: Sterne ⭐ + Konfetti 🎉
- gesprochene Anweisungen (deutsch & englisch) 🔊
- falsche Antworten sind nie schlimm – nur ein freundliches „Versuch's nochmal!"

Ursprünglich gebaut für meinen 4-jährigen Sohn.

## Die Spiele

**Buchstaben & Lesen**
- 🔤 **Buchstaben-Detektiv** – Womit fängt das Tier an?
- 🎵 **Reim-Held** – Was reimt sich?
- ✍️ **Wörter schreiben** – den eigenen Namen & die der Freunde mit dem Finger nachschreiben
- 📖 **Lese-Held** – Wort lesen, passendes Bild finden

**Zahlen & Logik**
- 🔢 **Zähl-Held** – Tiere zählen
- ➕ **Plus-Held** / ➖ **Minus-Held** – erstes Rechnen mit Objekten zum Mitzählen
- ✏️ **Zahlen malen** – Ziffern mit dem Finger nachfahren
- 🧩 **Muster-Held** – Wie geht das Muster weiter?

**Welt & Sprache**
- 🏳️ **Flaggen-Held** – 42 Länderflaggen als SVG
- 🗺️ **Hauptstadt-Held** – 34 Hauptstädte, jede mit einer handgezeichneten Sehenswürdigkeit (Eiffelturm, Big Ben, Basilius-Kathedrale, Hallgrímskirkja, Drache von Ljubljana …)
- 🇬🇧 **Englisch-Held** – englisches Wort hören, Bild finden
- 🔶 **Farben & Formen** – auf Englisch („Find the red star!")

**Spaß & Gedächtnis**
- 🐮 **Tier-Geräusche** – Welches Tier macht „Muh"?
- 🃏 **Memory** – Tier-Paare finden
- 🎨 **Tiere anmalen** – Malen nach Zahlen mit Dschungel-Tieren
- 🔍 **Such-Held** – „Find it in English!" – das gesuchte Bild im Wimmelbild antippen

**Labyrinthe & Geschick**
- 🌀 **Labyrinth-Held** – das Tier mit dem Finger durchs Labyrinth zum Futter führen
- 🧭 **Großes Labyrinth** – gleiche Steuerung, aber deutlich größere, verschlungenere Gitter (4–8 Felder)
- 🕹️ **Irrgarten** – das Tier frei mit Pfeil-Tasten oder Wischen steuern; echte Sackgassen, und in späteren Levels mehrere Futter-Stücke einsammeln

**Belohnung**
- 🦁 **Sammel-Album** – jede gewonnene Runde schenkt ein Tier, das nach und nach einen Zoo/Dschungel füllt (lokal gespeichert).

## Technik-Highlights

- **100 % offline**, eine einzige Datei, **keine Frameworks, keine Abhängigkeiten**
- Flaggen & Sehenswürdigkeiten sind **handgezeichnetes SVG** – keine externen Bilder
- Töne über die **Web Audio API**, gesprochene Anweisungen über die **Web Speech API**
- Buchstaben & Zahlen werden mit dem Finger auf einem **Canvas** nachgefahren
- läuft auf iPhone, iPad, Android und am Desktop; als **PWA installierbar**
- **datenschutzfreundlich:** nichts verlässt das Gerät (nur Ton-Einstellung & Sammlung liegen im `localStorage`)

## Lokal ausprobieren

`index.html` einfach im Browser öffnen – oder, damit auch der Service-Worker greift, über einen kleinen Webserver:

```bash
python3 -m http.server 8000
# dann http://localhost:8000 öffnen
```

## Als App installieren

Die Live-Seite im Browser öffnen → **„Zum Home-Bildschirm hinzufügen"**. Danach startet Lern-Held wie eine normale App und läuft ohne Internet.

## Repo-Inhalt

| Datei | Zweck |
|---|---|
| `index.html` | die komplette App (eine Datei) |
| `sw.js` | Service-Worker (cache-first, macht die App offline-fähig) |
| `manifest.webmanifest` | PWA-Manifest |
| `icon-192.png`, `icon-512.png`, `apple-touch-icon.png` | App-Icons |

> **Beim Aktualisieren:** Wenn `index.html` geändert wird, muss die `CACHE`-Version in `sw.js` erhöht werden – sonst holen bereits installierte Geräte die neue Fassung nicht.

## Hinweis

Privates Lernprojekt, mit viel Liebe gebaut. Gerne zum Anschauen und Inspirieren. 🙂
