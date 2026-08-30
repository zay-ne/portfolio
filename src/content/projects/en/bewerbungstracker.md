---
key: bewerbungstracker
lang: en
title: "Application Tracker"
discipline: software
year: "2025 – 2026"
role: "Concept, design and engineering"
summary: "A tool that makes a job search visible. A status history per application and a Sankey diagram showing where applications actually end."
status: live
order: 30
externalUrl: https://bewerbungen-demo.bewerbungs-tracker.workers.dev
secondaryUrl: https://github.com/zay-ne/bewerbungs-tracker
secondaryLabel: "Source code"
# cover: "/work/bewerbungstracker.jpg"  # optional, ohne Bild erscheint eine typografische Vorschau
stack: ["Cloudflare Workers", "JavaScript", "Web und macOS"]
draft: false
---

## Context

A job search quickly produces dozens of parallel threads: posting found, documents adapted, sent, followed up, interviewed, answered. A spreadsheet copes for a while, but it never shows where applications actually stall.

## Brief

A tool that stores not just a status but the whole history: planned, applied, first through third interview, offer, and finally accepted, rejected, no answer or withdrawn.

## Approach

- Process instead of a status field. Every application carries an editable history, so a late rejection does not erase what came before.
- A Sankey diagram as the central view. It shows exactly where the funnel breaks.
- Four languages including Arabic with right to left layout. Light and dark following the system setting.
- From a 320 pixel phone to a large display without horizontal scrolling.
- Shipped as a Cloudflare Worker, plus a standalone demo build with no accounts and no stored data.

## Outcome

In daily personal use. The demo runs without sign in on sample data, and the source is open.

TODO: Add how many applications now run through it and what the analysis changed about your approach.
