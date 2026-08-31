import type { ImageMetadata } from 'astro';
import type { GalleryWork, StudyContent } from './study-types';

import evening from '../assets/ecm/entrepreneurship-evening.jpg';
import hackathon from '../assets/ecm/hackathon-stadtklima.jpg';
import summerSchool from '../assets/ecm/summer-school.jpg';
import wmgicPoster from '../assets/ecm/wmgic-poster.jpg';
import zertifikat from '../assets/ecm/zertifikat.jpg';
import cardFront from '../assets/ecm/visitenkarte-vorn.jpg';
import cardBack from '../assets/ecm/visitenkarte-hinten.jpg';

/**
 * Die Folien des Challenge-Decks liegen als eigene Dateien vor und werden nach
 * Dateinamen sortiert eingelesen. Eine weitere Folie braucht also nur eine
 * Datei und einen Alternativtext.
 */
const slideModules = import.meta.glob<{ default: ImageMetadata }>('../assets/ecm/slides/*.jpg', {
  eager: true,
});
const slideImages = Object.keys(slideModules)
  .sort()
  .map((key) => slideModules[key].default);

const slideAltDe = [
  'Titelfolie der ECM x WMGIC International Challenge 2026 zum Thema Society and Human Well Being, mit den Logos von ECM, WMGIC und meedup',
  'Agendafolie mit den fünf Punkten Purpose, Structure, Tracks, Submission und Judging',
  'Folie mit dem Logo des Entrepreneurs Club Mainz',
  'Folie mit dem Logo der WMGIC Global Innovation Challenge',
  'Folie zum Zweck der Challenge: Technologie verändert die Gesellschaft, Studierende gestalten mit, Ziel sind menschenzentrierte Lösungen',
  'Folie zum Ablauf über zweieinhalb Tage: Kickoff und Teambildung, Hackathon, Abschlusspitches und Preisverleihung',
  'Folie mit den drei Themenspuren: KI in der Hochschulbildung, Klimaresilienz und Nachhaltigkeit, lebensprägende Wissenschaft',
  'Folie zu den Anforderungen an die Einreichung, ein Foliensatz mit sechs bis acht Folien',
  'Folie zu den vier Bewertungskriterien Impact, Feasibility, Creativity und Insight',
  'Folie zum nächsten Schritt: Networking, Teams von zwei bis vier Studierenden bilden, Themenspur wählen',
  'Abschlussfolie mit dem Text Good luck, enjoy the challenge',
];

const slideAltEn = [
  'Title slide of the ECM x WMGIC International Challenge 2026 on the theme Society and Human Well Being, with the logos of ECM, WMGIC and meedup',
  'Agenda slide listing purpose, structure, tracks, submission and judging',
  'Slide showing the Entrepreneurs Club Mainz logo',
  'Slide showing the WMGIC Global Innovation Challenge logo',
  'Slide on the purpose of the challenge: technology is transforming society, students shape how, the goal is human centred solutions',
  'Slide on the two and a half day structure: kickoff and team formation, hackathon, final pitches and awards',
  'Slide with the three tracks: AI in higher education, climate resilience and sustainability, life shaping science',
  'Slide on the submission requirements, a deck of six to eight slides',
  'Slide on the four judging criteria impact, feasibility, creativity and insight',
  'Slide on the next step: networking, forming teams of two to four students, choosing a track',
  'Closing slide reading good luck, enjoy the challenge',
];

const slides = (alts: string[]) =>
  slideImages.map((image, i) => ({ image, alt: alts[i] ?? alts[alts.length - 1] }));

