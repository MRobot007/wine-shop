import { useCountUp } from "../../hooks/useCountUp";

export default function CountUp({ to }) {
  const ref = useCountUp(to);
  return <span ref={ref}>0</span>;
}
