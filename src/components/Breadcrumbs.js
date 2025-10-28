// src/components/AutoBreadcrumbs.jsx
'use client';                      // <- necesario porque usamos hooks de Next
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Breadcrumbs({
  className = '',
  segmentNameMap = {},             // opcional: { documents: 'Documentos', 'add-document': 'Añadir' }
  hideHome = false,                // si no quieres mostrar "Home"
}) {
  const pathname = usePathname() || '/';

  // limpia query/hash y parte en segmentos
  const raw = pathname.split('?')[0].split('#')[0];
  const segments = raw.split('/').filter(Boolean);

  // construye crumbs acumulando href
  const crumbs = [];
  let hrefAcc = '';

  segments.forEach((seg, idx) => {
    hrefAcc += `/${seg}`;
    const isLast = idx === segments.length - 1;
    const label =
      segmentNameMap[seg] ?? toTitle(seg);    // mapea o convierte slug a Título
    crumbs.push({ label, href: isLast ? undefined : hrefAcc });
  });

  const list = hideHome ? crumbs : [{ label: 'Home', href: '/' }, ...crumbs];

  return (
    <nav aria-label="Breadcrumb" className={`breadcrumbs text-sm ${className}`}>
      <ul>
        {list.length === 0 ? (
          <li aria-current="page">Home</li>
        ) : (
          list.map((c, i) => {
            const isLast = i === list.length - 1;
            return (
              <li key={i} aria-current={isLast ? 'page' : undefined}>
                {c.href ? (
                  <Link href={c.href} className="link link-hover">{c.label}</Link>
                ) : (
                  c.label
                )}
              </li>
            );
          })
        )}
      </ul>
    </nav>
  );
}

// "mi-categoria-super" -> "Mi Categoria Super"
function toTitle(slug) {
  return slug
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}
