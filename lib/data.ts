// Ceny sú čísla; formát (čiarka, € s nezalomiteľnou medzerou) rieši Intl.
const eurFmt = new Intl.NumberFormat('sk-SK', { style: 'currency', currency: 'EUR' })
export const eur = (n: number) => eurFmt.format(n)

export const site = {
  name: 'Kvarta',
  legal: 'Kvarta Gastro s.r.o.',
  street: 'Mlynská 8',
  village: 'Dolná Zábrežná',
  phone: '02\u00a00000\u00a00000', // U+00A0: číslo sa nezalomí uprostred
  tel: '+421200000000',
  email: 'ahoj@kvarta.example',
  ico: '00000000',
  lunchPrice: 7.5,
} as const

// Index 0 = pondelok … 6 = nedeľa. Hodiny ako desatinné číslo (10.5 = 10:30), null = zatvorené.
export type Range = readonly [open: number, close: number] | null
export const hours: { day: string; range: Range }[] = [
  { day: 'Pondelok', range: [10.5, 20] },
  { day: 'Utorok', range: [10.5, 20] },
  { day: 'Streda', range: [10.5, 20] },
  { day: 'Štvrtok', range: [10.5, 20] },
  { day: 'Piatok', range: [10.5, 22] },
  { day: 'Sobota', range: [12, 22] },
  { day: 'Nedeľa', range: null },
]
export const hoursSummary = 'Po–Št 10:30–20:00 · Pi 10:30–22:00 · So 12:00–22:00'

// Denné menu: upravte tu, žiadny CMS netreba.
export const dailyMenu = [
  { name: 'Zemiaková polievka s hubami' },
  { name: 'Kuracie prsia na smotane, ryža' },
  { name: 'Bryndzové halušky so slaninou' },
  { name: 'Zeleninové rizoto', note: 'bezmäsité' },
]

export type MenuItem = { name: string; price: number; note?: string }
export const menu: { title: string; items: MenuItem[] }[] = [
  { title: 'Polievky', items: [
    { name: 'Hovädzí vývar s rezancami', price: 2.4 },
    { name: 'Kapustnica', price: 3.2 },
  ] },
  { title: 'Mäsité jedlá', items: [
    { name: 'Kuracie prsia na smotane', price: 8.9 },
    { name: 'Bravčový rezeň, zemiakový šalát', price: 9.5 },
    { name: 'Hovädzí guláš, knedľa', price: 10.9 },
  ] },
  { title: 'Bezmäsité jedlá', items: [
    { name: 'Bryndzové halušky', price: 8.5 },
    { name: 'Zeleninové rizoto', price: 7.9 },
    { name: 'Vyprážaný syr, hranolky', price: 8.2 },
  ] },
  { title: 'Nápoje', items: [
    { name: 'Domáca limonáda 0,3\u00a0l', price: 2.2 },
    { name: 'Pivo 0,5\u00a0l', price: 1.9 },
    { name: 'Káva', price: 1.8 },
  ] },
  { title: 'Na objednávku', items: [
    { name: 'Pečená kačica s červenou kapustou', price: 14.5, note: 'objednať 24 hodín vopred' },
  ] },
]