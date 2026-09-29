export const skillOptions = [
  "Python",
  "Java",
  "TypeScript",
  "JavaScript",
  "C",
  "SQL",
  "HTML",
  "CSS",
  "React",
  "React Native",
  "Spring Boot",
  "FastAPI",
  "Node.js",
  "Express.js",
  "Tailwind CSS",
  "Git",
  "Github",
  "GitLab",
  "Jira",
  "PostgreSQL",
  "Supabase",
  "Docker",
  "Jest",
  "LabVIEW",
  "Figma",
] as const;

export type SpecificSkill = (typeof skillOptions)[number];

export type SkillGroup = Record<
  "Languages" | "Frameworks/Libraries" | "Tools/Database",
  SpecificSkill[]
>;

export const skills: SkillGroup = {
  Languages: [
    "Python",
    "Java",
    "TypeScript",
    "JavaScript",
    "C",
    "SQL",
    "HTML",
    "CSS",
  ],
  "Frameworks/Libraries": [
    "React",
    "React Native",
    "Spring Boot",
    "FastAPI",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
  ],
  "Tools/Database": [
    "Git",
    "Github",
    "GitLab",
    "Jira",
    "PostgreSQL",
    "Supabase",
    "Docker",
    "Jest",
    "LabVIEW",
    "Figma",
  ],
};

const devicon = (name: string, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${variant}.svg`;

export const skillIcons: Record<SpecificSkill, string | null> = {
  Python: devicon("python"),
  Java: devicon("java"),
  TypeScript: devicon("typescript"),
  JavaScript: devicon("javascript"),
  C: devicon("c"),
  SQL: devicon("azuresqldatabase"),
  HTML: devicon("html5"),
  CSS: devicon("css3"),
  React: devicon("react"),
  "React Native": devicon("reactnative"),
  "Spring Boot": devicon("spring"),
  FastAPI: devicon("fastapi"),
  "Node.js": devicon("nodejs"),
  "Express.js": devicon("express"),
  "Tailwind CSS": devicon("tailwindcss"),
  Git: devicon("git"),
  Github: devicon("github"),
  GitLab: devicon("gitlab"),
  Jira: devicon("jira"),
  PostgreSQL: devicon("postgresql"),
  Supabase: devicon("supabase"),
  Docker: devicon("docker"),
  Jest: devicon("jest", "plain"),
  LabVIEW: null,
  Figma: devicon("figma"),
};
