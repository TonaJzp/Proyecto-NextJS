"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import AutoCarousel from "@/components/AutoCarousel";
import Card from "@/components/Card";
import Fab from "@/components/Fab";
import Diff from "@/components/Diff";
import { LuSun, LuMoon } from "react-icons/lu";

export default function HomePage() {
  const presets = {
    familia: [
      { time: "10:00", icon: "🐠", title: "Acuario interactivo", desc: "Zona táctil y túnel de cristal." },
      { time: "11:30", icon: "🦒", title: "Sabana africana", desc: "Pasarela elevada con vista a jirafas." },
      { time: "13:00", icon: "🍽️", title: "Picnic en sombra", desc: "Área familiar con fuentes cercanas." },
      { time: "15:30", icon: "🐧", title: "Encuentro con pingüinos", desc: "Mini charla para peques." },
    ],
    aventura: [
      { time: "09:30", icon: "🦎", title: "Terrario tropical", desc: "Camaleones y serpientes exóticas." },
      { time: "11:00", icon: "🦅", title: "Rapaces en vuelo", desc: "Asientos laterales para más acción." },
      { time: "12:15", icon: "🌿", title: "Sendero bosque húmedo", desc: "Puentes y niebla artificial." },
      { time: "16:30", icon: "🐅", title: "Gran felino al atardecer", desc: "Momento de mayor actividad." },
    ],
    relax: [
      { time: "11:00", icon: "🦩", title: "Aviario panorámico", desc: "Paseo tranquilo entre flamencos." },
      { time: "12:00", icon: "☕", title: "Cafetería lago", desc: "Terraza con vistas al estanque." },
      { time: "13:30", icon: "🧘", title: "Jardín botánico", desc: "Sombra, bancos y mariposas." },
      { time: "17:00", icon: "🐢", title: "Tortugas gigantes", desc: "Zona silenciosa para fotos." },
    ],
  };

  const [preset, setPreset] = useState("familia");
  const route = useMemo(() => presets[preset], [preset]);

  const animals = [
    {
      name: "Lémur de cola anillada",
      img: "/Animal del dia/lemur.webp",
      facts: [
        "Vive en grupos de hasta 30 individuos.",
        "Usa su cola para comunicarse visualmente.",
        "Programa de cría colaborativo europeo (EEP).",
      ],
    },
    {
      name: "Zorro rojo",
      img: "/Animal del dia/Zorro.webp",
      facts: [
        "Habitante común de bosques y zonas periurbanas.",
        "Omnívoro oportunista con gran adaptación.",
        "Actividad principalmente crepuscular y nocturna.",
      ],
    },
    {
      name: "Oso pardo",
      img: "/Animal del dia/oso-pardo2.webp",
      facts: [
        "Uno de los mayores carnívoros de Europa.",
        "Gran caminante: puede recorrer decenas de km.",
        "Hibernación parcial según clima y recursos.",
      ],
    },
  ];

  const [animalIdx, setAnimalIdx] = useState(0);
  const animal = animals[animalIdx];
  const [fading, setFading] = useState(false);

  const autoMs = 6000;                 // 6s (entre 5–7s como pediste)
  const timerRef = useRef(null);

  const startAutoRotation = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setAnimalIdx((i) => (i + 1) % animals.length);
    }, autoMs);
  };

  useEffect(() => {
    startAutoRotation();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [animals.length]);

  useEffect(() => {
    setFading(true);
    const t = setTimeout(() => setFading(false), 50);
    return () => clearTimeout(t);
  }, [animalIdx]);

  return (
    <>
      <section className="grid md:grid-cols-2 gap-6 items-stretch mb-10">
        <div className="rounded-2xl overflow-hidden ring-1 ring-base-300">
          <AutoCarousel />
        </div>

        <div className="bg-base-200 rounded-2xl p-8 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-3">Bienvenido a Tona's Zoo</h1>
          <p className="opacity-80">
            Explora más de 350 especies, programas de conservación y experiencias
            inmersivas para toda la familia. Cambia el tema desde el selector del
            header para probar los estilos de daisyUI.
          </p>
          <div className="mt-6 flex gap-3">
            <a className="btn btn-primary" href="/calendario">Planifica tu visita</a>
            <a className="btn" href="/pagina4">Entradas y precios</a>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Explora por áreas</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card
            image="/Habitats-Inicio/mamiferos.webp"
            imageAlt="Mamíferos"
            title="Mamíferos"
            description="Elefantes, jirafas, lémures y más en hábitats amplios."
            actions={[{ label: "Ver hábitats", href: "/pagina3", color: "secondary" }]}
          >
            <div className="mt-6" />
          </Card>

          <Card
            image="/Habitats-Inicio/aves.webp"
            imageAlt="Aves"
            title="Aves"
            description="Tucanes, Guacamayos y rapaces en vuelo."
            actions={[{ label: "Ver hábitats", href: "/pagina3" }]}
          >
            <div className="mt-6" />
          </Card>

          <Card
            image="/Habitats-Inicio/reptiles.webp"
            imageAlt="Reptiles"
            title="Reptiles"
            description="Caimanes, tortugas gigantes y serpientes."
            actions={[{ label: "Ver hábitats", href: "/pagina3" }]}
          >
            <div className="mt-6" />
          </Card>

          <Card
            image="/Habitats-Inicio/acuario.webp"
            imageAlt="Acuario"
            title="Acuario"
            description="Peces tropicales y medusas hipnóticas."
            actions={[{ label: "Comprar entradas", href: "/pagina4", color: "accent" }]}
          >
            <div className="mt-6" />
          </Card>
        </div>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold">Experiencia Dia/Noche</h2>
        <p className="opacity-80 mt-1 mb-4">
          Desliza el control para comparar la misma escena del parque a plena luz del día y durante la visita nocturna.
        </p>

        <div className="relative rounded-2xl bg-base-200 ring-1 ring-base-300 p-4 lg:p-6">
          <div className="relative mx-auto w-full max-w-8xl flex justify-center">
            {/* ⬇️ Wrapper con el mismo ancho que antes (1/2), ahora sí recorta con radius */}
            <div className="w-1/2 rounded-2xl overflow-hidden">
              <Diff />
            </div>

            <span className="absolute left-3 top-3 badge badge-ghost gap-2">
              <LuMoon className="w-4 h-4" /> Noche
            </span>
            <span className="absolute right-3 top-3 badge badge-ghost gap-2">
              <LuSun className="w-4 h-4" /> Día
            </span>
          </div>
        </div>
      </section>

      <section className="mt-12 mb-20">
        <h3 className="text-2xl font-semibold mb-6">Planifica tu recorrido</h3>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="join mb-4">
              <button
                className={`btn join-item ${preset === "familia" ? "btn-primary" : ""}`}
                onClick={() => setPreset("familia")}
              >
                👨‍👩‍👧 Familias
              </button>
              <button
                className={`btn join-item ${preset === "aventura" ? "btn-primary" : ""}`}
                onClick={() => setPreset("aventura")}
              >
                🧭 Aventura
              </button>
              <button
                className={`btn join-item ${preset === "relax" ? "btn-primary" : ""}`}
                onClick={() => setPreset("relax")}
              >
                🌿 Relax
              </button>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {route.map((s, i) => (
                <div
                  key={i}
                  className="rounded-xl p-4 bg-base-200 ring-1 ring-base-300 flex gap-4 items-start"
                >
                  <div className="text-3xl leading-none">{s.icon}</div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="badge badge-outline">{s.time}</span>
                      <h4 className="font-semibold">{s.title}</h4>
                    </div>
                    <p className="opacity-70 text-sm mt-1">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="bg-base-200 rounded-2xl p-6 ring-1 ring-base-300">
            <div className={`space-y-4 transition-opacity duration-700 ${fading ? "opacity-0" : "opacity-100"}`}>
              <div className="badge badge-secondary badge-lg">Animal del día</div>
              <div className="aspect-video w-full overflow-hidden rounded-xl ring-1 ring-base-300">
                <img src={animal.img} alt={animal.name} className="w-full h-full object-cover" />
              </div>
              <h4 className="text-xl font-semibold">{animal.name}</h4>
              <ul className="list-disc ps-5 space-y-1 opacity-80">
                {animal.facts.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
              <div className="flex gap-3 pt-2">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setAnimalIdx((i) => (i + 1) % animals.length);
                    startAutoRotation(); 
                  }}
                >
                  Siguiente animal
                </button>
                <a href="/pagina3" className="btn">
                  Ver su hábitat
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <Fab
        main="✦"
        variant="flower"
        actions={[
          { label: "Calendario", href: "/calendario", content: "📅" },
          { label: "Entradas", href: "/pagina4", content: "🎟️" },
          { label: "Contacto", href: "/pagina5", content: "✉️" },
        ]}
      />
    </>
  );
}
