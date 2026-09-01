import type { StudyContent } from './study-types';
import { bewerbungstracker } from './bewerbungstracker';
import { ecmKampagnen } from './ecm-kampagnen';
import { mapsScout } from './maps-scout';
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
  bewerbungstracker,
  'ecm-kampagnen': ecmKampagnen,
  'maps-scout': mapsScout,
  meedup,
  'vectra-h2': vectraStudy,
  zayne,
  'periorbital-week': weekStudy,
} satisfies Record<string, Record<Locale, StudyContent>>;

export type StudyKey = keyof typeof studies;
