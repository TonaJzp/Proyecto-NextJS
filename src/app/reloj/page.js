"use client";
import { useEffect, useState } from "react";

export default function RelojViaje() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const i1 = setInterval(() => {
      const now = new Date();
      setHora(now);
      document.title = now.toLocaleTimeString();
    }, 1000);
    return () => clearInterval(i1);
  }, []);

  return (
    <section className="container mx-auto p-6">
      <div className="card bg-base-200">
        <div className="card-body items-center">
          <h1 className="text-3xl font-bold">Reloj del viaje</h1>
          <p className="text-center text-7xl md:text-9xl font-mono tracking-tight">
            {hora.toLocaleTimeString()}
          </p>
        </div>
      </div>
    </section>
  );
}
