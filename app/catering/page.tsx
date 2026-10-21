import type { Metadata } from 'next'
import { site } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Catering a akcie',
  description: 'Catering Kvarta pre firmy, oslavy a svadby v okolí Dolnej Zábrežnej.',
}

export default function Catering() {
  return (
    <>
      <section>
        <div className="w">
          <h1>Catering a akcie</h1>
          <p className="lead">Z našej kuchyne k vám: firemné obedy, oslavy a svadobné hostiny.</p>
        </div>
      </section>

      <section className="band">
        <div className="w">
          <h2>Čo vieme zariadiť</h2>
          <div className="svc">
            <div><h3>Firemné obedy</h3><p>Pravidelné obedy pre tímy, od 15 osôb. Donáška do firmy.</p></div>
            <div><h3>Oslavy a rodinné akcie</h3><p>Narodeniny, krstiny, rodinné stretnutia. Studené misy aj teplé jedlá.</p></div>
            <div><h3>Svadobné hostiny</h3><p>Menu na mieru podľa vašich predstáv a počtu hostí.</p></div>
          </div>
        </div>
      </section>

      <section>
        <div className="w">
          <h2>Ako to funguje</h2>
          <ol className="steps">
            <li><h3>Ozvite sa</h3><p>Zavolajte alebo napíšte, koľko vás bude a kedy.</p></li>
            <li><h3>Dostanete ponuku</h3><p>Pošleme vám menu a cenu do 2 pracovných dní.</p></li>
            <li><h3>Pripravíme a dovezieme</h3><p>Jedlo dorazí v dohodnutom čase.</p></li>
          </ol>
        </div>
      </section>

      <section className="cta">
        <div className="w">
          <h2>Napíšte nám</h2>
          <p>Dátum, počet hostí a typ akcie stačia.</p>
          <a className="btn" href={`mailto:${site.email}?subject=Dopyt%20na%20catering`}>{site.email}</a>
        </div>
      </section>
    </>
  )
}