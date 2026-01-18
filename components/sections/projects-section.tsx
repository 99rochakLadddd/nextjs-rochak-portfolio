"use client"

import { SectionWrapper } from "@/components/section-wrapper"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { SectionTitle } from "@/components/section-title"
import Link from "next/link"
import { FaGithub } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"

const projects = [
  {
    id: 1,
    name: "Guff Station",
    description: "A full-stack application built with Next.js and TypeScript",
    tech: ["Next.js", "React", "TypeScript", "PostgreSQL"],
    github: "#",
    live: "https://www.guffstation.com/",
  },
  {
    id: 2,
    name: "Krishak Bazaar",
    description: "Real-time collaboration tool with WebSocket integration",
    tech: ["Laravel", "JavaScript", "Python", "AI/ML"],
    github: "https://github.com/99rochakLadddd/Krishak-Bazaar-FYP",
    live: "#",
  },
  {
    id: 3,
    name: "Travolo E-commerce",
    description: "E-commerce platform with payment integration",
    tech: ["Laravel", "Khalti", "JavaScript", "Bootstrap"],
    github: "https://github.com/99rochakLadddd/Travolo-E-commerce-",
    live: "#",
  },
]

const techColors: Record<string, string> = {
  "Next.js": "bg-gray-800 text-white",        // slightly lighter black/gray
  React: "bg-[#21A1F1] text-white",           // brighter, deeper React blue
  TypeScript: "bg-[#0057B8] text-white",      // darker, saturated TS blue
  "Tailwind CSS": "bg-[#0EA5E9] text-white",  // brighter cyan
  Node: "bg-[#3C873A] text-white",            // vivid green
  Express: "bg-[#111111] text-white",         // deep black
  PostgreSQL: "bg-[#FFFFFF] text-black",     // darker blue
  MongoDB: "bg-[#3FA037] text-white",        // brighter green
  Docker: "bg-[#0D6EFD] text-white",         // richer blue
  Git: "bg-[#E64A19] text-white",            // more vivid orange-red
  "VS Code": "bg-[#0057B8] text-white",      // darker blue
  Figma: "bg-[#D93F1E] text-white",          // brighter red-orange
  Laravel: "bg-[#FF2D20] text-white",                   // Red
  Bootstrap: "bg-[#563D7C] text-white",                // Purple
  JavaScript: "bg-[#F7DF1E] text-dark",               // Yellow
  Python: "bg-[#133C64] text-white",                   // Python blue
  "AI/ML": "bg-[#C54AE0] text-white", // Green for ML model
  "Khalti": "bg-[#5F2E9C] text-white",                    // Orange-red
};



export function ProjectsSection() {
  return (
    <SectionWrapper id="projects">
      <SectionTitle title="Featured Projects" subtitle="A selection of my recent work"  className="-mx-4 sm:-mx-6 font-play lg:-mx-8"/>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <GlassmorphicCard key={project.id} className="p-6 flex flex-col">
            <h3 className="mb-2 text-xl font-play font-semibold text-foreground">{project.name}</h3>
            <p className="mb-4 flex-grow text-muted-foreground">{project.description}</p>
            <div className="mb-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className={`inline-block font-play text-xs rounded px-2 py-1 font-medium ${
                    techColors[tech] || "bg-white/5 text-foreground border border-white/10"
                  }`}
                >
                  {tech}
                </span>
              ))}

            </div>
            <div className="flex gap-4">
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground text-white hover:text-white transition-colors text-2xl"
              >
                <FaGithub />
              </Link>

              <Link
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground text-white hover:text-white transition-colors text-2xl"
              >
                <FiExternalLink />
              </Link>
            </div>

          </GlassmorphicCard>
        ))}
      </div>
    </SectionWrapper>
  )
}
