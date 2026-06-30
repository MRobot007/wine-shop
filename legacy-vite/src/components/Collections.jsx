import SectionHead from "./ui/SectionHead";
import { useStaggerReveal } from "../hooks/useStaggerReveal";
import { COLLECTIONS } from "../data/content";

function goToShop(filter) {
  window.dispatchEvent(new CustomEvent("shop:filter", { detail: filter }));
  const el = document.getElementById("shop");
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Collections() {
  const grid = useStaggerReveal({ selector: ".collection", stagger: 90, y: 26 });

  return (
    <section className="section" id="collections" aria-label="Collections">
      <div className="container">
        <SectionHead eyebrow="Collections" title="Explore the cellar">
          Four corners of the shop, each worth lingering in. Pick one to jump straight into the
          selection.
        </SectionHead>

        <div className="collections" ref={grid}>
          {COLLECTIONS.map((c) => (
            <button className="collection" key={c.title} onClick={() => goToShop(c.filter)}>
              <div className="collection__img" style={{ backgroundImage: `url('${c.img}')` }} />
              <h3>{c.title}</h3>
              <span className="sub">{c.sub}</span>
              <span className="go">Shop now →</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
