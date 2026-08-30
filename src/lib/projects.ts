import { getCollection, type CollectionEntry } from 'astro:content';
import { DISCIPLINES, type Discipline, type Locale } from '../consts';

export type Project = CollectionEntry<'projects'>;

/**
 * Alle veröffentlichten Projekte einer Sprache in genau der Reihenfolge, in der
 * sie auf der Startseite erscheinen: erst nach Disziplin (Reihenfolge aus
 * consts.ts), darin nach `order`, bei Gleichstand alphabetisch.
 *
 * Diese Reihenfolge trägt auch die "Nächstes Projekt"-Verkettung, sonst
 * springt sie quer durch die Disziplinen, weil `order` je Sektion neu zählt.
 */
export async function getProjects(locale: Locale): Promise<Project[]> {
  const entries = await getCollection('projects', ({ data }) => data.lang === locale && !data.draft);
  const rank = (d: Discipline) => DISCIPLINES.indexOf(d);
  return entries.sort(
    (a, b) =>
      rank(a.data.discipline) - rank(b.data.discipline) ||
      a.data.order - b.data.order ||
      a.data.title.localeCompare(b.data.title, locale),
  );
}

/** Dieselben Projekte, gruppiert nach Disziplin, in der Reihenfolge aus consts.ts. */
export async function getProjectsByDiscipline(
  locale: Locale,
): Promise<Array<{ discipline: Discipline; projects: Project[] }>> {
  const all = await getProjects(locale);
  return DISCIPLINES.map((discipline) => ({
    discipline,
    projects: all.filter((p) => p.data.discipline === discipline),
  }));
}

/**
 * Nachbarprojekt für die "Nächstes Projekt"-Verkettung am Ende einer Detailseite.
 * Läuft im Kreis, damit das letzte Projekt nicht in einer Sackgasse endet.
 */
export function nextProject(all: Project[], current: Project): Project | undefined {
  if (all.length < 2) return undefined;
  const i = all.findIndex((p) => p.data.key === current.data.key);
  return all[(i + 1) % all.length];
}
