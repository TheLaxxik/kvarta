export const site = {
  name: 'Kvarta',
  legal: 'Kvarta Gastro s.r.o.',
  street: 'Mlynská 8',
  village: 'Dolná Zábrežná',
  phone: '02 0000 0000',
  tel: '+421200000000',
  email: 'ahoj@kvarta.example',
  ico: '00000000',
  lunchPrice: '7,50 €',
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

export type MenuItem = { name: string; price: string; note?: string }
export const menu: { title: string; items: MenuItem[] }[] = [
  { title: 'Polievky', items: [
    { name: 'Hovädzí vývar s rezancami', price: '2,40 €' },
    { name: 'Kapustnica', price: '3,20 €' },
  ] },
  { title: 'Mäsité jedlá', items: [
    { name: 'Kuracie prsia na smotane', price: '8,90 €' },
    { name: 'Bravčový rezeň, zemiakový šalát', price: '9,50 €' },
    { name: 'Hovädzí guláš, knedľa', price: '10,90 €' },
  ] },
  { title: 'Bezmäsité jedlá', items: [
    { name: 'Bryndzové halušky', price: '8,50 €' },
    { name: 'Zeleninové rizoto', price: '7,90 €' },
    { name: 'Vyprážaný syr, hranolky', price: '8,20 €' },
  ] },
  { title: 'Nápoje', items: [
    { name: 'Domáca limonáda 0,3 l', price: '2,20 €' },
    { name: 'Pivo 0,5 l', price: '1,90 €' },
    { name: 'Káva', price: '1,80 €' },
  ] },
  { title: 'Na objednávku', items: [
    { name: 'Pečená kačica s červenou kapustou', price: '14,50 €', note: 'objednať 24 hodín vopred' },
  ] },
]
