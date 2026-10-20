'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { site } from '@/lib/data'

const links = [
  { href: '/', label: 'Domov' },
  { href: '/ponuka', label: 'Ponuka' },
  { href: '/catering', label: 'Catering' },
  { href: '/kontakt', label: 'Kontakt' },
]

// Client component len kvôli usePathname (zvýraznenie aktívnej stránky).
export default function Header() {
  const path = usePathname()
  return (
    <header>
      <div className="w">
        <Link className="brand" href="/">{site.name}</Link>
        <nav aria-label="Hlavná navigácia">
          {links.map((l) => (
            <Link key={l.href} href={l.href} aria-current={path === l.href ? 'page' : undefined}>{l.label}</Link>
          ))}
          <a className="btn" href={`tel:${site.tel}`}>{site.phone}</a>
        </nav>
      </div>
    </header>
  )
}
