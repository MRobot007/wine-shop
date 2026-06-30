import SectionHead from "./ui/SectionHead";
import { useStaggerReveal } from "../hooks/useStaggerReveal";
import { TESTIMONIALS } from "../data/content";

export default function Testimonials() {
  const grid = useStaggerReveal({ selector: ".quote", stagger: 100, y: 24 });

  return (
    <section className="section" aria-label="What customers say">
      <div className="container">
        <SectionHead centered eyebrow="Loved locally" title="What the neighborhood says" />

        <div className="quotes" ref={grid}>
          {TESTIMONIALS.map((t) => (
            <figure className="quote glass-interactive" key={t.name}>
              <div className="quote__stars" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              <blockquote>{t.quote}</blockquote>
              <figcaption className="quote__by">
                <span className="quote__avatar" aria-hidden="true">
                  {t.initial}
                </span>
                <span>
                  <strong>{t.name}</strong>
                  <span>{t.place}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
