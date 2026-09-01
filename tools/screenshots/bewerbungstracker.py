"""Erzeugt die Abbildungen der Bewerbungstracker-Seite neu.

Quelle ist die öffentliche Demo, die mit Beispieldaten läuft. Es sind also
keine echten Bewerbungen zu sehen. Aufgenommen wird mit mehrfacher Pixeldichte,
damit die Bilder in der Galerie auch auf großen Bildschirmen scharf bleiben.

Aufruf, mit einer Python-Umgebung, in der Playwright samt Chromium liegt:

    python tools/screenshots/bewerbungstracker.py
"""
import pathlib
from playwright.sync_api import sync_playwright

OUT = pathlib.Path(__file__).resolve().parents[2] / "src/assets/bewerbungstracker"
OUT.mkdir(parents=True, exist_ok=True)
URL = "https://bewerbungen-demo.bewerbungs-tracker.workers.dev"

# Der Demo-Hinweis oben ist zum Ausprobieren nützlich, im Portfolio aber Ballast.
HIDE_BANNER = """
document.querySelectorAll('.demobar, .demo-banner, [class*="demo"]').forEach(e => {
  if (e.textContent.includes('Beispieldaten zum Ausprobieren')) e.style.display = 'none';
});
"""

# Für den Verlauf wird die Bewerbung mit den meisten Stationen aufgemacht.
OPEN_LONGEST_HISTORY = """
  document.querySelectorAll('.overlay').forEach(o => o.classList.remove('show'));
  const rows = [...document.querySelectorAll('tbody tr')];
  const score = r => (r.textContent.match(/Zusage|Angebot|3\\. Gespr|2\\. Gespr/g) || []).length
                   + (/Zusage/.test(r.textContent) ? 5 : 0);
  rows.slice().sort((a, b) => score(b) - score(a))[0]
      .querySelector('[title="Verlauf ansehen und bearbeiten"]').click();
"""


def open_page(browser, scale):
    # --lang setzt die Oberflächensprache des Browsers. Ohne das zeigen die
    # Datumsfelder im Verlauf das amerikanische Format.
    ctx = browser.new_context(
        viewport={"width": 1360, "height": 900},
        device_scale_factor=scale,
        locale="de-DE",
        color_scheme="light",
    )
    page = ctx.new_page()
    page.goto(URL, wait_until="networkidle")
    page.wait_for_timeout(1500)
    page.evaluate(HIDE_BANNER)
    page.wait_for_timeout(300)
    return ctx, page


def save(page, name, selector=None):
    path = OUT / f"{name}.png"
    if selector:
        page.locator(selector).first.screenshot(path=str(path))
    else:
        page.screenshot(path=str(path))
    print(" ", path.name, path.stat().st_size // 1024, "kB")


with sync_playwright() as p:
    browser = p.chromium.launch(args=["--lang=de-DE"])

    # Zwei ganzseitige Ansichten, doppelte Pixeldichte reicht.
    ctx, page = open_page(browser, 2)
    save(page, "uebersicht")
    page.click("#btnChart")
    page.wait_for_timeout(1200)
    save(page, "sankey", ".overlay.show > *")
    ctx.close()

    # Das Verlaufsfenster ist nur rund 460 Punkte breit. Bei doppelter Dichte
    # bliebe es unter der Breite, die die Galerie anfordert, deshalb dreifach.
    ctx, page = open_page(browser, 3)
    page.evaluate(OPEN_LONGEST_HISTORY)
    page.wait_for_timeout(900)
    save(page, "verlauf", ".overlay.show > *")
    ctx.close()

    browser.close()
