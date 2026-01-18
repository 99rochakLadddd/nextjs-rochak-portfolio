"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "./ui/button"


export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
<Button
  size="icon"
  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
  className="fixed top-6 right-3 rounded-full z-50 bg-black"
  aria-label="Toggle theme"
>
  {theme === "dark" ? (
    <Sun className="h-5 w-5" style={{ color: "#00bfff" }} />
  ) : (
    <Moon className="h-5 w-5" style={{ color: "#00bfff" }} />
  )}
</Button>


  )
}
