import type { GalleryWork, StudyContent } from './study-types';

import uebersicht from '../assets/bewerbungstracker/uebersicht.png';
import verlauf from '../assets/bewerbungstracker/verlauf.png';
import sankey from '../assets/bewerbungstracker/sankey.png';

/**
 * Bewerbungstracker: eigenes Werkzeug für die Stellensuche.
 *
 * Die Abbildungen stammen aus der öffentlichen Demo, die mit Beispieldaten
 * läuft. Es sind also keine echten Bewerbungen zu sehen. Neu erzeugt werden
 * sie mit tools/screenshots/bewerbungstracker.py.
 */

const oberflaecheDe: GalleryWork[] = [
  {
    image: uebersicht,
    alt: 'Übersicht des Bewerbungstrackers mit fünf Kennzahlkacheln und einer Tabelle aus fünfzehn Bewerbungen, je Zeile Firma, Ort, Kanal, Gehalt, Datum, Status und Abschlussknöpfe',
    title: 'Übersicht',
    meta: [
      { term: 'Funktion', value: 'Alle Vorgänge in einer Tabelle, mit Suche über Firma, Rolle, Ort, Kanal und Status, Filterchips je Status und Sortierung nach Datum, Firma oder Gehalt' },
      {
        term: 'Nutzen',
        value: 'Der Stand der gesamten Suche steht auf einem Bildschirm. Der nächste Schritt einer Bewerbung ist ein Klick in derselben Zeile, es braucht keine Detailansicht.',
      },
    ],
  },
  {
    image: verlauf,
    alt: 'Fenster mit dem Verlauf einer Bewerbung: die Stationen Beworben, erstes Gespräch und zweites Gespräch mit jeweils eigenem Datum, darunter ein Auswahlfeld zum Ergänzen einer weiteren Station',
    title: 'Verlauf einer Bewerbung',
    meta: [
      { term: 'Funktion', value: 'Elf mögliche Stationen von geplant bis zurückgezogen, jede mit eigenem Datum, jederzeit nachträglich zu ändern' },
      {
        term: 'Nutzen',
        value: 'Eine späte Absage löscht nicht die Vorgeschichte. Damit bleibt auswertbar, nach welcher Station eine Bewerbung geendet hat.',
      },
    ],
  },
  {
    image: sankey,
    alt: 'Sankey-Diagramm des Bewerbungsflusses: vom Status Beworben verzweigen die Ströme in erstes, zweites und drittes Gespräch, Angebot und Zusage, mit Abzweigen für Absage, keine Antwort und zurückgezogen an jeder Station',
    title: 'Bewerbungsfluss',
    meta: [
      { term: 'Funktion', value: 'Sankey-Diagramm über alle Bewerbungen, von Hand als SVG gezeichnet, mit Bezierbändern und kollisionsfreier Beschriftung' },
      {
        term: 'Nutzen',
        value: 'Sichtbar wird die Stelle, an der der Trichter bricht. Wer nach dem ersten Gespräch abgelehnt wird, hat ein anderes Problem als jemand, der keine Antwort bekommt.',
      },
    ],
  },
];

const oberflaecheEn: GalleryWork[] = [
  {
    image: uebersicht,
    alt: 'Overview of the application tracker with five metric tiles and a table of fifteen applications, each row showing company, location, channel, salary, date, status and closing buttons',
    title: 'Overview',
    meta: [
      { term: 'Function', value: 'Every application in one table, with search across company, role, location, channel and status, status filter chips, and sorting by date, company or salary' },
      {
        term: 'Benefit',
        value: 'The state of the whole search fits on one screen. The next step for any application is one click in the same row, with no detail view in between.',
      },
    ],
  },
  {
    image: verlauf,
    alt: 'Dialog showing the history of one application: the stations applied, first interview and second interview, each with its own date, and a select field to add a further station',
    title: 'History of one application',
    meta: [
      { term: 'Function', value: 'Eleven possible stations from planned to withdrawn, each with its own date, editable at any time' },
      {
        term: 'Benefit',
        value: 'A late rejection does not erase what came before. That keeps it analysable at which station an application actually ended.',
      },
    ],
  },
  {
    image: sankey,
    alt: 'Sankey diagram of the application flow: from the applied status the streams branch into first, second and third interview, offer and acceptance, with branches for rejection, no answer and withdrawn at every station',
    title: 'Application flow',
    meta: [
      { term: 'Function', value: 'A Sankey diagram across all applications, drawn by hand as SVG with bezier ribbons and collision free labelling' },
      {
        term: 'Benefit',
        value: 'It shows where the funnel breaks. Being rejected after a first interview is a different problem from never hearing back.',
      },
    ],
  },
];

