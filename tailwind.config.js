/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        pixel: ["VT323", "monospace"],
        pixelBold: ["Press Start 2P", "cursive"],
        sans: ['var(--font-inter)'],
        heading: ['var(--font-poppins)'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        secondary: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
          950: '#4a044e',
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        'float': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 7s ease-in-out infinite',
        'fall': 'fall 10s linear forwards',
        'wind': 'wind 7s linear forwards',
        'snow': 'snow 10s linear forwards',
        'bounce': 'bounce 2s infinite',
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.1)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.1)' },
        },
        'fall': {
          '0%': { transform: 'translateY(-10vh) rotate(0deg)' },
          '100%': { transform: 'translateY(110vh) rotate(360deg)' },
        },
        'wind': {
          '0%': { transform: 'translateX(-10vw) scaleX(0.5)' },
          '100%': { transform: 'translateX(110vw) scaleX(2)' },
        },
        'snow': {
          '0%': { transform: 'translateY(-10vh) translateX(0)' },
          '25%': { transform: 'translateY(25vh) translateX(5vw)' },
          '50%': { transform: 'translateY(50vh) translateX(-5vw)' },
          '75%': { transform: 'translateY(75vh) translateX(5vw)' },
          '100%': { transform: 'translateY(110vh) translateX(0)' },
        },
        'bounce': {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0) translateX(-50%)' },
          '40%': { transform: 'translateY(-10px) translateX(-50%)' },
          '60%': { transform: 'translateY(-5px) translateX(-50%)' },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'gradient-primary': 'linear-gradient(to right, var(--primary-500), var(--secondary-500))',
      },
      boxShadow: {
        'glow': '0 0 15px 5px rgba(99, 102, 241, 0.15)',
        'glow-lg': '0 0 25px 10px rgba(99, 102, 241, 0.2)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

