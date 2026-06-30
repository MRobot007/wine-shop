import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const KEY = "bws_wishlist";
const WishlistCtx = createContext(null);

export function useWishlist() {
  return useContext(WishlistCtx);
}

export function WishlistProvider({ children }) {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);

  // Load once
  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {
      /* ignore */
    }
  }, []);

  // Persist
  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(items));
    } catch {
      /* ignore */
    }
  }, [items]);

  const has = useCallback((id) => items.some((i) => i.id === id), [items]);

  const toggle = useCallback((p) => {
    setItems((cur) =>
      cur.some((i) => i.id === p.id)
        ? cur.filter((i) => i.id !== p.id)
        : [...cur, { id: p.id, name: p.name, price: p.price, img: p.img, type: p.type }]
    );
  }, []);

  const remove = useCallback((id) => setItems((cur) => cur.filter((i) => i.id !== id)), []);
  const clear = useCallback(() => setItems([]), []);

  const total = useMemo(() => items.reduce((s, i) => s + i.price, 0), [items]);

  const value = useMemo(
    () => ({
      items,
      count: items.length,
      total,
      has,
      toggle,
      remove,
      clear,
      open,
      openDrawer: () => setOpen(true),
      closeDrawer: () => setOpen(false),
    }),
    [items, total, has, toggle, remove, clear, open]
  );

  return <WishlistCtx.Provider value={value}>{children}</WishlistCtx.Provider>;
}
