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
    headline: ['Vier Jahre', 'eigenes Studio.', 'Alles in einer Hand.'],
    lead: 'Von 2022 bis 2026 habe ich mit zayne digitale Kundenprojekte umgesetzt: Marke, Website, Text, Video und Ton. Akquise, Konzept, Umsetzung, Abnahme und Abrechnung lagen bei mir.',
    meta: [
      { term: 'Rolle', value: 'Founder, Akquise bis Abrechnung' },
      { term: 'Zeitraum', value: '2022 bis 2026' },
      { term: 'Leistung', value: 'Branding, Text, Video, Audio' },
      { term: 'Stand', value: 'Abgeschlossen' },
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
          'zayne war mein eigenes Studio für digitale Kundenprojekte. Angefangen hat es mit Websites und Markenauftritten, dazugekommen sind über die Jahre Text, Video und Ton.',
          'Die Arbeit lag vollständig bei mir: Kundschaft gewinnen, Anforderungen aufnehmen, das Konzept bauen, umsetzen oder die Umsetzung steuern, abnehmen und abrechnen. Volle Umsatzverantwortung, kein Team im Hintergrund.',
        ],
      },
      {
        title: 'Vier Leistungsbereiche',
        body: [
          'Über die Laufzeit sind vier Bereiche entstanden, die sich gegenseitig getragen haben. Wer eine Marke bekommt, braucht Text dafür. Wer ein Video will, braucht Ton, der sitzt.',
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
              body: 'Texte für Website und Kampagne, geschrieben für Leserinnen und Leser und gleichzeitig für Suchmaschinen.',
            },
            {
              title: 'Video-Produktion',
              body: 'Dreh und Schnitt, von der Aufnahme über die Farbkorrektur bis zum ausgespielten Film.',
            },
            {
              title: 'Audio-Produktion',
              body: 'Vocal Engineering: Aufnahme, Bearbeitung und Abmischung von Stimmen, bis die Spur trägt.',
            },
          ],
        },
      },
      {
        title: 'Ausgewählte Kundschaft',
        body: [
          'Vier Namen aus der Kundschaft. Die Bandbreite reicht von Unternehmensgruppen über Mittelstand bis zu einzelnen Künstlern, was den Zuschnitt der vier Leistungsbereiche gut erklärt.',
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
        title: 'Wie gearbeitet wurde',
        body: [
          'Jedes Projekt lief nach demselben Muster. Anforderungen im direkten Gespräch erheben, bewerten und in etwas übersetzen, das man bauen kann. Danach in Arbeitspakete zerlegen, Prioritäten und Abhängigkeiten festlegen.',
          'In der Umsetzung war ich die Schnittstelle zwischen Kundschaft, Entwicklung und Dienstleistern, inklusive der unangenehmen Aufgabe, widersprüchliche Wünsche zu klären. Am Ende stand die Abnahme gemeinsam mit dem Kunden: funktionale Tests, Korrekturschleifen, finale Freigabe.',
        ],
      },
      {
        title: 'Was geblieben ist',
        body: [
          'Über 150 abgewickelte Verkäufe für mehr als 50 Kunden. Schwerer als die Zahl wiegen die wiederverwendbaren Vorlagen und standardisierten Abläufe, die die Durchlaufzeit je Projekt spürbar verkürzt haben.',
          'Dazu die Erfahrung, dass der schwierigste Teil eines Projekts fast nie die Umsetzung ist, sondern die Klärung davor.',
        ],
      },
    ],
  },

  en: {
    eyebrow: 'Software · zayne',
    headline: ['Four years', 'of my own studio.', 'Everything in one pair of hands.'],
    lead: 'From 2022 to 2026 I delivered digital client work through zayne: brand, website, copy, video and sound. Acquisition, concept, delivery, sign off and invoicing were all mine.',
    meta: [
      { term: 'Role', value: 'Founder, acquisition through invoicing' },
      { term: 'Period', value: '2022 to 2026' },
      { term: 'Services', value: 'Branding, copy, video, audio' },
      { term: 'Status', value: 'Completed' },
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
          'zayne was my own studio for digital client work. It started with websites and brand identities; copy, video and sound came along over the years.',
          'The work sat entirely with me: winning clients, gathering requirements, building the concept, delivering it or steering delivery, signing off and invoicing. Full revenue responsibility, no team behind the scenes.',
        ],
      },
      {
        title: 'Four service areas',
        body: [
          'Four areas grew over the studio’s lifetime, each carrying the others. A brand needs copy to go with it. A video needs sound that holds up.',
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
              body: 'Vocal engineering: recording, editing and mixing voices until the track carries.',
            },
          ],
        },
      },
      {
        title: 'Selected clients',
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
        title: 'How the work ran',
        body: [
          'Every project followed the same pattern. Elicit requirements in direct conversation, assess them, translate them into something buildable. Then break it into work packages and set priorities and dependencies.',
          'During delivery I was the interface between client, development and suppliers, including the unpleasant job of resolving contradictory wishes. At the end came sign off with the client: functional tests, correction rounds, final release.',
        ],
      },
      {
        title: 'What remained',
        body: [
          'Over 150 sales delivered for more than 50 clients. Heavier than the number are the reusable templates and standardised processes that measurably shortened turnaround per project.',
          'Along with the lesson that the hardest part of a project is almost never the build, but the clarification before it.',
        ],
      },
    ],
  },
};
