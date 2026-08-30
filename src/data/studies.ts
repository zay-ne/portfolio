import type { StudyContent } from './study-types';
import { vectraStudy } from './vectra-study';
import { weekStudy } from './week-study';
import type { Locale } from '../consts';

/**
 * Alle Arbeiten mit eigener Studienseite. Der Schlüssel entspricht dem Feld
 * `feature` im Frontmatter der Projektdatei.
 */
export const studies = {
  'vectra-h2': vectraStudy,
  'periorbital-week': weekStudy,
} satisfies Record<string, Record<Locale, StudyContent>>;

export type StudyKey = keyof typeof studies;
