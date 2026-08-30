// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

/**
 * Entfernt Absätze, Listenpunkte und dadurch leer gewordene Überschriften,
 * die nur einen TODO-Vermerk tragen. Die Vermerke bleiben in den
 * Markdown-Dateien stehen, erscheinen aber nicht auf der Website.
 *
 * Damit kann die Seite live gehen, ohne dass Besucher Notizen an mich lesen.
 * Sobald ein Abschnitt echten Inhalt bekommt, erscheint er automatisch.
 */
function dropTodoNotes() {
  const textOf = (node) => {
    if (node.type === 'text') return node.value;
    if (Array.isArray(node.children)) return node.children.map(textOf).join('');
    return '';
  };
  const isTodo = (node) => textOf(node).trimStart().toUpperCase().startsWith('TODO');
  const HEADINGS = new Set(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']);

  return (tree) => {
    const kept = [];
    for (const node of tree.children) {
      if (node.type !== 'element') {
        kept.push(node);
        continue;
      }
      if (node.tagName === 'ul' || node.tagName === 'ol') {
        node.children = node.children.filter((li) => li.type !== 'element' || !isTodo(li));
        if (node.children.some((c) => c.type === 'element')) kept.push(node);
        continue;
      }
      if (!isTodo(node)) kept.push(node);
    }

    // Eine Überschrift, unter der nichts mehr steht, fällt mit weg.
    tree.children = kept.filter((node, i) => {
      if (node.type !== 'element' || !HEADINGS.has(node.tagName)) return true;
      for (let j = i + 1; j < kept.length; j++) {
        const next = kept[j];
        if (next.type !== 'element') continue;
        if (HEADINGS.has(next.tagName)) return false;
        return true;
      }
      return false;
    });
  };
}
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://schedisamet.de',

  i18n: {
    locales: ['de', 'en'],
    defaultLocale: 'de',
    routing: {
      // Deutsch liegt auf "/", Englisch auf "/en/".
      prefixDefaultLocale: false,
    },
  },

  // Schriften werden zur Buildzeit heruntergeladen und selbst ausgeliefert:
  // keine Anfrage an Google im Browser, kein Aufblitzen der Ersatzschrift.
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Archivo',
      cssVariable: '--font-archivo',
      weights: ['100 900'],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      display: 'swap',
      fallbacks: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'JetBrains Mono',
      cssVariable: '--font-jetbrains',
      weights: ['400 500'],
      subsets: ['latin', 'latin-ext'],
      display: 'swap',
      fallbacks: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
    },
  ],

  integrations: [
    sitemap({
      // Die Sitemap trägt für jede Seite die andere Sprachfassung ein,
      // damit Suchmaschinen die Paare erkennen.
      i18n: {
        defaultLocale: 'de',
        locales: { de: 'de-DE', en: 'en-GB' },
      },
      // Rechtstexte und Fehlerseite gehören nicht in den Index.
      filter: (page) => !/\/(impressum|datenschutz|imprint|privacy)\/?$/.test(page),
    }),
  ],

  markdown: {
    rehypePlugins: [dropTodoNotes],
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
