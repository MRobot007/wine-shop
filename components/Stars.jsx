export default function Stars({ rating = 0 }) {
  const full = Math.round(rating);
  return (
    <span className="stars" aria-label={`${rating} out of 5`}>
      {"★".repeat(full)}
      <span style={{ opacity: 0.3 }}>{"★".repeat(5 - full)}</span>
    </span>
  );
}
