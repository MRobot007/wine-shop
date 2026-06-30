import { BRANDS } from "../data/content";

export default function BrandStrip() {
  const items = [...BRANDS, ...BRANDS];
  return (
    <div className="strip" aria-hidden="true">
      <div className="strip__track">
        {items.map((b, i) => (
          <span key={i}>{b}</span>
        ))}
      </div>
    </div>
  );
}
