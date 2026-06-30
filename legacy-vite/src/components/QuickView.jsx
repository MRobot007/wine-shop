import { useEffect } from "react";
import Button from "./ui/Button";
import { useWishlist } from "../context/Wishlist";

export default function QuickView({ product, onClose }) {
  const { has, toggle } = useWishlist();

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!product) return null;
  const on = has(product.id);

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label={product.name}>
      <div className="modal__backdrop" onClick={onClose} />
      <div className="modal__card">
        <button className="modal__close" onClick={onClose} aria-label="Close">
          ✕
        </button>
        <div className="modal__media" style={{ backgroundImage: `url('${product.img}')` }} />
        <div className="modal__body">
          <span className="product__meta">
            {product.type} · {product.region}
          </span>
          <h3>{product.name}</h3>
          <div className="product__rating" style={{ marginTop: "0.5rem" }}>
            <span className="stars" aria-hidden="true">
              ★
            </span>
            {product.rating} <span>({product.reviews} reviews)</span>
          </div>
          <p className="modal__desc">{product.desc}</p>
          <dl className="modal__specs">
            {product.specs.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          <div className="modal__foot">
            <span className="product__price">${product.price.toFixed(2)}</span>
            <Button as="button" variant="primary" onClick={() => toggle(product)}>
              {on ? "Saved to list ✓" : "Save to list"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
