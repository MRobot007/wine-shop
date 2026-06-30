import CountUp from "./ui/CountUp";
import Reveal from "./ui/Reveal";
import { STATS } from "../data/content";

export default function Stats() {
  return (
    <section className="section section--alt" aria-label="By the numbers">
      <div className="container">
        <Reveal className="stats" y={18}>
          {STATS.map((s, i) => (
            <div className="stat" key={i}>
              <div className="stat__num">
                <CountUp to={s.value} />
                <span>{s.suffix}</span>
              </div>
              <div className="stat__label">{s.label}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
