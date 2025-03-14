"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"

interface DesktopIconProps {
  icon: React.ReactNode
  label: string
  onClick: () => void
}

export default function DesktopIcon({ icon, label, onClick }: DesktopIconProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="flex flex-col items-center justify-center p-2 cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div
        className={`w-16 h-16 flex items-center justify-center mb-1 ${isHovered ? "bg-blue-700" : "bg-transparent"} border-2 ${isHovered ? "border-white" : "border-transparent"}`}
      >
        {icon}
      </div>
      <div className={`text-center px-1 py-0.5 text-xs ${isHovered ? "bg-blue-700 text-white" : "text-white"}`}>
        {label}
      </div>
    </motion.div>
  )
}

