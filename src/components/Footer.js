"use client";

import Link from "next/link";
import PropTypes from "prop-types";

export default function Footer({
  brand,               
  columns = [],        
  centered = false,      
  className = "",
  showCopyright = true,
}) {
  const year = new Date().getFullYear();

  return (
    <footer className={`bg-base-200 text-base-content ${className}`}>
      <div className={`container mx-auto px-4 py-10 ${centered ? "text-center" : "text-left"}`}>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-start">
          {brand && (
            <aside className="space-y-2">
              {brand.logoSrc ? (
                <Link href={brand.href || "/"} className="inline-flex items-center gap-3">
                  <img src={brand.logoSrc} alt={`${brand.name} logo`} className="h-10 w-auto" />
                  <span className="text-lg font-semibold">{brand.name}</span>
                </Link>
              ) : (
                <Link href={brand.href || "/"} className="inline-block">
                  <p className="text-lg font-semibold">{brand.name}</p>
                </Link>
              )}
              {brand.tagline && <p className="opacity-70">{brand.tagline}</p>}
            </aside>
          )}

          {/* Cols: si hay brand, ocupan las 3 restantes; si no, ocupan todas */}
          <div className={`${brand ? "sm:col-span-1 lg:col-span-3" : "sm:col-span-2 lg:col-span-4"}`}>
            <div className={`grid gap-8 grid-cols-1 sm:grid-cols-2 ${columns.length >= 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"}`}>
              {columns.map((col, i) => (
                <nav key={i}>
                  {col.title && <h6 className="font-semibold mb-3">{col.title}</h6>}
                  <ul className="space-y-2">
                    {col.links?.map((l, j) => (
                      <li key={j}>
                        <Link href={l.href || "#"} className="link link-hover break-words">
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright (mantengo tu condición original: solo si centered) */}
        {showCopyright && centered && (
          <aside className="mt-8 opacity-70">
            © {year} {brand?.name || ""}. All rights reserved.
          </aside>
        )}
      </div>
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
