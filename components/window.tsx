"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { X, Minus } from "lucide-react"

interface WindowProps {
  id: string
  title: string
  icon: React.ReactNode
  children: React.ReactNode
  isActive: boolean
  position: { x: number; y: number }
  size: { width: number; height: number }
  onClose: () => void
  onFocus: () => void
  onDragStop: (position: { x: number; y: number }) => void
}

export default function Window({
  id,
  title,
  icon,
  children,
  isActive,
  position,
  size,
  onClose,
  onFocus,
  onDragStop,
}: WindowProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [windowPosition, setWindowPosition] = useState(position)
  const [isMinimized, setIsMinimized] = useState(false)
  const windowRef = useRef<HTMLDivElement>(null)

  // Handle window drag
  const handleDrag = (e: MouseEvent) => {
    if (!isDragging || !windowRef.current) return

    const rect = windowRef.current.getBoundingClientRect()
    const newX = e.clientX - rect.width / 2
    const newY = e.clientY - 20 // Offset for title bar

    setWindowPosition({ x: newX, y: newY })
  }

  const handleDragStart = () => {
    setIsDragging(true)
    onFocus()
    document.addEventListener("mousemove", handleDrag)
    document.addEventListener("mouseup", handleDragEnd)
  }

  const handleDragEnd = () => {
    setIsDragging(false)
    document.removeEventListener("mousemove", handleDrag)
    document.removeEventListener("mouseup", handleDragEnd)
    onDragStop(windowPosition)
  }

  // Clean up event listeners
  useEffect(() => {
    return () => {
      document.removeEventListener("mousemove", handleDrag)
      document.removeEventListener("mouseup", handleDragEnd)
    }
  }, [])

  // Animation variants
  const variants = {
    open: {
      opacity: 1,
      scale: 1,
      display: "block",
      height: size.height,
    },
    minimized: {
      opacity: 0,
      scale: 0.8,
      height: 0,
      transitionEnd: {
        display: "none",
      },
    },
  }

  if (isMinimized && !isActive) return null

  return (
    <motion.div
      ref={windowRef}
      className={`absolute overflow-hidden ${isActive ? "z-20" : "z-10"}`}
      style={{
        left: windowPosition.x,
        top: windowPosition.y,
        width: size.width,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isMinimized ? "minimized" : "open"}
      variants={variants}
      transition={{ duration: 0.2 }}
      onClick={onFocus}
    >
      {/* Window Title Bar */}
      <div
        className={`flex items-center px-2 py-1 ${isActive ? "bg-blue-600" : "bg-gray-700"} cursor-move`}
        onMouseDown={handleDragStart}
      >
        <div className="flex items-center flex-1">
          <div className="mr-2">{icon}</div>
          <div className="text-white text-sm truncate">{title}</div>
        </div>
        <div className="flex space-x-1">
          <button
            className="p-1 hover:bg-blue-500 focus:outline-none"
            onClick={(e) => {
              e.stopPropagation()
              setIsMinimized(!isMinimized)
            }}
          >
            <Minus className="w-4 h-4 text-white" />
          </button>
          <button
            className="p-1 hover:bg-red-500 focus:outline-none"
            onClick={(e) => {
              e.stopPropagation()
              onClose()
            }}
          >
            <X className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

      {/* Window Content */}
      <div
        className="bg-black border-2 border-t-0 border-gray-700 overflow-auto"
        style={{ maxHeight: size.height - 30 }}
      >
        {children}
      </div>
    </motion.div>
  )
}

