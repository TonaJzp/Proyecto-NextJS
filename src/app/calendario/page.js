"use client";

import { useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import MyDatePicker from "@/components/MyDatePicker";
import RadialProgress from "@/components/RadialProgress";
import Card from "@/components/Card";
import {
  LuTicket,
  LuClock,
  LuSun,
  LuCameraOff,
  LuMapPin,
  LuCircleCheck,
} from "react-icons/lu";

export default function CalendarioPage() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  return (
    <>
      <Breadcrumbs className="mb-4" segmentNameMap={{ calendario: "Calendario" }} />
      <h1 className="text-3xl font-bold mb-6">Calendario del Zoo</h1>
      <p className="opacity-80 mb-6">
        Selecciona un día destacado y tus fechas/horas de entrada y salida. Elige primero
        el check-in para limitar el rango del check-out.
      </p>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="rounded-2xl bg-base-200 p-6 ring-1 ring-base-300">
          <h2 className="text-xl font-semibold mb-4">Día destacado</h2>
          <div className="overflow-auto">
            <MyDatePicker />
          </div>
        </div>

        <div className="rounded-2xl bg-base-200 p-6 ring-1 ring-base-300 space-y-4">
          <h2 className="text-xl font-semibold">Reserva rápida</h2>

          <div className="grid sm:grid-cols-2 gap-4">
            <label className="form-control w-full">
              <span className="label-text">Check-in</span>
              <input
                type="datetime-local"
                className="input input-bordered w-full"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
              />
            </label>

            <label className="form-control w-full">
              <span className="label-text">Check-out</span>
              <input
                type="datetime-local"
                className="input input-bordered w-full"
                value={checkOut}
                min={checkIn || undefined}
                onChange={(e) => setCheckOut(e.target.value)}
              />
            </label>
          </div>

          <div className="divider my-2" />

          <div className="grid sm:grid-cols-2 gap-6 items-center">
            <div>
              <p className="text-sm opacity-70 mb-1">Entrada</p>
              <p className="text-3xl font-bold text-primary">
                {checkIn ? new Date(checkIn).toISOString().slice(0, 10) : "—"}
              </p>
            </div>
            <div>
              <p className="text-sm opacity-70 mb-1">Salida</p>
              <p className="text-3xl font-bold text-secondary">
                {checkOut ? new Date(checkOut).toISOString().slice(0, 10) : "—"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-2">
            <RadialProgress />
            <span className="opacity-70">Ocupación estimada hoy</span>
          </div>

          <div className="mt-4 flex gap-3">
            <button className="btn btn-primary">Reservar</button>
            <button className="btn">Borrar</button>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <Card
          variant="side"
          image="oso-pardo1.webp"
          className="ring-1 ring-base-300 bg-base-100"
          figureClassName="w-1/2 h-full"
          imageClassName="w-full h-full object-cover"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="badge badge-primary badge-outline">Guía rápida</span>
            <span className="text-sm opacity-70">Recomendaciones para una visita fluida</span>
          </div>

          <div className="mt-4 grid md:grid-cols-2 gap-3">
            <div className="flex items-start gap-3 rounded-xl bg-base-200/60 ring-1 ring-base-300 p-3">
              <div className="mt-0.5 p-2 rounded-full bg-primary/10 text-primary">
                <LuMapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium">Planifica tu ruta</p>
                <p className="text-sm opacity-70">
                  Consulta el <a className="link" href="/reloj">horario de espectáculos</a> y ajusta tu visita desde el{" "}
                  <a className="link" href="/calendario">calendario</a>.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl bg-base-200/60 ring-1 ring-base-300 p-3">
              <div className="mt-0.5 p-2 rounded-full bg-secondary/10 text-secondary">
                <LuClock className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium">Llega 15 minutos antes</p>
                <p className="text-sm opacity-70">Evita esperas y entra en tu franja con calma.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl bg-base-200/60 ring-1 ring-base-300 p-3">
              <div className="mt-0.5 p-2 rounded-full bg-accent/10 text-accent">
                <LuSun className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium">Clima y horarios</p>
                <p className="text-sm opacity-70">En verano, hidrátate y evita horas centrales.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl bg-base-200/60 ring-1 ring-base-300 p-3">
              <div className="mt-0.5 p-2 rounded-full bg-error/10 text-error">
                <LuCameraOff className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium">Sin flash ni golpes</p>
                <p className="text-sm opacity-70">Respeta la señalización y el bienestar animal.</p>
              </div>
            </div>
          </div>

          <div className="pt-4 mt-2 flex flex-wrap justify-center gap-2">
            <span className="badge badge-outline">Ahorra tiempo</span>
            <span className="badge badge-outline">Clima</span>
            <span className="badge badge-outline">Bienestar animal</span>
            <span className="badge badge-outline">Acceso</span>
          </div>
        </Card>
      </div>
    </>
  );
}
