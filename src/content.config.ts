import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Ein Projekt = eine Markdown-Datei pro Sprache:
 *   src/content/projects/de/meedup.md
 *   src/content/projects/en/meedup.md
 *
 * Beide teilen sich denselben `slug`. Fehlt eine Übersetzung, wird das
 * Projekt in dieser Sprache schlicht nicht angezeigt, und nichts bricht.
 */
const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/[^_]*.md' }),
  schema: z.object({
    /** Gemeinsame Kennung über beide Sprachen hinweg. Bildet die URL.
     *  Bewusst nicht `slug` genannt: dieses Feld beansprucht der Glob-Loader für die Eintrags-Id. */
    key: z.string(),
    lang: z.enum(['de', 'en']),
    title: z.string(),
    /** Bestimmt, in welcher Sektion das Projekt erscheint. */
    discipline: z.enum(['software', 'research', 'design']),
    /** Als Text, damit auch "2023–2025" möglich ist. */
    year: z.string(),
    /** Deine Rolle in einem knappen Ausdruck, z. B. "Konzept, Design & Entwicklung". */
    role: z.string(),
    /** Ein bis zwei Sätze für die Übersicht und die Vorschau beim Überfahren. */
    summary: z.string(),
    status: z.enum(['live', 'wip', 'archived', 'concept']).default('live'),
    /** Kleiner = weiter oben. Gleiche Werte werden nach Jahr sortiert. */
    order: z.number().default(100),
    /** Öffentliche Adresse des Projekts, falls vorhanden. */
    externalUrl: z.string().url().optional(),
    /** Repository, PDF oder Video, je nach Disziplin. */
    secondaryUrl: z.string().url().optional(),
    secondaryLabel: z.string().optional(),
    /** Pfad unter /public, z. B. "/work/meedup.jpg". Fehlt es, erscheint eine typografische Vorschau. */
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    stack: z.array(z.string()).default([]),
    /**
     * Schaltet statt der Standard-Projektseite ein eigenes Layout frei.
     * Nur für Arbeiten, die mehr als Fließtext brauchen, etwa eine Studie mit
     * eigenen Diagrammen. Der Fließtext der Datei wird dann nicht gerendert.
     */
    feature: z.enum(['meedup', 'ecm-kampagnen', 'vectra-h2', 'periorbital-week']).optional(),
    /** Auf true setzen, um ein Projekt zu verstecken, ohne es zu löschen. */
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
