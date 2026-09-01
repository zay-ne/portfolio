import type { GalleryWork, StudyContent } from './study-types';

import suche from '../assets/maps-scout/suche.png';
import treffer from '../assets/maps-scout/treffer.png';
import kachel from '../assets/maps-scout/kachel.png';

/**
 * Maps Scout: lokales Werkzeug zur Marktanalyse.
 *
 * Die Abbildungen stammen aus einem echten Durchgang, die Firmenangaben darin
 * sind jedoch durch erfundene ersetzt. Auf der Seite steht das auch so. Neu
 * erzeugt werden sie mit tools/screenshots/maps-scout.py, das die
 * Anonymisierung mitbringt.
 */

const oberflaecheDe: GalleryWork[] = [
  {
    image: suche,
    alt: 'Suchmaske von Maps Scout: Feld für den Ort, sechs ausgewählte Branchen als Marken, Schalter für deutschlandweite Suche, Regler für Umkreis und Mindestbewertung, Auswahl für Website vorhanden und Knopf Suchen',
    title: 'Suchmaske',
    meta: [
      { term: 'Funktion', value: 'Ort mit Vorschlägen, bis zu sechs Branchen gleichzeitig, Umkreis, Mindestbewertung und Website als Vorfilter, dazu ein Modus für die bundesweite Suche' },
      {
        term: 'Nutzen',
        value: 'Die Filter greifen vor dem Sammeln, nicht danach. Wer ohnehin nur Betriebe ohne Website sucht, wartet nicht darauf, dass die übrigen erst angereichert werden.',
      },
    ],
  },
  {
    image: treffer,
    alt: 'Trefferansicht von Maps Scout: Filterleiste mit den Schaltern Alle, Mit Website und Ohne Website, Freitextsuche, Knopf CSV exportieren, darunter eine Zusammenfassung und ein Raster aus Kacheln je Betrieb',
    title: 'Treffer',
    meta: [
      { term: 'Funktion', value: 'Nachfilter auf das geladene Ergebnis, Freitextsuche über Name, Branche und Adresse, Zusammenfassung über Website- und E-Mail-Quote, CSV-Ausgabe der gefilterten Auswahl' },
      {
        term: 'Nutzen',
        value: 'Aus 148 Treffern wird die Teilmenge, die tatsächlich interessiert, ohne die Suche erneut laufen zu lassen.',
      },
    ],
  },
  {
    image: kachel,
    alt: 'Zwei Kacheln nebeneinander: je Betrieb Name, Anschrift, Branche, Bewertung, Hinweis auf vorhandene oder fehlende Website, Entfernung, Öffnungsstatus, Telefonnummer und E-Mail-Adresse',
    title: 'Eine Kachel je Betrieb',
    meta: [
      { term: 'Funktion', value: 'Branche, Bewertung, Website, Entfernung und Öffnungsstatus als Marken, Telefonnummer automatisch, E-Mail-Adresse auf Knopfdruck von der Firmenwebsite' },
      {
        term: 'Nutzen',
        value: 'Ob ein Betrieb für eine Ansprache infrage kommt, entscheidet sich an der Kachel. Es braucht keinen Wechsel zu Google Maps und zurück.',
      },
    ],
  },
];

const oberflaecheEn: GalleryWork[] = [
  {
    image: suche,
    alt: 'Maps Scout search form: a location field, six selected sectors as tags, a nationwide search toggle, sliders for radius and minimum rating, a website filter and a search button',
    title: 'Search form',
    meta: [
      { term: 'Function', value: 'Location with suggestions, up to six sectors at once, radius, minimum rating and website presence as pre filters, plus a nationwide mode' },
      {
        term: 'Benefit',
        value: 'The filters apply before collection, not after. Looking only for businesses without a website means not waiting for the others to be enriched first.',
      },
    ],
  },
  {
    image: treffer,
    alt: 'Maps Scout results view: a filter bar with all, with website and without website, a free text search, a CSV export button, a summary line and a grid of cards, one per business',
    title: 'Results',
    meta: [
      { term: 'Function', value: 'Post filters on the loaded result, free text search across name, sector and address, a summary of website and email coverage, CSV export of the filtered selection' },
      {
        term: 'Benefit',
        value: 'From 148 hits down to the subset that actually matters, without running the search again.',
      },
    ],
  },
  {
    image: kachel,
    alt: 'Two cards side by side: per business the name, address, sector, rating, whether a website exists, distance, opening status, phone number and email address',
    title: 'One card per business',
    meta: [
      { term: 'Function', value: 'Sector, rating, website, distance and opening status as tags, phone number automatically, email address on demand from the company website' },
      {
        term: 'Benefit',
        value: 'Whether a business is worth approaching is decided on the card. No switching to Google Maps and back.',
      },
    ],
  },
];

