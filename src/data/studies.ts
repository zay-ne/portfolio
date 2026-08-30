import type { StudyContent } from './study-types';
import { meedup } from './meedup';
import { vectraStudy } from './vectra-study';
import { weekStudy } from './week-study';
import type { Locale } from '../consts';

/**
 * Alle Arbeiten mit eigener, ausführlicher Seite. Der Schlüssel entspricht dem Feld
 * `feature` im Frontmatter der Projektdatei.
 */
export const studies = {
  meedup,
  'vectra-h2': vectraStudy,
  'periorbital-week': weekStudy,
} satisfies Record<string, Record<Locale, StudyContent>>;

export type StudyKey = keyof typeof studies;
