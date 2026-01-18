"use client"

import type { ReactNode } from "react"

interface SectionWrapperProps {
  id?: string
  children: ReactNode
  className?: string
}

export function SectionWrapper({ id, children, className = "" }: SectionWrapperProps) {
  return (
    <section id={id} className={`relative z-10 w-full px-lg-0 py-20 md:px-6 p-4 sm:px-6 lg:px-0 ${className}`}>
      <div className="mx-auto max-w-6xl ms-lg-4">{children}</div>
    </section>
  )
}
