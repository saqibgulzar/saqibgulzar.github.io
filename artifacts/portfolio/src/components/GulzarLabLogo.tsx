/**
 * Gulzar Lab — Network Petal Logo (Concept C)
 *
 * Four petals radiate from a central roundabout hub, each shaped
 * like a curved road section — representing Safety, Infrastructure,
 * Resilience, and Transportation. Monochrome: inherits primary color
 * via `currentColor` so it adapts to light/dark theme automatically.
 */

interface GulzarLabLogoProps {
  /** Overall size in px (the SVG is square). Default: 40 */
  size?: number;
  /** Extra className on the wrapping svg */
  className?: string;
}

export function GulzarLabLogo({ size = 40, className = "" }: GulzarLabLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Gulzar Lab logo"
      className={className}
      fill="currentColor"
    >
      {/*
        ── PETALS ──────────────────────────────────────────────────────
        Each petal is a two-arc bezier leaf pointing outward.
        The cubic control points are derived by rotating the North petal
        90° successively around center (60, 60).

        North petal → top  (Safety)
        East petal  → right (Infrastructure)
        South petal → bottom (Resilience)
        West petal  → left  (Transportation)
      */}

      {/* North */}
      <path d="M60,60 C48,56 44,36 60,26 C76,36 72,56 60,60 Z" />
      {/* East */}
      <path d="M60,60 C64,48 84,44 94,60 C84,76 64,72 60,60 Z" />
      {/* South */}
      <path d="M60,60 C72,64 76,84 60,94 C44,84 48,64 60,60 Z" />
      {/* West */}
      <path d="M60,60 C56,72 36,76 26,60 C36,44 56,48 60,60 Z" />

      {/*
        ── ROAD CENTRELINES (white dashes) ──────────────────────────────
        Evoke road markings running through the centre of each petal.
      */}
      <line
        x1="60" y1="57" x2="60" y2="29"
        stroke="white" strokeWidth="1.8" strokeLinecap="round"
        strokeDasharray="4 3"
      />
      <line
        x1="63" y1="60" x2="91" y2="60"
        stroke="white" strokeWidth="1.8" strokeLinecap="round"
        strokeDasharray="4 3"
      />
      <line
        x1="60" y1="63" x2="60" y2="91"
        stroke="white" strokeWidth="1.8" strokeLinecap="round"
        strokeDasharray="4 3"
      />
      <line
        x1="57" y1="60" x2="29" y2="60"
        stroke="white" strokeWidth="1.8" strokeLinecap="round"
        strokeDasharray="4 3"
      />

      {/*
        ── TERMINAL NODES ───────────────────────────────────────────────
        Small white circles at the tip of each road — network nodes /
        intersections at the periphery.
      */}
      <circle cx="60" cy="26" r="3.5" fill="white" />
      <circle cx="94" cy="60" r="3.5" fill="white" />
      <circle cx="60" cy="94" r="3.5" fill="white" />
      <circle cx="26" cy="60" r="3.5" fill="white" />

      {/*
        ── CENTRE HUB (roundabout) ───────────────────────────────────────
        White ring → primary-colored disc → white centre dot
        Mimics a roundabout / interchange node.
      */}
      <circle cx="60" cy="60" r="11" fill="white" />
      <circle cx="60" cy="60" r="8"  fill="currentColor" />
      <circle cx="60" cy="60" r="3"  fill="white" />
    </svg>
  );
}
