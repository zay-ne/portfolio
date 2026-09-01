---
key: maps-scout
lang: en
title: "Maps Scout"
discipline: software
year: "2025 – 2026"
role: "Concept and engineering"
summary: "A local web app for market research. Finds businesses in a region, filters by sector, rating and website presence, and lays the results out as cards."
status: wip
order: 40
secondaryUrl: https://github.com/zay-ne/maps-scout
secondaryLabel: "Source code"
# cover: "/work/maps-scout.jpg"  # optional, ohne Bild erscheint eine typografische Vorschau
stack: ["Python", "FastAPI", "SQLite", "HTML/CSS/JS"]
feature: maps-scout
draft: false
---

## Context

Market research for a region almost always starts the same way: who operates here, how visible are they, and where is digital presence obviously missing? Doing that by hand costs hours and ends in a spreadsheet nobody opens again.

## Brief

A tool that bundles that research: search by region and sector, filter by rating and website presence, contact details laid out together.

## Approach

- FastAPI backend with local SQLite storage. There is no shared instance, everyone runs their own.
- Frontend deliberately without a build tool: plain HTML, CSS and JavaScript.
- Geocoding and place suggestions via OpenStreetMap and Photon.
- Long running searches as background jobs so the interface stays usable.

## Outcome

Runs locally and is still being developed.

Note: the body of this file is not rendered, the page comes from `src/data/maps-scout.ts`. The weighing of the Google terms of use sits there under “Limits that come with it”.
