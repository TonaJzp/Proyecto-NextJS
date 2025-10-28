import Link from "next/link";
import PropTypes from "prop-types";

/**
 * props:
 * - title, description
 * - image (src), imageAlt
 * - href (link del título)
 * - actions: [{ label, href?, onClick?, color? }]
 * - variant: "default" | "image" | "side"
 * - size: "sm" | "md" | "lg" | "xs" | "xl" | "compact" | "normal"
 */
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
}) {
  const sizeClass =
    size === "compact"
      ? "card-compact"
      : size === "normal"
      ? "card-normal"
      : `card-${size}`; // sm | md | lg | xs | xl

  const variantClasses = [
    variant === "image" ? "image-full" : "",
    variant === "side" ? "card-side" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={`card bg-base-100 shadow-xl ${sizeClass} ${variantClasses} ${className}`}>
      {image && (
        <figure>
          {/* Si usas next/image, puedes sustituir por <Image ... /> */}
          <img src={image} alt={imageAlt ?? title ?? ""} />
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
            {actions.map(({ label, href, onClick, color = "primary" }, i) =>
              href ? (
                <Link key={i} href={href} className={`btn btn-${color}`}>
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
      color: PropTypes.string, // primary, secondary, accent, etc.
    })
  ),
  variant: PropTypes.oneOf(["default", "image", "side"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "compact", "normal"]),
  className: PropTypes.string,
  children: PropTypes.node,
};
