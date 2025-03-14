"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Menu } from "lucide-react"

interface TaskbarProps {
  openWindows: Array<{
    id: string
    title: string
    icon: React.ReactNode
  }>
  activeWindow: string | null
  onWindowClick: (id: string) => void
}

export default function Taskbar({ openWindows, activeWindow, onWindowClick }: TaskbarProps) {
  const [time, setTime] = useState(new Date())
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Update clock
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Format time in 24-hour format
  const formattedTime = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })

  return (
    <div className="fixed bottom-0 left-0 right-0 h-10 bg-gray-800 border-t-2 border-gray-600 flex items-center px-2 z-30">
      {/* Start Button */}
      <div className="relative">
        <button
          className={`flex items-center px-3 h-8 mr-2 ${isMenuOpen ? "bg-blue-700" : "bg-gray-700"} hover:bg-blue-600`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-5 h-5 mr-1 text-white" />
          <span className="text-white text-sm">START</span>
        </button>

        {/* Start Menu */}
        {isMenuOpen && (
          <div className="absolute bottom-10 left-0 w-48 bg-gray-800 border-2 border-gray-600 shadow-lg">
            <div className="p-2 border-b border-gray-600 bg-blue-900 text-white font-bold">PIXELOS v1.0</div>
            <div className="p-2">
              <button className="w-full text-left px-2 py-1 text-white hover:bg-blue-700 text-sm">ABOUT</button>
              <button className="w-full text-left px-2 py-1 text-white hover:bg-blue-700 text-sm">SETTINGS</button>
              <button className="w-full text-left px-2 py-1 text-white hover:bg-blue-700 text-sm">HELP</button>
              <div className="my-1 border-t border-gray-600"></div>
              <button className="w-full text-left px-2 py-1 text-white hover:bg-blue-700 text-sm">SHUT DOWN</button>
            </div>
          </div>
        )}
      </div>

      {/* Open Windows */}
      <div className="flex-1 flex space-x-1">
        {openWindows.map((window) => (
          <button
            key={window.id}
            className={`flex items-center px-2 h-8 ${activeWindow === window.id ? "bg-blue-700" : "bg-gray-700"} hover:bg-blue-600 max-w-[200px]`}
            onClick={() => onWindowClick(window.id)}
          >
            <div className="mr-1">{window.icon}</div>
            <span className="text-white text-sm truncate">{window.title}</span>
          </button>
        ))}
      </div>

      {/* Clock */}
      <div className="bg-gray-700 px-3 h-8 flex items-center">
        <span className="text-white text-sm">{formattedTime}</span>
      </div>
    </div>
  )
}

