export const GITHUB_USERNAME = "Eyronnnnnnnnn";
export const GITHUB_URL = `https://github.com/${GITHUB_USERNAME}`;
import chaindaanCover from "../assets/chaindaan-cover.svg";
import chaindaanLogo from "../assets/photos/ChainDaan-logo/chaindaan.logo.png";
import aiLiteracyCertificate from "../assets/photos/Certifications/introduction to Ai literacy Certificate.png";
import aiEngineerCertificate from "../assets/photos/Certifications/AI ENGINEER FOR DEVELOPERS ASSOCIATE.png";
import datacampLogo from "../assets/photos/Certifications/datacamp-logo.svg";
import mapuaLogo from "../assets/photos/Certifications/mapua-logo.png";
export const YEARS = [2026, 2025, 2024];
import { TECH_LOGOS } from "./techLogos";
export type Project = { id: number; title: string; desc: string; tags: string[]; image: string; icon?: string; role?: string; details?: string; status?: string };
export const PROJECTS: Record<number, Project[]> = {
2026: [
  {
    id: 1,
    title: "Chaindaan",
    desc: "Chain-Daan is an ongoing academic software engineering project that brings together frontend development, backend services, and database integration in a full-stack web application.",
    image: chaindaanCover,
    icon: chaindaanLogo,
    role: "Full Stack Developer (Solo Developer)",
    details: "As the sole developer in a five-member BSIT team, I am responsible for translating project requirements into working features across the frontend and backend. My work connects the React interface with Node.js and Express services, integrates MongoDB for data storage, and incorporates Cloudinary and Socket.IO for media handling and real-time communication. This role applies software engineering principles to organize the codebase and keep application components working together as development progresses.",
    status: "In Development",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Cloudinary", "Socket.IO", "Software Engineering"],
  },
],
};

export const EXPERIENCE = [
  {
    role: "Full Stack Developer (Solo Developer)",
    company: "Chain-Daan | Academic Software Engineering Project",
    period: "2026 — Present",
    desc: "Responsible for the full-stack development of Chain-Daan within a five-member BSIT team. As the sole developer, I translate project requirements into application features, build the frontend and backend, and integrate database, media, and real-time services into a cohesive web application.",
  },
];

// NOTE: placeholder degree/period for MMSU — update with your actual program and dates.
export const EDUCATION = [
  { degree: "Bachelor of Science in Information Technology", school: "Mariano Marcos State University", period: "Graduating in 2028", note: "1st Year College Schoolar", logo: "mmsu" as const },
  { degree: "(STEM)Science Technology Engineering and Mathemathics", school: "Catagtaguen National Highschool", period: "Graduated 2024", note: "Honor Student", logo: "generic" as const },
  { degree: "Junior Highschool", school: "Catagtaguen National Highschool", period: "Graduated 2022", note: "", logo: "generic" as const },
  { degree: "Elementary", school: "Macayepyep Elementary school", period: "Grade 6", note: "Grade 6 Graduated", logo: "generic" as const },
  { degree: "Elementary", school: "R and O Academy", period: "Grade 1-5", note: "", logo: "generic" as const },
];

export type Certificate = { name: string; issuer: string; year: string; logo: string; logoAlt: string; desc: string; image?: string };
// Set image to the certificate image URL or an imported local asset.
export const CERTS: Certificate[] = [
  {
    name: "Associate AI Engineer for Developers",
    image: aiEngineerCertificate,
    issuer: "DataCamp",
    year: "2026",
    logo: datacampLogo,
    logoAlt: "DataCamp logo",
   desc: "Developed skills in integrating generative AI into software applications, including working with large language models, prompt engineering, and building AI-powered solutions.",
  },
  {
    name: "Introduction to AI Literacy and Responsible Use",
    image: aiLiteracyCertificate,
    issuer: "Commission on Higher Education (CHED) Bagong Pilipinas (ACHIEVE program) Mapúa University(MAPUA)",
    year: "2026",
    logo: mapuaLogo,
    logoAlt: "Mapúa University logo",
   desc: "Developed foundational AI literacy, with an emphasis on understanding AI capabilities and limitations, critically evaluating AI-generated content, and applying ethical and privacy-conscious practices when using AI tools.",
  },

 
];

export type Skill = { name: string; src?: string; custom?: "sql" | "nosql"; invertOnDark?: boolean };
export const SKILLS: Skill[] = [
  { name: "HTML", src: TECH_LOGOS.HTML },
  { name: "CSS", src: TECH_LOGOS.CSS },
  { name: "JavaScript", src: TECH_LOGOS.JavaScript },
  { name: "Java", src: TECH_LOGOS.Java },
  { name: "React.js", src: TECH_LOGOS["React.js"] },
  { name: "Next.js", src: TECH_LOGOS["Next.js"], invertOnDark: true },
  { name: "Node.js", src: TECH_LOGOS["Node.js"] },
  { name: "Express.js", src: TECH_LOGOS["Express.js"], invertOnDark: true },
  { name: "SQL", custom: "sql" },
  { name: "NoSQL", custom: "nosql" },
  { name: "MongoDB", src: TECH_LOGOS.MongoDB },
  { name: "Docker", src: TECH_LOGOS.Docker },
  { name: "Git", src: TECH_LOGOS.Git },
  { name: "GitHub", src: TECH_LOGOS.GitHub, invertOnDark: true },
  { name: "VS Code", src: TECH_LOGOS["VS Code"] },
];

export const SKILL_GROUPS: { name: string; skills: Skill[] }[] = [
  { name: "Frontend", skills: SKILLS.filter((s) => ["HTML", "CSS", "JavaScript", "React.js", "Next.js"].includes(s.name)) },
  { name: "Backend", skills: SKILLS.filter((s) => ["Java", "Node.js", "Express.js"].includes(s.name)) },
  { name: "Databases", skills: SKILLS.filter((s) => ["SQL", "NoSQL", "MongoDB"].includes(s.name)) },
  { name: "Software Engineering", skills: ["Agile", "Scrum", "System Design", "System Architecture"].map((name) => ({ name })) },
  { name: "AI Tools", skills: ["Codex", "Claude (Anthropic)", "Generative AI"].map((name) => ({ name })) },
  { name: "Deployment Platforms", skills: [{ name: "Vercel" }, { name: "Render" }, ...SKILLS.filter((s) => s.name === "Docker")] },
  { name: "Tools", skills: [...SKILLS.filter((s) => ["Git", "GitHub", "VS Code"].includes(s.name)), { name: "Figma", src: TECH_LOGOS.Figma }] },
];
