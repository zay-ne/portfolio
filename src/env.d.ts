/// <reference types="astro/client" />

interface Window {
  /** Vom Reveal-Skript gesetzt; das Sicherheitsnetz im Seitenkopf prüft es. */
  __revealsReady?: boolean;
}
