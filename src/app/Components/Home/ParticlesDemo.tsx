"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

import { Particles } from "@/components/ui/particles"

export function ParticlesDemo() {
  const { theme } = useTheme()
  const [color, setColor] = useState("#4e45e2")

  useEffect(() => {
    setColor(theme === "dark" ? "#4e45e2" : "#000000")
  }, [theme])

  return (
    <div className=" flex h-screen absolute top-0 left-0 w-full flex-col items-center justify-center overflow-hidden  bg-background ">
      <Particles
        className="absolute inset-0"
        quantity={200}
        ease={80}
        color={color}
        refresh
      />
    </div>
  )
}
