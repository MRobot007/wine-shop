import Link from "next/link";
import CheckoutForm from "@/components/CheckoutForm";

export const metadata = { title: "Checkout — Best Wine & Spirits" };

export default function CheckoutPage() {
  return (
    <>
      <div className="page-head">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/cart/">Cart</Link>
            <span className="sep">/</span>
            <span>Checkout</span>
          </div>
          <h1 className="h2">Checkout</h1>
        </div>
      </div>
      <section className="section" style={{ paddingTop: "2rem" }}>
        <div className="container">
          <CheckoutForm />
        </div>
      </section>
    </>
  );
}
