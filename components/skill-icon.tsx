import React from "react"
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiVsco,
  SiFigma,
  SiNodedotjs,
} from "react-icons/si"

interface SkillIconProps {
  name: string
  color: string
}

const iconMap: Record<string, React.ReactNode> = {
  React: <SiReact />,
  "Next.js": <SiNextdotjs />,
  TypeScript: <SiTypescript />,
  "Tailwind CSS": <SiTailwindcss />,
  "Node.js": <SiNodedotjs />,
  Express: <SiExpress />,
  PostgreSQL: <SiPostgresql />,
  MongoDB: <SiMongodb />,
  Git: <SiGit />,
  Docker: <SiDocker />,
  "VS Code": <SiVsco />,
  Figma: <SiFigma />,
}

export function SkillIcon({ name, color }: SkillIconProps) {
  return (
<div
  className={`skill-icon-rotate-float skill-icon-glow flex items-center justify-center w-16 h-16 rounded-xl ${color}`}
  style={{
    boxShadow: `0 0 40px ${
      color.includes("from-") ? "rgba(59, 130, 246, 0.5)" : "rgba(255, 255, 255, 0.1)"
    }`,
  }}
>
  <span className="text-2xl text-white drop-shadow-lg">{iconMap[name] || name}</span>
</div>

  )
}
