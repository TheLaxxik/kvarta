'use client'

import { useEffect, useState } from 'react'
import { hours } from '@/lib/data'
import { bratislavaNow, fmt } from '@/lib/hours'

export default function HoursTable() {
  const [today, setToday] = useState(-1)
  useEffect(() => setToday(bratislavaNow().day), [])
  return (
    <table>
      <tbody>
        {hours.map((h, i) => (
          <tr key={h.day} className={i === today ? 'today' : undefined}>
            <th>{h.day}</th>
            <td>{h.range ? `${fmt(h.range[0])} – ${fmt(h.range[1])}` : 'zatvorené'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
