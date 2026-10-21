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
        <Link className="brand" href="/"><svg className="mark" viewBox="0 0 64 64" aria-hidden="true" focusable="false"><path fill="#e5502f" d="M33.60 30.40L61.96 30.40A30 30 0 0 0 33.60 2.04Z" /><path fill="#f3c846" d="M33.60 33.60L61.96 33.60A30 30 0 0 1 33.60 61.96Z" /><path fill="#f3c846" d="M30.40 33.60L2.04 33.60A30 30 0 0 0 30.40 61.96Z" /><path fill="#f3c846" d="M30.40 30.40L2.04 30.40A30 30 0 0 1 30.40 2.04Z" /></svg>{site.name}</Link>
        <nav aria-label="Hlavná navigácia">
          {links.map((l) => (
            <Link key={l.href} href={l.href} aria-current={path === l.href ? 'page' : undefined}>{l.label}</Link>
          ))}
        </nav>
        <a className="btn" href={`tel:${site.tel}`}>{site.phone}</a>
      </div>
    </header>
  )
}