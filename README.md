# Portfolio

Zweisprachige Portfolio-Website (Deutsch als Standard, Englisch unter `/en/`).
Statisch gebaut mit Astro, gestaltet als ruhige, typografisch geführte Seite:
große Neo-Grotesk, Monospace für Metadaten, ein einziger Akzent in Elektroblau.

Die Inhalte stammen aus den fünf Bewerbungsfassungen (Sales, QM, Projekt-
management, Engineering, IT). Was sich daraus nicht ableiten ließ, ist im
Quelltext mit `TODO` markiert.

Bewusst **nicht** übernommen, weil die Seite öffentlich ist: Privatanschrift,
Telefonnummer und Geburtsdatum. Die gehören ins Bewerbungs-PDF und, soweit
gesetzlich nötig, ins Impressum, nicht auf die Startseite.

## Voraussetzungen

Node 20 oder neuer. Entwickelt und gebaut mit Node 26 und npm 11.

## Befehle

Alle Befehle im Ordner `portfolio` ausführen.

Abhängigkeiten installieren:

```bash
npm install
```

Entwicklungsserver auf http://localhost:4321 starten:

```bash
npm run dev
```

Für die Auslieferung nach `dist/` bauen:

```bash
npm run build
```

Typen und Astro-Vorlagen prüfen (läuft ohne Fehler durch):

```bash
npm run check
```

Den gebauten Stand lokal ansehen:

```bash
npm run preview
```

## Aufbau

```
src/
  consts.ts              Name, Domain, E-Mail, Profillinks, Disziplinen
  content.config.ts      Schema eines Projekts (Pflichtfelder, Typen)
  env.d.ts               Typdeklarationen für globale Fenster-Eigenschaften
  content/projects/
    de/*.md              Ein Projekt je Datei, deutsche Fassung
    en/*.md              Dieselben Projekte, englische Fassung
  data/cv.ts             Lebenslaufdaten, zweisprachig
  data/meedup.ts         Inhalte und Zahlen der meedup-Seite
  data/study-types.ts    Gemeinsame Struktur aller ausführlichen Seiten
  data/studies.ts        Zuordnung von `feature` zu den Studieninhalten
  data/vectra-study.ts   Inhalte und Messwerte der Vectra-H2-Studie
  data/week-study.ts     Inhalte und Messwerte der Wochenverlauf-Studie
  i18n/
    ui.ts                Sämtliche Oberflächentexte, DE und EN
    utils.ts             Sprache aus der URL, Routentabelle, Datumsformat
  lib/projects.ts        Projekte laden, sortieren, gruppieren
  components/            Kopf, Fuß, Projektliste, Hover-Vorschau, Icons …
  components/study/      Diagramme der ausführlichen Seiten, ohne Bibliothek
  layouts/               Ganze Seitentypen: Start, Projekt, Lebenslauf, Recht
  pages/                 Routen, dünne Hüllen um die Layouts
  styles/global.css      Farbtokens, Typoskala, Abstände, Bewegungssystem
```

Die Seiten unter `pages/` enthalten bewusst fast keine Auszeichnung. Sie reichen
nur Sprache und Gegenstück-URL an ein Layout weiter. Wer die Startseite ändern
will, bearbeitet `layouts/HomePage.astro`, nicht `pages/index.astro`.

## Ein neues Projekt anlegen

1. `src/content/projects/de/<kennung>.md` anlegen, eine bestehende Datei als
   Vorlage nehmen.
2. `key` auf dieselbe Kennung setzen. Daraus wird die URL `/arbeit/<kennung>`.
3. `discipline` bestimmt die Sektion: `software`, `research` oder `design`.
4. `order` steuert die Reihenfolge innerhalb der Sektion, kleiner steht weiter oben.
5. Dieselbe Datei unter `en/` mit gleichem `key` und `lang: en` anlegen.

Fehlt die englische Fassung, erscheint das Projekt dort schlicht nicht und der
Sprachumschalter führt auf die englische Startseite statt in eine Fehlerseite.

Ein Titelbild ist optional: `cover: "/work/<kennung>.jpg"` und die Datei unter
`public/work/` ablegen. Ohne Bild zeigen Vorschau und Detailseite eine
gestaltete typografische Fläche.

## Was noch offen ist

