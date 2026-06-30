import { useWishlist } from "../context/Wishlist";
import { useToast } from "./Toast";
import Button from "./ui/Button";

export default function WishlistDrawer() {
  const { items, total, open, closeDrawer, remove, clear } = useWishlist();
  const { showToast } = useToast();

  return (
    <div className={`drawer${open ? " is-open" : ""}`} aria-hidden={!open}>
      <div className="drawer__backdrop" onClick={closeDrawer} />
      <aside className="drawer__panel" role="dialog" aria-label="Your tasting list">
        <div className="drawer__head">
          <h3>Your list ({items.length})</h3>
          <button className="drawer__close" onClick={closeDrawer} aria-label="Close list">
            ✕
          </button>
        </div>

        {items.length === 0 ? (
          <div className="drawer__empty">
            <div className="big" aria-hidden="true">
              🍷
            </div>
            <p>
              Your tasting list is empty.
              <br />
              Tap the heart on any bottle to save it.
            </p>
          </div>
        ) : (
          <div className="drawer__list">
            {items.map((i) => (
              <div className="wish-item" key={i.id}>
                <img src={i.img} alt={i.name} loading="lazy" />
                <div className="info">
                  <strong>{i.name}</strong>
                  <span>{i.type}</span>
                </div>
                <div className="price">${i.price.toFixed(2)}</div>
                <button className="rm" onClick={() => remove(i.id)} aria-label={`Remove ${i.name}`}>
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}

        {items.length > 0 && (
          <div className="drawer__foot">
            <div className="total">
              <span>Estimated total</span>
              <strong>${total.toFixed(2)}</strong>
            </div>
            <Button
              as="a"
              variant="primary"
              className="btn--block"
              href="#request"
              onClick={() => {
                closeDrawer();
                showToast("Bring your list in-store, or send it via Item Request.");
              }}
            >
              Reserve this list
            </Button>
            <button
              className="btn btn-ghost btn--block"
              style={{ marginTop: "0.5rem" }}
              onClick={clear}
            >
              Clear list
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
