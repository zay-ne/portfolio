---
key: maps-scout
lang: de
title: "Maps Scout"
discipline: software
year: "2025 – 2026"
role: "Konzept und Entwicklung"
summary: "Lokale Web-App zur Marktanalyse. Sucht Unternehmen in einer Region, filtert nach Branche, Bewertung und Website und stellt die Treffer als Kacheln dar."
status: wip
order: 40
secondaryUrl: https://github.com/zay-ne/maps-scout
secondaryLabel: "Quellcode"
# cover: "/work/maps-scout.jpg"  # optional, ohne Bild erscheint eine typografische Vorschau
stack: ["Python", "FastAPI", "SQLite", "HTML/CSS/JS"]
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

TODO abwägen: Das Werkzeug greift auf öffentlich sichtbare Google-Maps-Daten zu, was den dortigen Nutzungsbedingungen widerspricht. Das steht so auch in der Projekt-Liesmich. Überleg dir, ob du das Projekt öffentlich zeigen willst, und wenn ja, ob dieser Hinweis mit auf die Seite gehört.
