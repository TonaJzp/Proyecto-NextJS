"use client";

import { useEffect, useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";

function LiveClock() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  const time = now.toLocaleTimeString();
  const date = now.toLocaleDateString();
  return (
    <div className="bg-base-200 rounded-2xl p-10 text-center ring-1 ring-base-300">
      <div className="text-6xl font-bold tracking-widest">{time}</div>
      <div className="mt-2 opacity-70">{date}</div>
      <div className="mt-6 badge badge-lg">Horario del parque: 09:00–19:00</div>
    </div>
  );
}

export default function HorarioPage() {
  return (
    <>
      <Breadcrumbs className="mb-4" segmentNameMap={{ reloj: "Reloj" }} />
      <h1 className="text-3xl font-bold mb-6">Reloj & horario</h1>
      <LiveClock />

      <div className="mt-10 grid md:grid-cols-3 gap-6">
        <div className="stat bg-base-200 rounded-2xl">
          <div className="stat-title">Alimentación pingüinos</div>
          <div className="stat-value">12:30</div>
          <div className="stat-desc">En zona Acuario</div>
        </div>
        <div className="stat bg-base-200 rounded-2xl">
          <div className="stat-title">Demostración rapaces</div>
          <div className="stat-value">16:00</div>
          <div className="stat-desc">Anfiteatro Central</div>
        </div>
        <div className="stat bg-base-200 rounded-2xl">
          <div className="stat-title">Cierre del parque</div>
          <div className="stat-value">19:00</div>
          <div className="stat-desc">Último acceso 18:30</div>
        </div>
      </div>
    </>
  );
}
