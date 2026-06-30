import { useReveal } from "../../hooks/useReveal";

/** Wrapper that scroll-reveals its content with anime.js. */
export default function Reveal({
  as: Tag = "div",
  y,
  x,
  scale,
  delay,
  duration,
  className,
  children,
  ...rest
}) {
  const ref = useReveal({ y, x, scale, delay, duration });
  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  );
}
