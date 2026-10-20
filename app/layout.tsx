import type { Metadata, Viewport } from 'next'
import { Alfa_Slab_One, Hanken_Grotesk } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

// next/font stiahne písma pri builde a hostuje ich z vlastnej domény (bez volania na Google za behu).
const slab = Alfa_Slab_One({ weight: '400', subsets: ['latin', 'latin-ext'], variable: '--slab', display: 'swap' })
const sans = Hanken_Grotesk({ subsets: ['latin', 'latin-ext'], variable: '--sans', display: 'swap' })

export const metadata: Metadata = {
  title: { default: 'Kvarta · reštaurácia a catering v Dolnej Zábrežnej', template: '%s · Kvarta' },
  description: 'Kvarta: reštaurácia a catering v Dolnej Zábrežnej. Obedové menu, jedlá na objednávku, firemné a rodinné akcie.',
}
export const viewport: Viewport = { themeColor: '#0e2b20' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sk" className={`${slab.variable} ${sans.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
