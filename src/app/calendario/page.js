"use client";

import { useState } from "react";
import MyDatePicker from "@/components/MyDatePicker";

export default function CalendarioViaje() {
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");

  return (
    <section className="container mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Calendario del viaje</h1>
      <p className="opacity-70">
        Selecciona un día destacado y tus fechas de entrada/salida.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="card bg-base-200">
          <div className="card-body">
            <h2 className="card-title">Día destacado</h2>
            <MyDatePicker />
          </div>
        </div>

        <div className="card bg-base-200">
          <div className="card-body space-y-4">
            <h2 className="card-title">Reserva rápida</h2>

            <label className="form-control">
              <span className="label-text">Check-in</span>
              <input
                type="date"
                className="input input-bordered"
                value={checkin}
                onChange={(e) => setCheckin(e.target.value)}
                min="2025-01-01"
                max="2025-12-31"
              />
            </label>

            <label className="form-control">
              <span className="label-text">Check-out</span>
              <input
                type="date"
                className="input input-bordered"
                value={checkout}
                onChange={(e) => setCheckout(e.target.value)}
                min={checkin || "2025-01-01"}
                max="2025-12-31"
              />
            </label>

            <div className="divider my-2" />

            <div className="stats shadow">
              <div className="stat">
                <div className="stat-title">Entrada</div>
                <div className="stat-value text-primary">{checkin || "—"}</div>
              </div>
              <div className="stat">
                <div className="stat-title">Salida</div>
                <div className="stat-value text-secondary">{checkout || "—"}</div>
              </div>
            </div>

            <p className="text-sm opacity-60">
              Consejo: elige primero el check-in para limitar el rango del check-out.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
