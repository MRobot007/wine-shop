import Reveal from "./ui/Reveal";
import Button from "./ui/Button";
import { HUMIDOR_FEATURES } from "../data/content";

const HUMIDOR_IMG = "/assets/humidor.webp";

export default function Humidor() {
  return (
    <section className="section" id="humidor" aria-label="The walk-in humidor">
      <div className="container split">
        <Reveal
          x={-30}
          y={0}
          className="split__media"
          style={{ backgroundImage: `url('${HUMIDOR_IMG}')` }}
        >
          <div className="split__chip">
            <div>
              <div className="num">1,000+</div>
              <div className="lbl">Cigars in stock</div>
            </div>
            <div>
              <div className="num">Cedar</div>
              <div className="lbl">Walk-in humidor</div>
            </div>
          </div>
        </Reveal>

        <Reveal x={30} y={0}>
          <span className="eyebrow">The humidor</span>
          <h2 className="h2" style={{ margin: "0.7rem 0 0.9rem" }}>
            A handmade cedar walk-in humidor
          </h2>
          <p className="lead">
            Lined with genuine Spanish cedar and kept at perfect humidity, so every cigar — from an
            everyday Quorum to a special-occasion Cohiba — is flawless the moment you choose it.
          </p>

          <ul className="feature-list">
            {HUMIDOR_FEATURES.map((f) => (
              <li key={f.title}>
                <span className="tick" aria-hidden="true">
                  ✓
                </span>
                <div>
                  <strong>{f.title}</strong>
                  <p>{f.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <div style={{ marginTop: "1.6rem" }}>
            <Button as="a" variant="glass" href="#visit" arrow>
              Visit the humidor
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
