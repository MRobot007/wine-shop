import "@/styles/tokens.css";
import "@/styles/base.css";
import "@/styles/components.css";
import "@/styles/pages.css";

import { ToastProvider } from "@/context/Toast";
import { CartProvider } from "@/context/Cart";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AgeGate from "@/components/AgeGate";
import { STORE } from "@/lib/content";

export const metadata = {
  title: "Best Wine & Spirits — Wine, Spirits, Beer & Cigars | Cambridge, MD",
  description:
    "Shop 1,000+ wines, spirits, craft beer, and premium cigars online. Buy online for in-store pickup or free local delivery over $75 in Cambridge, Maryland.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#7d1f2e" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&family=Georama:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ToastProvider>
          <CartProvider>
            <a className="skip-link" href="#main">
              Skip to content
            </a>
            <div className="topbar">
              <span>
                <strong>Free local delivery</strong> over $75
              </span>
              <span className="sep topbar__x" aria-hidden="true">
                ·
              </span>
              <span className="topbar__x">Buy online, pick up in 30 min</span>
              <span className="sep topbar__x" aria-hidden="true">
                ·
              </span>
              <a className="topbar__x" href={STORE.phoneHref}>
                {STORE.phone}
              </a>
            </div>
            <AgeGate />
            <Navbar />
            <main id="main">{children}</main>
            <Footer />
          </CartProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
