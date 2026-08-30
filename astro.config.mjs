// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // TODO: durch die echte Domain ersetzen — steuert Canonical-URLs, Sitemap und OG-Tags.
  site: 'https://example.com',

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

  vite: {
    plugins: [tailwindcss()],
  },
});
