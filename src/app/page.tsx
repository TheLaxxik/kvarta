import Image from "next/image";
import MenuTabs from "@/components/MenuTabs";
import ReservationForm from "@/components/ReservationForm";
import { Logo, Mark } from "@/components/Logo";

const img = (id: string, w = 1200) => `https://images.unsplash.com/${id}?w=${w}&q=75`;

const strip = [
  { id: "photo-1517248135467-4c7edcad34c4", alt: "Interiér reštaurácie večer, stoly pri oknách", cap: "Sála · 48 miest" },
  { id: "photo-1414235077428-338989a2e8c0", alt: "Servírovanie jedla pri prestretom stole", cap: null },
  { id: "photo-1510812431401-41d2bd2722f3", alt: "Prípitok červeným vínom", cap: null },
  { id: "photo-1424847651672-bf20a4b0982b", alt: "Spoločný stôl plný zdieľaných jedál", cap: "Stôl pre partiu" },
  { id: "photo-1550966871-3ed3cdb5ed0c", alt: "Svetlá jedáleň s veľkými oknami", cap: null },
];

const quarters = [
  { n: "I", season: "Zima", months: "Jan — Mar", text: "Kapusta, koreňová zelenina, údené ryby a dlho pečené mäso.", current: false },
  { n: "II", season: "Jar", months: "Apr — Jún", text: "Medvedí cesnak, špargľa zo Záhoria, prvé jahňacie.", current: false },
  { n: "III", season: "Leto", months: "Júl — Sep", text: "Paradajky, marhule, ryby z Dunaja a všetko z grilu.", current: false },
  { n: "IV", season: "Jeseň", months: "Okt — Dec", text: "Tekvica, huby z Karpát, kačica, slivky a nové víno.", current: true },
];

const hours = [
  ["Pondelok", "Zatvorené"],
  ["Utorok — Štvrtok", "11:30 — 22:00"],
  ["Piatok — Sobota", "11:30 — 23:00"],
  ["Nedeľa", "11:30 — 16:00"],
];

