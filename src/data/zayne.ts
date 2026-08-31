import type { StudyContent } from './study-types';

/**
 * zayne: eigenes Studio für digitale Kundenprojekte, 2022 bis 2026.
 *
 * Die vier Leistungsbereiche stehen bisher als Karten. Sobald Arbeitsproben
 * vorliegen, wird aus jedem Bereich ein eigener Abschnitt mit einer Galerie,
 * genau wie auf der ECM-Seite. Dafür braucht es nur je einen Eintrag in
 * `sections` mit `kind: 'gallery'` und die Bilder unter `src/assets/zayne/`.
 */
export const zayne: Record<'de' | 'en', StudyContent> = {
  de: {
    eyebrow: 'Software · zayne',
    headline: ['Marke, Website,', 'Text, Film und Ton.', 'Aus einer Hand.'],
    lead: 'Seit 2022 setze ich mit zayne digitale Kundenprojekte um: Markenauftritt, Website, Text, Film und Ton. Akquisition, Konzeption, Umsetzung, Abnahme und Abrechnung liegen in meiner Verantwortung.',
    meta: [
      { term: 'Rolle', value: 'Founder, Akquisition bis Abrechnung' },
      { term: 'Zeitraum', value: 'seit 2022' },
      { term: 'Leistung', value: 'Branding, Text, Film, Audio' },
      { term: 'Stand', value: 'Laufend' },
    ],
    stats: {
      label: 'Bilanz',
      items: [
        { value: '150+', label: 'abgewickelte Verkäufe' },
        { value: '50+', label: 'zufriedene Kunden' },
        { value: '4', label: 'Leistungsbereiche' },
        { value: '2022', label: 'gegründet' },
      ],
    },

    sections: [
      {
        title: 'Das Studio',
        body: [
          'zayne ist mein eigenes Studio für digitale Kundenprojekte. Begonnen hat es mit Websites und Markenauftritten. Text, Film und Ton sind über die Jahre hinzugekommen.',
          'Die gesamte Wertschöpfung liegt bei mir: Kundengewinnung, Anforderungsaufnahme, Konzeption, Umsetzung oder Steuerung der Umsetzung, Abnahme und Abrechnung, mit voller Umsatzverantwortung.',
        ],
      },
      {
        title: 'Vier Leistungsbereiche',
        body: [
          'Über die Laufzeit sind vier Bereiche entstanden, die sich gegenseitig tragen. Ein Markenauftritt braucht Text, ein Film braucht Ton. Die Bereiche greifen ineinander, statt nebeneinander zu stehen.',
        ],
        wide: true,
        visual: {
          kind: 'cards',
          items: [
            {
              title: 'Branding',
              body: 'Logo-Design, Kampagnen und Web-Design. Vom ersten Entwurf über das Farb- und Schriftsystem bis zur fertigen Seite.',
            },
            {
              title: 'Copywriting',
              body: 'Texte für Website und Kampagne, verfasst für die Leserschaft und zugleich für Suchmaschinen optimiert.',
            },
            {
              title: 'Video-Produktion',
              body: 'Dreh und Schnitt, von der Aufnahme über die Farbkorrektur bis zur Ausspielung.',
            },
            {
              title: 'Audio-Produktion',
              body: 'Vocal Engineering: Aufnahme, Bearbeitung und Abmischung von Stimmen bis zur sendefähigen Spur.',
            },
          ],
        },
      },
      {
        title: 'Ausgewählte Referenzen',
        body: [
          'Vier Referenzen aus der Kundschaft. Die Bandbreite reicht von Unternehmensgruppen über den Mittelstand bis zu einzelnen Künstlern, was den Zuschnitt der vier Leistungsbereiche erklärt.',
        ],
        wide: true,
        visual: {
          kind: 'links',
          items: [
            { label: 'DFK-Group' },
            { label: 'ITB Net', href: 'https://itb-net.de' },
            { label: 'JohnnyHand' },
            { label: 'Marcel Steiert' },
          ],
        },
      },
      {
        title: 'Vorgehen',
        body: [
          'Jedes Projekt folgt demselben Muster. Anforderungen werden im direkten Gespräch erhoben, bewertet und in umsetzbare Vorgaben übersetzt. Anschließend erfolgt die Zerlegung in Arbeitspakete mit Prioritäten und Abhängigkeiten.',
          'In der Umsetzung bin ich die Schnittstelle zwischen Kundschaft, Entwicklung und Dienstleistern, einschließlich der Klärung widersprüchlicher Anforderungen. Am Ende steht die Abnahme gemeinsam mit dem Kunden: funktionale Tests, Korrekturschleifen, finale Freigabe.',
        ],
      },
      {
        title: 'Stand heute',
        body: [
          'Über 150 abgewickelte Verkäufe für mehr als 50 Kunden. Schwerer als die Zahl wiegen die wiederverwendbaren Vorlagen und standardisierten Abläufe, die die Durchlaufzeit je Projekt deutlich verkürzt haben.',
          'Die belastbarste Erkenntnis aus vier Jahren: Der aufwendigste Teil eines Projekts ist selten die Umsetzung, sondern die Klärung der Anforderungen davor.',
        ],
      },
    ],
  },

  en: {
    eyebrow: 'Software · zayne',
    headline: ['Brand, website,', 'copy, film and sound.', 'From a single source.'],
    lead: 'Since 2022 I have delivered digital client work through zayne: brand identity, website, copy, film and sound. Acquisition, concept, delivery, sign off and invoicing all sit with me.',
    meta: [
      { term: 'Role', value: 'Founder, acquisition through invoicing' },
      { term: 'Period', value: 'since 2022' },
      { term: 'Services', value: 'Branding, copy, film, audio' },
      { term: 'Status', value: 'Ongoing' },
    ],
    stats: {
      label: 'Track record',
      items: [
        { value: '150+', label: 'sales delivered' },
        { value: '50+', label: 'satisfied clients' },
        { value: '4', label: 'service areas' },
        { value: '2022', label: 'founded' },
      ],
    },

    sections: [
      {
        title: 'The studio',
        body: [
          'zayne is my own studio for digital client work. It began with websites and brand identities. Copy, film and sound were added over the years.',
          'The entire value chain sits with me: winning clients, gathering requirements, concept, delivery or steering delivery, sign off and invoicing, with full revenue responsibility.',
        ],
      },
      {
        title: 'Four service areas',
        body: [
          'Four areas have grown over the studio’s lifetime, each supporting the others. A brand identity needs copy, a film needs sound. The areas interlock rather than sit side by side.',
        ],
        wide: true,
        visual: {
          kind: 'cards',
          items: [
            {
              title: 'Branding',
              body: 'Logo design, campaigns and web design. From the first sketch through the colour and type system to the finished site.',
            },
            {
              title: 'Copywriting',
              body: 'Copy for websites and campaigns, written for readers and for search engines at the same time.',
            },
            {
              title: 'Video production',
              body: 'Shooting and editing, from the take through colour correction to the exported film.',
            },
            {
              title: 'Audio production',
              body: 'Vocal engineering: recording, editing and mixing voices through to a broadcast-ready track.',
            },
          ],
        },
      },
      {
        title: 'Selected references',
        body: [
          'Four names from the client list. The range runs from corporate groups through mid-sized businesses to individual artists, which explains the shape of the four service areas well.',
        ],
        wide: true,
        visual: {
          kind: 'links',
          items: [
            { label: 'DFK-Group' },
            { label: 'ITB Net', href: 'https://itb-net.de' },
            { label: 'JohnnyHand' },
            { label: 'Marcel Steiert' },
          ],
        },
      },
      {
        title: 'Approach',
        body: [
          'Every project follows the same pattern. Requirements are elicited in direct conversation, assessed, and translated into something buildable. The work is then broken into packages with priorities and dependencies.',
          'During delivery I am the interface between client, development and suppliers, including the resolution of contradictory requirements. At the end comes sign off with the client: functional tests, correction rounds, final release.',
        ],
      },
      {
        title: 'Where it stands',
        body: [
          'Over 150 sales delivered for more than 50 clients. Heavier than the number are the reusable templates and standardised processes that measurably shortened turnaround per project.',
          'The most durable lesson from four years: the most demanding part of a project is rarely the build, but the clarification of requirements before it.',
        ],
      },
    ],
  },
};