const campaignsDe: GalleryWork[] = [
  {
    image: evening,
    alt: 'Quadratischer Social Post in Hellviolett mit dem Titel Entrepreneurship Evening, einem Publikumsfoto, Datum und QR-Code',
    title: 'Entrepreneurship Evening',
    meta: [
      { term: 'Anlass', value: 'Sciences to Venture, Vortragsabend' },
      { term: 'Format', value: 'Social Post, 1:1' },
      { term: 'Termin', value: '8. Dezember 2025' },
      { term: 'Kanal', value: 'Instagram, LinkedIn' },
    ],
  },
  {
    image: hackathon,
    alt: 'Hochformatiger Flyer mit der Mainzer Skyline in Violett und Magenta, dem Titel Hackathon Stadtklima, Datum, Ort und sechs Partnerlogos',
    title: 'Hackathon Stadtklima',
    meta: [
      { term: 'Anlass', value: 'Mainzer Gründungswoche' },
      { term: 'Format', value: 'Flyer, 4:5' },
      { term: 'Termin', value: '17. bis 22. November 2025' },
      { term: 'Kanal', value: 'Social Media, Aushang' },
    ],
  },
  {
    image: summerSchool,
    alt: 'Dunkler Post im Hochformat mit violettem Farbverlauf, dem Titel ECM Summer School und der Zeile ECM Rocket Pitches',
    title: 'Summer School, Rocket Pitches',
    meta: [
      { term: 'Anlass', value: 'Summer School, Pitch-Abend' },
      { term: 'Format', value: 'Social Post, 4:5' },
      { term: 'Termin', value: '1. Juli' },
      { term: 'Kanal', value: 'Social Media' },
    ],
  },
  {
    image: wmgicPoster,
    alt: 'Plakat im DIN-Hochformat in Hellblau mit zwei illustrierten Figuren, großem QR-Code und den Logos von ECM, WMGIC und meedup',
    title: 'ECM x WMGIC Challenge',
    meta: [
      { term: 'Anlass', value: 'Internationale Challenge mit US-Hochschulen' },
      { term: 'Format', value: 'Plakat, DIN-Hochformat' },
      { term: 'Termin', value: '17. bis 19. April 2026' },
      { term: 'Kanal', value: 'Print, Social Media' },
    ],
  },
];

const campaignsEn: GalleryWork[] = [
  {
    image: evening,
    alt: 'Square social post in light lilac with the title Entrepreneurship Evening, an audience photo, date and QR code',
    title: 'Entrepreneurship Evening',
    meta: [
      { term: 'Occasion', value: 'Sciences to Venture, evening talk' },
      { term: 'Format', value: 'Social post, 1:1' },
      { term: 'Date', value: '8 December 2025' },
      { term: 'Channel', value: 'Instagram, LinkedIn' },
    ],
  },
  {
    image: hackathon,
    alt: 'Portrait flyer showing the Mainz skyline in violet and magenta, the title Hackathon Stadtklima, date, venue and six partner logos',
    title: 'Hackathon Stadtklima',
    meta: [
      { term: 'Occasion', value: 'Mainz founding week' },
      { term: 'Format', value: 'Flyer, 4:5' },
      { term: 'Date', value: '17 to 22 November 2025' },
      { term: 'Channel', value: 'Social media, print' },
    ],
  },
  {
    image: summerSchool,
    alt: 'Dark portrait post with a violet gradient, the title ECM Summer School and the line ECM Rocket Pitches',
    title: 'Summer School, Rocket Pitches',
    meta: [
      { term: 'Occasion', value: 'Summer school pitch evening' },
      { term: 'Format', value: 'Social post, 4:5' },
      { term: 'Date', value: '1 July' },
      { term: 'Channel', value: 'Social media' },
    ],
  },
  {
    image: wmgicPoster,
    alt: 'Portrait poster in light blue with two illustrated figures, a large QR code and the logos of ECM, WMGIC and meedup',
    title: 'ECM x WMGIC Challenge',
    meta: [
      { term: 'Occasion', value: 'International challenge with US universities' },
      { term: 'Format', value: 'Poster, ISO portrait' },
      { term: 'Date', value: '17 to 19 April 2026' },
      { term: 'Channel', value: 'Print, social media' },
    ],
  },
];

const stationeryDe: GalleryWork[] = [
  {
    image: zertifikat,
    alt: 'Hochformatige Urkunde mit dunklem Seitenstreifen, ECM-Logo, dem Wort Certificate und einem violett leuchtenden Namensfeld',
    title: 'Urkunde, Summer School',
    meta: [
      { term: 'Anlass', value: 'Summer School' },
      { term: 'Format', value: 'Urkunde, DIN A4' },
      { term: 'Verwendung', value: 'je Teilnehmenden' },
      { term: 'Hinweis', value: 'Vorlage, Signaturblock entfernt' },
    ],
  },
  {
    image: cardFront,
    alt: 'Visitenkarte im Querformat mit ECM-Logo und den Stichworten Community, Networking und Workshops',
    title: 'Visitenkarte, Vorderseite',
    meta: [
      { term: 'Format', value: 'Visitenkarte, Querformat' },
      { term: 'Kanal', value: 'Veranstaltungen' },
    ],
  },
  {
    image: cardBack,
    alt: 'Rückseite der Visitenkarte mit QR-Code auf hellvioletter Musterfläche und dem Hinweis Learn more',
    title: 'Visitenkarte, Rückseite',
    meta: [
      { term: 'Format', value: 'Visitenkarte, Querformat' },
      { term: 'Kanal', value: 'Veranstaltungen' },
    ],
  },
];