export default function Home() {
  return (
    <>
      <div className="banner">
        Jesenné menu IV/2026 platí do 31. decembra.{" "}
        <a href="#menu">Pozrieť menu</a>
      </div>

      <header className="nav">
        <div className="wrap nav-inner">
          <a className="logo" href="#" aria-label="Kvarta — domov">
            <Logo sub="Bratislava" />
          </a>
          <nav aria-label="Hlavná navigácia">
            <ul className="nav-links">
              <li><a href="#koncept">Koncept</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#kuchyna">Kuchyňa</a></li>
              <li><a href="#navsteva">Návšteva</a></li>
            </ul>
          </nav>
          <div className="nav-cta">
            <a className="btn btn-ghost" href="tel:+421902123456">+421 902 123 456</a>
            <a className="btn btn-primary" href="#rezervacia">Rezervovať stôl</a>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="wrap">
            <div className="hero-meta">
              <span className="label">Sezónna kuchyňa</span>
              <span className="label">Panská 14 · Staré Mesto</span>
            </div>
            <div className="hero-grid">
              <h1 className="display-lg">Štyri ročné obdobia. Štyri jedálne lístky.</h1>
              <div className="hero-side">
                <p className="serif">
                  Kvarta varí z toho, čo práve dorástlo na Záhorí, v Karpatoch a na Žitnom ostrove.
                  Každý kvartál začíname odznova — nové menu, nové víno, rovnaký stôl pri okne.
                </p>
                <div className="hero-actions">
                  <a className="btn btn-primary" href="#rezervacia">Rezervovať stôl</a>
                  <a className="btn btn-outline" href="#menu">Aktuálne menu</a>
                </div>
              </div>
            </div>

            <div className="strip">
              {strip.map((s, i) => (
                <figure key={s.id}>
                  <Image
                    src={img(s.id, i === 0 || i === 3 ? 1000 : 600)}
                    alt={s.alt}
                    width={800}
                    height={1000}
                    sizes="(max-width: 640px) 50vw, 25vw"
                    priority={i < 2}
                  />
                  {s.cap && <figcaption className="label">{s.cap}</figcaption>}
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* CONCEPT */}
        <section className="section" id="koncept">
          <div className="wrap">
            <div className="section-head">
              <div style={{ display: "grid", gap: 20 }}>
                <span className="label">01 — Koncept</span>
                <h2 className="display">Menu, ktoré sa mení každý kvartál.</h2>
              </div>
              <p className="serif">
                Kvarta znamená štvrtina. Rok delíme na štyri časti a každej dávame vlastný jedálny lístok
                — asi dvanásť jedál, ktoré dávajú zmysel práve v tej chvíli. Keď sezóna skončí, jedlo
                odchádza s ňou.
              </p>
            </div>

            <div className="quarters">
              {quarters.map((q, i) => (
                <div className="quarter" key={q.n} data-current={q.current}>
                  <span className="label">
                    {q.months} {q.current && <span className="tag" style={{ marginLeft: 6 }}>teraz</span>}
                  </span>
                  <div className="quarter-top">
                    <span className="quarter-num" aria-hidden="true">{q.n}</span>
                    <Mark quarter={(i + 1) as 1 | 2 | 3 | 4} size={44} muted={!q.current} />
                  </div>
                  <h3 className="heading" style={{ fontSize: 24 }}>{q.season}</h3>
                  <p>{q.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MENU */}
        <section className="section bg-linen" id="menu">
          <div className="wrap">
            <div className="section-head">
              <div style={{ display: "grid", gap: 20 }}>
                <span className="label">02 — Menu IV / Jeseň 2026</span>
                <h2 className="display">Čo práve varíme.</h2>
              </div>
              <p className="serif">
                Obedové menu v pracovné dni od 11:30 do 14:30 za 12,90 €. Večer varíme à la carte
                alebo štvorchodové degustačné menu za 49 €.
              </p>
            </div>
            <MenuTabs />
          </div>
        </section>

        {/* KITCHEN */}
        <section className="section" id="kuchyna">
          <div className="wrap split">
            <div className="photo">
              <Image
                src={img("photo-1551218808-94e220e084d2", 1100)}
                alt="Kuchár krája zeleninu na doske v otvorenej kuchyni"
                width={900}
                height={1125}
                sizes="(max-width: 960px) 100vw, 50vw"
              />
            </div>
            <div className="split-copy">
              <span className="label">03 — Kuchyňa</span>
              <h2 className="display">Otvorená kuchyňa, krátka cesta surovín.</h2>
              <blockquote>
                <p>
                  „Nevymýšľame recept a potom hľadáme suroviny. Ráno zavolá pestovateľ, povie, čo má —
                  a podľa toho varíme.“
                </p>
                <footer className="label">Tomáš Kvasnička · šéfkuchár</footer>
              </blockquote>
              <div className="facts">
                <div><strong>14</strong><span className="label">dodávateľov</span></div>
                <div><strong>80 km</strong><span className="label">max. vzdialenosť</span></div>
                <div><strong>12</strong><span className="label">jedál v menu</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* RESERVATION */}
        <section className="section bg-linen" id="rezervacia">
          <div className="wrap reserve">
            <div className="reserve-copy">
              <span className="label">04 — Rezervácia</span>
              <h2 className="display">Rezervujte si stôl.</h2>
              <p className="serif">
                Rezervácie prijímame 30 dní dopredu. Pre skupiny nad 8 osôb a súkromné večere v
                zadnej sále nám zavolajte.
              </p>
              <div>
                <a className="btn btn-outline" href="tel:+421902123456">Zavolať +421 902 123 456</a>
              </div>
            </div>
            <ReservationForm />
          </div>
        </section>

        {/* VISIT */}
        <section className="section bg-stone" id="navsteva">
          <div className="wrap">
            <span className="label" style={{ display: "block", marginBottom: 20 }}>05 — Návšteva</span>
            <div className="visit">
              <div>
                <h3 className="display" style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
                  Panská 14, Bratislava
                </h3>
                <p className="serif" style={{ color: "var(--ink)", maxWidth: 420 }}>
                  Päť minút pešo od Michalskej brány. Parkovanie v garáži Kamenné námestie, MHD zastávka
                  Most SNP.
                </p>
              </div>
              <div>
                <h3 className="label" style={{ color: "var(--ink)" }}>Otváracie hodiny</h3>
                <table className="hours">
                  <tbody>
                    {hours.map(([d, h]) => (
                      <tr key={d}>
                        <td>{d}</td>
                        <td>{h}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div>
                <h3 className="label" style={{ color: "var(--ink)" }}>Kontakt</h3>
                <address>
                  <a className="link" href="tel:+421902123456">+421 902 123 456</a>
                  <br />
                  <a className="link" href="mailto:stol@kvarta.sk">stol@kvarta.sk</a>
                  <br />
                  <a className="link accent" href="https://maps.google.com/?q=Panská+14+Bratislava" target="_blank" rel="noreferrer">
                    Otvoriť v mapách ↗
                  </a>
                </address>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap">
          <div className="footer-top">
            <div className="footer-brand">
              <Logo size={32} />
              <p className="serif" style={{ fontSize: 16 }}>
                Sezónna kuchyňa v Starom Meste. Nové menu každý kvartál.
              </p>
            </div>
            <nav className="footer-col" aria-label="Pätička — stránka">
              <span className="label">Stránka</span>
              <a href="#koncept">Koncept</a>
              <a href="#menu">Menu</a>
              <a href="#kuchyna">Kuchyňa</a>
              <a href="#rezervacia">Rezervácia</a>
            </nav>
            <nav className="footer-col" aria-label="Pätička — sledujte nás">
              <span className="label">Sledujte nás</span>
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
              <a href="#">Darčekové poukážky</a>
            </nav>
          </div>
          <div className="footer-inner">
            <span className="label">© 2026 Kvarta · Demo projekt</span>
            <span className="label">Panská 14 · Bratislava</span>
          </div>
        </div>
      </footer>
    </>
  );
}
