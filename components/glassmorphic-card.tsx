"use client"

import type { ReactNode } from "react"

interface GlassmorphicCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function GlassmorphicCard({ children, className = "", hover = true }: GlassmorphicCardProps) {
  return (
    <div
              className="group new-bg-for-icon-div relative overflow-hidden rounded-2xl p-8 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:from-white/10 hover:to-white/5 flex flex-col items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #049ccf1f 0%, #053943ff 100%)",
                }}
              >
      {children}
    </div>
  )
}
