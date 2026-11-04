/**
 * Kvarta mark — a circle cut into four quarters, one of them filled.
 * "Kvarta" = a quarter: the year split in four, one season on the plate.
 * `quarter` picks which slice is filled (1 = top-left, then clockwise).
 */
const slices: Record<1 | 2 | 3 | 4, string> = {
  1: "M24 24 L24 2 A22 22 0 0 0 2 24 Z",
  2: "M24 24 L46 24 A22 22 0 0 0 24 2 Z",
  3: "M24 24 L24 46 A22 22 0 0 0 46 24 Z",
  4: "M24 24 L2 24 A22 22 0 0 0 24 46 Z",
};

export function Mark({
  quarter = 2,
  size = 28,
  muted = false,
  className,
}: {
  quarter?: 1 | 2 | 3 | 4;
  size?: number;
  muted?: boolean;
  className?: string;
}) {
  const ink = muted ? "var(--smoke)" : "currentColor";
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
    >
      <path d={slices[quarter]} fill={ink} />
      <circle cx="24" cy="24" r="22" stroke={ink} strokeWidth="1.5" />
      <path d="M24 2 V46 M2 24 H46" stroke={ink} strokeWidth="1.5" />
    </svg>
  );
}

export function Logo({ size = 26, sub }: { size?: number; sub?: string }) {
  return (
    <span className="logo-lockup">
      <Mark size={size} />
      <span className="logo-word">Kvarta</span>
      {sub && <span className="label logo-sub">{sub}</span>}
    </span>
  );
}
