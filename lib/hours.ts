import { hours } from './data'

const WEEKDAY: Record<string, number> = { Mon: 0, Tue: 1, Wed: 2, Thu: 3, Fri: 4, Sat: 5, Sun: 6 }

// Čas v Bratislave bez ohľadu na časovú zónu návštevníka.
export function bratislavaNow(date = new Date()) {
  let day = 0, h = 0, m = 0
  new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Bratislava', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false,
  }).formatToParts(date).forEach((p) => {
    if (p.type === 'weekday') day = WEEKDAY[p.value] ?? 0
    if (p.type === 'hour') h = parseInt(p.value, 10) % 24
    if (p.type === 'minute') m = parseInt(p.value, 10)
  })
  return { day, time: h + m / 60 }
}

export function fmt(x: number) {
  const a = Math.floor(x)
  const b = Math.round((x - a) * 60)
  return `${a}:${b < 10 ? '0' : ''}${b}`
}

export function getStatus(date = new Date()) {
  const { day, time } = bratislavaNow(date)
  const r = hours[day].range
  if (r && time >= r[0] && time < r[1]) return { open: true, text: `Otvorené teraz · do ${fmt(r[1])}` }
  if (r && time < r[0]) return { open: false, text: `Zatvorené · dnes otvárame o ${fmt(r[0])}` }
  return { open: false, text: 'Teraz zatvorené' }
}
