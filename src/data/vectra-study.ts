/**
 * Inhalte der Vectra-H2-Studie für die Detailseite unter /arbeit/vectra-h2.
 *
 * Alle Zahlen stammen aus dem eingereichten Manuskript (Frontiers in Medicine,
 * Fassung V9) und sind dort belegt. Nichts hier ist geschätzt oder ergänzt.
 *
 * Die Namen der Mitwirkenden stehen bewusst nur als Initialen.
 */

export interface StudyStat {
  value: string;
  label: string;
}

export interface BarDatum {
  label: string;
  value: number;
  sd?: number;
  note?: string;
  /** Hervorgehoben dargestellt, etwa für den empfohlenen Modus. */
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

export interface StudySection {
  index: string;
  title: string;
  body: string[];
}

export interface StudyContent {
  eyebrow: string;
  headline: string[];
  lead: string;
  meta: { term: string; value: string }[];

  stats: { label: string; items: StudyStat[] };

  setup: StudySection;
  modes: {
    section: StudySection;
    caption: string;
    labels: Record<'A' | 'B' | 'C' | 'D' | 'E', string>;
  };
  distance: {
    section: StudySection;
    chartTitle: string;
    chartUnit: string;
    chartCaption: string;
    bars: BarDatum[];
  };
  volume: {
    section: StudySection;
    chartTitle: string;
    chartUnit: string;
    chartCaption: string;
    bars: BarDatum[];
  };
  reliability: {
    section: StudySection;
    chartTitle: string;
    chartCaption: string;
    bands: { label: string; from: number; to: number }[];
    items: IccDatum[];
  };
  tradeoff: {
    section: StudySection;
    columns: string[];
    rows: ModeInfo[];
    recommendedNote: string;
  };
  conclusion: StudySection;
  credits: {
    section: StudySection;
    roleLabel: string;
    people: { initials: string; role: string; self?: boolean }[];
    statusLabel: string;
    status: string;
  };
}

/* Die Messwerte sind sprachunabhängig, deshalb stehen sie nur einmal hier. */
const DISTANCE_BARS: Omit<BarDatum, 'label'>[] = [
  { value: 0.018, sd: 0.013 },
  { value: 0.021, sd: 0.016 },
  { value: 0.019, sd: 0.016 },
  { value: 0.018, sd: 0.015 },
  { value: 0.019, sd: 0.015, accent: true },
];

const VOLUME_BARS: Omit<BarDatum, 'label'>[] = [
  { value: 0.037, sd: 0.045 },
  { value: 0.041, sd: 0.06 },
  { value: 0.057, sd: 0.072, accent: true },
  { value: 0.099, sd: 0.095 },
];

export const vectraStudy: Record<'de' | 'en', StudyContent> = {
  de: {
    eyebrow: 'Forschung · Universitätsmedizin Göttingen',
    headline: ['Wie genau misst', 'ein 3D-Scanner', 'die Augenhöhle?'],
    lead: 'Das VECTRA H2 vermisst Gesichtsoberflächen berührungslos in Sekunden. Für die Augenheilkunde ist entscheidend, ob es auch sehr kleine Volumenänderungen zuverlässig erfasst. Diese Studie prüft das unter kontrollierten Bedingungen, an denen sich nichts bewegt.',
    meta: [
      { term: 'Rolle', value: 'Studienleitung, Erstautor' },
      { term: 'Ort', value: 'Universitätsmedizin Göttingen' },
      { term: 'Zeitraum', value: '2023 bis heute' },
      { term: 'Status', value: 'Bei Frontiers in Medicine eingereicht' },
    ],

    stats: {
      label: 'Umfang',
      items: [
        { value: '2', label: 'Dummy-Köpfe' },
        { value: '5', label: 'Körperspender' },
        { value: '800', label: 'Distanzmessungen' },
        { value: '480', label: 'Volumenmessungen' },
      ],
    },

    setup: {
      index: '01',
      title: 'Aufbau',
      body: [
        'Lebende Menschen bewegen sich. Sie atmen, blinzeln und verziehen das Gesicht, und jede dieser Bewegungen landet als Messfehler im Ergebnis. Wer wissen will, wie genau ein Gerät wirklich misst, muss diese Störgrößen zuerst ausschließen.',
        'Deshalb wurde an zwei Schaufensterköpfen und an fünf Körperspendern gemessen, nicht an Patientinnen und Patienten. Zwei Beobachter nahmen die Dummys unabhängig voneinander je sechsmal auf, ein dritter Beobachter die Körperspender je viermal. Was danach an Abweichung übrig bleibt, geht auf das Gerät, die Software und die Bedienung zurück, auf sonst nichts.',
      ],
    },

    modes: {
      section: {
        index: '02',
        title: 'Fünf Zuschnitte',
        body: [
          'Ein Volumen misst man nicht am ganzen Gesicht, sondern an einem festgelegten Ausschnitt. Fünf solcher Zuschnitte wurden definiert, von der reinen Unterlidregion bis zu einer großen Fläche über beide Augen und den Nasenrücken hinweg. Je größer die Fläche, desto mehr Angriffsfläche für Fehler.',
        ],
      },
      caption: 'Schematische Darstellung der fünf Messbereiche, nachgezeichnet nach Abbildung 2 des Manuskripts.',
      labels: {
        A: 'Unterlid bis zur unteren Braukante',
        B: 'wie A, medial und lateral erweitert',
        C: 'wie B, zusätzlich die ganze Braue',
        D: 'beide Augen, über den Nasenrücken verbunden',
        E: 'wie D, zusätzlich das Mittelgesicht',
      },
    },

    distance: {
      section: {
        index: '03',
        title: 'Erst die Strecken',
        body: [
          'Vor dem Volumen steht die Strecke. Zwischen 18 anatomischen Landmarken wurden 20 Distanzen definiert und jede fünfmal gemessen, einmal digital am 3D-Modell und einmal von Hand mit dem Messschieber.',
          'Die mittlere Abweichung zwischen beiden Verfahren beträgt 0,019 Millimeter pro Millimeter. Auf eine Strecke von 50 Millimetern gerechnet ist das nicht einmal ein Millimeter. Die Wiederholbarkeit lag bei einem ICC von 0,997 für die digitale und 0,996 für die manuelle Messung.',
        ],
      },
      chartTitle: 'Abweichung digital gegen Messschieber',
      chartUnit: 'mm pro mm',
      chartCaption: 'Mittelwert mit Standardabweichung je Beobachter und Dummy. Tabelle 1 des Manuskripts.',
      bars: [
        { label: 'Beobachter 1, Dummy A', ...DISTANCE_BARS[0] },
        { label: 'Beobachter 1, Dummy B', ...DISTANCE_BARS[1] },
        { label: 'Beobachter 2, Dummy A', ...DISTANCE_BARS[2] },
        { label: 'Beobachter 2, Dummy B', ...DISTANCE_BARS[3] },
        { label: 'Gesamt', ...DISTANCE_BARS[4] },
      ],
    },

    volume: {
      section: {
        index: '04',
        title: 'Dann das Volumen',
        body: [
          'Bei den Körperspendern liegt die mittlere Volumenabweichung über alle Modi bei 0,032 ± 0,113 Millilitern. In 14,1 Prozent der Messungen gab es überhaupt keine Abweichung. Bei den Dummys waren es 8,1 Prozent bei einem Mittelwert von -0,005 ± 0,083 Millilitern.',
          'Der Zusammenhang ist eindeutig: je größer der gemessene Bereich, desto größer die Abweichung. Modus A bleibt bei 0,037 Millilitern, Modus D erreicht 0,099.',
        ],
      },
      chartTitle: 'Absolute Volumenabweichung je Modus',
      chartUnit: 'ml',
      chartCaption: 'Körperspender, Mittelwert mit Standardabweichung. Tabelle 4 des Manuskripts.',
      bars: [
        { label: 'Modus A', ...VOLUME_BARS[0] },
        { label: 'Modus B', ...VOLUME_BARS[1] },
        { label: 'Modus C', ...VOLUME_BARS[2] },
        { label: 'Modus D', ...VOLUME_BARS[3] },
      ],
    },

    reliability: {
      section: {
        index: '05',
        title: 'Der eigentliche Befund',
        body: [
          'Bis hierhin sieht alles hervorragend aus. Der entscheidende Unterschied liegt aber woanders: Wird derselbe Scan zweimal ausgewertet, stimmen die Ergebnisse fast perfekt überein. Wird dagegen zweimal neu fotografiert, fällt die Übereinstimmung deutlich ab.',
          'Am auffälligsten ist die Seitendifferenz bei den Körperspendern. Das linke Auge erreicht einen ICC von 0,83, das rechte nur 0,15. Eine naheliegende, aber ungeprüfte Erklärung ist die Kameraführung eines rechtshändigen Bedieners. Genau diese Asymmetrie, nicht der Mittelwert, begrenzt derzeit den Einsatz für Verlaufskontrollen.',
        ],
      },
      chartTitle: 'Wiederholbarkeit als ICC',
      chartCaption: 'Bewertungsbereiche nach Koo und Li. Werte aus Tabelle 5 und Tabelle 7 des Manuskripts.',
      bands: [
        { label: 'schwach', from: 0, to: 0.5 },
        { label: 'moderat', from: 0.5, to: 0.75 },
        { label: 'stark', from: 0.75, to: 0.9 },
        { label: 'exzellent', from: 0.9, to: 1 },
      ],
      items: [
        { label: 'Dieselbe Aufnahme, erneut ausgewertet', value: 0.984, note: 'Körperspender' },
        { label: 'Dieselbe Aufnahme, erneut ausgewertet', value: 0.99, note: 'Dummys' },
        { label: 'Neue Aufnahme, linkes Auge', value: 0.83, note: 'Körperspender' },
        { label: 'Neue Aufnahme, gemittelt', value: 0.49, note: 'Körperspender' },
        { label: 'Neue Aufnahme, gemittelt', value: 0.411, note: 'Dummys' },
        { label: 'Neue Aufnahme, rechtes Auge', value: 0.15, note: 'Körperspender' },
      ],
    },

    tradeoff: {
      section: {
        index: '06',
        title: 'Die Abwägung',
        body: [
          'Der präziseste Zuschnitt ist nicht automatisch der klinisch nützlichste. Modus B misst am genauesten, lässt aber die Braue außen vor. Für die Lidchirurgie ist genau die relevant.',
        ],
      },
      columns: ['Modus', 'Abdeckung', 'Abweichung', 'ICC links / rechts', 'Klinische Einordnung'],
      rows: [
        {
          id: 'A',
          coverage: 'nur Unterlid, bis zur unteren Braukante',
          deviation: '0,037 ± 0,045 ml',
          icc: '0,869 / 0,009',
          rationale: 'Höchste Präzision, aber ohne Braue. Für Braupathologien kaum brauchbar.',
        },
        {
          id: 'B',
          coverage: 'wie A, medial und lateral erweitert',
          deviation: '0,041 ± 0,060 ml',
          icc: '0,831 / 0,013',
          rationale: 'Beste Gesamtpräzision, schließt die Braue aber weiterhin aus.',
        },
        {
          id: 'C',
          coverage: 'bis zur oberen Braukante, ganze Braue enthalten',
          deviation: '0,057 ± 0,072 ml',
          icc: '0,734 / 0,161',
          rationale: 'Etwas geringere Präzision, aber der einzige Modus, der Braue und Lid gemeinsam erfasst. Empfehlung für die klinische Verlaufskontrolle.',
          recommended: true,
        },
        {
          id: 'D',
          coverage: 'beidseitig, über den Nasenrücken verbunden',
          deviation: '0,099 ± 0,095 ml',
          icc: '0,651 gemeinsam',
          rationale: 'Geringste Präzision. Nur für die beidseitige Betrachtung sinnvoll.',
        },
      ],
      recommendedNote: 'Empfohlener Modus',
    },

    conclusion: {
      index: '07',
      title: 'Was daraus folgt',
      body: [
        'Das VECTRA H2 misst Strecken und Volumina in der Augenregion reproduzierbar, solange innerhalb einer Aufnahme gearbeitet wird. Für die Dokumentation und die Operationsplanung ist es damit brauchbar.',
        'Für Verlaufskontrollen über Wochen und Monate reicht es nach diesem Stand noch nicht, weil zwischen zwei getrennten Aufnahmen zu viel Streuung entsteht. Der nächste Schritt ist deshalb eine Studie an lebenden Patientinnen und Patienten, unter genau den Bedingungen, die hier bewusst ausgeschlossen wurden.',
      ],
    },

    credits: {
      section: {
        index: '08',
        title: 'Beteiligte',
        body: [
          'Die Studie entstand an der Universitätsmedizin Göttingen, in Zusammenarbeit mit der Hochschule für angewandte Wissenschaft und Kunst, dem Institut für Anatomie und Embryologie sowie der Abteilung für Medizinische Statistik. Die Namen der Mitwirkenden stehen hier nur als Initialen.',
        ],
      },
      roleLabel: 'Beitrag',
      people: [
        { initials: 'S. S.', role: 'Konzeption, Messungen an den Dummys, Auswertung, Manuskript', self: true },
        { initials: 'C. C.', role: 'Methodik, Zweitbeobachtung, Supervision' },
        { initials: 'M. S.', role: 'Konzeption, klinische Infrastruktur, Supervision' },
        { initials: 'C. V.', role: 'Konzeption, Zugang zu den Körperspendern' },
        { initials: 'A.-K. S.', role: 'Methodik, Messungen an den Körperspendern' },
        { initials: 'A. L.', role: 'Statistische Analyse und Beratung' },
      ],
      statusLabel: 'Status',
      status: 'Bei Frontiers in Medicine eingereicht, Begutachtung läuft. Ethikvotum der Universitätsmedizin Göttingen liegt vor (21/11/19).',
    },
  },

  en: {
    eyebrow: 'Research · Göttingen University Medical Center',
    headline: ['How precisely does', 'a 3D scanner measure', 'the eye socket?'],
    lead: 'The VECTRA H2 captures facial surfaces without contact in seconds. For ophthalmology the question is whether it also captures very small volume changes reliably. This study tests that under controlled conditions in which nothing moves.',
    meta: [
      { term: 'Role', value: 'Study lead, first author' },
      { term: 'Place', value: 'Göttingen University Medical Center' },
      { term: 'Period', value: '2023 to present' },
      { term: 'Status', value: 'Submitted to Frontiers in Medicine' },
    ],

    stats: {
      label: 'Scale',
      items: [
        { value: '2', label: 'dummy heads' },
        { value: '5', label: 'body donors' },
        { value: '800', label: 'distance measurements' },
        { value: '480', label: 'volume measurements' },
      ],
    },

    setup: {
      index: '01',
      title: 'Setup',
      body: [
        'Living people move. They breathe, blink and pull faces, and every one of those movements lands in the result as measurement error. To find out how precisely a device actually measures, those confounders have to be removed first.',
        'So the measurements were taken on two mannequin heads and five body donors, not on patients. Two observers captured each dummy six times independently, a third observer captured each body donor four times. Whatever deviation remains comes from the device, the software and the operator, and from nothing else.',
      ],
    },

    modes: {
      section: {
        index: '02',
        title: 'Five outlines',
        body: [
          'Volume is not measured across a whole face but within a defined outline. Five such outlines were specified, from the lower eyelid alone to a large area spanning both eyes and the bridge of the nose. The larger the area, the more surface there is for error to accumulate.',
        ],
      },
      caption: 'Schematic of the five measurement regions, redrawn from Figure 2 of the manuscript.',
      labels: {
        A: 'lower eyelid up to the lower brow margin',
        B: 'as A, extended medially and laterally',
        C: 'as B, plus the entire eyebrow',
        D: 'both eyes, joined across the nasal bridge',
        E: 'as D, plus the midface',
      },
    },

    distance: {
      section: {
        index: '03',
        title: 'Distances first',
        body: [
          'Before volume comes distance. Twenty distances were defined between 18 anatomical landmarks and each was measured five times, once digitally on the 3D model and once by hand with a calliper.',
          'The mean deviation between the two methods is 0.019 millimetres per millimetre. Over a 50 millimetre distance that is less than a single millimetre. Repeatability reached an ICC of 0.997 for the digital and 0.996 for the manual measurement.',
        ],
      },
      chartTitle: 'Deviation, digital against calliper',
      chartUnit: 'mm per mm',
      chartCaption: 'Mean with standard deviation per observer and dummy. Table 1 of the manuscript.',
      bars: [
        { label: 'Observer 1, dummy A', ...DISTANCE_BARS[0] },
        { label: 'Observer 1, dummy B', ...DISTANCE_BARS[1] },
        { label: 'Observer 2, dummy A', ...DISTANCE_BARS[2] },
        { label: 'Observer 2, dummy B', ...DISTANCE_BARS[3] },
        { label: 'Overall', ...DISTANCE_BARS[4] },
      ],
    },

    volume: {
      section: {
        index: '04',
        title: 'Then volume',
        body: [
          'Across all modes the mean volume deviation in body donors is 0.032 ± 0.113 millilitres. In 14.1 per cent of measurements there was no deviation at all. For the dummies it was 8.1 per cent at a mean of -0.005 ± 0.083 millilitres.',
          'The pattern is clear: the larger the region measured, the larger the deviation. Mode A stays at 0.037 millilitres, mode D reaches 0.099.',
        ],
      },
      chartTitle: 'Absolute volume deviation per mode',
      chartUnit: 'ml',
      chartCaption: 'Body donors, mean with standard deviation. Table 4 of the manuscript.',
      bars: [
        { label: 'Mode A', ...VOLUME_BARS[0] },
        { label: 'Mode B', ...VOLUME_BARS[1] },
        { label: 'Mode C', ...VOLUME_BARS[2] },
        { label: 'Mode D', ...VOLUME_BARS[3] },
      ],
    },

    reliability: {
      section: {
        index: '05',
        title: 'The actual finding',
        body: [
          'Up to this point everything looks excellent. The decisive difference lies elsewhere: evaluate the same scan twice and the results agree almost perfectly. Photograph twice from scratch and agreement drops sharply.',
          'The most striking part is the left to right difference in body donors. The left eye reaches an ICC of 0.83, the right only 0.15. A plausible but unverified explanation is the camera handling of a right handed operator. It is this asymmetry, not the average, that currently limits use for longitudinal monitoring.',
        ],
      },
      chartTitle: 'Repeatability as ICC',
      chartCaption: 'Interpretation bands after Koo and Li. Values from Tables 5 and 7 of the manuscript.',
      bands: [
        { label: 'weak', from: 0, to: 0.5 },
        { label: 'moderate', from: 0.5, to: 0.75 },
        { label: 'strong', from: 0.75, to: 0.9 },
        { label: 'excellent', from: 0.9, to: 1 },
      ],
      items: [
        { label: 'Same capture, evaluated again', value: 0.984, note: 'body donors' },
        { label: 'Same capture, evaluated again', value: 0.99, note: 'dummies' },
        { label: 'New capture, left eye', value: 0.83, note: 'body donors' },
        { label: 'New capture, averaged', value: 0.49, note: 'body donors' },
        { label: 'New capture, averaged', value: 0.411, note: 'dummies' },
        { label: 'New capture, right eye', value: 0.15, note: 'body donors' },
      ],
    },

    tradeoff: {
      section: {
        index: '06',
        title: 'The trade-off',
        body: [
          'The most precise outline is not automatically the most clinically useful one. Mode B measures most accurately but leaves out the eyebrow, and for eyelid surgery that is exactly the structure that matters.',
        ],
      },
      columns: ['Mode', 'Coverage', 'Deviation', 'ICC left / right', 'Clinical reading'],
      rows: [
        {
          id: 'A',
          coverage: 'lower eyelid only, up to the lower brow margin',
          deviation: '0.037 ± 0.045 ml',
          icc: '0.869 / 0.009',
          rationale: 'Highest precision but no eyebrow. Of little use for brow pathology.',
        },
        {
          id: 'B',
          coverage: 'as A, extended medially and laterally',
          deviation: '0.041 ± 0.060 ml',
          icc: '0.831 / 0.013',
          rationale: 'Best overall precision, but still excludes the eyebrow.',
        },
        {
          id: 'C',
          coverage: 'up to the upper brow margin, entire eyebrow included',
          deviation: '0.057 ± 0.072 ml',
          icc: '0.734 / 0.161',
          rationale: 'Slightly lower precision, but the only mode capturing brow and lid together. Recommended for clinical monitoring.',
          recommended: true,
        },
        {
          id: 'D',
          coverage: 'bilateral, joined across the nasal bridge',
          deviation: '0.099 ± 0.095 ml',
          icc: '0.651 combined',
          rationale: 'Lowest precision. Only worthwhile for bilateral assessment.',
        },
      ],
      recommendedNote: 'Recommended mode',
    },

    conclusion: {
      index: '07',
      title: 'What follows from it',
      body: [
        'The VECTRA H2 measures distances and volumes in the eye region reproducibly as long as the work stays within a single capture. For documentation and surgical planning that makes it usable.',
        'For monitoring over weeks and months it is not yet sufficient on this evidence, because too much scatter arises between two separate captures. The next step is therefore a study on living patients, under exactly the conditions deliberately excluded here.',
      ],
    },

    credits: {
      section: {
        index: '08',
        title: 'People involved',
        body: [
          'The study was carried out at Göttingen University Medical Center together with the University of Applied Sciences and Arts, the Institute of Anatomy and Embryology and the Department of Medical Statistics. Contributors are listed by initials only.',
        ],
      },
      roleLabel: 'Contribution',
      people: [
        { initials: 'S. S.', role: 'Conceptualization, dummy measurements, analysis, manuscript', self: true },
        { initials: 'C. C.', role: 'Methodology, second observer, supervision' },
        { initials: 'M. S.', role: 'Conceptualization, clinical infrastructure, supervision' },
        { initials: 'C. V.', role: 'Conceptualization, access to body donors' },
        { initials: 'A.-K. S.', role: 'Methodology, body donor measurements' },
        { initials: 'A. L.', role: 'Statistical analysis and consultation' },
      ],
      statusLabel: 'Status',
      status: 'Submitted to Frontiers in Medicine, under review. Ethics approval from Göttingen University Medical Center is in place (21/11/19).',
    },
  },
};
