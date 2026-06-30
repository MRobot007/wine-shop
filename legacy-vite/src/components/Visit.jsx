import SectionHead from "./ui/SectionHead";
import Reveal from "./ui/Reveal";
import { HOURS, PAYMENTS, STORE } from "../data/content";

export default function Visit() {
  return (
    <section className="section section--alt" id="visit" aria-label="Visit us">
      <div className="container">
        <SectionHead eyebrow="Visit us" title="Find us on Ocean Gateway">
          On your way to the beach or planning a night in — stop by, we're easy to find.
        </SectionHead>

        <div className="visit">
          <Reveal x={-44} y={0} className="visit__panel glass">
            <div className="visit__rows">
              <div className="visit__row">
                <span className="visit__ico" aria-hidden="true">
                  📍
                </span>
                <div>
                  <h4>Address</h4>
                  <a href={STORE.mapLink} target="_blank" rel="noopener">
                    {STORE.address}
                  </a>
                </div>
              </div>
              <div className="visit__row">
                <span className="visit__ico" aria-hidden="true">
                  📞
                </span>
                <div>
                  <h4>Phone</h4>
                  <a href={STORE.phoneHref}>{STORE.phone}</a>
                </div>
              </div>
              <div className="visit__row">
                <span className="visit__ico" aria-hidden="true">
                  ✉️
                </span>
                <div>
                  <h4>Email</h4>
                  <a href={`mailto:${STORE.email}`}>{STORE.email}</a>
                </div>
              </div>
              <div className="visit__row">
                <span className="visit__ico" aria-hidden="true">
                  🕑
                </span>
                <div style={{ width: "100%" }}>
                  <h4>Hours</h4>
                  <div className="visit__hours">
                    {HOURS.map((h) => (
                      <div className={h.today ? "today" : ""} key={h.day}>
                        <span>{h.day}</span>
                        <span>{h.time}</span>
                      </div>
                    ))}
                  </div>
                  <p className="age-note" style={{ marginTop: "0.6rem" }}>
                    Hours are sample placeholders — update to your real schedule.
                  </p>
                </div>
              </div>
            </div>

            <div className="visit__pay" aria-label="Accepted payments">
              {PAYMENTS.map((p) => (
                <span className="chip" key={p}>
                  {p}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal x={44} y={0} className="visit__map">
            <iframe
              title="Map to Best Wine & Spirits, Cambridge MD"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={STORE.mapEmbed}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
