# Abbildungen der Werkzeugseiten

Die Screenshots auf `/arbeit/bewerbungstracker` und `/arbeit/maps-scout`
entstehen mit diesen beiden Skripten, nicht von Hand. Wer die Oberfläche eines
Werkzeugs ändert, lässt das passende Skript erneut laufen und bekommt die
Bilder in derselben Größe und Ausrichtung zurück.

Gebraucht wird eine Python-Umgebung mit Playwright und Chromium:

```bash
pip install playwright
python -m playwright install chromium
```

## bewerbungstracker.py

Nimmt die öffentliche Demo unter
`bewerbungen-demo.bewerbungs-tracker.workers.dev` auf. Sie läuft mit
Beispieldaten, es sind also keine echten Bewerbungen zu sehen.

```bash
python tools/screenshots/bewerbungstracker.py
```

## maps-scout.py

Setzt voraus, dass Maps Scout lokal unter `127.0.0.1:8877` läuft.

```bash
python tools/screenshots/maps-scout.py
```

Zwei Dinge macht das Skript bewusst anders als ein Mensch am Bildschirm:

**Es sucht nicht.** Der Aufruf an `/api/scrape` wird abgefangen und gibt die
Kennung eines bereits gelaufenen Durchgangs zurück. Google wird dabei nicht
angefasst.

**Es anonymisiert.** Die lokale Datenbank enthält echte Betriebe mit echten
Rufnummern. Firmenname, Anschrift, Telefon und E-Mail werden im Browser durch
erfundene Angaben ersetzt, bevor ausgelöst wird. Bewertungen und Quoten bleiben
echt. Die Bildunterschrift auf der Seite sagt das auch so. Wer die Bilder neu
erzeugt, muss diesen Schritt beibehalten.
