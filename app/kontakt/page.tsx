import type { Metadata } from 'next'
import HoursTable from '@/components/HoursTable'
import OpenStatus from '@/components/OpenStatus'
import { site } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Kontakt',
  description: `Kontakt a otváracie hodiny reštaurácie Kvarta, ${site.street}, ${site.village}.`,
}

export default function Kontakt() {
  return (
    <>
      <section>
        <div className="w">
          <h1>Kontakt</h1>
          <OpenStatus />
        </div>
      </section>

      <section className="band">
        <div className="w split even">
          <div>
            <h2>Kde nás nájdete</h2>
            <address>{site.name}<br />{site.street}<br />{site.village}</address>
            <a className="phone" href={`tel:${site.tel}`}>{site.phone}</a>
            <p><a href={`mailto:${site.email}`}>{site.email}</a></p>
          </div>
          <div>
            <h2>Otváracie hodiny</h2>
            <HoursTable />
          </div>
        </div>
      </section>

      <section>
        <div className="w">
          <h2>Údaje o firme</h2>
          <p>{site.legal}, {site.street}, {site.village}. IČO: {site.ico}. Fiktívna firma, údaje sú vymyslené.</p>
        </div>
      </section>
    </>
  )
}
