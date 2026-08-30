import { DEFAULT_LOCALE, LOCALES, type Locale } from '../consts';
import { ui } from './ui';

/** Liest die Sprache aus dem Pfad. Alles ohne /en/-Präfix ist Deutsch. */
export function getLocale(url: URL): Locale {
  const segment = url.pathname.split('/').filter(Boolean)[0];
  return LOCALES.includes(segment as Locale) ? (segment as Locale) : DEFAULT_LOCALE;
}

/** Die Oberflächentexte der aktiven Sprache. */
export function t(locale: Locale) {
  return ui[locale];
}

/**
 * Sprechende URLs je Sprache. Deutsche Besucher sehen /lebenslauf,
 * englische /en/cv. Anker bleiben bewusst sprachneutral, weil sie nie
 * als Text auftauchen.
 */
export const routes = {
  de: {
    home: '/',
    cv: '/lebenslauf',
    work: '/arbeit',
    imprint: '/impressum',
    privacy: '/datenschutz',
  },
  en: {
    home: '/en/',
    cv: '/en/cv',
    work: '/en/work',
    imprint: '/en/imprint',
    privacy: '/en/privacy',
  },
} as const satisfies Record<Locale, Record<string, string>>;

export type RouteKey = keyof (typeof routes)['de'];

/** route('cv', 'en') -> '/en/cv' */
export function route(key: RouteKey, locale: Locale): string {
  return routes[locale][key];
}

/** Detailseite eines Projekts in der gewünschten Sprache. */
export function projectPath(slug: string, locale: Locale): string {
  return `${routes[locale].work}/${slug}`;
}

/** Die andere Sprache, für den Umschalter im Kopf. */
export function otherLocale(locale: Locale): Locale {
  return locale === 'de' ? 'en' : 'de';
}

/** Anker der Startseiten-Sektionen. Sprachneutral, damit Links stabil bleiben. */
export const anchors = {
  work: 'work',
  about: 'about',
  cv: 'cv',
  contact: 'contact',
} as const;

/** Datumsformat je Sprache, z. B. für "Stand: August 2026". */
export function formatMonthYear(iso: string, locale: Locale): string {
  const date = new Date(iso);
  return new Intl.DateTimeFormat(locale === 'de' ? 'de-DE' : 'en-GB', {
    month: 'long',
    year: 'numeric',
  }).format(date);
}
