import { Suspense } from "react";
import Link from "next/link";
import ContactForms from "@/components/ContactForms";
import Icon from "@/components/Icon";
import { STORE, HOURS, PAYMENTS } from "@/lib/content";

export const metadata = { title: "Visit & Contact — Best Wine & Spirits" };

export default function ContactPage() {
  return (
    <>
      <div className="page-head">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Visit</span>
          </div>
          <h1 className="h2">Visit &amp; contact</h1>
          <p style={{ color: "var(--muted)", marginTop: "0.4rem" }}>
            On Ocean Gateway in Cambridge — easy to find on your way to the beach.
          </p>
        </div>
      </div>

      <section className="section" style={{ paddingTop: "2rem" }}>
        <div className="container contact-layout">
          <div className="info-card">
            <div className="info-row">
              <span className="ico">
                <Icon name="pin" />
              </span>
              <div>
                <h4>Address</h4>
                <a href={STORE.mapLink} target="_blank" rel="noopener noreferrer">
                  {STORE.address}
                </a>
              </div>
            </div>
            <div className="info-row">
              <span className="ico">
                <Icon name="phone" />
              </span>
              <div>
                <h4>Phone</h4>
                <a href={STORE.phoneHref}>{STORE.phone}</a>
              </div>
            </div>
            <div className="info-row">
              <span className="ico">
                <Icon name="mail" />
              </span>
              <div>
                <h4>Email</h4>
                <a href={`mailto:${STORE.email}`}>{STORE.email}</a>
              </div>
            </div>
            <div className="info-row">
              <span className="ico">
                <Icon name="clock" />
              </span>
              <div style={{ width: "100%" }}>
                <h4>Hours</h4>
                {HOURS.map((h) => (
                  <div className={`hours-row${h.today ? " today" : ""}`} key={h.day}>
                    <span>{h.day}</span>
                    <span>{h.time}</span>
                  </div>
                ))}
                <p style={{ marginTop: "0.5rem", fontSize: "var(--text-xs)", color: "var(--faint)" }}>
                  Sample hours — update to your real schedule.
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginTop: "1rem" }}>
              {PAYMENTS.map((p) => (
                <span className="tag" key={p}>
                  {p}
                </span>
              ))}
            </div>
          </div>

          <div className="map">
            <iframe
              title="Map to Best Wine & Spirits"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={STORE.mapEmbed}
            />
          </div>
        </div>
      </section>

      <section className="section section--alt" style={{ paddingTop: "0" }}>
        <div className="container">
          <Suspense fallback={null}>
            <ContactForms />
          </Suspense>
        </div>
      </section>
    </>
  );
}
