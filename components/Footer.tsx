import { site } from '@/lib/data'

export default function Footer() {
  return (
    <footer>
      <div className="w">
        <div><b>{site.legal}</b><br />{site.street}, {site.village}</div>
        <div><a href={`mailto:${site.email}`}>{site.email}</a><br /><a href={`tel:${site.tel}`}>{site.phone}</a></div>
        <p>Fiktívna firma a ukážkový web. Všetky názvy, adresy, ceny a kontakty sú vymyslené.</p>
      </div>
    </footer>
  )
}
