"use client"

import { motion } from "framer-motion"

interface SkillBadgeProps {
  name: string
  index: number
}

export default function SkillBadge({ name, index }: SkillBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1 }}
      className="bg-primary/20 text-primary border border-primary/30 px-4 py-2 rounded-full text-sm font-medium"
    >
      {name}
    </motion.span>
  )
}

