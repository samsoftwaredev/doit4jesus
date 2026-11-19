import type { CSSProperties } from 'react';

/** Small deterministic generator so server and client render identical particles. */
function seededRandom(seed: number) {
  let state = seed;
  return () => {
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Style = CSSProperties & Record<`--${string}`, string | number>;

const rand = seededRandom(1530);
/** Triangular distribution so most particles gather around the phone in the middle. */
const centered = () => Math.min(98, Math.max(2, 50 + (rand() + rand() - 1) * 58));
const between = (min: number, max: number) => min + rand() * (max - min);

/** Souls rise from the bottom to the very top; some glow brightly, others stay faint and soft. */
const souls = Array.from({ length: 26 }, (_, index) => {
  const bright = index % 4 === 0;
  return {
    id: index,
    style: {
      '--x': `${centered().toFixed(1)}%`,
      '--size': `${(bright ? between(10, 16) : between(5, 10)).toFixed(1)}px`,
      '--peak': (bright ? between(0.85, 1) : between(0.3, 0.6)).toFixed(2),
      '--dur': `${between(15, 30).toFixed(1)}s`,
      '--delay': `${(-between(0, 30)).toFixed(1)}s`,
      '--sway': `${between(14, 46).toFixed(0)}px`,
      '--sway-dur': `${between(4, 8).toFixed(1)}s`,
    } as Style,
  };
});

const BEAD_COUNT = 59;
const RADIUS = 300;
/** Beads laid out on a circle; every eleventh is a larger Our Father bead. */
const beads = Array.from({ length: BEAD_COUNT }, (_, index) => {
  const angle = (index / BEAD_COUNT) * Math.PI * 2 - Math.PI / 2;
  const large = index % 11 === 5;
  return {
    id: index,
    cx: (400 + Math.cos(angle) * RADIUS).toFixed(2),
    cy: (400 + Math.sin(angle) * RADIUS).toFixed(2),
    r: large ? 13 : 7.5,
  };
});

/**
 * Decorative hero backdrop: a slowly turning faded rosary inside a gold halo, with souls floating upward.
 * Purely visual and hidden from assistive tech.
 */
export function HeroAtmosphere() {
  return (
    <div className="hero-atmosphere" aria-hidden="true">
      <div className="hero-halo">
        <span className="hero-halo-glow" />
        <span className="hero-halo-ring hero-halo-ring-outer" />
        <span className="hero-halo-ring hero-halo-ring-inner" />
        <svg className="hero-rosary" viewBox="0 0 800 800" focusable="false">
          <defs>
            <radialGradient id="hero-bead" cx="35%" cy="30%" r="75%">
              <stop offset="0" stopColor="#fff3d1" />
              <stop offset="0.55" stopColor="#d9b36c" />
              <stop offset="1" stopColor="#8a6a34" />
            </radialGradient>
          </defs>
          <circle cx="400" cy="400" r={RADIUS} fill="none" stroke="#d9b36c" strokeOpacity="0.55" strokeWidth="1.5" />
          {beads.map((bead) => (
            <circle key={bead.id} cx={bead.cx} cy={bead.cy} r={bead.r} fill="url(#hero-bead)" />
          ))}
        </svg>
      </div>

      {souls.map((soul) => (
        <span key={soul.id} className="soul" style={soul.style}>
          <span className="soul-orb" />
        </span>
      ))}
    </div>
  );
}