**Impressum.** `src/pages/impressum.astro` nennt bisher nur Name und
E-Mail-Adresse. Nach § 5 DDG gehören bei geschäftlicher Nutzung zusätzlich
dazu: ladungsfähige Anschrift (ein Postfach genügt nicht), Telefonnummer,
Umsatzsteuer-Identifikationsnummer sofern vorhanden, und bei freien Berufen
Kammer, Berufsbezeichnung und Staat der Verleihung. Dasselbe in
`src/pages/en/imprint.astro`.

**Datenschutz.** Der Abschnitt zu den Server-Logdateien braucht die Angaben des
Hosters. Für GitHub Pages stehen sie in deren Datenschutzerklärung.

Danach, nach Wichtigkeit:

- Verbleibende `TODO`-Absätze in den Projektdateien. Das sind fast durchweg
  Ergebnisse und Zahlen: durchgeführte Challenges bei meedup, Referenzprojekte
  bei zayne, Reichweiten bei den ECM-Arbeiten. Sie erscheinen nicht auf der
  Seite, siehe unten unter Konventionen.
- `src/content/projects/*/ecm-kampagnen.md` ist inhaltlich noch sehr dünn.
  Entweder füllen oder vorübergehend auf `draft: true` setzen.
- Bei Maps Scout steht ein `TODO` zur Abwägung: das Werkzeug liest öffentlich
  sichtbare Google-Maps-Daten, was den dortigen Nutzungsbedingungen
  widerspricht. Entscheide, ob das Projekt öffentlich gezeigt werden soll.
- Lebenslauf-PDF unter `public/` ablegen und in `src/data/cv.ts` bei `CV_PDF`
  eintragen. Solange dort `null` steht, erscheint der Download-Knopf nicht.
- `public/og.png` (1200 x 630) für Vorschaubilder beim Teilen anlegen.
- Titelbilder unter `public/work/` ablegen und im Frontmatter als `cover`
  eintragen.

## Projekte mit eigenem Layout

Die meisten Projekte laufen über `layouts/ProjectPage.astro` und bestehen aus
dem Fließtext ihrer Markdown-Datei. Arbeiten, die mehr brauchen, bekommen ein
eigenes Layout. Dafür gibt es im Frontmatter das Feld `feature`. Ist es
gesetzt, rendert `layouts/StudyPage.astro` die Seite, und der Fließtext der
Markdown-Datei wird nicht verwendet. Die Datei bleibt trotzdem nötig, damit das
Projekt in der Übersicht erscheint.

Bislang nutzen das drei Arbeiten:

| `feature`           | Inhalte in                  |
| ------------------- | --------------------------- |
| `meedup`            | `src/data/meedup.ts`        |
| `vectra-h2`         | `src/data/vectra-study.ts`  |
| `periorbital-week`  | `src/data/week-study.ts`    |

Alle teilen sich ein Layout. Eine Arbeit beschreibt ihre Abschnitte als Liste,
und jeder Abschnitt kann eine Grafik tragen, die über das Feld `kind` gewählt
wird. Verfügbar sind:

| `kind`     | zeigt                                                    |
| ---------- | -------------------------------------------------------- |
| `figures`  | große Kennzahlen mit Beschriftung und Quelle             |
| `bars`     | waagerechte Balken mit Standardabweichung                |
| `icc`      | Werte auf einer Skala von 0 bis 1 mit Bewertungsbereichen |
| `timeline` | Zeitverlauf mit Intervallbändern und Schwellenlinie       |
| `process`  | nummerierter Ablauf, je Schritt mit Nutzen               |
| `cards`    | gleichrangige Kurztexte nebeneinander                    |
| `table`    | Vergleichstabelle mit hervorgehobener Zeile              |
| `modes`    | die fünf Messbereiche der Vectra-Studie als Schema        |

Die Typen dazu stehen in `src/data/study-types.ts`, die Zuordnung von `feature`
zu Inhalt in `src/data/studies.ts`. Eine weitere Arbeit braucht also eine
Datendatei, einen Eintrag in der Registry und einen im Schema.

Der Abschnitt zu den Beteiligten ist optional. Fehlt `credits`, entfällt er.
Externe Links kommen aus dem Frontmatter der Projektdatei, nicht aus der
Inhaltsdatei.

