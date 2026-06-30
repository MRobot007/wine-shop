"use client";
import { useEffect, useState } from "react";

const KEY = "bws_age_ok";

export default function AgeGate() {
  const [open, setOpen] = useState(false);

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
      <div className="agegate__card">
        <span className="brand__mark" aria-hidden="true">
          <img src="/assets/logo.png" alt="" />
        </span>
        <h2 id="ageTitle">Are you 21 or older?</h2>
        <p>You must be of legal drinking age to enter Best Wine &amp; Spirits.</p>
        <div className="agegate__actions">
          <button className="btn btn-primary" type="button" onClick={accept}>
            Yes, enter
          </button>
          <a className="btn btn-outline" href="https://www.responsibility.org/">
            I'm under 21
          </a>
        </div>
      </div>
    </div>
  );
}
