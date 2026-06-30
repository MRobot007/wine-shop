import Reveal from "./ui/Reveal";
import Button from "./ui/Button";
import { EVENT_SERVICES, TASTINGS } from "../data/content";

export default function Events() {
  return (
    <section className="section" id="events" aria-label="Events and tastings">
      <div className="container">
        <div className="events">
          <Reveal className="events__planning" y={18}>
            <span className="eyebrow">Events</span>
            <h2 className="h2" style={{ margin: "0.7rem 0 0.9rem" }}>
              Tastings, weddings &amp; private events
            </h2>
            <p className="lead">
              Join a tasting on the calendar, or let us build a custom package for your wedding,
              party, or corporate gift — sized and priced to fit.
            </p>

            <div className="ev-services">
              {EVENT_SERVICES.map((s) => (
                <div className="ev-service" key={s.title}>
                  <span className="ico" aria-hidden="true">
                    {s.icon}
                  </span>
                  <div>
                    <h4>{s.title}</h4>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "1.4rem" }}>
              <Button as="a" variant="primary" href="#request" arrow>
                Plan with us
              </Button>
            </div>
          </Reveal>

          <Reveal y={18}>
            <h3 className="h2" style={{ fontSize: "1.35rem", marginBottom: "1rem" }}>
              Upcoming tastings
            </h3>
            <div className="tastings">
              {TASTINGS.map((t, i) => (
                <div className="tasting" key={i}>
                  <div className="tasting__date">
                    <div className="mon">{t.mon}</div>
                    <div className="day">{t.day}</div>
                  </div>
                  <div className="tasting__info">
                    <h4>{t.title}</h4>
                    <p>{t.desc}</p>
                  </div>
                  <div className="tasting__meta">
                    <span className="price">{t.price}</span>
                    {t.time}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
