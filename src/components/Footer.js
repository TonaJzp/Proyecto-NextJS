import Link from "next/link";
import PropTypes from "prop-types";

/**
 * Footer de daisyUI:
 * - vertical en móvil, horizontal desde sm (comportamiento por defecto de .footer)
 * - usa .footer-title para los títulos de columna
 */
export default function Footer({
  brand,                 // { name, logoSrc?, tagline?, href? }
  columns = [],          // [{ title, links: [{ label, href }] }]
  centered = false,      // añade .footer-center
  className = "",
  showCopyright = true,
}) {
  const year = new Date().getFullYear();

  return (
    <footer
      className={`footer ${centered ? "footer-center" : ""} bg-base-200 text-base-content p-10 ${className}`}
    >
      {/* Sección de marca (opcional) */}
      {brand && (
        <aside>
          {brand.logoSrc ? (
            <Link href={brand.href || "/"} className="inline-flex items-center gap-3">
              <img src={brand.logoSrc} alt={`${brand.name} logo`} className="h-10 w-auto" />
              <span className="text-lg font-semibold">{brand.name}</span>
            </Link>
          ) : (
            <p className="text-lg font-semibold">{brand.name}</p>
          )}
          {brand.tagline && <p className="opacity-70">{brand.tagline}</p>}
        </aside>
      )}

      {/* Columnas */}
      {columns.map((col, i) => (
        <nav key={i}>
          {col.title && <h6 className="footer-title">{col.title}</h6>}
          {col.links?.map((l, j) => (
            <Link key={j} href={l.href || "#"} className="link link-hover">
              {l.label}
            </Link>
          ))}
        </nav>
      ))}

      {/* Copyright (opcional) */}
      {showCopyright && centered && (
        <aside className="mt-6 opacity-70">
          © {year} {brand?.name || ""}. All rights reserved.
        </aside>
      )}
    </footer>
  );
}

Footer.propTypes = {
  brand: PropTypes.shape({
    name: PropTypes.string.isRequired,
    logoSrc: PropTypes.string,
    tagline: PropTypes.string,
    href: PropTypes.string,
  }),
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      links: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          href: PropTypes.string,
        })
      ),
    })
  ),
  centered: PropTypes.bool,
  className: PropTypes.string,
  showCopyright: PropTypes.bool,
};
