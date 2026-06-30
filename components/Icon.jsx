// Minimal inline line-icon set (stroke = currentColor). No external deps, no emoji.
const ICONS = {
  cart: (
    <>
      <circle cx="9" cy="20" r="1.4" />
      <circle cx="17" cy="20" r="1.4" />
      <path d="M3 4h2l2.2 11.2a1 1 0 0 0 1 .8h8.4a1 1 0 0 0 1-.8L20 7.5H6.2" />
    </>
  ),
  bag: (
    <>
      <path d="M6 8h12l-1 12H7z" />
      <path d="M9 8V6.5a3 3 0 0 1 6 0V8" />
    </>
  ),
  truck: (
    <>
      <path d="M3 6.5h11v9H3z" />
      <path d="M14 9.5h3.5l3 3v3H14z" />
      <circle cx="7.5" cy="17.5" r="1.6" />
      <circle cx="17.5" cy="17.5" r="1.6" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.2" />
      <path d="M16 16l4.5 4.5" />
    </>
  ),
  glass: (
    <>
      <path d="M8 4h8l-1 6.2a3 3 0 0 1-6 0z" />
      <path d="M12 13.2V19" />
      <path d="M8.5 19.5h7" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21.5C12 21.5 19 15.5 19 10a7 7 0 1 0-14 0c0 5.5 7 11.5 7 11.5z" />
      <circle cx="12" cy="10" r="2.4" />
    </>
  ),
  phone: <path d="M6 4h3.2l1.6 4-2 1.2a11 11 0 0 0 4.8 4.8l1.2-2 4 1.6V19a2 2 0 0 1-2 2A15.5 15.5 0 0 1 5 6a2 2 0 0 1 1-2z" />,
  mail: (
    <>
      <rect x="3.2" y="5.5" width="17.6" height="13" rx="2.2" />
      <path d="M4 7.5l8 5.2 8-5.2" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.4" />
      <path d="M12 7.5V12l3.2 2" />
    </>
  ),
  filter: (
    <>
      <path d="M4 6.5h16" />
      <path d="M7 12h10" />
      <path d="M10 17.5h4" />
    </>
  ),
  check: <path d="M5 12.5l4.2 4.2L19 7" />,
  calendar: (
    <>
      <rect x="4" y="5.5" width="16" height="15" rx="2.4" />
      <path d="M4 10h16M8.5 3.5v4M15.5 3.5v4" />
    </>
  ),
};

export default function Icon({ name, size = 22, strokeWidth = 1.7, className }) {
  const node = ICONS[name];
  if (!node) return null;
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {node}
    </svg>
  );
}
