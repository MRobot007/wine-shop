import { useEffect, useRef, useState } from "react";
import Button from "./ui/Button";
import { anime, prefersReducedMotion, EASE } from "../lib/motion";

const KEY = "bws_age_ok";

export default function AgeGate() {
  const [open, setOpen] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    let ok = false;
    try {
      ok = sessionStorage.getItem(KEY) === "1";
    } catch {
      ok = false;
    }
    if (!ok) {
      setOpen(true);
      document.body.style.overflow = "hidden";
    }
  }, []);

  useEffect(() => {
    if (open && cardRef.current && !prefersReducedMotion()) {
      anime({
        targets: cardRef.current,
        opacity: [0, 1],
        translateY: [24, 0],
        scale: [0.95, 1],
        easing: EASE,
        duration: 700,
      });
    }
  }, [open]);

  const accept = () => {
    try {
      sessionStorage.setItem(KEY, "1");
    } catch {
      /* ignore */
    }
    document.body.style.overflow = "";
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="agegate" role="dialog" aria-modal="true" aria-labelledby="ageTitle">
      <div className="glass glass-strong agegate__card" ref={cardRef}>
        <span className="brand__mark" aria-hidden="true">
          B
        </span>
        <h2 id="ageTitle">Are you 21 or older?</h2>
        <p>You must be of legal drinking age to enter Best Wine &amp; Spirits.</p>
        <div className="agegate__actions">
          <Button as="button" type="button" variant="primary" onClick={accept}>
            Yes, enter
          </Button>
          <Button as="a" variant="glass" href="https://www.responsibility.org/">
            I'm under 21
          </Button>
        </div>
      </div>
    </div>
  );
}
