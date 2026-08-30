import type { StudyContent } from './study-types';

/**
 * Studie 2: Physiologische Schwankung des periokulären Volumens über fünf
 * aufeinanderfolgende Tage.
 *
 * Bewusst ohne Ergebnisse. Das Manuskript ist in Vorbereitung, und die
 * Erstautorenschaft liegt nicht bei mir. Gezeigt werden deshalb nur Anlass,
 * Aufbau und Auswertungsmethodik. Die Befunde kommen dazu, sobald die Arbeit
 * veröffentlicht ist; die Zahlen dafür stehen im Manuskript, nicht hier.
 *
 * Das Manuskript enthält keine Angaben zu den einzelnen Beiträgen der
 * Autorinnen und Autoren, deshalb stehen die Mitwirkenden nur mit Initialen
 * in der Reihenfolge der Autorenliste.
 */
export const weekStudy: Record<'de' | 'en', StudyContent> = {
  de: {
    eyebrow: 'Forschung · Universitätsmedizin Göttingen',
    headline: ['Wie stark schwankt', 'ein gesundes Gesicht', 'von Tag zu Tag?'],
    lead: 'Ob eine Schwellung nach einer Operation zurückgeht, lässt sich nur beurteilen, wenn man weiß, wie stark das Gewebe ganz ohne Eingriff schwankt. Diese Studie misst genau das: bei 19 gesunden Menschen, an fünf Tagen in Folge, jeweils zur selben Uhrzeit.',
    meta: [
      { term: 'Rolle', value: 'Ko-Autor' },
      { term: 'Ort', value: 'Universitätsmedizin Göttingen' },
      { term: 'Kohorte', value: '19 gesunde Teilnehmende, 20 bis 65 Jahre' },
      { term: 'Status', value: 'Manuskript in Vorbereitung' },
    ],
    stats: {
      label: 'Umfang',
      items: [
        { value: '19', label: 'Teilnehmende' },
        { value: '5', label: 'Messtage in Folge' },
        { value: '3', label: 'Aufnahmen je Messtag' },
        { value: '456', label: 'Volumenmessungen' },
      ],
    },

    sections: [
      {
        title: 'Warum das nötig ist',
        body: [
          'Nach einem Eingriff am Lid will man wissen, ob die Schwellung zurückgeht. Dafür misst man das Volumen vorher und nachher. Nur schwankt Gewebe auch ganz ohne Eingriff, beeinflusst von Flüssigkeitshaushalt, Schwerkraft, Lymphfluss und Muskeltonus. Solange niemand weiß, wie groß dieses natürliche Rauschen ist, lässt sich eine echte Schwellung nicht sicher davon trennen.',
          'Die Vorgängerstudie hat gezeigt, dass das Messgerät dafür genau genug ist, und Modus C als klinisch sinnvollen Zuschnitt empfohlen. Diese Studie setzt genau dort an: sie verwendet diesen Modus und misst damit an gesunden Menschen, was das Gewebe von allein tut.',
        ],
      },
      {
        title: 'Aufbau',
        body: [
          '19 gesunde Teilnehmende zwischen 20 und 65 Jahren, Durchschnittsalter 32. An fünf aufeinanderfolgenden Tagen wurde jeweils zur selben Tageszeit gemessen, damit tageszeitliche Schwankungen im Weichgewebe nicht ins Ergebnis wandern. Schmuck ab, Haare zurück, entspannter Kiefer, geschlossene Lippen, Blick auf einen festen Punkt.',
          'Der erste Tag ist der Bezugspunkt, jeder weitere Tag wird gegen ihn verglichen. Pro Tag entstanden drei Aufnahmen, und jeder Vergleich wurde dreimal ausgewertet, linkes und rechtes Auge getrennt. Zusammen ergibt das 456 Volumenmessungen.',
        ],
      },
      {
        title: 'Auswertung',
        body: [
          'Ausgewertet wurde mit linearen gemischten Modellen. Ein zufälliger Achsenabschnitt auf Ebene der Teilnehmenden bildet ab, dass jede Person mehrfach gemessen wurde. Geschlecht und Altersgruppe gehen als feste Effekte ein.',
          'Für die Unsicherheit der Modellschätzungen stehen 95-Prozent-Konfidenzintervalle, für die zu erwartende Streuung künftiger Einzelmessungen Vorhersageintervalle aus parametrischem Bootstrapping. Die Zuverlässigkeit der Messungen beschreiben der Intraklassen-Korrelationskoeffizient und der technische Messfehler, jeweils absolut und relativ.',
          'Das Signifikanzniveau liegt bei fünf Prozent, korrigiert nach Bonferroni-Holm für multiples Testen. Gerechnet wurde in R mit lme4 und ggeffects.',
        ],
      },
      {
        title: 'Stand',
        body: [
          'Die Messungen sind abgeschlossen, die Auswertung ebenfalls. Das Manuskript ist in Vorbereitung.',
          'Die Ergebnisse stehen hier bewusst noch nicht. Sie kommen dazu, sobald die Arbeit veröffentlicht ist.',
        ],
      },
    ],

    credits: {
      title: 'Beteiligte',
      body: [
        'Die Studie entstand an der Universitätsmedizin Göttingen. Das Manuskript enthält keine Aufschlüsselung der einzelnen Beiträge, deshalb stehen die Mitwirkenden hier in der Reihenfolge der Autorenliste und nur mit Initialen.',
      ],
      people: [
        { initials: 'B. A.' },
        { initials: 'S. S.', self: true },
        { initials: 'C. C.' },
        { initials: 'F. K.' },
        { initials: 'M. S.' },
      ],
      statusLabel: 'Status',
      status: 'Manuskript in Vorbereitung. Ein Ethikvotum liegt vor.',
    },
  },

  en: {
    eyebrow: 'Research · Göttingen University Medical Center',
    headline: ['How much does', 'a healthy face change', 'from day to day?'],
    lead: 'Whether swelling after surgery is going down can only be judged if you know how much the tissue moves without any intervention at all. This study measures exactly that: in 19 healthy people, on five consecutive days, at the same time each day.',
    meta: [
      { term: 'Role', value: 'Co-author' },
      { term: 'Place', value: 'Göttingen University Medical Center' },
      { term: 'Cohort', value: '19 healthy participants, aged 20 to 65' },
      { term: 'Status', value: 'Manuscript in preparation' },
    ],
    stats: {
      label: 'Scale',
      items: [
        { value: '19', label: 'participants' },
        { value: '5', label: 'consecutive days' },
        { value: '3', label: 'captures per day' },
        { value: '456', label: 'volume measurements' },
      ],
    },

    sections: [
      {
        title: 'Why this is needed',
        body: [
          'After eyelid surgery you want to know whether the swelling is going down, so you measure the volume before and after. But tissue also fluctuates without any intervention, driven by fluid balance, gravity, lymphatic flow and muscle tone. Until someone knows how large that natural noise is, real swelling cannot be told apart from it with any confidence.',
          'The preceding study showed the device is precise enough for the job and recommended mode C as the clinically sensible outline. This study starts exactly there: it uses that mode and measures what the tissue does on its own in healthy people.',
        ],
      },
      {
        title: 'Setup',
        body: [
          'Nineteen healthy participants aged 20 to 65, mean age 32. Measurements were taken on five consecutive days at the same time of day, so that time of day variation in the soft tissue does not leak into the result. Jewellery off, hair tied back, relaxed jaw, closed lips, gaze on a fixed point.',
          'Day one is the reference; every later day is compared against it. Three captures were taken per day and each comparison was evaluated three times, left and right eye separately. Together that makes 456 volume measurements.',
        ],
      },
      {
        title: 'Analysis',
        body: [
          'The analysis uses linear mixed effects models. A random intercept at participant level accounts for each person being measured repeatedly. Sex and age group enter as fixed effects.',
          'Uncertainty in the model estimates is given as 95 per cent confidence intervals, and the expected spread of future individual measurements as prediction intervals from parametric bootstrapping. Measurement reliability is described through the intraclass correlation coefficient and the technical error of measurement, each in absolute and relative terms.',
          'The significance level is five per cent, corrected with the Bonferroni-Holm method for multiple testing. Everything was computed in R using lme4 and ggeffects.',
        ],
      },
      {
        title: 'Where it stands',
        body: [
          'Data collection is complete and so is the analysis. The manuscript is in preparation.',
          'The results are deliberately not shown here yet. They will follow once the work is published.',
        ],
      },
    ],

    credits: {
      title: 'People involved',
      body: [
        'The study was carried out at Göttingen University Medical Center. The manuscript contains no breakdown of individual contributions, so contributors are listed here in author order and by initials only.',
      ],
      people: [
        { initials: 'B. A.' },
        { initials: 'S. S.', self: true },
        { initials: 'C. C.' },
        { initials: 'F. K.' },
        { initials: 'M. S.' },
      ],
      statusLabel: 'Status',
      status: 'Manuscript in preparation. Ethics approval is in place.',
    },
  },
};
