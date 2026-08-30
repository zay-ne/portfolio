---
key: bewerbungstracker
lang: de
title: "Bewerbungstracker"
discipline: software
year: "2025 – 2026"
role: "Konzept, Gestaltung und Entwicklung"
summary: "Werkzeug, das den eigenen Bewerbungsprozess sichtbar macht. Statusverlauf pro Stelle und ein Sankey-Diagramm, das zeigt, wo Bewerbungen tatsächlich enden."
status: live
order: 30
externalUrl: https://bewerbungen-demo.bewerbungs-tracker.workers.dev
secondaryUrl: https://github.com/zay-ne/bewerbungs-tracker
secondaryLabel: "Quellcode"
# cover: "/work/bewerbungstracker.jpg"  # optional, ohne Bild erscheint eine typografische Vorschau
stack: ["Cloudflare Workers", "JavaScript", "Web und macOS"]
draft: false
---

## Kontext

Eine Stellensuche erzeugt schnell Dutzende paralleler Vorgänge: Anzeige gefunden, Unterlagen angepasst, abgeschickt, nachgefasst, Gespräch, Rückmeldung. Eine Tabelle hält das eine Weile aus, aber sie zeigt nie, wo Bewerbungen tatsächlich versanden.

## Aufgabe

Ein Werkzeug, das nicht nur einen Status speichert, sondern den ganzen Verlauf: geplant, beworben, erstes bis drittes Gespräch, Angebot, und am Ende Zusage, Absage, keine Antwort oder zurückgezogen.

## Vorgehen

- Prozess statt Statusfeld. Jede Bewerbung führt einen nachträglich editierbaren Verlauf, damit eine späte Absage die Vorgeschichte nicht löscht.
- Ein Sankey-Diagramm als zentrale Auswertung. Es macht sichtbar, an welcher Stelle der Trichter bricht.
- Vier Sprachen, darunter Arabisch mit Rechts-nach-links-Satz. Hell und dunkel nach Systemeinstellung.
- Vom 320-Pixel-Handy bis zum großen Bildschirm ohne seitliches Scrollen.
- Auslieferung als Cloudflare Worker, dazu eine eigenständige Demo-Fassung ohne Konten und ohne Datenablage.

## Ergebnis

Im täglichen Eigengebrauch. Die Demo läuft ohne Anmeldung mit Beispieldaten, der Quellcode ist offen.

TODO: Ergänzen, wie viele Bewerbungen inzwischen darüber laufen und was sich durch die Auswertung an deinem Vorgehen geändert hat.
