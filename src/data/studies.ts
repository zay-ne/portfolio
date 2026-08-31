import type { StudyContent } from './study-types';
import { ecmKampagnen } from './ecm-kampagnen';
import { meedup } from './meedup';
import { vectraStudy } from './vectra-study';
import { zayne } from './zayne';
import { weekStudy } from './week-study';
import type { Locale } from '../consts';

/**
 * Alle Arbeiten mit eigener, ausführlicher Seite. Der Schlüssel entspricht dem Feld
 * `feature` im Frontmatter der Projektdatei.
 */
export const studies = {
  'ecm-kampagnen': ecmKampagnen,
  meedup,
  'vectra-h2': vectraStudy,
  zayne,
  'periorbital-week': weekStudy,
} satisfies Record<string, Record<Locale, StudyContent>>;

export type StudyKey = keyof typeof studies;
