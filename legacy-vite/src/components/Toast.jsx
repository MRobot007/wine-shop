import { createContext, useCallback, useContext, useRef, useState } from "react";

const ToastCtx = createContext({ showToast: () => {} });

export function useToast() {
  return useContext(ToastCtx);
}

export function ToastProvider({ children }) {
  const [msg, setMsg] = useState("Request sent — we'll be in touch soon.");
  const [shown, setShown] = useState(false);
  const timer = useRef(null);

  const showToast = useCallback((m) => {
    if (m) setMsg(m);
    setShown(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setShown(false), 4200);
  }, []);

  return (
    <ToastCtx.Provider value={{ showToast }}>
      {children}
      <div className={`toast${shown ? " is-shown" : ""}`} role="status" aria-live="polite">
        <span className="check" aria-hidden="true">
          ✓
        </span>
        <span>{msg}</span>
      </div>
    </ToastCtx.Provider>
  );
}
