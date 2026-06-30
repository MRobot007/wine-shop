import Reveal from "./Reveal";

export default function SectionHead({ eyebrow, title, centered = false, children }) {
  return (
    <Reveal className={`section-head${centered ? " is-centered" : ""}`}>
      <span className={`eyebrow${centered ? " is-centered" : ""}`}>{eyebrow}</span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </Reveal>
  );
}
