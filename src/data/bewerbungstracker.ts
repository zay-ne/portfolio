import type { GalleryWork, StudyContent } from './study-types';

import uebersicht from '../assets/bewerbungstracker/uebersicht.png';
import verlauf from '../assets/bewerbungstracker/verlauf.png';
import sankey from '../assets/bewerbungstracker/sankey.png';

/**
 * Bewerbungstracker: eigenes Werkzeug für die Stellensuche.
 *
 * Die Seite ist als Gegenentwurf zur Bewerbungstabelle aufgebaut. Deshalb
 * stehen die vier Funktionen vorn und danach die Gegenüberstellung, nicht
 * Kennzahlen: bei einem Werkzeug in der Betaphase sagt die Funktion mehr als
 * eine Zahl.
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
    headline: ['Was die Tabelle', 'nicht leisten kann.'],
    lead: 'Ein Werkzeug für die eigene Stellensuche, gebaut als Ersatz für die Bewerbungstabelle. Es speichert nicht einen Status, sondern dokumentiert jede Station mit Datum, rechnet die Quoten selbst und zeigt in einem Sankey-Diagramm, an welcher Stelle der Prozess abbricht.',
    meta: [
      { term: 'Rolle', value: 'Konzept, Gestaltung und Entwicklung' },
      { term: 'Zeitraum', value: 'seit 2025' },
      { term: 'Technik', value: 'Cloudflare Workers, JavaScript, macOS' },
      { term: 'Stand', value: 'Betaphase, im täglichen Eigengebrauch' },
    ],

    sections: [
      {
        title: 'Vier Funktionen',
        body: [
          'Zwei davon rechnen aus, was in einer Tabelle nur zwischen den Zeilen steht. Die anderen zwei nehmen bei der Erfassung und beim Wiederfinden Arbeit ab.',
        ],
        wide: true,
        visual: {
          kind: 'cards',
          items: [
            {
              title: 'Sankey-Diagramm',
              body: 'Der Trichter über alle Bewerbungen in einem Bild. Endstatus zweigen dort ab, wo sie eingetreten sind, sodass eine Absage nach dem ersten Gespräch nicht im selben Topf landet wie eine Absage direkt nach dem Verschicken.',
            },
            {
              title: 'Dokumentation',
              body: 'Elf Stationen von geplant bis zurückgezogen, jede mit eigenem Datum. Dazu Kanal, Gehalt nach Betrag, Art und Zeitraum, Arbeitszeit, Bewerbungsschluss und die Adresse der Stellenanzeige.',
            },
            {
              title: 'Bewerbungsstatistiken',
              body: 'Quoten je Übergang: von beworben zu Gespräch, von Gespräch zu Zusage, Zusagequote insgesamt. Darüber die Kennzahlen zu laufenden, entschiedenen und offenen Vorgängen.',
            },
            {
              title: 'Sortierfunktion',
              body: 'Sortierung nach Datum, Status, Firma oder Gehalt in beide Richtungen, Suche über fünf Felder gleichzeitig und Filterchips je Status. Die Wahl bleibt pro Gerät gespeichert.',
            },
          ],
        },
      },
      {
        title: 'Warum nicht einfach eine Tabelle',
        body: [
          'Fast jede Stellensuche beginnt mit einer Tabelle, und eine Weile trägt sie das auch. Zwei Dinge kann sie jedoch grundsätzlich nicht.',
          'Sie überschreibt beim Statuswechsel die Vorgeschichte, und sie beantwortet nicht die Frage, die für das weitere Vorgehen zählt: an welcher Stelle die Bewerbungen versanden. Alles Übrige folgt daraus.',
        ],
        wide: true,
        visual: {
          kind: 'compare',
          columns: ['Bewerbungstabelle', 'Bewerbungstracker'],
          caption:
            'Links der Stand, mit dem die meisten Bewerbungsprozesse geführt werden. Rechts, was das Werkzeug an derselben Stelle tut.',
          rows: [
            {
              aspect: 'Statuswechsel',
              a: 'Die Zelle wird überschrieben. Nach der Absage steht nicht mehr da, dass zuvor zwei Gespräche stattgefunden haben.',
              b: 'Jede Station bleibt mit eigenem Datum erhalten und ist nachträglich korrigierbar.',
            },
            {
              aspect: 'Auswertung',
              a: 'Zeilen zählen, Zwischensummen bilden, ein Diagramm von Hand bauen. Meist bleibt es beim Zählen.',
              b: 'Sankey-Diagramm und Quoten je Übergang entstehen aus den Daten selbst, ohne Zutun.',
            },
            {
              aspect: 'Erfassung',
              a: 'Jede Spalte einzeln tippen. Nach zwanzig Bewerbungen laufen die Schreibweisen auseinander und die Suche findet nichts mehr.',
              b: 'Eingabehilfe für rund 300 Arbeitgeber und 175 Orte, Kanäle als Symbol, Gehalt strukturiert nach Betrag, Art und Zeitraum.',
            },
            {
              aspect: 'Nächster Schritt',
              a: 'Steht nirgends. Wo nachzufassen wäre, muss man selbst im Kopf behalten.',
              b: 'Ein Knopf in derselben Zeile: Gespräch ansetzen, Zusage, Absage, keine Antwort.',
            },
            {
              aspect: 'Zwei Geräte',
              a: 'Die Datei hin und her schicken und hoffen, dass die neuere Fassung gewinnt.',
              b: 'Konto mit Synchronisierung. Bei gleichzeitigen Änderungen legt die Oberfläche beide Stände vor und fragt, welcher gilt.',
            },
            {
              aspect: 'Auf dem Telefon',
              a: 'Seitliches Scrollen durch zwanzig Spalten.',
              b: 'Ab 320 Pixeln lesbar, je Bewerbung eine Karte statt einer Zeile.',
            },
          ],
        },
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
          'Das Werkzeug ist in der Betaphase und im täglichen Eigengebrauch. Es wird weiterentwickelt, Oberfläche und Datensatz können sich also noch ändern.',
          'Die Demo läuft ohne Anmeldung mit Beispieldaten, nichts davon wird gespeichert. Der Quellcode ist offen.',
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
    headline: ['What a spreadsheet', 'cannot do.'],
    lead: 'A tool for my own job search, built to replace the application spreadsheet. It stores not a status but documents every station with its date, works out the conversion rates itself, and shows in a Sankey diagram where the process breaks off.',
    meta: [
      { term: 'Role', value: 'Concept, design and engineering' },
      { term: 'Period', value: 'since 2025' },
      { term: 'Stack', value: 'Cloudflare Workers, JavaScript, macOS' },
      { term: 'Status', value: 'Beta, in daily personal use' },
    ],

    sections: [
      {
        title: 'Four functions',
        body: [
          'Two of them work out what a spreadsheet only holds between the lines. The other two take work off capturing and finding things again.',
        ],
        wide: true,
        visual: {
          kind: 'cards',
          items: [
            {
              title: 'Sankey diagram',
              body: 'The funnel across every application in one picture. End states branch off where they occurred, so a rejection after a first interview does not land in the same bucket as a rejection straight after sending.',
            },
            {
              title: 'Documentation',
              body: 'Eleven stations from planned to withdrawn, each with its own date. Plus channel, salary by amount, type and period, working hours, application deadline and the address of the posting.',
            },
            {
              title: 'Application statistics',
              body: 'Conversion per transition: applied to interview, interview to offer, overall acceptance rate. Above that the figures for open, decided and running cases.',
            },
            {
              title: 'Sorting',
              body: 'Sort by date, status, company or salary in both directions, search across five fields at once, and status filter chips. The choice is remembered per device.',
            },
          ],
        },
      },
      {
        title: 'Why not simply a spreadsheet',
        body: [
          'Almost every job search starts with a spreadsheet, and for a while it carries the load. Two things it fundamentally cannot do.',
          'It overwrites the history on every status change, and it does not answer the question that matters for what to do next: where the applications stall. Everything else follows from that.',
        ],
        wide: true,
        visual: {
          kind: 'compare',
          columns: ['Spreadsheet', 'Application tracker'],
          caption:
            'On the left, how most job searches are actually run. On the right, what the tool does at the same point.',
          rows: [
            {
              aspect: 'Status change',
              a: 'The cell is overwritten. After the rejection there is no record that two interviews happened first.',
              b: 'Every station is kept with its own date and can be corrected afterwards.',
            },
            {
              aspect: 'Analysis',
              a: 'Count rows, build subtotals, draw a chart by hand. Usually it stops at counting.',
              b: 'The Sankey diagram and the conversion rates come out of the data itself, with no extra effort.',
            },
            {
              aspect: 'Capturing',
              a: 'Type every column by hand. After twenty applications the spellings drift apart and search stops finding anything.',
              b: 'Suggestions for around 300 employers and 175 locations, channels as icons, salary structured by amount, type and period.',
            },
            {
              aspect: 'Next step',
              a: 'Recorded nowhere. Where a follow up is due is something you have to hold in your head.',
              b: 'A button in the same row: schedule an interview, accept, reject, no answer.',
            },
            {
              aspect: 'Two devices',
              a: 'Send the file back and forth and hope the newer version wins.',
              b: 'An account with sync. On simultaneous edits the interface presents both states and asks which one holds.',
            },
            {
              aspect: 'On a phone',
              a: 'Horizontal scrolling through twenty columns.',
              b: 'Readable from 320 pixels, one card per application instead of one row.',
            },
          ],
        },
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
          'The tool is in beta and in daily personal use. It is still being developed, so the interface and the data model may still change.',
          'The demo runs without sign in on sample data, none of which is stored. The source is open.',
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
