"use client";

import Image from "next/image";
import { useId, useState } from "react";

type Dish = { name: string; desc: string; price: string; tags?: string[] };
type Course = { id: string; label: string; dishes: Dish[]; photo: string; photoAlt: string; note: string };

const courses: Course[] = [
  {
    id: "predjedla",
    label: "Predjedlá",
    photo: "photo-1504674900247-0877df9cc836",
    photoAlt: "Misky s predjedlami a čerstvými bylinkami na tmavom stole",
    note: "Predjedlá podávame na zdieľanie — odporúčame dve až tri na stôl.",
    dishes: [
      {
        name: "Pečená tekvica hokkaido",
        desc: "Brynzový krém, pražené tekvicové semienka, tymianový med.",
        price: "9,50",
        tags: ["vege"],
      },
      {
        name: "Tatarák z hovädzej sviečkovice",
        desc: "Nakladaná horčica, žĺtok, kváskový chlieb z vlastnej pece.",
        price: "14,00",
      },
      {
        name: "Huby z Malých Karpát",
        desc: "Dubáky a hlivy na masle, pošírované vajce, pažítkový olej.",
        price: "12,50",
        tags: ["vege", "bez lepku"],
      },
      {
        name: "Údený pstruh",
        desc: "Chrenová smotana, pečená repa, kôpor.",
        price: "11,00",
        tags: ["bez lepku"],
      },
    ],
  },
  {
    id: "hlavne",
    label: "Hlavné jedlá",
    photo: "photo-1414235077428-338989a2e8c0",
    photoAlt: "Servírovanie hlavného jedla na bielom tanieri pri prestretom stole",
    note: "K hlavným jedlám pečieme kváskový chlieb každé ráno.",
    dishes: [
      {
        name: "Kačacie stehno confit",
        desc: "Červená kapusta s jablkom, lokše, výpek.",
        price: "22,00",
      },
      {
        name: "Bryndzové halušky po našom",
        desc: "Ručne trhané halušky, ovčia bryndza, chrumkavá slanina, kyslé mlieko.",
        price: "15,50",
      },
      {
        name: "Pstruh na masle",
        desc: "Koreňová zelenina, zemiakové pyré, citrónová maslová omáčka.",
        price: "21,00",
        tags: ["bez lepku"],
      },
      {
        name: "Pohánkové rizoto",
        desc: "Pečená cvikla, kozí syr, lieskové orechy.",
        price: "17,50",
        tags: ["vege"],
      },
    ],
  },
  {
    id: "dezerty",
    label: "Dezerty",
    photo: "photo-1600891964599-f61ba0e24092",
    photoAlt: "Stôl plný zdieľaných jedál a dezertov",
    note: "Dezerty pripravujeme ráno v malých dávkach. Keď sa minú, minú sa.",
    dishes: [
      {
        name: "Šúľance s makom",
        desc: "Hnedé maslo, slivkový lekvár, vanilkový cukor.",
        price: "8,50",
        tags: ["vege"],
      },
      {
        name: "Pečené jablko",
        desc: "Ovsená drobenka, zmrzlina z kyslej smotany.",
        price: "8,00",
        tags: ["vege"],
      },
      {
        name: "Čokoláda a rakytník",
        desc: "Horká čokoláda 70 %, rakytníkový gél, morská soľ.",
        price: "9,50",
        tags: ["bez lepku"],
      },
    ],
  },
  {
    id: "vino",
    label: "Víno",
    photo: "photo-1510812431401-41d2bd2722f3",
    photoAlt: "Pohárik červeného vína pri spoločnom prípitku",
    note: "Výlučne slovenskí vinári. Rozlievané víno sa mení každý týždeň.",
    dishes: [
      {
        name: "Frankovka modrá 2022",
        desc: "Malé Karpaty · suché · višňa, korenie, jemné triesloviny.",
        price: "6,50",
      },
      {
        name: "Rizling vlašský 2023",
        desc: "Južnoslovenská oblasť · suché · zelené jablko, mandle.",
        price: "5,50",
      },
      {
        name: "Tokajský výber 4-putňový",
        desc: "Tokajská oblasť · sladké · med, marhuľa, k dezertom.",
        price: "8,00",
      },
      {
        name: "Párovanie k menu",
        desc: "Štyri poháre k štyrom chodom, vyberá náš sommelier.",
        price: "32,00",
      },
    ],
  },
];

export default function MenuTabs() {
  const [active, setActive] = useState(courses[1].id);
  const base = useId();
  const course = courses.find((c) => c.id === active) ?? courses[0];

  function onKey(e: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = (index + (e.key === "ArrowRight" ? 1 : -1) + courses.length) % courses.length;
    setActive(courses[next].id);
    document.getElementById(`${base}-tab-${courses[next].id}`)?.focus();
  }

  return (
    <div>
      <div className="tabs" role="tablist" aria-label="Časti jedálneho lístka">
        {courses.map((c, i) => (
          <button
            key={c.id}
            id={`${base}-tab-${c.id}`}
            className="tab"
            role="tab"
            type="button"
            aria-selected={c.id === active}
            aria-controls={`${base}-panel`}
            tabIndex={c.id === active ? 0 : -1}
            onClick={() => setActive(c.id)}
            onKeyDown={(e) => onKey(e, i)}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div
        className="menu-panel"
        id={`${base}-panel`}
        role="tabpanel"
        aria-labelledby={`${base}-tab-${course.id}`}
      >
        <ul className="dishes">
          {course.dishes.map((d) => (
            <li className="dish" key={d.name}>
              <span className="dish-name">
                {d.name}
                {d.tags?.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </span>
              <span className="dish-price">{d.price} €</span>
              <p className="dish-desc">{d.desc}</p>
            </li>
          ))}
        </ul>

        <aside className="menu-aside">
          <div className="photo">
            <Image
              key={course.photo}
              src={`https://images.unsplash.com/${course.photo}?w=900&q=75`}
              alt={course.photoAlt}
              width={760}
              height={950}
              sizes="380px"
            />
          </div>
          <p className="serif" style={{ fontSize: 16 }}>
            {course.note}
          </p>
        </aside>
      </div>
    </div>
  );
}