Die Grafiken liegen unter `src/components/study/` und sind von Hand gezeichnetes
Inline-SVG und CSS, ohne Diagrammbibliothek. Sie beziehen ihre Farben aus
denselben Tokens wie der Rest der Seite und funktionieren dadurch in hell und
dunkel gleichermaßen. Sämtliche Zahlen stammen aus den Manuskripten und sind in
den Datendateien mit der jeweiligen Tabelle belegt. Originalabbildungen aus den
Papers wurden bewusst nicht eingebunden, sondern neu gezeichnet.

Die Namen der Mitwirkenden stehen ausschließlich als Initialen im Quelltext.
Enthält ein Manuskript keine Aufschlüsselung der Beiträge, zeigt die Seite nur
die Autorenliste ohne Rollen.

## Konventionen

**TODO-Notizen erscheinen nie auf der Seite.** Ein Absatz oder Listenpunkt, der
mit `TODO` beginnt, wird beim Bauen aus dem Markdown entfernt, ebenso eine
Überschrift, unter der dadurch nichts mehr steht. Der Vermerk bleibt in der
Datei stehen und dient als Erinnerung. Die Regel steckt als kleines
rehype-Plugin in `astro.config.mjs`. Wer sie abschalten will, entfernt dort den
Eintrag unter `markdown.rehypePlugins`.

**Kein Gedankenstrich mitten im Satz.** Weder im Fließtext der Seite noch in
Kommentaren. Wo sich ein Einschub aufdrängt, steht stattdessen ein Komma, ein
Doppelpunkt oder ein Punkt. Bindestriche in zusammengesetzten Wörtern
(Soft-Skills, meedup-Netzwerk) und Bis-Striche in Jahresangaben sind davon
nicht betroffen.

**Farben nur über Tokens.** In Komponenten steht nie ein Hex-Wert, sondern
`var(--color-fg)`, `var(--color-accent)` und so weiter. Die hellen und dunklen
Werte stehen zusammen in `global.css`, damit beide Fassungen sich nicht
auseinanderentwickeln.

**Scroll-Einblendungen laufen über das Attribut `data-reveal`,** nicht über eine
Komponente. Grund: Astro hängt seinen Scope-Hash nicht an Klassen, die als
Eigenschaft an eine Komponente gehen. `<Reveal class="hero-top">` hätte die
Layoutregeln zu `.hero-top` stillschweigend verworfen. Ein natives Element mit
`data-reveal` und optionalem `style="--reveal-delay:200ms"` umgeht das.

**Die Nummerierung der Sektionen entsteht automatisch** aus der Reihenfolge in
`DISCIPLINES` (`src/consts.ts`). Kommt eine Disziplin dazu oder fällt eine weg,
verschieben sich alle Nummern korrekt mit, ohne dass irgendwo eine Zahl von
Hand geändert werden muss.

**Schriftgrößen großer Überschriften laufen über Custom Properties.** Eine Seite
verstellt sie über ein Elternelement (`--display-size`, `--heading-lg-size`),
statt die globale Klasse zu überschreiben.

**Bewegung ist Zugabe, nie Voraussetzung.** Ohne JavaScript, bei reduzierter
Bewegung und falls das Modul-Skript ausbleibt, steht der gesamte Inhalt sofort
und vollständig da. Ein Wächter im Seitenkopf sorgt dafür.

**Schriften kommen vom eigenen Server.** Astros Fonts-API lädt Archivo und
JetBrains Mono zur Buildzeit herunter. Im Browser geht keine Anfrage an Google,
und es gibt keine Cookies und keine externen Einbettungen, was der
Datenschutzhinweis auch so beschreibt. Kommt später ein eingebettetes Video oder
ein Analysewerkzeug dazu, muss dieser Abschnitt angepasst werden.

## Ausliefern

Die Seite liegt unter **https://schedisamet.de** und wird über GitHub Pages
ausgeliefert. Jeder Push auf `main` stößt den Workflow in
`.github/workflows/deploy.yml` an, der die Seite baut und veröffentlicht. Ein
manueller Schritt ist nicht nötig.

Die Domain ist bei IONOS registriert. Die dort nötigen DNS-Einträge stehen in
der GitHub-Dokumentation unter „Managing a custom domain for your GitHub Pages
site". Ändert sich die Domain, müssen drei Stellen mitgezogen werden:
`site` in `astro.config.mjs`, `public/CNAME` und `public/robots.txt`.

Lokal bauen und den fertigen Stand ansehen:

```bash
npm run build && npm run preview
```
