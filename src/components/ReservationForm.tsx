"use client";

import { useState } from "react";

const times = ["11:30", "12:00", "12:30", "13:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"];

export default function ReservationForm() {
  const [guests, setGuests] = useState(2);
  const [done, setDone] = useState<null | { name: string; date: string; time: string }>(null);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setDone({
      name: String(data.get("name") ?? ""),
      date: String(data.get("date") ?? ""),
      time: String(data.get("time") ?? ""),
    });
  }

  if (done) {
    const date = done.date
      ? new Date(done.date + "T12:00").toLocaleDateString("sk-SK", { weekday: "long", day: "numeric", month: "long" })
      : "";
    return (
      <div className="form" aria-live="polite">
        <div className="confirm">
          <span className="label">Žiadosť prijatá</span>
          <p className="heading">
            Ďakujeme, {done.name.split(" ")[0] || "tešíme sa"}. Stôl pre {guests} {guests === 1 ? "osobu" : guests < 5 ? "osoby" : "osôb"} — {date} o {done.time}.
          </p>
          <p className="serif" style={{ fontSize: 16 }}>
            Rezerváciu potvrdíme SMS správou do hodiny. Toto je demo — nič sa neodoslalo.
          </p>
          <div>
            <button className="btn btn-outline" type="button" onClick={() => setDone(null)}>
              Nová rezervácia
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={submit}>
      <div className="field">
        <span className="label" id="guests-label">
          Počet hostí
        </span>
        <div className="guests" role="group" aria-labelledby="guests-label">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <button key={n} type="button" aria-pressed={guests === n} onClick={() => setGuests(n)}>
              {n === 6 ? "6+" : n}
            </button>
          ))}
        </div>
      </div>

      <div className="form-row two">
        <label className="field">
          <span className="label">Dátum</span>
          <input type="date" name="date" required />
        </label>
        <label className="field">
          <span className="label">Čas</span>
          <select name="time" defaultValue="19:00" required>
            {times.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="form-row two">
        <label className="field">
          <span className="label">Meno</span>
          <input type="text" name="name" autoComplete="name" placeholder="Jana Nováková" required />
        </label>
        <label className="field">
          <span className="label">Telefón</span>
          <input type="tel" name="phone" autoComplete="tel" inputMode="tel" placeholder="+421 900 000 000" required />
        </label>
      </div>

      <label className="field">
        <span className="label">Poznámka (nepovinné)</span>
        <textarea name="note" placeholder="Alergie, oslava, detská stolička…" />
      </label>

      <div className="form-foot">
        <span className="form-note">Stôl držíme 15 minút. Väčšie skupiny riešime telefonicky.</span>
        <button className="btn btn-primary" type="submit">
          Odoslať žiadosť
        </button>
      </div>
    </form>
  );
}
