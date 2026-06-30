import Link from "next/link";
import { notFound } from "next/navigation";
import Stars from "@/components/Stars";
import BuyBar from "@/components/BuyBar";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS, getProduct, getRelated } from "@/lib/products";
import { SAMPLE_REVIEWS, STOCK_LABEL } from "@/lib/content";
import { money } from "@/lib/format";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const p = getProduct(params.slug);
  return { title: p ? `${p.name} — Best Wine & Spirits` : "Product — Best Wine & Spirits" };
}

export default function ProductPage({ params }) {
  const p = getProduct(params.slug);
  if (!p) return notFound();
  const sl = STOCK_LABEL[p.stock];
  const related = getRelated(p);
  const idx = PRODUCTS.findIndex((x) => x.slug === p.slug) + 1;
  const num = "№ " + String(idx).padStart(2, "0");
  const rail = p.specs.slice(0, 3);

  return (
    <>
      <div className="page-head">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/shop/">Shop</Link>
            <span className="sep">/</span>
            <Link href={`/shop/?cat=${p.category}`}>{p.category}</Link>
            <span className="sep">/</span>
            <span>{p.name}</span>
          </div>
        </div>
      </div>

      <section className="section" style={{ paddingTop: "2rem" }}>
        <div className="container pdp">
          <div className="pdp__media">
            <span className="pdp__num">{num}</span>
            <span className="product__badges">
              {p.badge && <span className="badge badge--gold">{p.badge}</span>}
              <span className={`badge ${sl.cls}`}>{sl.label}</span>
            </span>
            <span className="pdp__dot pdp__dot--1" aria-hidden="true" />
            <span className="pdp__dot pdp__dot--2" aria-hidden="true" />
            <div className="pdp__photo" style={{ backgroundImage: `url('${p.img}')` }} />
          </div>

          <div>
            <span className="pdp__type">
              {p.type} · {p.region}
            </span>
            <h1>{p.name}</h1>
            <div className="pdp__rating">
              <Stars rating={p.rating} /> <strong style={{ color: "var(--ink)" }}>{p.rating}</strong> · {p.reviews}{" "}
              reviews
            </div>

            <p className="pdp__desc" style={{ marginTop: "1.1rem" }}>
              {p.desc}
            </p>

            <BuyBar product={p} />

            <div className="pdp__perks">
              <div className="pdp__perk">
                <span className="ico">✓</span> Free local delivery over $75, or pick up in ~30 minutes
              </div>
              <div className="pdp__perk">
                <span className="ico">✓</span> Mix any 12 bottles and save 10% automatically
              </div>
              <div className="pdp__perk">
                <span className="ico">✓</span> 21+ only · valid ID checked at pickup &amp; delivery
              </div>
            </div>

            <dl className="pdp__rail">
              {rail.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>

            <div className="pairing">
              <h4>Tasting notes</h4>
              <p>{p.notes}</p>
            </div>
            <div className="pairing" style={{ background: "var(--surface-2)" }}>
              <h4 style={{ color: "var(--ink)" }}>Perfect with</h4>
              <p>{p.pairing}</p>
            </div>

            <dl className="specs">
              {p.specs.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Reviews</span>
            <h2 className="h2">
              {p.rating} out of 5 · {p.reviews} reviews
            </h2>
          </div>
          <div className="reviews">
            {SAMPLE_REVIEWS.map((r, i) => (
              <div className="review" key={i}>
                <div className="review__head">
                  <strong>{r.name}</strong>
                  <Stars rating={r.rating} />
                </div>
                <p>{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">You may also like</span>
              <h2 className="h2">More {p.category}</h2>
            </div>
            <div className="products">
              {related.map((r) => (
                <ProductCard key={r.slug} product={r} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
