import Link from "next/link";
import PropTypes from "prop-types";

export default function Card({
  title,
  description,
  image,
  imageAlt,
  href,
  actions = [],
  variant = "default",
  size = "md",
  className = "",
  children,
  figureClassName,              
  imageClassName,              
}) {
  const sizeClass =
    size === "compact"
      ? "card-compact"
      : size === "normal"
      ? "card-normal"
      : `card-${size}`;

  const variantClasses = [
    variant === "image" ? "image-full" : "",
    variant === "side" ? "card-side" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const defaultFigure =
    variant === "side" ? "w-48 sm:w-64 h-auto" : "aspect-[16/9]";
  const defaultImg = "w-full h-full object-cover object-center";

  return (
    <div className={`card bg-base-100 shadow-xl ${sizeClass} ${variantClasses} ${className}`}>
      {image && (
        <figure className={`${figureClassName ?? defaultFigure} overflow-hidden`}>
          <img
            src={image}
            alt={imageAlt ?? title ?? ""}
            className={imageClassName ?? defaultImg}
          />
        </figure>
      )}

      <div className="card-body">
        {title && (
          <h2 className="card-title">
            {href ? (
              <Link href={href} className="link link-hover">
                {title}
              </Link>
            ) : (
              title
            )}
          </h2>
        )}

        {description && <p>{description}</p>}
        {children}

        {actions.length > 0 && (
          <div className="card-actions justify-end">
            {actions.map(({ label, href: actionHref, onClick, color = "primary" }, i) =>
              actionHref ? (
                <Link key={i} href={actionHref} className={`btn btn-${color}`}>
                  {label}
                </Link>
              ) : (
                <button key={i} onClick={onClick} className={`btn btn-${color}`}>
                  {label}
                </button>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  href: PropTypes.string,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
      onClick: PropTypes.func,
      color: PropTypes.string,
    })
  ),
  variant: PropTypes.oneOf(["default", "image", "side"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "compact", "normal"]),
  className: PropTypes.string,
  children: PropTypes.node,
  figureClassName: PropTypes.string,
  imageClassName: PropTypes.string,
};
