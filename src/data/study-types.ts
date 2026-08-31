import type { ImageMetadata } from 'astro';

/**
 * Gemeinsame Struktur aller ausführlichen Seiten.
 *
 * Eine Studie beschreibt ihre Abschnitte als Liste. Jeder Abschnitt kann eine
 * Grafik tragen, die über `kind` ausgewählt wird. Dadurch teilen sich beide
 * Studien ein Layout, obwohl sie unterschiedliche Grafiken in unterschiedlicher
 * Reihenfolge zeigen.
 */

export interface StudyStat {
  value: string;
  label: string;
}

export interface BarDatum {
  label: string;
  value: number;
  sd?: number;
  accent?: boolean;
}

export interface IccDatum {
  label: string;
  value: number;
  note?: string;
}

export interface ModeInfo {
  id: string;
  coverage: string;
  deviation: string;
  icc: string;
  rationale: string;
  recommended?: boolean;
}

/** Ein Messpunkt im Wochenverlauf. */
export interface TimelinePoint {
  label: string;
  value: number;
}

/** Ein waagerechtes Band, etwa ein Konfidenz- oder Vorhersageintervall. */
export interface TimelineBand {
  label: string;
  from: number;
  to: number;
  /** Kräftiger gezeichnet, für das engere der beiden Intervalle. */
  strong?: boolean;
}

/** Eine große Kennzahl mit Beschriftung und optionaler Quelle. */
export interface FigureItem {
  value: string;
  label: string;
  source?: string;
}

/** Ein Schritt eines Ablaufs, jeweils mit dem Nutzen für die Gegenseite. */
export interface ProcessStep {
  title: string;
  body: string;
  benefit: string;
}

/** Eine gezeigte Arbeit mit ihren Angaben. */
export interface GalleryWork {
  image: ImageMetadata;
  alt: string;
  title: string;
  meta: { term: string; value: string }[];
}

export type StudyVisual =
  | { kind: 'modes'; caption: string; labels: Record<'A' | 'B' | 'C' | 'D' | 'E', string>; recommendedNote: string }
  | { kind: 'bars'; title: string; unit: string; caption: string; bars: BarDatum[]; digits?: number }
  | { kind: 'icc'; title: string; caption: string; bands: { label: string; from: number; to: number }[]; items: IccDatum[] }
  | { kind: 'table'; columns: string[]; rows: ModeInfo[]; recommendedNote: string }
  | { kind: 'figures'; caption?: string; items: FigureItem[] }
  | { kind: 'gallery'; caption?: string; works: GalleryWork[] }
  | {
      kind: 'slides';
      title: string;
      caption?: string;
      slides: { image: ImageMetadata; alt: string }[];
    }
  | { kind: 'cards'; items: { title: string; body: string }[] }
  | {
      kind: 'process';
      stepLabel: string;
      benefitLabel: string;
      caption?: string;
      steps: ProcessStep[];
    }
  | {
      kind: 'timeline';
      title: string;
      unit: string;
      caption: string;
      points: TimelinePoint[];
      bands: TimelineBand[];
      /** Klinische Schwelle, wird als gestrichelte Linie gezeichnet. */
      threshold: number;
      thresholdLabel: string;
      baselineLabel: string;
    };

export interface StudySection {
  title: string;
  body: string[];
  visual?: StudyVisual;
  /** Grafik über die volle Breite statt eingerückt unter dem Text. */
  wide?: boolean;
}

export interface StudyPerson {
  initials: string;
  /** Entfällt, wenn das Manuskript keine Beitragsangaben enthält. */
  role?: string;
  self?: boolean;
}

export interface StudyContent {
  eyebrow: string;
  headline: string[];
  lead: string;
  meta: { term: string; value: string }[];
  stats: { label: string; items: StudyStat[] };
  sections: StudySection[];
  /** Entfällt, wenn eine Arbeit keine Mitwirkenden ausweist. */
  credits?: {
    title: string;
    body: string[];
    people: StudyPerson[];
    statusLabel: string;
    status: string;
  };
}
