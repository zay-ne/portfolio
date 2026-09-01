"""Screenshots von Maps Scout für die Portfolio-Seite.

Die lokale Datenbank enthält echte Betriebe mit echten Rufnummern. Für die
Abbildungen werden Name, Anschrift, Telefon und E-Mail im Browser durch
erfundene Angaben ersetzt, bevor ausgelöst wird. Auf die Platte geschrieben
wird nur das fertige Bild, die Datenbank bleibt unberührt.

Gesucht wird ebenfalls nicht: der Aufruf an /api/scrape wird abgefangen und
gibt die Kennung eines bereits gelaufenen Durchgangs zurück. Google wird also
nicht angefasst.
"""
import pathlib
from playwright.sync_api import sync_playwright

OUT = pathlib.Path(__file__).resolve().parents[2] / "src/assets/maps-scout"
OUT.mkdir(parents=True, exist_ok=True)
URL = "http://127.0.0.1:8877"
JOB = "dc79b9221ad1"  # Bonn, 11 km, 148 Treffer mit Bewertung, Website und E-Mail

PATCH_FETCH = """
(job => {
  const json = data => new Response(JSON.stringify(data),
    { headers: { 'Content-Type': 'application/json' } });
  const real = window.fetch;
  window.fetch = (input, init) => {
    const url = typeof input === 'string' ? input : input.url;
    if (url.includes('/api/scrape') && init && init.method === 'POST') {
      return Promise.resolve(json({ job_id: job }));
    }
    // Der Durchgang wurde seinerzeit abgebrochen und steht deshalb noch auf
    // "running". Für das Standbild soll er abgeschlossen aussehen.
    if (url.includes('/status')) {
      return Promise.resolve(json({ id: job, ort: 'Bonn', branche: 'Friseur, Restaurant',
                                    radius_km: 11, status: 'done', found: 148, message: '' }));
    }
    return real(input, init);
  };
})(%r)
""" % JOB

ANONYMISE = """
const namen = ['Nordlicht', 'Kastanie', 'Ahorn', 'Lindenhof', 'Brueckenhaus', 'Weinberg',
               'Morgenrot', 'Rheinblick', 'Altstadt', 'Faehrhaus', 'Kirschgarten', 'Steinweg'];
const strassen = ['Musterstraße', 'Beispielweg', 'Musterallee', 'Beispielplatz'];
const slug = s => s.toLowerCase().replace(/ä/g,'ae').replace(/ö/g,'oe').replace(/ü/g,'ue')
                   .replace(/ß/g,'ss').replace(/[^a-z]+/g,'-');
document.querySelectorAll('.card').forEach((card, i) => {
  // Bei einem Teil der Datensätze ist beim Abgriff statt der Branche die
  // Bewertungszahl gelandet. Für die Abbildung wird sie durch die tatsächlich
  // gesuchte Branche ersetzt, sonst stünde "4,4(103)" als Branche in der Kachel.
  const chip = card.querySelector('.tag-category');
  let kat = chip?.textContent.trim() || 'Betrieb';
  if (/^[\d\s.,(]/.test(kat) || /Rezension/.test(kat)) {
    kat = 'Friseursalon';
    if (chip) chip.textContent = kat;
  }
  const eigen = namen[i % namen.length];
  card.querySelector('.card-title').textContent = kat + ' ' + eigen;
  card.querySelector('.card-address').textContent =
    strassen[i % strassen.length] + ' ' + ((i * 7) % 90 + 1) + ', 53111 Bonn';
  const tel = card.querySelector('.card-phone');
  if (tel) tel.textContent = '\\u260e +49 228 ' + String(200000 + i * 1337).slice(0, 6);
  const mail = card.querySelector('.card-email a');
  if (mail) { mail.textContent = 'info@' + slug(kat + '-' + eigen) + '.de'; mail.removeAttribute('href'); }
});
"""

# Die Oberfläche zieht ihre Animationsbibliothek von einem CDN. In dieser
# Umgebung kommt sie nicht durch, und weil sie ganz oben importiert wird,
# läuft dann das gesamte Skript nicht an. Deshalb wird sie durch eine leere
# Fassung ersetzt. Zusammen mit reduzierter Bewegung bleibt die Oberfläche
# ruhig stehen, was für Standbilder ohnehin das Richtige ist.
MOTION_STUB = (
    "export const animate = () => ({ finished: Promise.resolve() });"
    "export const stagger = () => 0;"
)

with sync_playwright() as p:
    browser = p.chromium.launch(args=["--lang=de-DE"])
    ctx = browser.new_context(
        viewport={"width": 1360, "height": 940},
        device_scale_factor=2,
        locale="de-DE",
        reduced_motion="reduce",
    )
    page = ctx.new_page()
    page.route("**/motion@11/**", lambda route: route.fulfill(
        status=200, content_type="text/javascript", body=MOTION_STUB))
    page.add_init_script(PATCH_FETCH)
    page.goto(URL, wait_until="commit")
    page.wait_for_selector("#branche-chips .chip", timeout=15000)
    page.wait_for_timeout(800)

    # Suchmaske so ausfüllen, wie der abgebildete Durchgang gelaufen ist.
    page.fill("#ort", "Bonn")
    page.keyboard.press("Escape")
    for branche in ["Friseur", "Restaurant", "Café", "Bäckerei", "Zahnarzt", "Hausarzt"]:
        page.fill("#branche-input", branche)
        page.click("#add-branche-btn")
    page.eval_on_selector("#radius", "el => { el.value = 11; el.dispatchEvent(new Event('input')); }")
    page.wait_for_timeout(400)
    page.locator(".search-card").screenshot(path=str(OUT / "suche.png"))
    print("suche", (OUT / "suche.png").stat().st_size // 1024, "kB")

    # Suche auslösen. Der Aufruf landet im Abfangjäger und liefert den fertigen Durchgang.
    page.click("#search-btn")
    page.wait_for_selector(".card", timeout=20000)
    page.wait_for_timeout(1200)
    page.evaluate(ANONYMISE)
    page.wait_for_timeout(200)

    page.evaluate("""
      const f = document.getElementById('filters');
      window.scrollTo(0, f.getBoundingClientRect().top + window.scrollY - 20);
    """)
    page.wait_for_timeout(400)
    page.screenshot(path=str(OUT / "treffer.png"))
    print("treffer", (OUT / "treffer.png").stat().st_size // 1024, "kB")

    # Zwei Kacheln nebeneinander, damit die Angaben je Betrieb lesbar sind.
    cards = page.locator(".card")
    box_a = cards.nth(0).bounding_box()
    box_b = cards.nth(1).bounding_box()
    page.screenshot(path=str(OUT / "kachel.png"), clip={
        "x": box_a["x"] - 8, "y": box_a["y"] - 8,
        "width": box_b["x"] + box_b["width"] - box_a["x"] + 16,
        "height": max(box_a["height"], box_b["height"]) + 16,
    })
    print("kachel", (OUT / "kachel.png").stat().st_size // 1024, "kB")

    ctx.close()
    browser.close()
