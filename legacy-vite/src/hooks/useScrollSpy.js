import { useEffect, useState } from "react";

/** Track which section id is currently active based on scroll position. */
export function useScrollSpy(ids, { offset = 110 } = {}) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + offset + 1;
      let current = null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids, offset]);

  return active;
}
