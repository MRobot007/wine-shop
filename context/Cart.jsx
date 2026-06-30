"use client";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useToast } from "./Toast";

const KEY = "bws_cart";
const CartCtx = createContext(null);
export const useCart = () => useContext(CartCtx);

export function CartProvider({ children }) {
  const { showToast } = useToast();
  const [items, setItems] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(KEY, JSON.stringify(items));
    } catch {
      /* ignore */
    }
  }, [items, ready]);

  const add = useCallback(
    (p, qty = 1) => {
      setItems((cur) => {
        const ex = cur.find((i) => i.slug === p.slug);
        if (ex) return cur.map((i) => (i.slug === p.slug ? { ...i, qty: i.qty + qty } : i));
        return [...cur, { slug: p.slug, name: p.name, price: p.price, img: p.img, type: p.type, qty }];
      });
      showToast(`Added to cart — ${p.name}`, {
        action: (
          <Link href="/cart/" style={{ color: "#fff", textDecoration: "underline", whiteSpace: "nowrap" }}>
            View cart →
          </Link>
        ),
      });
    },
    [showToast]
  );

  const setQty = useCallback(
    (slug, qty) =>
      setItems((cur) =>
        qty <= 0 ? cur.filter((i) => i.slug !== slug) : cur.map((i) => (i.slug === slug ? { ...i, qty } : i))
      ),
    []
  );
  const remove = useCallback((slug) => setItems((cur) => cur.filter((i) => i.slug !== slug)), []);
  const clear = useCallback(() => setItems([]), []);

  const count = useMemo(() => items.reduce((s, i) => s + i.qty, 0), [items]);

  const value = useMemo(
    () => ({ items, count, ready, add, setQty, remove, clear }),
    [items, count, ready, add, setQty, remove, clear]
  );

  return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>;
}
