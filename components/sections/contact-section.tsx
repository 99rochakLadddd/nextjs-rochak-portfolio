"use client"

import { SectionWrapper } from "@/components/section-wrapper"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { SectionTitle } from "@/components/section-title"
import Link from "next/link"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export function ContactSection() {
  const contacts = [
    {
      label: "Email",
      href: "mailto:rochakneupane5@gmail.com",
      icon: <FaEnvelope className="text-xl" />,
      display: "rochakneupane5@gmail.com",
    },
    {
      label: "GitHub",
      href: "https://github.com/99rochakLadddd",
      icon: <FaGithub className="text-xl" />,
      display: "github.com/99rochakLadddd",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rochak99/",
      icon: <FaLinkedin className="text-xl" />,
      display: "linkedin.com/in/rochak99",
    },
  ]

  return (
    <SectionWrapper id="contact">
      <SectionTitle
        title="Get In Touch"
        subtitle="Let's connect and build something amazing"
      />
      <GlassmorphicCard className="p-8 max-w-2xl">
        <div className="grid gap-6 md:grid-cols-3 mb-8">
          {contacts.map((contact) => (
            <Link
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl hover:bg-white/10 transition-colors"
            >
              <div className="text-2xl text-foreground">{contact.icon}</div>
              <div className="flex flex-col">
                <span className="font-semibold text-foreground">{contact.label}</span>
                <span className="text-sm text-muted-foreground break-all">
                  {contact.display}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <p className="text-muted-foreground">
          Feel free to reach out for collaborations or just a friendly hello. I'll try my best to get back to you within 24 hours.
        </p>
      </GlassmorphicCard>
    </SectionWrapper>
  )
}
