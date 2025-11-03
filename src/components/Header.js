"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSelect from "./ThemeSelect";
import { LuPawPrint, LuMenu } from "react-icons/lu";

export default function Header() {
  const pathname = usePathname();
  const active = (href) =>
    `px-3 py-2 rounded-xl transition hover:bg-base-300/60 ${
      pathname === href ? "bg-base-300 text-primary" : ""
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-base-300 bg-base-100/80 backdrop-blur">
      <div className="container mx-auto px-4">
        <div className="navbar min-h-16">
          <div className="flex-1 min-w-0 flex items-center gap-3">
            <Link href="/" className="inline-flex items-center gap-2 text-lg font-semibold">
              <span className="p-2 rounded-xl bg-primary/10 text-primary">
                <LuPawPrint className="w-5 h-5" />
              </span>
              <span className="truncate">Tona&apos;s Zoo</span>
            </Link>
            <div className="shrink-0">
              <ThemeSelect />
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            <Link href="/calendario" className={active("/calendario")}>Calendario</Link>
            <Link href="/horario" className={active("/horario")}>Horario</Link>
            <Link href="/habitats" className={active("/habitats")}>Hábitats</Link>
            <Link href="/tarifas" className={active("/tarifas")}>Tarifas</Link>
            <Link href="/contacto" className={active("/contacto")}>Contacto</Link>
          </nav>

          <div className="md:hidden">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <LuMenu className="w-5 h-5" />
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-56"
              >
                <li><Link href="/calendario">Calendario</Link></li>
                <li><Link href="/horario">Horario</Link></li>
                <li><Link href="/habitats">Hábitats</Link></li>
                <li><Link href="/tarifas">Tarifas</Link></li>
                <li><Link href="/contacto">Contacto</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
