/**
 * Zentrale Stammdaten der Seite.
 *
 * Was hier mit TODO markiert ist, erscheint so auf der Website, bis du es
 * ersetzt. Nichts davon muss an anderer Stelle nachgezogen werden, jede
 * Komponente liest aus dieser Datei.
 */

export const SITE = {
  name: 'Schedi Samet',
  domain: 'schedisamet.de',
  email: 'sametschedi@gmail.com',
  location: {
    de: 'Göttingen · Mainz',
    en: 'Göttingen · Mainz',
  },
  timezone: 'Europe/Berlin',
} as const;

export type Locale = 'de' | 'en';
export const LOCALES: readonly Locale[] = ['de', 'en'] as const;
export const DEFAULT_LOCALE: Locale = 'de';

/** Profillinks im Kontaktbereich und in der Fußzeile. */
export const SOCIALS = [
  {
    key: 'linkedin',
    label: 'LinkedIn',
    handle: '/in/schedi-samet',
    href: 'https://www.linkedin.com/in/schedi-samet-804ba6250/',
  },
  { key: 'github', label: 'GitHub', handle: '@zay-ne', href: 'https://github.com/zay-ne' },
] as const;

/**
 * Die Disziplinen. Die Reihenfolge hier bestimmt die Reihenfolge der
 * aufklappbaren Sektionen auf der Startseite. Ein neues Projekt braucht nur
 * einen dieser Schlüssel im Frontmatter.
 */
export const DISCIPLINES = ['venture', 'software', 'research', 'design'] as const;
export type Discipline = (typeof DISCIPLINES)[number];
