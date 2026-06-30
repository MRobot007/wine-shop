import { Suspense } from "react";
import Link from "next/link";
import ShopClient from "@/components/ShopClient";
import { PRODUCTS } from "@/lib/products";

export const metadata = {
  title: "Shop Wine, Spirits, Beer & Cigars — Best Wine & Spirits",
  description: "Browse and buy wine, spirits, craft beer, and cigars online for pickup or local delivery.",
};

export default function ShopPage() {
  return (
    <>
      <div className="page-head">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Shop</span>
          </div>
          <h1 className="h2">Shop the store</h1>
          <p style={{ color: "var(--muted)", marginTop: "0.4rem" }}>
            {PRODUCTS.length} online favorites — and 1,000+ more waiting in the store.
          </p>
        </div>
      </div>

      <section className="section" style={{ paddingTop: "2rem" }}>
        <div className="container">
          <Suspense fallback={<p style={{ color: "var(--muted)" }}>Loading the shelves…</p>}>
            <ShopClient />
          </Suspense>
        </div>
      </section>
    </>
  );
}
