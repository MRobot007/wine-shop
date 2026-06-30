import { useMagnetic } from "../../hooks/useMagnetic";

/**
 * Glass/gold button. `magnetic` enables the cursor-follow micro-interaction.
 * `arrow` appends an animated arrow that nudges on hover.
 */
export default function Button({
  as: Tag = "a",
  variant = "primary",
  magnetic = false,
  arrow = false,
  className = "",
  children,
  ...rest
}) {
  const ref = useMagnetic({ enabled: magnetic });
  const cls = `btn btn-${variant}${className ? " " + className : ""}`;
  return (
    <Tag ref={ref} className={cls} {...rest}>
      {children}
      {arrow && (
        <span className="btn-arrow" aria-hidden="true">
          →
        </span>
      )}
    </Tag>
  );
}
