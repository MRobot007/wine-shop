"use client";
import { createContext, useCallback, useContext, useRef, useState } from "react";

const ToastCtx = createContext({ showToast: () => {} });
export const useToast = () => useContext(ToastCtx);

export function ToastProvider({ children }) {
  const [msg, setMsg] = useState("");
  const [action, setAction] = useState(null);
  const [shown, setShown] = useState(false);
  const timer = useRef(null);

  const showToast = useCallback((message, opts = {}) => {
    setMsg(message);
    setAction(opts.action || null);
    setShown(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setShown(false), opts.duration || 3800);
  }, []);

  return (
    <ToastCtx.Provider value={{ showToast }}>
      {children}
      <div className={`toast${shown ? " is-shown" : ""}`} role="status" aria-live="polite">
        <span className="check-ico" aria-hidden="true">
          ✓
        </span>
        <span>{msg}</span>
        {action}
      </div>
    </ToastCtx.Provider>
  );
}
