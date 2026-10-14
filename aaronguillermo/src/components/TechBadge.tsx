import { TECH_LOGOS } from "../data/techLogos";
import type { Theme } from "../theme/palette";

export default function TechBadge({ name, T }: { name: string; T: Theme }) {
  const src = TECH_LOGOS[name];
  return (
    <span className="glass-chip skill-text tech-badge" style={{ color: T.text, borderColor: T.glassBorder }}>
      {src && <span className="tech-icon"><img src={src} alt="" aria-hidden="true" width="14" height="14" /></span>}
      <span>{name}</span>
    </span>
  );
}
