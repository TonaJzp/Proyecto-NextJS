'use client';
import Link from 'next/link';
import PropTypes from 'prop-types';

// Posiciones prácticas
const POS = {
  'br': 'fixed bottom-6 right-6',
  'bl': 'fixed bottom-6 left-6',
  'tr': 'fixed top-6 right-6',
  'tl': 'fixed top-6 left-6',
};

export default function Fab({
  actions = [],                   // [{label, href?, onClick?, content?}]
  position = 'br',                // br | bl | tr | tl
  color = 'btn-primary',          // btn-primary | btn-secondary | ...
  size = 'btn-lg',                // btn-sm | btn-md | btn-lg
  variant = 'vertical',           // vertical | flower
  main = '+',                     // contenido del botón principal (texto o icono)
  mainAction = null,              // { label?: string, content?: ReactNode } -> usa fab-main-action
  className = '',
}) {
  const isFlower = variant === 'flower';
  const wrapClass = `${POS[position] ?? POS.br} z-50 ${className}`;

  return (
    <div className={wrapClass}>
      <div className={`fab ${isFlower ? 'fab-flower' : ''}`}>
        {/* Botón principal: focusable y accesible */}
        <div tabIndex={0} role="button" className={`btn ${size} btn-circle ${color}`} aria-label="Open speed dial">
          {main}
        </div>

        {/* (Opcional) Main action que sustituye al botón cuando está abierto */}
        {mainAction && (
          <div className="fab-main-action">
            {mainAction.label ? <span className="mr-2">{mainAction.label}</span> : null}
            <button className={`btn btn-circle ${size}`}>{mainAction.content ?? '•'}</button>
          </div>
        )}

        {/* Acciones del speed dial */}
        {actions.map((a, i) => {
          const btn = (
            <button
              key={i}
              onClick={a.onClick}
              className={`btn ${size} btn-circle`}
              aria-label={a.label}
              type="button"
            >
              {a.content ?? (a.label ? a.label[0]?.toUpperCase() : '?')}
            </button>
          );
          return a.href ? (
            <Link key={i} href={a.href} className={`btn ${size} btn-circle`} aria-label={a.label}>
              {a.content ?? (a.label ? a.label[0]?.toUpperCase() : '?')}
            </Link>
          ) : (
            btn
          );
        })}
      </div>
    </div>
  );
}

Fab.propTypes = {
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      href: PropTypes.string,
      onClick: PropTypes.func,
      content: PropTypes.node, // icono o contenido del botón (si no, usa la inicial del label)
    })
  ),
  position: PropTypes.oneOf(['br', 'bl', 'tr', 'tl']),
  color: PropTypes.string,
  size: PropTypes.oneOf(['btn-sm', 'btn-md', 'btn-lg']),
  variant: PropTypes.oneOf(['vertical', 'flower']),
  main: PropTypes.node,
  mainAction: PropTypes.shape({
    label: PropTypes.string,
    content: PropTypes.node,
  }),
  className: PropTypes.string,
};
