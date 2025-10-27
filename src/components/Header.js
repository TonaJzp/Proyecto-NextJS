// src/components/Header.js
import Link from "next/link";
import ThemeSelect from "./ThemeSelect";
import { ImHome } from "react-icons/im";


function Header() {
  return (
    <div className="navbar bg-base-200 shadow-sm">
      <div className="flex-1 gap-2">
        <Link href="/" className="btn btn-ghost text-xl"> <ImHome /> Inicio</Link>
        <ThemeSelect />
      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/calendario">Calendario</Link></li>
          <li><Link href="/reloj">Reloj</Link></li>
          {/* ▼ Antes aquí estaba el dropdown. Ahora son links directos */}
          <li><Link href="/pagina3">Página 3</Link></li>
          <li><Link href="/pagina4">Página 4</Link></li>
          <li><Link href="/pagina5">Página 5</Link></li>
        </ul>
      </div>

      {/* (Opcional) Mantén el Drawer fuera del <ul> */}
      <div className="flex-none">
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label htmlFor="my-drawer" className="btn btn-primary rounded-full">Drawer</label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
              <li><Link href="/pagina1">Página 1</Link></li>
              <li><Link href="/pagina2">Página 2</Link></li>
              <li><Link href="/pagina3">Página 3</Link></li>
              <li><Link href="/pagina4">Página 4</Link></li>
              <li><Link href="/pagina5">Página 5</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
