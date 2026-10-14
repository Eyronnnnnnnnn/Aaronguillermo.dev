import { useState } from "react";
import { SKILL_GROUPS } from "../data/portfolio";
import type { Theme } from "../theme/palette";

const extraIcons: Record<string, string> = {
  "Cloudinary": "https://cdn.simpleicons.org/cloudinary/3448C5",
  "Socket.IO": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
};

export default function TechBadge({ name, T }: { name: string; T: Theme }) {
  const [failed, setFailed] = useState(false);
  const skill = SKILL_GROUPS.flatMap(group => group.skills).find(item => item.name === name);
  const src = skill?.src ?? extraIcons[name];
  const database = name === "SQL" || name === "NoSQL";
  return (
    <span className="glass-chip skill-text tech-badge" style={{ color: T.text, borderColor: T.glassBorder }}>
      {src && !failed ? (
        <span className="tech-icon"><img src={src} alt="" aria-hidden="true" width="14" height="14" onError={() => setFailed(true)} /></span>
      ) : (
        <svg className="tech-symbol" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          {database ? <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0" /></> : <><path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18" /></>}
        </svg>
      )}
      <span>{name}</span>
    </span>
  );
}
