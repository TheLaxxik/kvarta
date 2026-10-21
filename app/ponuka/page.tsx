import type { Metadata } from 'next'
import { dailyMenu, eur, menu, site } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Ponuka',
  description: 'Obedové menu, stála ponuka a jedlá na objednávku v reštaurácii Kvarta.',
}

function Group({ title, items }: (typeof menu)[number]) {
  return (
    <>
      <h3>{title}</h3>
      <ul className="rows">
        {items.map((i) => (
          <li key={i.name}>
            <span>{i.name}{i.note && <em>{i.note}</em>}</span>
            <b>{eur(i.price)}</b>
          </li>
        ))}
      </ul>
    </>
  )
}

export default function Ponuka() {
  return (
    <>
      <section>
        <div className="w">
          <h1>Ponuka</h1>
          <p className="lead">Obedové menu, stála ponuka a jedlá na objednávku. Ceny sú ukážkové.</p>
        </div>
      </section>

      <section className="band" id="obed">
        <div className="w split even">
          <div>
            <h2>Obedové menu {eur(site.lunchPrice)}</h2>
            <p>Po–Pi, 11:00 – 14:00. Mení sa každý deň. Objednať ho môžete telefonicky.</p>
            <a className="btn" href={`tel:${site.tel}`}>Objednať obed</a>
          </div>
          <div>
            <h3>Ukážka denného menu</h3>
            <ul className="rows">
              {dailyMenu.map((d) => (
                <li key={d.name}><span>{d.name}{d.note && <em>{d.note}</em>}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="w">
          <h2>Jedálny lístok</h2>
          <div className="split even">
            <div>{menu.slice(0, 2).map((g) => <Group key={g.title} {...g} />)}</div>
            <div>{menu.slice(2).map((g) => <Group key={g.title} {...g} />)}</div>
          </div>
          <p className="note">Ceny platia pre donášku aj osobný odber.</p>
        </div>
      </section>
    </>
  )
}