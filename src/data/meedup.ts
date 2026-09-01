import type { StudyContent } from './study-types';

/**
 * meedup: Challenges, die engagierte Studierende mit Unternehmen zusammenbringen.
 *
 * Inhalte und Zahlen stammen aus dem Pitchdeck. Das Deck war an ein konkretes
 * Unternehmen gerichtet; auf dieser Seite bleibt es bewusst ungenannt und
 * erscheint nur als Unternehmen aus dem Lebensmitteleinzelhandel.
 *
 * Team und Beirat werden auf Wunsch nicht genannt, gezeigt wird nur die eigene
 * Rolle. Deshalb hat diese Seite keinen Abschnitt zu Beteiligten.
 */
export const meedup: Record<'de' | 'en', StudyContent> = {
  de: {
    eyebrow: 'Gründung · meedup GbR',
    headline: ['Unternehmen stellen', 'eine echte Aufgabe.', 'Studierende lösen sie.'],
    lead: 'meedup verbindet engagierte Studierende mit Unternehmen. Grundlage sind eine Datenbank von über 1.000 Studenteninitiativen und ein Netzwerk von mehr als 10.000 Studierenden in ganz Deutschland.',
    meta: [
      { term: 'Rolle', value: 'Co-Founder, Produkt und Geschäftsmodell' },
      { term: 'Gegründet', value: '2025' },
      { term: 'Modell', value: 'Challenges für Unternehmen' },
      { term: 'Stand', value: 'Vier Challenges abgeschlossen, eine läuft' },
    ],
    stats: {
      label: 'Netzwerk',
      items: [
        { value: '4', label: 'abgeschlossene Challenges' },
        { value: '1', label: 'Challenge läuft aktuell' },
        { value: '1.000+', label: 'Studenteninitiativen' },
        { value: '10.000+', label: 'erreichbare Studierende' },
      ],
    },

    sections: [
      {
        title: 'Das Problem',
        body: [
          'Unternehmen außerhalb der bekannten Zielbranchen erreichen Top-Talente kaum. Wer nicht zu Beratung, Technologie oder Automobilindustrie zählt, erscheint auf der Zielliste von Berufseinsteigern selten. Eine unbesetzte Stelle verursacht dennoch monatlich Kosten.',
          'Gleichzeitig ist die Auswahl selbst unzuverlässig. Eine Bewerbungsmappe zeigt, wie jemand sich darstellt, nicht wie jemand arbeitet. Arbeitsproben und praktische Projekte gelten dagegen seit Jahrzehnten als das aussagekräftigste Auswahlverfahren für späteren beruflichen Erfolg.',
        ],
        wide: true,
        visual: {
          kind: 'figures',
          caption: 'Quellen wie angegeben.',
          items: [
            {
              value: '2,8 %',
              label: 'der Berufseinsteiger nennen den Groß- und Einzelhandel als Zielbranche',
              source: 'Maastricht University, 2016',
            },
            {
              value: '73.000 €',
              label: 'kostet eine unbesetzte Stelle im Jahr, im ungünstigsten Fall',
              source: 'StepStone, 2022',
            },
            {
              value: '89 %',
              label: 'der Kündigungen gehen auf mangelnde Soft Skills zurück, nicht auf fehlendes Fachwissen',
              source: 'Forbes, 2025',
            },
            {
              value: '80 %',
              label: 'der Talente bauen ihre Soft Skills in praktischen Formaten auf',
              source: 'NSLS, 2022',
            },
          ],
        },
      },
      {
        title: 'Das Modell',
        body: [
          'Statt einer Stellenanzeige stellt ein Unternehmen eine echte Aufgabe aus dem eigenen Betrieb. Studierendenteams bearbeiten sie über einen festgelegten Zeitraum und stellen ihre Lösung am Ende einer Jury des Unternehmens vor.',
          'Dabei entstehen drei Dinge gleichzeitig, für die es sonst drei getrennte Maßnahmen bräuchte: Sichtbarkeit bei einer Zielgruppe, die das Unternehmen sonst kaum erreicht, konkrete Lösungsansätze zu einem realen Problem, und ein Recruiting-Vorlauf, weil die Teams ihre Arbeitsweise bereits gezeigt haben.',
        ],
      },
      {
        title: 'Ablauf einer Challenge',
        body: [
          'Der Ablauf ist bewusst schlank gehalten. Für das Unternehmen bleibt der Aufwand auf ein Auftaktgespräch, die Abstimmung der Rahmenbedingungen und die Jury beschränkt. Alles dazwischen übernimmt meedup.',
        ],
        wide: true,
        visual: {
          kind: 'process',
          stepLabel: 'Vom Auftakt bis zur Jury',
          benefitLabel: 'Ihr Vorteil',
          steps: [
            {
              title: 'Gemeinsames Meeting',
              body: 'Analyse der Pain Points und Ziele, dazu eine erste Planung der Challenge.',
              benefit: 'Maßgeschneidertes Challenge-Design für innovative Impulse.',
            },
            {
              title: 'Rahmen festlegen',
              body: 'Zielgruppe, Zeitplan, Preisgelder und Umfang werden exakt bestimmt.',
              benefit: 'Ein schlüsselfertiges Paket für Klarheit, Qualität und interne Abstimmung.',
            },
            {
              title: 'Netzwerk mobilisieren',
              body: 'Die Challenge wird punktgenau bei den passenden Talenten platziert.',
              benefit: 'Maximale Reichweite in der relevanten Zielgruppe.',
            },
            {
              title: 'Jury und Auswahl',
              body: 'Die besten Teams präsentieren ihre Lösungsansätze, das Unternehmen wählt die Gewinner selbst aus.',
              benefit: 'Direkter Zugang zu innovativen Lösungskonzepten und Top-Talenten.',
            },
          ],
        },
      },
      {
        title: 'Nutzen für das Unternehmen',
        body: [
          'Eine Challenge zahlt gleichzeitig auf Employer Branding, Recruiting und die inhaltliche Arbeit ein. Genau diese Kombination unterscheidet sie von einer Messe oder einer Anzeigenkampagne.',
        ],
        wide: true,
        visual: {
          kind: 'cards',
          items: [
            {
              title: 'Verbesserte Reichweite',
              body: 'Top-Studierende aus ganz Deutschland kennen das Unternehmen danach und sehen es als möglichen Arbeitgeber.',
            },
            {
              title: 'Erleichtertes Recruiting',
              body: 'Die Teams haben faktisch ein Auswahlverfahren durchlaufen. Der langwierige Aufnahmeprozess entfällt, die Arbeitsweise ist dennoch bekannt.',
            },
            {
              title: 'Vielseitige Lösungsansätze',
              body: 'Mehrere Teams erarbeiten unterschiedliche Lösungen zu demselben Problem. Die besten lassen sich direkt übernehmen.',
            },
          ],
        },
      },
      {
        title: 'Das Netzwerk',
        body: [
          'Der Zugang zu den Teams ist der eigentliche Kern des Modells. Grundlage ist eine selbst aufgebaute Datenbank von über 1.000 Studenteninitiativen in ganz Deutschland, von Fachschaften über studentische Unternehmensberatungen bis zu Gründungs- und Technikvereinen.',
          'Dadurch geht eine Challenge nicht an eine anonyme Masse, sondern an Studierende, die bereits zeigen, dass sie sich über das Studium hinaus engagieren. Genau diese Gruppe suchen Unternehmen, und genau sie ist über klassische Kanäle am schwersten zu erreichen.',
        ],
        wide: true,
        visual: {
          kind: 'figures',
          items: [
            { value: '1.000+', label: 'Studenteninitiativen in der Datenbank, bundesweit' },
            { value: '10.000+', label: 'engagierte Studierende, die darüber erreichbar sind' },
          ],
        },
      },
      {
        title: 'Ein Beispiel',
        body: [
          'Ein Unternehmen aus dem Lebensmitteleinzelhandel steht vor genau dem beschriebenen Problem. Viele kennen es als Supermarkt um die Ecke, kaum jemand denkt dabei an die Karrierechancen in der Zentrale. Die Challenge lautet deshalb: Wie lässt sich dieses Bild bei Top-Talenten aufbrechen?',
          'Ausgeschrieben wird sie mit gestaffelten Preisgeldern und einer festen Laufzeit. Die besten Konzepte gehen an die Jury des Unternehmens, das die Gewinner selbst bestimmt.',
        ],
        wide: true,
        visual: {
          kind: 'figures',
          caption: 'Das Unternehmen bleibt hier ungenannt, die Challenge ist ein reales Beispiel aus dem Angebot.',
          items: [
            { value: '1.000 €', label: 'Preisgeld für den ersten Platz' },
            { value: '500 €', label: 'für den zweiten Platz' },
            { value: '300 €', label: 'für den dritten Platz' },
          ],
        },
      },
      {
        title: 'Meine Rolle',
        body: [
          'Als Co-Founder verantworte ich Produkt und Geschäftsmodell. Dazu gehören die Entwicklung und Validierung des Modells am Markt, die Ableitung und Priorisierung der Produktanforderungen sowie der Aufbau des Beirats.',
        ],
      },
    ],
  },

  en: {
    eyebrow: 'Ventures · meedup GbR',
    headline: ['Companies set', 'a real task.', 'Students solve it.'],
    lead: 'meedup connects engaged students with companies. It rests on a database of more than 1,000 student initiatives and a network of over 10,000 students across Germany.',
    meta: [
      { term: 'Role', value: 'Co-founder, product and business model' },
      { term: 'Founded', value: '2025' },
      { term: 'Model', value: 'Challenges for companies' },
      { term: 'Status', value: 'Four challenges completed, one running' },
    ],
    stats: {
      label: 'Network',
      items: [
        { value: '4', label: 'challenges completed' },
        { value: '1', label: 'challenge running now' },
        { value: '1,000+', label: 'student initiatives' },
        { value: '10,000+', label: 'students reachable' },
      ],
    },

    sections: [
      {
        title: 'The problem',
        body: [
          'Companies outside the well known target industries barely reach top talent. Those not counted among consulting, technology or automotive rarely appear on a graduate’s shortlist. An unfilled position nonetheless incurs cost every month.',
          'At the same time selection itself is unreliable. An application shows how someone presents themselves, not how they work. Work samples and practical projects, by contrast, have been considered the most predictive selection method for later professional success for decades.',
        ],
        wide: true,
        visual: {
          kind: 'figures',
          caption: 'Sources as stated.',
          items: [
            {
              value: '2.8 %',
              label: 'of graduates name wholesale and retail as a target industry',
              source: 'Maastricht University, 2016',
            },
            {
              value: '€73,000',
              label: 'is what an unfilled position can cost per year at worst',
              source: 'StepStone, 2022',
            },
            {
              value: '89 %',
              label: 'of hiring failures come down to missing soft skills, not missing expertise',
              source: 'Forbes, 2025',
            },
            {
              value: '80 %',
              label: 'of talent build their soft skills in practical formats',
              source: 'NSLS, 2022',
            },
          ],
        },
      },
      {
        title: 'The model',
        body: [
          'Instead of a job posting, a company sets a real task from its own operation. Student teams work on it over a defined period and present their solution to the company’s jury at the end.',
          'Three things happen at once that would otherwise take three separate initiatives: visibility with an audience the company barely reaches, concrete solutions to a real problem, and a recruiting head start, because the teams have already shown how they work.',
        ],
      },
      {
        title: 'Course of a challenge',
        body: [
          'The process is deliberately lean. For the company the effort is limited to a kick-off conversation, agreeing the frame, and the jury. Everything in between is handled by meedup.',
        ],
        wide: true,
        visual: {
          kind: 'process',
          stepLabel: 'From kick-off to jury',
          benefitLabel: 'Your benefit',
          steps: [
            {
              title: 'Kick-off meeting',
              body: 'Analysing pain points and goals, plus a first outline of the challenge.',
              benefit: 'A tailored challenge design for genuine new impulses.',
            },
            {
              title: 'Setting the frame',
              body: 'Target group, schedule, prize money and scope are defined precisely.',
              benefit: 'A turnkey package for clarity, quality and internal alignment.',
            },
            {
              title: 'Mobilising the network',
              body: 'The challenge is placed precisely with the right talent.',
              benefit: 'Maximum reach within the relevant audience.',
            },
            {
              title: 'Jury and selection',
              body: 'The best teams present their solutions and the company picks the winners itself.',
              benefit: 'Direct access to innovative concepts and to top talent.',
            },
          ],
        },
      },
      {
        title: 'Benefit for the company',
        body: [
          'A challenge pays into employer branding, recruiting and the actual work at the same time. That combination is what sets it apart from a careers fair or an advertising campaign.',
        ],
        wide: true,
        visual: {
          kind: 'cards',
          items: [
            {
              title: 'Better reach',
              body: 'Top students across Germany know the company afterwards and see it as a possible employer.',
            },
            {
              title: 'Easier recruiting',
              body: 'The teams have effectively completed a selection process. The lengthy intake procedure is unnecessary while their way of working is nonetheless known.',
            },
            {
              title: 'Varied solutions',
              body: 'Several teams develop different answers to the same problem. The best of them can be adopted directly.',
            },
          ],
        },
      },
      {
        title: 'The network',
        body: [
          'Access to the teams is the real core of the model. It rests on a self-built database of more than 1,000 student initiatives across Germany, from student councils and student consultancies to founding and engineering societies.',
          'That way a challenge does not go to an anonymous crowd but to students who already demonstrate that they engage beyond their coursework. This is exactly the group companies are looking for, and exactly the one that is hardest to reach through conventional channels.',
        ],
        wide: true,
        visual: {
          kind: 'figures',
          items: [
            { value: '1,000+', label: 'student initiatives in the database, nationwide' },
            { value: '10,000+', label: 'engaged students reachable through them' },
          ],
        },
      },
      {
        title: 'An example',
        body: [
          'A company from food retail faces exactly the problem described above. Many know it as the supermarket around the corner, few think of the career opportunities at its headquarters. The challenge therefore asks: how do we break that image among top talent?',
          'It goes out with tiered prize money and a fixed runtime. The best concepts go to the company’s jury, which picks the winners itself.',
        ],
        wide: true,
        visual: {
          kind: 'figures',
          caption: 'The company stays unnamed here. The challenge is a real example from the offering.',
          items: [
            { value: '€1,000', label: 'prize money for first place' },
            { value: '€500', label: 'for second place' },
            { value: '€300', label: 'for third place' },
          ],
        },
      },
      {
        title: 'My role',
        body: [
          'As co-founder I own product and business model. That covers developing and validating the model in the market, deriving and prioritising product requirements, and building the advisory board.',
        ],
      },
    ],
  },
};
