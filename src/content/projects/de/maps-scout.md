---
key: maps-scout
lang: de
title: "Maps Scout"
discipline: software
year: "seit 2025"
role: "Konzept und Entwicklung"
summary: "Lokale Web-App zur Marktanalyse. Sucht Unternehmen in einer Region, filtert nach Branche, Bewertung und Website und stellt die Treffer als Kacheln dar."
status: beta
order: 40
secondaryUrl: https://github.com/zay-ne/maps-scout
secondaryLabel: "Quellcode"
# cover: "/work/maps-scout.jpg"  # optional, ohne Bild erscheint eine typografische Vorschau
stack: ["Python", "FastAPI", "SQLite", "HTML/CSS/JS"]
feature: maps-scout
draft: false
---

## Kontext

Marktanalyse für eine Region beginnt fast immer gleich: Wer ist hier tätig, wie sichtbar sind die Betriebe, und wo fehlt Digitales offensichtlich? Diese Recherche von Hand zu machen kostet Stunden und liefert am Ende eine Tabelle, die niemand mehr anfasst.

## Aufgabe

Ein Werkzeug, das diese Recherche bündelt: Suche nach Region und Branche, Filter nach Bewertung und Website, Kontaktdaten übersichtlich beieinander.

## Vorgehen

- Backend mit FastAPI, Datenhaltung lokal in SQLite. Es gibt keine gemeinsame Instanz, jede Person betreibt ihre eigene.
- Frontend bewusst ohne Build-Werkzeug: reines HTML, CSS und JavaScript.
- Geokodierung und Ortsvorschläge über OpenStreetMap und Photon.
- Lange laufende Suchen als Hintergrundjobs, damit die Oberfläche bedienbar bleibt.

## Ergebnis

Läuft lokal und wird weiterentwickelt.

Hinweis: Der Fließtext dieser Datei wird nicht gerendert, die Seite kommt aus `src/data/maps-scout.ts`. Die Abwägung zu den Google-Nutzungsbedingungen steht dort im Abschnitt „Grenzen, die dazugehören“.
