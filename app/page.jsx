import Link from "next/link";
import NewsletterInline from "@/components/NewsletterInline";
import WineSlider from "@/components/WineSlider";
import Icon from "@/components/Icon";
import { VALUES, COLLECTIONS, TESTIMONIALS, EVENTS, HERO_TRUST } from "@/lib/content";

// Bento tile placement — maps the 4 collections to named CSS grid areas
const BENTO_AREAS = ["red", "spirits", "beer", "cigars"];

export default function HomePage() {
  return (
    <>
      {/* SLIDER HERO — full-bleed, opens the page */}
      <section className="slider-hero">
        <WineSlider />
      </section>

      {/* HERO */}
      <section className="hero">
        <div className="container hero__grid">
          <div>
            <span className="eyebrow is-centered">Cambridge, Maryland · Since 1994</span>
            <h1>
              Maryland's wine &amp; spirits shop, <em>now online.</em>
            </h1>
            <p className="hero__sub">
              Wine, spirits, craft beer &amp; cigars — online for pickup or free local delivery.
            </p>
            <div className="hero__cta">
              <Link className="btn btn-primary btn--lg" href="/shop/">
                Shop the store <span className="btn-arrow" aria-hidden="true">→</span>
              </Link>
              <Link className="btn btn-outline btn--lg" href="/events/">
                Upcoming tastings
              </Link>
            </div>
            <div className="hero__trust">
              {HERO_TRUST.map((t) => (
                <div className="t" key={t.label}>
                  <b>{t.value}</b>
                  <span>{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="values">
            {VALUES.map((v) => (
              <div className="value" key={v.title}>
                <span className="ico">
                  <Icon name={v.ico} />
                </span>
                <div>
                  <h4>{v.title}</h4>
                  <p>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COLLECTIONS — bento */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head is-centered">
            <span className="eyebrow is-centered">Browse by aisle</span>
            <h2>Shop our collections</h2>
            <p>From a quiet Tuesday bottle to a wedding-sized order.</p>
          </div>
          <div className="bento">
            {COLLECTIONS.map((c, i) => (
              <Link
                className={`bento__tile${i === 0 ? " bento__tile--feature" : ""}`}
                key={c.title}
                href={c.href}
                style={{ gridArea: BENTO_AREAS[i] }}
              >
                <span className="bento__img" style={{ backgroundImage: `url('${c.img}')` }} />
                <span className="bento__body">
                  <h3>{c.title}</h3>
                  <span className="sub">{c.sub}</span>
                  <span className="go">Shop now →</span>
                </span>
              </Link>
            ))}
            <div className="bento__promo">
              <div className="bento__promo-text">
                <span className="eyebrow">Mix &amp; match</span>
                <h3>Build a case, save 10%</h3>
                <p>Any 12 bottles, any mix — the discount comes off automatically.</p>
              </div>
              <Link className="btn btn-light btn--lg" href="/shop/">
                Start your case <span className="btn-arrow" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container">
          <div className="section-head is-centered">
            <span className="eyebrow is-centered">Loved locally</span>
            <h2>What the neighborhood says</h2>
          </div>
          <div className="quotes">
            {TESTIMONIALS.map((t) => (
              <figure className="quote" key={t.name}>
                <div className="stars" aria-label="5 out of 5">
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

      {/* EVENTS TEASER */}
      <section className="section section--alt">
        <div className="container">
          <div className="grid-head">
            <div className="section-head" style={{ marginBottom: 0 }}>
              <span className="eyebrow">On the calendar</span>
              <h2>Upcoming tastings</h2>
            </div>
            <Link className="btn btn-outline" href="/events/">
              All events
            </Link>
          </div>
          <div className="tastings">
            {EVENTS.slice(0, 3).map((e) => (
              <div className="tasting" key={e.title}>
                <div className="tasting__date">
                  <div className="mon">{e.mon}</div>
                  <div className="day">{e.day}</div>
                </div>
                <div className="tasting__info">
                  <h4>{e.title}</h4>
                  <p>{e.desc}</p>
                </div>
                <div className="tasting__meta">
                  <span className="price">{e.price}</span>
                  <span>{e.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="newsletter">
            <h2>Join the Cellar Club</h2>
            <p>Members get early access to allocated bottles, tasting invites, and a birthday treat.</p>
            <NewsletterInline />
          </div>
        </div>
      </section>
    </>
  );
}
