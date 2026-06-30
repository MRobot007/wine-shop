import Link from "next/link";
import EventForms from "@/components/EventForms";
import { EVENTS } from "@/lib/content";

export const metadata = { title: "Events & Tastings — Best Wine & Spirits" };

export default function EventsPage() {
  return (
    <>
      <div className="page-head">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Events</span>
          </div>
          <h1 className="h2">Tastings &amp; events</h1>
          <p style={{ color: "var(--muted)", marginTop: "0.4rem" }}>
            Weekly tastings, pairing nights, and custom packages for weddings &amp; parties.
          </p>
        </div>
      </div>

      <section className="section" style={{ paddingTop: "2rem" }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">On the calendar</span>
            <h2 className="h2">Upcoming tastings</h2>
          </div>
          <div className="tastings">
            {EVENTS.map((e) => (
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
                <a className="btn btn-outline btn--sm" href="#rsvp">
                  Reserve
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <EventForms />
        </div>
      </section>
    </>
  );
}
