import { useWishlist } from "../context/Wishlist";

export default function ProductCard({ product, onQuick }) {
  const { has, toggle } = useWishlist();
  const on = has(product.id);

  return (
    <article className="product">
      <div
        className="product__media"
        style={{ backgroundImage: `url('${product.img}')` }}
        role="button"
        tabIndex={0}
        aria-label={`Quick view ${product.name}`}
        onClick={() => onQuick(product)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onQuick(product);
          }
        }}
      >
        {product.badge && <span className="product__badge">{product.badge}</span>}
        <button
          className={`product__fav${on ? " is-on" : ""}`}
          aria-pressed={on}
          aria-label={on ? "Remove from list" : "Save to list"}
          onClick={(e) => {
            e.stopPropagation();
            toggle(product);
          }}
        >
          {on ? "♥" : "♡"}
        </button>
        <span className="product__quick">Quick view</span>
      </div>

      <div className="product__body">
        <span className="product__meta">
          {product.type} · {product.region}
        </span>
        <h3 className="product__name">{product.name}</h3>
        <div className="product__rating">
          <span className="stars" aria-hidden="true">
            ★
          </span>
          {product.rating} <span>({product.reviews})</span>
        </div>
        <div className="product__foot">
          <span className="product__price">${product.price.toFixed(2)}</span>
          <button className="btn btn-glass btn--sm" onClick={() => toggle(product)}>
            {on ? "Saved ✓" : "Save"}
          </button>
        </div>
      </div>
    </article>
  );
}
