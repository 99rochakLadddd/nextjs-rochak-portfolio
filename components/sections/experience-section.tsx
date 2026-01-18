"use client"

import { SectionWrapper } from "@/components/section-wrapper"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { SectionTitle } from "@/components/section-title"

const experiences = [
  {
    id: 1,
    role: "Full-Stack Developer",
    company: "GorkhaTech Pvt. Ltd.",
    period: "2025 - Present",
    description: "Working on modern web applications using Next.js and React, focusing on design and performance optimization.",
  },
  {
    id: 2,
    role: "Web Developer Intern",
    company: "Softech Foundation Ltd.",
    period: "2024 - 2025",
    description: "Developed and maintained production applications with React and Node.js, contributing to team projects and improving code quality.",
  },
  // {
  //   id: 3,
  //   role: "Web Developer Intern",
  //   company: "Startup",
  //   period: "2023 - 2024",
  //   description: "Started my journey in web development, learning full-stack development principles.",
  // },
]

export function ExperienceSection() {
  return (
    <SectionWrapper id="experience" className="my-20 font-play">
      <SectionTitle title="Experience" subtitle="My professional journey"  />
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <GlassmorphicCard key={exp.id} className="p-6">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                <p className="text-sm text-muted-foreground">{exp.company}</p>
              </div>
              <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">{exp.period}</span>
            </div>
            <p className="text-muted-foreground">{exp.description}</p>
          </GlassmorphicCard>
        ))}
      </div>
    </SectionWrapper>
  )
}
