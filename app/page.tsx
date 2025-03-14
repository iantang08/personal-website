"use client"

import type React from "react"

import { useState, useEffect } from "react"
import DesktopIcon from "@/components/desktop-icon"
import Window from "@/components/window"
import Taskbar from "@/components/taskbar"
import { File } from "lucide-react"
import { Briefcase } from "lucide-react"
import { GraduationCap } from "lucide-react"
import { Mail } from "lucide-react"

// Define window content types
type WindowContent = {
  id: string
  title: string
  content: React.ReactNode
  icon: React.ReactNode
  position: { x: number; y: number }
  size: { width: number; height: number }
}

export default function Home() {
  // State for open windows
  const [openWindows, setOpenWindows] = useState<string[]>([])
  const [activeWindow, setActiveWindow] = useState<string | null>(null)
  const [windowPositions, setWindowPositions] = useState<Record<string, { x: number; y: number }>>({})
  const [bootComplete, setBootComplete] = useState(false)
  const [bootProgress, setBootProgress] = useState(0)

  // Define all possible windows/documents
  const windows: Record<string, WindowContent> = {
    about: {
      id: "about",
      title: "about_me.txt",
      icon: <File className="w-6 h-6" />,
      content: (
        <div className="p-4 font-pixel text-green-500 leading-relaxed">
          <h2 className="text-xl mb-4 text-yellow-400">ABOUT ME</h2>
          <p className="mb-3">NAME: JOHN DOE</p>
          <p className="mb-3">OCCUPATION: WEB DEVELOPER</p>
          <p className="mb-3">LOCATION: PIXEL CITY, DIGITAL WORLD</p>
          <p className="mb-6">
            I am a passionate developer with a love for retro aesthetics and modern technology. My journey in tech began
            when I discovered my first computer at age 10.
          </p>
          <p>
            When I'm not coding, you can find me collecting vintage game consoles, creating pixel art, or exploring new
            programming languages.
          </p>
        </div>
      ),
      position: { x: 100, y: 100 },
      size: { width: 400, height: 350 },
    },
    projects: {
      id: "projects",
      title: "my_projects.exe",
      icon: <Briefcase className="w-6 h-6" />,
      content: (
        <div className="p-4 font-pixel text-green-500">
          <h2 className="text-xl mb-4 text-yellow-400">MY PROJECTS</h2>
          <div className="space-y-4">
            {[
              {
                name: "PIXEL WEATHER APP",
                desc: "A weather application with retro pixel art for different weather conditions",
                tech: "REACT, OPENWEATHER API",
              },
              {
                name: "8-BIT PORTFOLIO",
                desc: "This website! A nostalgic take on personal portfolios",
                tech: "NEXT.JS, TAILWIND CSS",
              },
              {
                name: "RETRO GAME COLLECTION",
                desc: "A database of classic 8-bit and 16-bit games with reviews",
                tech: "NODE.JS, MONGODB",
              },
            ].map((project, index) => (
              <div key={index} className="border border-green-500 p-3 mb-2">
                <h3 className="text-yellow-400">{project.name}</h3>
                <p className="text-sm mt-1">{project.desc}</p>
                <p className="text-xs mt-2 text-blue-400">TECH: {project.tech}</p>
              </div>
            ))}
          </div>
        </div>
      ),
      position: { x: 150, y: 150 },
      size: { width: 450, height: 400 },
    },
    skills: {
      id: "skills",
      title: "skills.sys",
      icon: <GraduationCap className="w-6 h-6" />,
      content: (
        <div className="p-4 font-pixel text-green-500">
          <h2 className="text-xl mb-4 text-yellow-400">SKILLS.SYS</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-blue-400 mb-2">PROGRAMMING</h3>
              <ul className="space-y-1">
                <li>JAVASCRIPT [████████░░] 80%</li>
                <li>REACT [███████░░░] 70%</li>
                <li>HTML/CSS [██████████] 100%</li>
                <li>NODE.JS [██████░░░░] 60%</li>
                <li>PYTHON [████░░░░░░] 40%</li>
              </ul>
            </div>
            <div>
              <h3 className="text-blue-400 mb-2">TOOLS</h3>
              <ul className="space-y-1">
                <li>GIT [████████░░] 80%</li>
                <li>FIGMA [███████░░░] 70%</li>
                <li>VS CODE [██████████] 100%</li>
                <li>DOCKER [████░░░░░░] 40%</li>
              </ul>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-blue-400 mb-2">LANGUAGES</h3>
            <ul className="space-y-1">
              <li>ENGLISH [██████████] 100%</li>
              <li>SPANISH [████████░░] 80%</li>
              <li>BINARY [██████████] 100%</li>
            </ul>
          </div>
        </div>
      ),
      position: { x: 200, y: 200 },
      size: { width: 450, height: 400 },
    },
    contact: {
      id: "contact",
      title: "contact.cmd",
      icon: <Mail className="w-6 h-6" />,
      content: (
        <div className="p-4 font-pixel text-green-500">
          <h2 className="text-xl mb-4 text-yellow-400">CONTACT.CMD</h2>
          <p className="mb-6">INITIALIZE COMMUNICATION SEQUENCE...</p>

          <div className="space-y-4">
            <div className="border border-green-500 p-3">
              <p>EMAIL:</p>
              <p className="text-blue-400">your.email@example.com</p>
            </div>

            <div className="border border-green-500 p-3">
              <p>SOCIAL:</p>
              <div className="flex space-x-4 mt-2">
                <a href="#" className="text-blue-400 hover:text-blue-300">
                  GITHUB
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-300">
                  LINKEDIN
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-300">
                  TWITTER
                </a>
              </div>
            </div>

            <div className="border border-green-500 p-3">
              <p className="mb-2">SEND MESSAGE:</p>
              <form className="space-y-2">
                <input
                  type="text"
                  placeholder="YOUR NAME"
                  className="w-full bg-black border border-green-500 p-2 text-green-500 font-pixel"
                />
                <input
                  type="email"
                  placeholder="YOUR EMAIL"
                  className="w-full bg-black border border-green-500 p-2 text-green-500 font-pixel"
                />
                <textarea
                  placeholder="MESSAGE"
                  rows={3}
                  className="w-full bg-black border border-green-500 p-2 text-green-500 font-pixel"
                ></textarea>
                <button type="button" className="bg-green-500 text-black px-4 py-2 hover:bg-green-400 font-pixel">
                  SEND
                </button>
              </form>
            </div>
          </div>
        </div>
      ),
      position: { x: 250, y: 250 },
      size: { width: 450, height: 500 },
    },
  }

  // Boot sequence effect
  useEffect(() => {
    const bootInterval = setInterval(() => {
      setBootProgress((prev) => {
        if (prev >= 100) {
          clearInterval(bootInterval)
          setTimeout(() => setBootComplete(true), 500)
          return 100
        }
        return prev + 10
      })
    }, 300)

    return () => clearInterval(bootInterval)
  }, [])

  // Handle opening a window
  const openWindow = (id: string) => {
    if (!openWindows.includes(id)) {
      setOpenWindows((prev) => [...prev, id])
    }
    setActiveWindow(id)

    // Play sound effect
    const audio = new Audio("/click.mp3")
    audio.volume = 0.2
    audio.play().catch((e) => console.log("Audio play failed:", e))
  }

  // Handle closing a window
  const closeWindow = (id: string) => {
    setOpenWindows((prev) => prev.filter((windowId) => windowId !== id))
    if (activeWindow === id) {
      setActiveWindow(openWindows.filter((windowId) => windowId !== id)[0] || null)
    }

    // Play sound effect
    const audio = new Audio("/close.mp3")
    audio.volume = 0.2
    audio.play().catch((e) => console.log("Audio play failed:", e))
  }

  // Handle window position updates
  const updateWindowPosition = (id: string, position: { x: number; y: number }) => {
    setWindowPositions((prev) => ({
      ...prev,
      [id]: position,
    }))
  }

  // Boot screen
  if (!bootComplete) {
    return (
      <div className="bg-black text-green-500 font-pixel min-h-screen flex flex-col items-center justify-center p-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl mb-2">PIXELOS v1.0</h1>
          <p>BOOTING SYSTEM...</p>
        </div>

        <div className="w-full max-w-md mb-8">
          <div className="w-full bg-gray-900 h-6 border border-green-500">
            <div
              className="bg-green-500 h-full transition-all duration-300"
              style={{ width: `${bootProgress}%` }}
            ></div>
          </div>
          <p className="text-right mt-2">{bootProgress}%</p>
        </div>

        <div className="text-xs max-w-md">
          <p className="mb-1">LOADING SYSTEM FILES...</p>
          <p className="mb-1">INITIALIZING MEMORY...</p>
          <p className="mb-1">CHECKING DISK INTEGRITY...</p>
          <p className="mb-1">LOADING USER INTERFACE...</p>
          {bootProgress > 50 && <p className="mb-1">PREPARING DESKTOP...</p>}
          {bootProgress > 70 && <p className="mb-1">LOADING USER DATA...</p>}
          {bootProgress > 90 && <p className="mb-1">SYSTEM READY!</p>}
        </div>
      </div>
    )
  }

  return (
    <main className="bg-blue-900 min-h-screen font-pixel relative overflow-hidden">
      {/* CRT scan lines effect */}
      <div className="pointer-events-none fixed inset-0 bg-scan-lines z-50 opacity-10"></div>

      {/* Desktop */}
      <div className="relative min-h-[calc(100vh-40px)] p-4 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 content-start">
        {/* Desktop Icons */}
        <DesktopIcon
          icon={<File className="w-8 h-8 text-white" />}
          label="ABOUT ME"
          onClick={() => openWindow("about")}
        />
        <DesktopIcon
          icon={<Briefcase className="w-8 h-8 text-white" />}
          label="PROJECTS"
          onClick={() => openWindow("projects")}
        />
        <DesktopIcon
          icon={<GraduationCap className="w-8 h-8 text-white" />}
          label="SKILLS"
          onClick={() => openWindow("skills")}
        />
        <DesktopIcon
          icon={<Mail className="w-8 h-8 text-white" />}
          label="CONTACT"
          onClick={() => openWindow("contact")}
        />

        {/* Windows */}
        {openWindows.map((windowId) => {
          const window = windows[windowId]
          const position = windowPositions[windowId] || window.position

          return (
            <Window
              key={windowId}
              id={windowId}
              title={window.title}
              icon={window.icon}
              isActive={activeWindow === windowId}
              position={position}
              size={window.size}
              onClose={() => closeWindow(windowId)}
              onFocus={() => setActiveWindow(windowId)}
              onDragStop={(position) => updateWindowPosition(windowId, position)}
            >
              {window.content}
            </Window>
          )
        })}
      </div>

      {/* Taskbar */}
      <Taskbar
        openWindows={openWindows.map((id) => ({
          id,
          title: windows[id].title,
          icon: windows[id].icon,
        }))}
        activeWindow={activeWindow}
        onWindowClick={setActiveWindow}
      />
    </main>
  )
}