export const bewerbungstracker: Record<'de' | 'en', StudyContent> = {
  de: {
    eyebrow: 'Software · Eigenes Werkzeug',
    headline: ['Wo Bewerbungen', 'tatsächlich enden.'],
    lead: 'Ein Werkzeug für die eigene Stellensuche. Es speichert nicht einen Status, sondern den vollständigen Verlauf jeder Bewerbung, und zeigt in einem Sankey-Diagramm, an welcher Station der Prozess abbricht.',
    meta: [
      { term: 'Rolle', value: 'Konzept, Gestaltung und Entwicklung' },
      { term: 'Zeitraum', value: 'seit 2025' },
      { term: 'Technik', value: 'Cloudflare Workers, JavaScript, macOS' },
      { term: 'Stand', value: 'Im täglichen Eigengebrauch' },
    ],
    stats: {
      label: 'Eckdaten',
      items: [
        { value: '11', label: 'Stationen im Verlauf' },
        { value: '4', label: 'Sprachen, inklusive Rechts-nach-links' },
        { value: '0', label: 'externe Abhängigkeiten' },
        { value: '320 px', label: 'kleinste unterstützte Breite' },
      ],
    },

    sections: [
      {
        title: 'Die Ausgangslage',
        body: [
          'Eine Stellensuche erzeugt binnen weniger Wochen Dutzende paralleler Vorgänge: Anzeige gefunden, Unterlagen angepasst, abgeschickt, nachgefasst, Gespräch, Rückmeldung. Eine Tabelle trägt das eine Weile.',
          'Zwei Dinge kann sie nicht. Sie überschreibt beim Statuswechsel die Vorgeschichte, und sie beantwortet nicht die einzige Frage, die für das weitere Vorgehen zählt: an welcher Stelle die Bewerbungen versanden. Genau dafür ist dieses Werkzeug entstanden.',
        ],
      },
      {
        title: 'Ein Vorgang von Anfang bis Ende',
        body: [
          'Der Ablauf folgt dem, was in einer Stellensuche ohnehin passiert. Jeder Schritt ist so gebaut, dass er in wenigen Sekunden erledigt ist, sonst wird er im Alltag übersprungen und die Auswertung wertlos.',
        ],
        wide: true,
        visual: {
          kind: 'process',
          stepLabel: 'Schritt',
          benefitLabel: 'Was das Werkzeug beiträgt',
          steps: [
            {
              title: 'Erfassen',
              body: 'Firma, Rolle, Ort, Kanal und Gehalt eintragen. Eingabehilfen für rund 300 Arbeitgeber und 175 Orte, Firmenlogos über einen Favicon-Dienst mit farbiger Monogrammkachel als Rückfall.',
              benefit: 'Eine neue Bewerbung ist in unter einer Minute erfasst, statt in einer Tabelle Spalte für Spalte ausgefüllt zu werden.',
            },
            {
              title: 'Verlauf führen',
              body: 'Jedes Gespräch wird direkt in der Zeile angesetzt, beliebig oft. Die Stationen tragen eigene Daten und lassen sich nachträglich korrigieren.',
              benefit: 'Der Weg einer Bewerbung bleibt vollständig erhalten, auch wenn die Absage erst nach zwei Gesprächen kommt.',
            },
            {
              title: 'Auswerten',
              body: 'Das Sankey-Diagramm zeichnet alle Wege gleichzeitig. Endstatus zweigen dort ab, wo sie eingetreten sind, nicht gesammelt am Ende.',
              benefit: 'Aus fünfzehn Einzelfällen wird ein Muster, das man ansehen und jemandem zeigen kann.',
            },
            {
              title: 'Nachsteuern',
              body: 'Quoten je Übergang stehen unter dem Diagramm: von beworben zu Gespräch, von Gespräch zu Zusage, Zusagequote insgesamt.',
              benefit: 'Die Frage, ob die Unterlagen oder das Gesprächsverhalten das Nadelöhr sind, beantwortet eine Zahl statt eines Gefühls.',
            },
          ],
        },
      },
      {
        title: 'Die Oberfläche',
        body: [
          'Drei Ansichten tragen das Werkzeug: die Tabelle für den Überblick, der Verlauf für den Einzelfall, das Diagramm für die Auswertung. Mehr gibt es nicht, und mehr braucht es nicht.',
        ],
        wide: true,
        visual: {
          kind: 'gallery',
          caption:
            'Aufnahmen aus der öffentlichen Demo, die mit Beispieldaten läuft. Vier Sprachen inklusive Arabisch mit Rechts-nach-links-Satz, hell und dunkel nach Systemeinstellung, vom 320 Pixel breiten Telefon bis zum großen Bildschirm ohne seitliches Scrollen.',
          works: oberflaecheDe,
        },
      },
      {
        title: 'Entscheidungen, die Bestand haben sollen',
        body: [
          'Das Werkzeug soll in fünf Jahren noch starten. Diese vier Entscheidungen folgen daraus.',
        ],
        wide: true,
        visual: {
          kind: 'cards',
          items: [
            {
              title: 'Eine Datei für die Oberfläche',
              body: 'Kein Framework, kein Bundler. Die Anwendung läuft als statische Datei überall: lokal per Doppelklick, in einem WKWebView, hinter einem Worker. Der Preis ist eine große Datei, der Gewinn ist Haltbarkeit.',
            },
            {
              title: 'Passwortableitung im Browser',
              body: 'Cloudflare gibt im Gratistarif zehn Millisekunden Rechenzeit je Anfrage, zu wenig für sauberes Hashing. Deshalb rechnet der Browser PBKDF2 mit 400.000 Runden, der Server speichert davon nur einen gesalzenen SHA-256-Hash.',
            },
            {
              title: 'Sitzungen ohne Datenbankabfrage',
              body: 'Ein signiertes Cookie über Konto-Id und Ablauf statt einer Sitzungstabelle. Kein Lesezugriff je Anfrage, keine Verzögerung durch die letztkonsistente Ablage. Dafür 30 Tage Laufzeit als Abwägung.',
            },
            {
              title: 'Optimistische Nebenläufigkeit',
              body: 'Jeder Datensatz trägt eine Revision. Der Server lehnt ein Schreiben mit veralteter Revision ab und liefert seinen Stand mit, die Oberfläche legt beide vor. In einem Werkzeug, in dem Wochen an Arbeit stecken, ist stilles Überschreiben der schlimmste Fehler.',
            },
          ],
        },
      },
      {
        title: 'Stand',
        body: [
          'Das Werkzeug ist seit 2025 im täglichen Eigengebrauch. Die Demo läuft ohne Anmeldung mit Beispieldaten, nichts davon wird gespeichert. Der Quellcode ist offen.',
        ],
        visual: {
          kind: 'links',
          items: [
            {
              label: 'Demo ohne Anmeldung',
              href: 'https://bewerbungen-demo.bewerbungs-tracker.workers.dev',
              note: 'Beispieldaten, Änderungen bleiben im Tab',
            },
            {
              label: 'Quellcode',
              href: 'https://github.com/zay-ne/bewerbungs-tracker',
              note: 'Oberfläche, Worker und macOS-Hülle',
            },
          ],
        },
      },
    ],
  },

  en: {
    eyebrow: 'Software · Own tool',
    headline: ['Where applications', 'actually end.'],
    lead: 'A tool for my own job search. It stores not a status but the full history of every application, and shows in a Sankey diagram at which station the process breaks off.',
    meta: [
      { term: 'Role', value: 'Concept, design and engineering' },
      { term: 'Period', value: 'since 2025' },
      { term: 'Stack', value: 'Cloudflare Workers, JavaScript, macOS' },
      { term: 'Status', value: 'In daily personal use' },
    ],
    stats: {
      label: 'Key facts',
      items: [
        { value: '11', label: 'stations in the history' },
        { value: '4', label: 'languages, right to left included' },
        { value: '0', label: 'external dependencies' },
        { value: '320 px', label: 'smallest supported width' },
      ],
    },

    sections: [
      {
        title: 'The starting point',
        body: [
          'A job search produces dozens of parallel threads within weeks: posting found, documents adapted, sent, followed up, interviewed, answered. A spreadsheet carries that for a while.',
          'Two things it cannot do. It overwrites the history on every status change, and it does not answer the one question that matters for what to do next: where the applications stall. That is what this tool was built for.',
        ],
      },
      {
        title: 'One application from start to finish',
        body: [
          'The flow follows what a job search does anyway. Every step is built to take seconds, otherwise it gets skipped in daily use and the analysis becomes worthless.',
        ],
        wide: true,
        visual: {
          kind: 'process',
          stepLabel: 'Step',
          benefitLabel: 'What the tool contributes',
          steps: [
            {
              title: 'Capture',
              body: 'Company, role, location, channel and salary. Input suggestions for around 300 employers and 175 locations, company logos via a favicon service with a coloured monogram tile as fallback.',
              benefit: 'A new application is captured in under a minute, instead of filling a spreadsheet column by column.',
            },
            {
              title: 'Keep the history',
              body: 'Interviews are scheduled straight from the row, as often as needed. Stations carry their own dates and can be corrected afterwards.',
              benefit: 'The path of an application stays intact, even when the rejection only arrives after two interviews.',
            },
            {
              title: 'Analyse',
              body: 'The Sankey diagram draws every path at once. End states branch off where they occurred, not collected at the end.',
              benefit: 'Fifteen individual cases become a pattern you can look at and show to someone.',
            },
            {
              title: 'Adjust',
              body: 'Conversion rates per transition sit under the diagram: applied to interview, interview to offer, overall acceptance rate.',
              benefit: 'Whether the documents or the interviews are the bottleneck is answered by a number rather than a feeling.',
            },
          ],
        },
      },
      {
        title: 'The interface',
        body: [
          'Three views carry the tool: the table for the overview, the history for the individual case, the diagram for the analysis. There is nothing else, and nothing else is needed.',
        ],
        wide: true,
        visual: {
          kind: 'gallery',
          caption:
            'Captured from the public demo, which runs on sample data. Four languages including Arabic with right to left layout, light and dark following the system setting, from a 320 pixel phone to a large display without horizontal scrolling.',
          works: oberflaecheEn,
        },
      },
      {
        title: 'Decisions meant to last',
        body: ['The tool should still start in five years. These four decisions follow from that.'],
        wide: true,
        visual: {
          kind: 'cards',
          items: [
            {
              title: 'One file for the interface',
              body: 'No framework, no bundler. The app runs as a static file anywhere: locally by double click, inside a WKWebView, behind a Worker. The price is a large file, the gain is durability.',
            },
            {
              title: 'Password derivation in the browser',
              body: 'Cloudflare grants ten milliseconds of compute per request on the free tier, too little for proper hashing. So the browser runs PBKDF2 with 400,000 rounds and the server stores only a salted SHA-256 hash of the result.',
            },
            {
              title: 'Sessions without a database read',
              body: 'A signed cookie over account id and expiry instead of a session table. No read per request, no delay from eventually consistent storage. The trade is a 30 day lifetime.',
            },
            {
              title: 'Optimistic concurrency',
              body: 'Every record carries a revision. The server rejects a write with a stale revision and returns its own state, and the interface presents both. In a tool holding weeks of work, silent overwriting is the worst possible failure.',
            },
          ],
        },
      },
      {
        title: 'Status',
        body: [
          'The tool has been in daily personal use since 2025. The demo runs without sign in on sample data, none of which is stored. The source is open.',
        ],
        visual: {
          kind: 'links',
          items: [
            {
              label: 'Demo without sign in',
              href: 'https://bewerbungen-demo.bewerbungs-tracker.workers.dev',
              note: 'Sample data, changes stay in the tab',
            },
            {
              label: 'Source code',
              href: 'https://github.com/zay-ne/bewerbungs-tracker',
              note: 'Interface, worker and macOS shell',
            },
          ],
        },
      },
    ],
  },
};
