import Link from 'next/link'
import Mark from '@/components/Mark'
import OpenStatus from '@/components/OpenStatus'
import { eur, site } from '@/lib/data'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="w grid">
          <div>
            <h1><span><i translate="no"><Mark />{site.name}</i></span></h1>
            <p className="lead">Reštaurácia a catering v Dolnej Zábrežnej. Varíme poctivo, jednoducho a z čerstvých surovín.</p>
            <OpenStatus />
            <div className="actions">
              <a className="btn" href={`tel:${site.tel}`}>Zavolať a objednať</a>
              <Link className="btn ghost" href="/ponuka">Pozrieť ponuku</Link>
            </div>
          </div>
          <Link className="coaster" href="/ponuka#obed" aria-label={`Obedové menu za ${eur(site.lunchPrice)}, pondelok až piatok od 11:00 do 14:00, zobraziť detaily`}>
            <span>Obedové menu</span><b>{eur(site.lunchPrice)}</b><small>Po–Pi<br />11:00 – 14:00</small>
          </Link>
        </div>
      </section>

      <section className="band">
        <div className="w">
          <h2>Čo robíme</h2>
          <div className="svc">
            <div><h3>Reštaurácia</h3><p>Stála ponuka, jedlá z mäsa aj bezmäsité. Otvorené 6 dní v týždni.</p><Link href="/ponuka">Jedálny lístok</Link></div>
            <div><h3>Obedové menu</h3><p>Každý pracovný deň nové menu. Môžete si ho objednať telefonicky.</p><Link href="/ponuka#obed">Dnešné menu</Link></div>
            <div><h3>Catering a akcie</h3><p>Firemné obedy, oslavy a svadby. Z našej kuchyne k vám.</p><Link href="/catering">Ako to funguje</Link></div>
          </div>
        </div>
      </section>

      <section>
        <div className="w split even tight">
          <h2>Malá firma z Dolnej Zábrežnej</h2>
          <div>
            <p>Kvarta je rodinná gastro firma. V reštaurácii varíme cez deň obedy a cez víkend večere.</p>
            <p>Z tej istej kuchyne pripravujeme aj catering pre firmy, oslavy a svadby v okolí.</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="w">
          <h2>Plánujete akciu?</h2>
          <p>Napíšte nám, koľko vás bude a kedy. Pošleme vám ponuku.</p>
          <Link className="btn" href="/catering">Catering a akcie</Link>
        </div>
      </section>
    </>
  )
}