const stationeryEn: GalleryWork[] = [
  {
    image: zertifikat,
    alt: 'Portrait certificate with a dark side panel, the ECM logo, the word Certificate and a violet glowing name field',
    title: 'Certificate, summer school',
    meta: [
      { term: 'Occasion', value: 'Summer school' },
      { term: 'Format', value: 'Certificate, A4' },
      { term: 'Use', value: 'one per participant' },
      { term: 'Note', value: 'Template, signature block removed' },
    ],
  },
  {
    image: cardFront,
    alt: 'Landscape business card with the ECM logo and the words community, networking and workshops',
    title: 'Business card, front',
    meta: [
      { term: 'Format', value: 'Business card, landscape' },
      { term: 'Channel', value: 'Events' },
    ],
  },
  {
    image: cardBack,
    alt: 'Back of the business card with a QR code on a light lilac pattern and the line learn more',
    title: 'Business card, back',
    meta: [
      { term: 'Format', value: 'Business card, landscape' },
      { term: 'Channel', value: 'Events' },
    ],
  },
];

export const ecmKampagnen: Record<'de' | 'en', StudyContent> = {
  de: {
    eyebrow: 'Design · Entrepreneurs Club Mainz',
    headline: ['Jede Woche', 'ein Auftritt.', 'Immer dieselbe Gestaltungssprache.'],
    lead: 'Der Entrepreneurs Club Mainz veranstaltet Hackathons, Summer Schools, Pitch-Abende und internationale Challenges. Jede Veranstaltung braucht Plakat, Social Post und oft eine Urkunde, und jede muss auf den ersten Blick nach ECM aussehen.',
    meta: [
      { term: 'Rolle', value: 'Head of Design' },
      { term: 'Ort', value: 'Entrepreneurs Club Mainz' },
      { term: 'Zeitraum', value: '2025 bis heute' },
      { term: 'Kanäle', value: 'Social Media, Print, Veranstaltung' },
    ],

    sections: [
      {
        title: 'Die Aufgabe',
        body: [
          'Der Club tritt fast wöchentlich auf: Hackathon, Summer School, Pitch-Abend, internationale Challenge. Für jede Veranstaltung entstehen Plakat, Social Post und häufig eine Urkunde, dazu die wiederkehrende Ausstattung.',
          'Die Schwierigkeit liegt nicht im einzelnen Stück, sondern in der Menge. Wird jede Grafik von vorn gedacht, zerfällt der Auftritt in Einzelteile. Deshalb steht hinter den Arbeiten ein Satz Regeln: dasselbe Violett, dieselbe Schriftfamilie, dieselbe Anordnung von Logo, Datum, Ort und QR-Code. Was sich ändert, ist die Bildwelt.',
        ],
      },
      {
        title: 'Vier Kampagnen',
        body: [
          'Vier Arbeiten aus dem laufenden Betrieb, jede für einen anderen Anlass und einen anderen Kanal. Der Hackathon-Flyer zeigt exemplarisch, was die Regeln leisten müssen: sechs Partnerlogos, ein Ortshinweis, ein Datum und ein QR-Code, und trotzdem soll das Plakat aus zehn Metern lesbar bleiben.',
        ],
        wide: true,
        visual: {
          kind: 'gallery',
          caption: 'Alle Arbeiten sind veröffentlicht. Ein Klick öffnet die Vollansicht.',
          works: campaignsDe,
        },
      },
      {
        title: 'Die Challenge im Detail',
        body: [
          'Die internationale Challenge mit dem WMGIC war die aufwendigste Arbeit. Neben Plakat und Post entstand ein Foliensatz, der den Ablauf für die Teilnehmenden erklärt: Zweck, Struktur über zweieinhalb Tage, drei Themenspuren, Anforderungen an die Einreichung und die Bewertungskriterien.',
          'Auch hier gilt dieselbe Logik wie bei den Plakaten. Ein Satz Bausteine, aus dem sich jede Folie zusammensetzt, damit zwölf Folien wie eine Arbeit wirken und nicht wie zwölf.',
        ],
        wide: true,
        visual: {
          kind: 'slides',
          title: 'Foliensatz zur internationalen Challenge',
          caption: 'Elf von zwölf Folien. Die Folie zum Gastredner ist ausgelassen, weil sie Name und Foto einer Person zeigt. Seitlich ziehen oder mit den Pfeiltasten blättern.',
          slides: slides(slideAltDe),
        },
      },
      {
        title: 'Geschäftsausstattung',
        body: [
          'Neben den Kampagnen gehört die wiederkehrende Ausstattung dazu: die Urkunde, die jede Teilnehmerin und jeder Teilnehmer der Summer School erhält, und die Visitenkarte, die auf jeder Veranstaltung verteilt wird.',
          'Die Urkunde ist hier als Vorlage mit Platzhalternamen zu sehen. Der Signaturblock am Fuß ist entfernt, weil er drei echte Unterschriften trägt.',
        ],
        wide: true,
        visual: {
          kind: 'gallery',
          works: stationeryDe,
        },
      },
      {
        title: 'Meine Rolle',
        body: [
          'Als Head of Design verantworte ich das Erscheinungsbild des Clubs und die gestalterische Seite der Marketingarbeit. Dazu gehören Konzeption und Umsetzung der Kampagnen, der Aufbau wiederverwendbarer Vorlagen und die Abstimmung im Team, damit Beiträge auch ohne mich entstehen können.',
        ],
      },
    ],
  },

  en: {
    eyebrow: 'Design · Entrepreneurs Club Mainz',
    headline: ['A new event', 'every week.', 'Always the same design language.'],
    lead: 'Entrepreneurs Club Mainz runs hackathons, summer schools, pitch evenings and international challenges. Every event needs a poster, a social post and often a certificate, and every one has to read as ECM at first glance.',
    meta: [
      { term: 'Role', value: 'Head of Design' },
      { term: 'Place', value: 'Entrepreneurs Club Mainz' },
      { term: 'Period', value: '2025 to present' },
      { term: 'Channels', value: 'Social media, print, on site' },
    ],

    sections: [
      {
        title: 'The brief',
        body: [
          'The club shows up almost weekly: hackathon, summer school, pitch evening, international challenge. Each event brings a poster, a social post and often a certificate, plus the recurring stationery.',
          'The difficulty is not the single piece but the volume. If every graphic is thought out from scratch, the presence falls apart into fragments. So a set of rules sits behind the work: the same violet, the same type family, the same arrangement of logo, date, venue and QR code. What changes is the imagery.',
        ],
      },
      {
        title: 'Four campaigns',
        body: [
          'Four pieces from live operation, each for a different occasion and a different channel. The hackathon flyer illustrates what the rules have to carry: six partner logos, a venue, a date and a QR code, and the poster still has to read from ten metres away.',
        ],
        wide: true,
        visual: {
          kind: 'gallery',
          caption: 'All pieces have been published. Click to open the full view.',
          works: campaignsEn,
        },
      },
      {
        title: 'The challenge in detail',
        body: [
          'The international challenge with WMGIC was the largest piece of work. Alongside poster and post came a deck explaining the format to participants: purpose, a two and a half day structure, three tracks, submission requirements and the judging criteria.',
          'The same logic applies as with the posters. One set of building blocks that every slide is assembled from, so that twelve slides read as one piece of work rather than twelve.',
        ],
        wide: true,
        visual: {
          kind: 'slides',
          title: 'Deck for the international challenge',
          caption: 'Eleven of twelve slides. The guest speaker slide is left out because it shows a person’s name and photograph. Drag sideways or use the arrow keys.',
          slides: slides(slideAltEn),
        },
      },
      {
        title: 'Stationery',
        body: [
          'Alongside the campaigns comes the recurring stationery: the certificate every summer school participant receives, and the business card handed out at every event.',
          'The certificate is shown here as a template with a placeholder name. The signature block at the foot has been removed because it carries three real signatures.',
        ],
        wide: true,
        visual: {
          kind: 'gallery',
          works: stationeryEn,
        },
      },
      {
        title: 'My role',
        body: [
          'As Head of Design I own the club’s visual identity and the design side of its marketing work. That covers concept and delivery of the campaigns, building reusable templates, and aligning within the team so that material can be produced without me.',
        ],
      },
    ],
  },
};
