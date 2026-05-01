# 🎄 Adventskalender

Ein wiederverwendbarer digitaler Adventskalender – nur HTML, CSS und JavaScript. Kein Framework, kein Backend.

## Features

- 24 Türchen, die täglich ab dem 1. Dezember freigeschaltet werden
- Außerhalb des Dezembers: freundlicher Countdown-Bildschirm
- Geöffnete Türchen bleiben über `localStorage` gespeichert (auch nach Reload)
- `localStorage` ist jahresgebunden – Türchen werden jedes Jahr automatisch zurückgesetzt
- Jedes Türchen zeigt eine eigene, gemütliche Weihnachtsgeschichte
- 3D-Flip-Animation beim Öffnen
- Fallender Schnee & funkelnde Sterne im Hintergrund
- Partikeleffekt beim Öffnen eines neuen Türchens
- Fehlermeldung (Toast + Schüttel-Animation) bei gesperrten Türchen
- Responsiv für Desktop und Mobile

## Projektstruktur

```
advent-calendar/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── script.js     ← Kalender-Logik, Datum, localStorage, Animationen
│   └── stories.js    ← 24 Geschichten & Gedichte
├── assets/
│   └── open.wav      ← (optional) Sound beim Öffnen
└── README.md
```

## Verwendung

1. Ordner herunterladen oder klonen
2. `index.html` im Browser öffnen – fertig

## Admin-Modus

Alle Türchen unabhängig vom Datum öffnen:

```
index.html?admin
```

- Nützlich zum Testen oder Vorschauen
- Im Admin-Modus wird **nichts in `localStorage` gespeichert** – alle Türchen starten immer frisch

## Jedes Jahr wiederverwendbar

Der Kalender erkennt automatisch den Monat. Im Dezember wird der Kalender aktiv, in allen anderen Monaten erscheint der Countdown. Die Türchen werden jedes Jahr neu gemischt (deterministisch nach Jahr). Der `localStorage`-Key enthält das aktuelle Jahr (`ac_opened_YYYY`), sodass die Türchen am 1. Dezember jedes Jahr automatisch zurückgesetzt werden – ohne manuellen Eingriff.

## Inhalte anpassen

Alle 24 Geschichten befinden sich in `js/stories.js` – einfach Titel und Text ersetzen.

## Lizenz

MIT License