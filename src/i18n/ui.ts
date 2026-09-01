import type { Locale } from '../consts';

/**
 * Sämtliche Oberflächentexte, zweisprachig an einer Stelle.
 *
 * Regel: kein sichtbarer Text steht fest in einer Komponente, alles läuft hier
 * durch, damit DE und EN nie auseinanderlaufen. Die Reihenfolge der Sektionen
 * steht bewusst nicht hier, sie ergibt sich aus consts.ts.
 */
export const ui = {
  de: {
    meta: {
      title: 'Schedi Samet · Medizintechnik, Software, Marke',
      description:
        'Ingenieur der Medizintechnik aus Göttingen und Bonn. Ich entwickle Software, gestalte Marken und forsche in der Medizintechnik. Co-Founder von meedup, Gründer von zayne.',
      langLabel: 'Sprache wechseln',
      langSwitchTo: 'English',
      skipToContent: 'Zum Inhalt springen',
      themeToggle: 'Farbschema wechseln',
      menuOpen: 'Menü öffnen',
      menuClose: 'Menü schließen',
    },

    nav: {
      work: 'Arbeiten',
      about: 'Über mich',
      cv: 'Lebenslauf',
      contact: 'Kontakt',
    },

    hero: {
      eyebrow: 'Portfolio',
      lines: ['Ich entwickle Software,', 'gestalte Marken', 'und forsche in der Medizintechnik.'],
      intro:
        'Ingenieur der Medizintechnik mit wissenschaftlichem Hintergrund. Co-Founder von meedup, Gründer von zayne und Head of Design beim Entrepreneurs Club Mainz. Ich verbinde technisches Verständnis mit Gestaltung und unternehmerischer Praxis.',
      scroll: 'Scrollen',
    },

    /* Die drei Kacheln über der aufklappbaren Liste. `key` ist die Kennung des
       Projekts und bildet den Link, `art` wählt die Signaturgrafik. */
    highlights: {
      label: 'Ausgewählte Arbeiten',
      items: [
        {
          key: 'meedup',
          art: 'network' as const,
          eyebrow: 'Gründung',
          title: 'meedup',
          claim:
            'Ein Netzwerk, das engagierte Studierende mit Unternehmen zusammenbringt, getragen von einer deutschlandweiten Datenbank studentischer Initiativen.',
          figure: '1.000+',
          figureLabel: 'Initiativen in der Datenbank',
        },
        {
          key: 'bewerbungstracker',
          art: 'funnel' as const,
          eyebrow: 'Software',
          title: 'Bewerbungstracker',
          claim:
            'Der Nachfolger der Bewerbungstabelle. Dokumentiert jede Station mit Datum und zeigt im Sankey-Diagramm, wo der Prozess abbricht.',
          figure: '11',
          figureLabel: 'Stationen je Bewerbung',
        },
        {
          key: 'vectra-h2',
          art: 'measure' as const,
          eyebrow: 'Forschung',
          title: 'Vectra-H2',
          claim:
            'Validierung eines 3D-Systems für die periorbitale Volumetrie, von der Studienplanung bis zur statistischen Auswertung.',
          figure: '1.280',
          figureLabel: 'ausgewertete Einzelmessungen',
        },
      ],
    },

    sections: {
      venture: {
        title: 'Gründung',
        description:
          'Eigene Unternehmen, in denen ich Geschäftsmodell, Vertrieb und Kundenbeziehung verantworte. Von der Marktvalidierung bis zum abgeschlossenen Auftrag.',
      },
      software: {
        title: 'Software',
        description:
          'Produkte und Werkzeuge, die ich von der Anforderung bis zum Livegang selbst verantworte. Sie sind überwiegend entstanden, weil kein passendes Werkzeug verfügbar war.',
      },
      research: {
        title: 'Forschung',
        description:
          'Arbeiten aus der Medizintechnik: Studiendesign, Messreihen, statistische Auswertung sowie die Vermittlung der Ergebnisse an das Fachpublikum.',
      },
      design: {
        title: 'Design',
        description:
          'Markenarbeit, Kampagnen und wiederverwendbare Gestaltungsprozesse, überwiegend für den Entrepreneurs Club Mainz.',
      },
      about: {
        label: 'Über mich',
        title: 'Kurz zu mir',
        body: [
          'Ich habe Medizintechnik studiert, weil mich der Punkt interessiert, an dem ein technisches System auf einen Menschen trifft. Dort gelten zwei Anforderungen gleichzeitig: dass ein System funktioniert und dass sich das belegen lässt. An der Universitätsmedizin Göttingen leite ich seit 2023 eine Validierungsstudie zum 3D-System Vectra-H2, von der Studienplanung über die Messreihen bis zur statistischen Auswertung.',
          'Parallel dazu führe ich seit 2022 mit zayne ein eigenes Studio für digitale Kundenprojekte, von der Anforderungsaufnahme über Marke und Gestaltung bis zum Livegang. Seit 2025 bin ich Co-Founder von meedup und Head of Design beim Entrepreneurs Club Mainz. Ein Muster zieht sich durch alle Tätigkeiten: aus einer unklaren Anforderung etwas entstehen zu lassen, das sich benutzen, messen und vorzeigen lässt.',
        ],
        facts: {
          label: 'Eckdaten',
          items: [
            { term: 'Standort', value: 'Göttingen und Bonn' },
            { term: 'Studium', value: 'M. Eng. Medizintechnik, HAWK Göttingen (Abschluss 12/2026)' },
            { term: 'Schwerpunkte', value: 'Medizintechnik, Software, Marke, Projektmanagement' },
            { term: 'Sprachen', value: 'Deutsch, Englisch, Arabisch, Französisch' },
          ],
        },
      },
      cv: {
        label: 'Werdegang',
        title: 'Lebenslauf',
        description:
          'Stationen, Ausbildung, Zertifizierungen und Fähigkeiten, vollständig als Seite zum Lesen.',
        cta: 'Lebenslauf ansehen',
      },
      contact: {
        label: 'Kontakt',
        title: 'Nehmen Sie Kontakt auf.',
        description:
          'Für Anfragen aus Medizintechnik, Softwareentwicklung, Markengestaltung oder Forschung erreichen Sie mich per E-Mail. Ich antworte in der Regel innerhalb von zwei Werktagen.',
      },
    },

    projects: {
      viewCase: 'Projekt ansehen',
      visitSite: 'Zur Website',
      viewCode: 'Quellcode',
      readStudy: 'Studie lesen',
      backToWork: 'Zurück zur Übersicht',
      role: 'Rolle',
      year: 'Jahr',
      status: 'Status',
      stack: 'Technik',
      category: 'Kategorie',
      empty: 'In diesem Bereich ist noch nichts veröffentlicht.',
      /* Vorschau in der zugeklappten Zeile: "1 Arbeit", "4 Arbeiten". */
      countOne: 'Arbeit',
      countMany: 'Arbeiten',
      nextProject: 'Nächstes Projekt',
      statusLabels: {
        live: 'Live',
        beta: 'Beta',
        wip: 'In Arbeit',
        archived: 'Abgeschlossen',
        concept: 'Konzept',
      },
      disciplineLabels: {
        venture: 'Gründung',
        software: 'Software',
        research: 'Forschung',
        design: 'Design',
      },
    },

    media: {
      zoom: 'Vergrößern',
      close: 'Vollansicht schließen',
      prevSlide: 'Vorherige Folie',
      nextSlide: 'Nächste Folie',
    },

    contact: {
      emailLabel: 'E-Mail',
      copy: 'Adresse kopieren',
      copied: 'Kopiert',
      copyFailed: 'Kopieren nicht möglich',
      elsewhere: 'Anderswo',
    },

    cv: {
      title: 'Lebenslauf',
      lead: 'Ingenieur mit medizintechnischem Studium, vier Jahren unternehmerischer Praxis und wissenschaftlicher Projektleitung.',
      updated: 'Stand',
      experience: 'Berufliche Stationen',
      education: 'Ausbildung',
      certifications: 'Zertifizierungen',
      engagement: 'Engagement und Auftritte',
      skills: 'Fähigkeiten',
      languages: 'Sprachen',
      present: 'heute',
    },

    footer: {
      builtWith: 'Gebaut mit Astro',
      backToTop: 'Nach oben',
      imprint: 'Impressum',
      privacy: 'Datenschutz',
      rights: 'Alle Rechte vorbehalten',
    },

    error: {
      title: 'Seite nicht gefunden',
      description: 'Diese Adresse existiert nicht. Über die Startseite erreichen Sie alle Inhalte.',
      home: 'Zur Startseite',
    },
  },

  en: {
    meta: {
      title: 'Schedi Samet · Medical Technology, Software, Brand',
      description:
        'Medical engineer based in Göttingen and Bonn. I develop software, shape brands and research medical technology. Co-founder of meedup, founder of zayne.',
      langLabel: 'Change language',
      langSwitchTo: 'Deutsch',
      skipToContent: 'Skip to content',
      themeToggle: 'Toggle colour scheme',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
    },

    nav: {
      work: 'Work',
      about: 'About',
      cv: 'CV',
      contact: 'Contact',
    },

    hero: {
      eyebrow: 'Portfolio',
      lines: ['I develop software,', 'shape brands', 'and research medical technology.'],
      intro:
        'Medical engineer with a research background. Co-founder of meedup, founder of zayne and Head of Design at Entrepreneurs Club Mainz. I combine technical understanding with design and entrepreneurial practice.',
      scroll: 'Scroll',
    },

    highlights: {
      label: 'Selected work',
      items: [
        {
          key: 'meedup',
          art: 'network' as const,
          eyebrow: 'Ventures',
          title: 'meedup',
          claim:
            'A network connecting committed students with companies, built on a Germany wide database of student initiatives.',
          figure: '1,000+',
          figureLabel: 'initiatives in the database',
        },
        {
          key: 'bewerbungstracker',
          art: 'funnel' as const,
          eyebrow: 'Software',
          title: 'Application Tracker',
          claim:
            'The successor to the application spreadsheet. It documents every station with its date and shows in a Sankey diagram where the process breaks off.',
          figure: '11',
          figureLabel: 'stations per application',
        },
        {
          key: 'vectra-h2',
          art: 'measure' as const,
          eyebrow: 'Research',
          title: 'Vectra-H2',
          claim:
            'Validation of a 3D system for periorbital volumetry, from study design through to statistical analysis.',
          figure: '1,280',
          figureLabel: 'individual measurements analysed',
        },
      ],
    },

    sections: {
      venture: {
        title: 'Ventures',
        description:
          'Companies of my own, where I own the business model, sales and the client relationship. From market validation to the closed deal.',
      },
      software: {
        title: 'Software',
        description:
          'Products and tools I own from the first requirement through to go live. They exist largely because no suitable tool was available.',
      },
      research: {
        title: 'Research',
        description:
          'Work in medical technology: study design, measurement series, statistical analysis, and the communication of results to a specialist audience.',
      },
      design: {
        title: 'Design',
        description:
          'Brand work, campaigns and reusable design processes, largely for Entrepreneurs Club Mainz.',
      },
      about: {
        label: 'About',
        title: 'A little about me',
        body: [
          'I studied medical engineering because I am drawn to the point where a technical system meets a person. Two requirements apply at once: that a system works, and that this can be demonstrated. Since 2023 I have been leading a validation study of the Vectra-H2 3D system at Göttingen University Medical Center, from study planning through the measurement series to statistical analysis.',
          'Alongside that I have run zayne, my own studio for digital client work, since 2022, from gathering requirements through brand and design to go live. Since 2025 I have been co-founder of meedup and Head of Design at Entrepreneurs Club Mainz. One pattern runs through all of it: turning an unclear requirement into something that can be used, measured and shown.',
        ],
        facts: {
          label: 'At a glance',
          items: [
            { term: 'Based in', value: 'Göttingen and Bonn' },
            { term: 'Studies', value: 'M. Eng. Medical Engineering, HAWK Göttingen (due 12/2026)' },
            { term: 'Focus', value: 'Medical technology, software, brand, project management' },
            { term: 'Languages', value: 'German, English, Arabic, French' },
          ],
        },
      },
      cv: {
        label: 'Career',
        title: 'Curriculum vitae',
        description:
          'Positions, education, certifications and skills, in full as a page to read.',
        cta: 'View CV',
      },
      contact: {
        label: 'Contact',
        title: 'Get in touch.',
        description:
          'For enquiries in medical technology, software development, brand design or research, you can reach me by email. I usually reply within two working days.',
      },
    },

    projects: {
      viewCase: 'View project',
      visitSite: 'Visit site',
      viewCode: 'Source code',
      readStudy: 'Read study',
      backToWork: 'Back to all work',
      role: 'Role',
      year: 'Year',
      status: 'Status',
      stack: 'Stack',
      category: 'Category',
      empty: 'Nothing published in this area yet.',
      countOne: 'project',
      countMany: 'projects',
      nextProject: 'Next project',
      statusLabels: {
        live: 'Live',
        beta: 'Beta',
        wip: 'In progress',
        archived: 'Completed',
        concept: 'Concept',
      },
      disciplineLabels: {
        venture: 'Ventures',
        software: 'Software',
        research: 'Research',
        design: 'Design',
      },
    },

    media: {
      zoom: 'Enlarge',
      close: 'Close full view',
      prevSlide: 'Previous slide',
      nextSlide: 'Next slide',
    },

    contact: {
      emailLabel: 'Email',
      copy: 'Copy address',
      copied: 'Copied',
      copyFailed: 'Could not copy',
      elsewhere: 'Elsewhere',
    },

    cv: {
      title: 'Curriculum vitae',
      lead: 'Engineer with a medical technology degree, four years of entrepreneurial practice and scientific project leadership.',
      updated: 'Updated',
      experience: 'Experience',
      education: 'Education',
      certifications: 'Certifications',
      engagement: 'Service and talks',
      skills: 'Skills',
      languages: 'Languages',
      present: 'present',
    },

    footer: {
      builtWith: 'Built with Astro',
      backToTop: 'Back to top',
      imprint: 'Imprint',
      privacy: 'Privacy',
      rights: 'All rights reserved',
    },

    error: {
      title: 'Page not found',
      description: 'This address does not exist. The homepage leads to all content.',
      home: 'Go to homepage',
    },
  },
} as const;

export type UI = (typeof ui)[Locale];
