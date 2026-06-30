import Link from "next/link";
import CartView from "@/components/CartView";

export const metadata = { title: "Your Cart — Best Wine & Spirits" };

export default function CartPage() {
  return (
    <>
      <div className="page-head">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Cart</span>
          </div>
          <h1 className="h2">Your cart</h1>
        </div>
      </div>
      <section className="section" style={{ paddingTop: "2rem" }}>
        <div className="container">
          <CartView />
        </div>
      </section>
    </>
  );
}