export const mapsScout: Record<'de' | 'en', StudyContent> = {
  de: {
    eyebrow: 'Software · Eigenes Werkzeug',
    headline: ['Wer ist hier tätig,', 'und wem fehlt', 'die Website?'],
    lead: 'Ein lokales Werkzeug für die Marktanalyse einer Region. Es sucht Betriebe nach Ort und Branche, filtert nach Bewertung und Website und legt die Kontaktdaten übersichtlich nebeneinander. Alles bleibt auf dem eigenen Rechner.',
    meta: [
      { term: 'Rolle', value: 'Konzept und Entwicklung' },
      { term: 'Zeitraum', value: 'seit 2025' },
      { term: 'Technik', value: 'Python, FastAPI, SQLite, HTML, CSS, JS' },
      { term: 'Stand', value: 'Läuft lokal, wird weiterentwickelt' },
    ],
    stats: {
      label: 'Aus einem Durchgang',
      items: [
        { value: '6', label: 'Branchen gleichzeitig' },
        { value: '148', label: 'Betriebe im abgebildeten Lauf' },
        { value: '82 %', label: 'davon mit eigener Website' },
        { value: 'lokal', label: 'Datenhaltung, ohne gemeinsamen Server' },
      ],
    },

    sections: [
      {
        title: 'Die Ausgangslage',
        body: [
          'Die Marktanalyse einer Region beginnt fast immer gleich. Wer ist hier tätig, wie sichtbar sind die Betriebe, und wo fehlt eine digitale Präsenz erkennbar? Von Hand kostet diese Recherche Stunden, Ort für Ort und Branche für Branche.',
          'Am Ende steht eine Tabelle, die niemand mehr anfasst, weil das Zusammentragen länger gedauert hat als die Frage wert war. Das Werkzeug bündelt genau diesen Schritt.',
        ],
      },
      {
        title: 'Vom Ort zur belastbaren Liste',
        body: [
          'Vier Schritte, und jeder davon ist so gebaut, dass die Oberfläche bedienbar bleibt, während im Hintergrund gesammelt wird.',
        ],
        wide: true,
        visual: {
          kind: 'process',
          stepLabel: 'Schritt',
          benefitLabel: 'Was das Werkzeug beiträgt',
          steps: [
            {
              title: 'Zuschnitt festlegen',
              body: 'Ort mit Live-Vorschlägen über OpenStreetMap und Photon, bis zu sechs Branchen gleichzeitig, Umkreis von einem bis fünfzig Kilometern. Wahlweise auch bundesweit.',
              benefit: 'Der Zuschnitt einer Analyse ist in einer halben Minute gesetzt, statt in mehreren Suchläufen zusammengeklickt zu werden.',
            },
            {
              title: 'Vor dem Sammeln filtern',
              body: 'Mindestbewertung und Website vorhanden oder fehlend greifen bereits während des Durchgangs, nicht erst auf dem Ergebnis.',
              benefit: 'Betriebe, die ohnehin nicht infrage kommen, werden gar nicht erst angereichert. Das spart den größten Teil der Laufzeit.',
            },
            {
              title: 'Im Hintergrund sammeln',
              body: 'Lange Durchgänge laufen als Hintergrundjob mit Fortschrittsanzeige und Stoppknopf. Die Ergebnisse landen fortlaufend in einer lokalen SQLite-Datei.',
              benefit: 'Die Oberfläche bleibt bedienbar, und ein Abbruch verliert nicht, was bis dahin gesammelt wurde.',
            },
            {
              title: 'Auswerten und übergeben',
              body: 'Nachfilter und Freitextsuche auf dem geladenen Ergebnis, E-Mail-Adresse auf Knopfdruck von der Firmenwebsite, CSV-Ausgabe der gefilterten Auswahl.',
              benefit: 'Aus der Recherche wird eine Datei, mit der jemand anderes weiterarbeiten kann.',
            },
          ],
        },
      },
      {
        title: 'Die Oberfläche',
        body: [
          'Bewusst ohne Build-Werkzeug gebaut: reines HTML, CSS und JavaScript vor einem FastAPI-Backend. Wer das Werkzeug einsetzen will, braucht Python und sonst nichts.',
        ],
        wide: true,
        visual: {
          kind: 'gallery',
          caption:
            'Aufnahmen aus einem echten Durchgang. Firmenname, Anschrift, Telefonnummer und E-Mail-Adresse sind für diese Seite durch erfundene Angaben ersetzt, Bewertungen und Quoten stammen aus dem Lauf selbst.',
          works: oberflaecheDe,
        },
      },
      {
        title: 'Grenzen, die dazugehören',
        body: [
          'Das Werkzeug liest öffentlich sichtbare Angaben aus Google Maps aus. Das steht im Widerspruch zu den dortigen Nutzungsbedingungen, und die Oberfläche weist an Ort und Stelle darauf hin. Gedacht ist es für die interne Marktanalyse, nicht für Kaltakquise, und es kommt entsprechend zurückhaltend zum Einsatz.',
          'Es gibt keine gemeinsame Instanz und keinen Server im Netz. Wer es benutzt, installiert es selbst, und die erhobenen Daten liegen in einer SQLite-Datei auf dem eigenen Rechner. Diese Entscheidung ist bewusst getroffen: ein zentraler Dienst mit den gleichen Daten wäre eine ganz andere Sache, rechtlich wie im Umgang mit den betroffenen Betrieben.',
        ],
      },
      {
        title: 'Stand',
        body: [
          'Das Werkzeug läuft lokal und wird weiterentwickelt. Der Quellcode ist offen, die Liesmich beschreibt Einrichtung und Betrieb einschließlich der genannten Einschränkung.',
        ],
        visual: {
          kind: 'links',
          items: [
            {
              label: 'Quellcode',
              href: 'https://github.com/zay-ne/maps-scout',
              note: 'Backend, Oberfläche und Einrichtung',
            },
          ],
        },
      },
    ],
  },

  en: {
    eyebrow: 'Software · Own tool',
    headline: ['Who operates here,', 'and who is missing', 'a website?'],
    lead: 'A local tool for market research on a region. It finds businesses by location and sector, filters by rating and website presence, and lays the contact details out side by side. Everything stays on your own machine.',
    meta: [
      { term: 'Role', value: 'Concept and engineering' },
      { term: 'Period', value: 'since 2025' },
      { term: 'Stack', value: 'Python, FastAPI, SQLite, HTML, CSS, JS' },
      { term: 'Status', value: 'Runs locally, still in development' },
    ],
    stats: {
      label: 'From one run',
      items: [
        { value: '6', label: 'sectors at once' },
        { value: '148', label: 'businesses in the run shown' },
        { value: '82 %', label: 'of them with their own website' },
        { value: 'local', label: 'storage, with no shared server' },
      ],
    },

    sections: [
      {
        title: 'The starting point',
        body: [
          'Market research on a region almost always starts the same way. Who operates here, how visible are they, and where is a digital presence obviously missing? By hand that research costs hours, location by location and sector by sector.',
          'What remains is a spreadsheet nobody opens again, because gathering it took longer than the question was worth. The tool bundles exactly that step.',
        ],
      },
      {
        title: 'From a location to a usable list',
        body: [
          'Four steps, each built so the interface stays usable while collection runs in the background.',
        ],
        wide: true,
        visual: {
          kind: 'process',
          stepLabel: 'Step',
          benefitLabel: 'What the tool contributes',
          steps: [
            {
              title: 'Set the scope',
              body: 'Location with live suggestions via OpenStreetMap and Photon, up to six sectors at once, a radius from one to fifty kilometres. Nationwide as an option.',
              benefit: 'The scope of an analysis is set in half a minute, instead of being assembled across several separate searches.',
            },
            {
              title: 'Filter before collecting',
              body: 'Minimum rating and website present or missing apply during the run, not afterwards on the result.',
              benefit: 'Businesses that are out of scope anyway are never enriched. That saves the bulk of the runtime.',
            },
            {
              title: 'Collect in the background',
              body: 'Long runs execute as a background job with progress and a stop button. Results land continuously in a local SQLite file.',
              benefit: 'The interface stays usable, and stopping does not lose what has been collected so far.',
            },
            {
              title: 'Analyse and hand over',
              body: 'Post filters and free text search on the loaded result, email address on demand from the company website, CSV export of the filtered selection.',
              benefit: 'The research becomes a file somebody else can work from.',
            },
          ],
        },
      },
      {
        title: 'The interface',
        body: [
          'Built deliberately without a build tool: plain HTML, CSS and JavaScript in front of a FastAPI backend. Running it takes Python and nothing else.',
        ],
        wide: true,
        visual: {
          kind: 'gallery',
          caption:
            'Captured from a real run. Company names, addresses, phone numbers and email addresses have been replaced with invented ones for this page; ratings and coverage figures come from the run itself.',
          works: oberflaecheEn,
        },
      },
      {
        title: 'Limits that come with it',
        body: [
          'The tool reads publicly visible information from Google Maps. That conflicts with their terms of use, and the interface says so on the spot. It is meant for internal market research, not for cold outreach, and it is used accordingly sparingly.',
          'There is no shared instance and no server on the internet. Anyone using it installs their own, and the collected data sits in a SQLite file on their machine. That is a deliberate decision: a central service holding the same data would be an entirely different proposition, legally and in how it treats the businesses concerned.',
        ],
      },
      {
        title: 'Status',
        body: [
          'The tool runs locally and is still being developed. The source is open, and the readme covers setup and operation including the limitation above.',
        ],
        visual: {
          kind: 'links',
          items: [
            {
              label: 'Source code',
              href: 'https://github.com/zay-ne/maps-scout',
              note: 'Backend, interface and setup',
            },
          ],
        },
      },
    ],
  },
};
