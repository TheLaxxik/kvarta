'use client'

import { useEffect, useState } from 'react'
import { hoursSummary } from '@/lib/data'
import { getStatus } from '@/lib/hours'

// Stav závisí od aktuálneho času, preto sa počíta až v prehliadači. Server vykreslí statické hodiny.
export default function OpenStatus() {
  const [s, setS] = useState<{ open: boolean; text: string } | null>(null)
  useEffect(() => setS(getStatus()), [])
  const cls = 'status' + (s ? (s.open ? ' open' : ' closed') : '')
  return <p className={cls} role="status">{s ? s.text : hoursSummary}</p>
}
