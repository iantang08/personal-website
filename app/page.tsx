"use client"

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

// Available color themes
const colorThemes = [
  { name: 'Default', accent: '#ffffff', secondary: '#a0a0a0' },
  { name: 'Neo Mint', accent: '#98f4d3', secondary: '#73d9b0' },
  { name: 'Coral Pink', accent: '#ff8c94', secondary: '#ffaaa5' },
  { name: 'Lavender', accent: '#d4bbff', secondary: '#b290ff' },
  { name: 'Sky Blue', accent: '#87ceeb', secondary: '#5cacee' },
  { name: 'Amber', accent: '#ffbf00', secondary: '#ffd700' },
  { name: 'Teal', accent: '#48d1cc', secondary: '#20b2aa' }
];

// Content data
type ProjectItem = {
  title: string;
  period: string;
  url?: string;
  tech: string[];
  points: string[];
};

type EducationItem = {
  title: string;
  period: string;
  description: string;
  awards?: string[];
  details?: string[];
};

type ExperienceItem = {
  title: string;
  period: string;
  points: string[];
};

type SectionItem = ProjectItem | EducationItem | ExperienceItem;

type Section = {
  id: string;
  title: string;
  subtitle?: string[];
  descriptions?: string[];
  content?: string;
  items?: SectionItem[];
  email?: string;
  links?: { name: string; url: string; }[];
  categories?: { name: string; items: string[]; }[];
};

const sections: Section[] = [
  {
    id: 'intro',
    title: 'IAN TANG',
    subtitle: ['National Math Scholar', 'Computer Science Student @ UWaterloo'],
    descriptions: [
      'SOFTWARE DEVELOPER',
      'PROBLEM SOLVER',
      'CREATIVE THINKER',
      'MACHINE LEARNING ENTHUSIAST',
      'WEB DEVELOPER',
      'TEAM COLLABORATOR',
      'COMPUTER SCIENTIST'
    ]
  },
  {
    id: 'about',
    title: 'ABOUT',
    content: `I'm a passionate software developer with a focus on web development and machine learning.
    Currently pursuing a Bachelor of Computer Science at the University of Waterloo.`
  },
  {
    id: 'education',
    title: 'EDUCATION',
    items: [
      {
        title: 'University of Waterloo',
        period: 'Sept 2024 – Apr 2029',
        description: 'Bachelor of Computer Science, Honours',
        awards: [
          'University of Waterloo National Math Scholarship - Awarded to 10 students annually for excellence in mathematics; valued at $12,000',
          'President\'s Scholarship of Distinction - Awarded to students with an admission average of 95% or higher, recognizing exceptional academic achievement and leadership potential'
        ]
      },
      {
        title: 'Victoria Park Collegiate Institute',
        period: 'Sept 2020 – Jun 2024',
        description: 'International Baccalaureate (IB) Diploma Program',
        details: [
          'Higher Level (HL) Subjects:',
          '- Mathematics: Analysis and Approaches',
          '- English Literature',
          '- Computer Science',
          '',
          'Standard Level (SL) Subjects:',
          '- Chemistry',
          '- Physics',
          '- Economics',
          '- French',
          '',
          'The IB Diploma Program is a rigorous pre-university course of study that emphasizes critical thinking, research skills, and international-mindedness. The program challenges students to excel in their studies and encourages them to make connections between traditional academic subjects and the real world.'
        ]
      }
    ]
  },
  {
    id: 'skills',
    title: 'TECHNICAL SKILLS',
    categories: [
      {
        name: 'Languages',
        items: ['Bash', 'C/C++', 'C#', 'CSS3', 'HTML5', 'Java', 'JavaScript', 'Lisp', 'PHP', 'Python', 'SQL', 'TypeScript']
      },
      {
        name: 'Tools',
        items: ['Amazon Web Services', 'Git', 'Google Cloud Platforms (GCP)', 'Linux', 'MongoDB', 'PostgreSQL', 'Terraform']
      },
      {
        name: 'Frameworks',
        items: ['Express.js', 'Flask', 'LangChain', 'Next.js', 'Node.js', 'Pandas', 'PyTorch', 'React.js', 'TensorFlow', 'Vue.js']
      }
    ]
  },
  {
    id: 'projects',
    title: 'PROJECTS',
    items: [
      {
        title: 'Personal Portfolio Website',
        period: 'Apr 2025',
        url: 'https://github.com/iantang08/personal-website',
        tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React'],
        points: [
          'Designed and developed a minimalist, modern portfolio website with unique typography and animation effects',
          'Implemented custom typewriter animations and font-switching features for a distinctive user experience',
          'Created a responsive, single-page application with smooth scrolling and section transitions',
          'Incorporated a random font generator that applies a different monospace typeface on each visit'
        ]
      },
      {
        title: 'The Exercist',
        period: 'Feb 2025 – Mar 2025',
        url: 'https://github.com/iantang08/UTRAHacks2025',
        tech: ['LangChain', 'GCP', 'AWS', 'MongoDB', 'Flask', 'Python'],
        points: [
          'Collaborated with a team to develop a physiotherapy training app using motion-based Switch JoyCons',
          'Implemented movement tracking and heart rate monitoring to help users maintain motivation during exercises',
          'Designed a Flask-based backend to securely integrate with MongoDB on AWS for storing user exercise data',
          'Incorporated real-time feedback via a GenAI-powered voice assistant to enhance user engagement and retention',
          'Secured Best Use of Databricks award at UTRA Hacks through AI and data-driven features'
        ]
      },
      {
        title: 'Victoria Park School Services',
        period: 'Jun 2022 – Jun 2024',
        url: 'https://github.com/VPCICodingClub/VPCI-School-Services',
        tech: ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Vue.js'],
        points: [
          'Boosted event tracking by 50% by launching a student portal for scheduling and community announcements',
          'Built an interactive map with real-time location updates to help manage hallway congestion',
          'Developed front-end and back-end components of a website using Vue.js and PostgreSQL'
        ]
      },
      {
        title: 'Computer Vision Research Paper',
        period: 'Jun 2023 – Feb 2024',
        tech: ['PyTorch'],
        points: [
          'Developed RNN and CNN models to investigate how deep learning models process language',
          'Achieved 70% accuracy on CIFAR-10 by optimizing CNN and RNN models for image captioning',
          'Accelerated training by 25% by leveraging PyTorch pipelines with pandas for dataset preprocessing'
        ]
      },
      {
        title: 'ClubConnect!',
        period: 'Oct 2022 – Feb 2023',
        url: 'https://github.com/iantang08/FBLACP',
        tech: ['Java'],
        points: [
          'Developed a Java Swing app that boosted student engagement by enabling event sign-ups and calendar-tracking',
          'Implemented secure authentication that empowered admins to manage events and assign prizes efficiently',
          'Streamlined user interactions, enhancing scheduling and communication across school activities'
        ]
      }
    ] as ProjectItem[]
  },
  {
    id: 'contact',
    title: 'CONTACT',
    email: 'i7tang@uwaterloo.ca',
    links: [
      { name: 'GitHub', url: 'https://github.com/iantang08' },
      { name: 'LinkedIn', url: 'https://linkedin.com/in/tang-ian' },
      { name: 'Twitter', url: 'https://twitter.com/ian_88_tang' }
    ]
  }
];

// Season configurations based on section index
const seasons = [
  { name: 'Spring', section: 0, element: 'flowers', color: '#98f4d3' },
  { name: 'Late Spring', section: 1, element: 'flowers', color: '#ffbf00' },
  { name: 'Summer', section: 2, element: 'sun', color: '#ffd700' },
  { name: 'Autumn', section: 3, element: 'leaves', color: '#ff8c94' },
  { name: 'Early Winter', section: 4, element: 'wind', color: '#87ceeb' },
  { name: 'Winter', section: 5, element: 'snow', color: '#d4bbff' },
  { name: 'Winter Night', section: 6, element: 'snowflakes', color: '#48d1cc' }
];

// Rotating descriptions component - MOVED OUTSIDE OF MAIN COMPONENT
const RotatingDescriptions = ({ 
  descriptions, 
  colorTheme 
}: { 
  descriptions: string[],
  colorTheme: typeof colorThemes[0]
}) => {
  const [displayIndex, setDisplayIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  // Add a delay to show descriptions after subtitle finishes typing
  useEffect(() => {
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 4500); // Wait for subtitle typing to finish
    
    return () => clearTimeout(showTimer);
  }, []);
  
  // Simple rotation with fixed timing
  useEffect(() => {
    if (!isVisible || !descriptions.length) return;
    
    const rotationInterval = setInterval(() => {
      // Get a random index different from the current one
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * descriptions.length);
      } while (newIndex === displayIndex && descriptions.length > 1);
      
      setDisplayIndex(newIndex);
    }, 1000); // Change every 1 second
    
    return () => clearInterval(rotationInterval);
  }, [isVisible, descriptions.length, displayIndex]);
  
  if (!isVisible) return <div className="mt-8 mb-8 min-h-[32px]"></div>;
  
  return (
    <div className="mt-8 mb-8 min-h-[32px] flex justify-center items-center">
      <div 
        className="text-xl md:text-2xl font-bold"
        style={{ 
          color: colorTheme.accent,
          textShadow: "0 0 10px rgba(0,0,0,0.5)"
        }}
      >
        {descriptions[displayIndex]}
      </div>
    </div>
  );
};

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [previousSection, setPreviousSection] = useState(0);
  const [sectionTransitioning, setSectionTransitioning] = useState(false);
  const [currentDescription, setCurrentDescription] = useState(0);
  const [colorTheme, setColorTheme] = useState(colorThemes[0]);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const [currentSeason, setCurrentSeason] = useState(seasons[0]);
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; speed: number; opacity: number; type: string; rotation: number }[]>([]);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const loadingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const descriptionIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const particlesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [randomFontIndex, setRandomFontIndex] = useState(0);

  // Update season based on active section
  useEffect(() => {
    const seasonIndex = Math.min(activeSection, seasons.length - 1);
    setCurrentSeason(seasons[seasonIndex]);
  }, [activeSection]);

  // Handle scrolling and section changes with smooth transitions
  useEffect(() => {
    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout | null = null;
    
    const handleScroll = () => {
      if (isScrolling || !containerRef.current) return;
      
      // Set flag to prevent multiple scroll events
      isScrolling = true;
      
      const container = containerRef.current;
      const scrollPosition = container.scrollTop;
      const containerHeight = container.clientHeight;
      const scrollHeight = container.scrollHeight;
      
      // Calculate current section and progress
      const rawSection = scrollPosition / containerHeight;
      const currentSection = Math.round(rawSection);
      
      // Check if we've scrolled all the way to the bottom
      const isAtBottom = scrollPosition + containerHeight >= scrollHeight - 20;
      
      // If at the bottom, seamlessly move back to the top to create infinite scroll effect
      if (isAtBottom) {
        setTimeout(() => {
          if (containerRef.current) {
            // Jump back to the top without animation
            containerRef.current.scrollTo({
              top: 0,
              behavior: 'auto'  // Use 'auto' to avoid visible jump
            });
            
            // Update active section to the first one
            setPreviousSection(activeSection);
            setActiveSection(0);
            
            // Update season to first season
            setCurrentSeason(seasons[0]);
          }
        }, 200); // Short delay to make the transition less jarring
      } 
      // Only snap if we're not already close to a section boundary
      else if (Math.abs(rawSection - currentSection) > 0.1) {
        // Snap to the nearest section
        containerRef.current.scrollTo({
          top: currentSection * containerHeight,
          behavior: 'smooth'
        });
        
        // Update active section
        if (currentSection !== activeSection && 
            currentSection >= 0 && 
            currentSection < sections.length) {
          setPreviousSection(activeSection);
          setActiveSection(currentSection);
          
          // Update season
          const seasonIndex = Math.min(currentSection, seasons.length - 1);
          setCurrentSeason(seasons[seasonIndex]);
        }
      } else if (currentSection !== activeSection && 
                currentSection >= 0 && 
                currentSection < sections.length) {
        // We're already at a section boundary, just update active section
        setPreviousSection(activeSection);
        setActiveSection(currentSection);
        
        // Update season
        const seasonIndex = Math.min(currentSection, seasons.length - 1);
        setCurrentSeason(seasons[seasonIndex]);
      }
      
      // Clear previous timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      
      // Reset flag after a delay
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 500);
    };

    const container = containerRef.current;
    if (container && !loading) {
      // Enable scrolling once loading is complete
      container.style.overflowY = 'auto';
      container.style.scrollBehavior = 'smooth';
      
      container.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [activeSection, sections.length, loading, seasons]);

  // Generate and update particles based on current season
  useEffect(() => {
    if (loading) return;

    // Clear old particles timeout
    if (particlesTimeoutRef.current) {
      clearTimeout(particlesTimeoutRef.current);
    }

    // Initialize particles if empty
    if (particles.length === 0) {
      const initialParticles = [];
      const count = currentSeason.element === 'snow' || currentSeason.element === 'snowflakes' ? 30 
        : currentSeason.element === 'leaves' ? 15
        : currentSeason.element === 'flowers' ? (currentSeason.name === 'Late Spring' ? 25 : 10)
        : 5;

      for (let i = 0; i < count; i++) {
        initialParticles.push({
          id: Math.random(),
          x: Math.random() * 100, // percentage across screen
          y: Math.random() * 100, // percentage down screen
          size: Math.random() * 15 + 5, // size between 5-20px
          speed: Math.random() * 3 + 1, // speed of animation
          opacity: Math.random() * 0.7 + 0.3, // opacity between 0.3-1
          type: currentSeason.element,
          rotation: Math.random() * 360 // random rotation for flowers
        });
      }
      setParticles(initialParticles);
    } else {
      // Update existing particles for the new season
      setParticles(prevParticles => {
        // If season changed, update particles type
        if (prevParticles.length > 0 && prevParticles[0].type !== currentSeason.element) {
          const updatedParticles = [...prevParticles];
          const newCount = currentSeason.element === 'snow' || currentSeason.element === 'snowflakes' ? 30 
            : currentSeason.element === 'leaves' ? 15
            : currentSeason.element === 'flowers' ? (currentSeason.name === 'Late Spring' ? 25 : 10)
            : 5;
          
          // Keep existing particles but update their type
          const result = updatedParticles.map(particle => ({
            ...particle,
            type: currentSeason.element
          }));
          
          // Add or remove particles to match desired count
          if (result.length < newCount) {
            // Add more particles
            for (let i = result.length; i < newCount; i++) {
              result.push({
                id: Math.random(),
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 15 + 5,
                speed: Math.random() * 3 + 1,
                opacity: Math.random() * 0.7 + 0.3,
                type: currentSeason.element,
                rotation: Math.random() * 360
              });
            }
          } else if (result.length > newCount) {
            // Remove excess particles
            return result.slice(0, newCount);
          }
          
          return result;
        }
        
        return prevParticles;
      });
    }

    return () => {
      if (particlesTimeoutRef.current) {
        clearTimeout(particlesTimeoutRef.current);
      }
    };
  }, [currentSeason.element, currentSeason.name, loading]);

  // Simulate real resource loading
  useEffect(() => {
    if (loading) {
      // Randomize loading stages to be more realistic
      const resourcesCount = 10;
      const loadedResources = new Set();
      const resourceSizes = Array.from({ length: resourcesCount }, () => Math.random() * 30 + 5);
      const totalSize = resourceSizes.reduce((acc, size) => acc + size, 0);
      
      let loadedSize = 0;
      
      const loadNextResource = () => {
        if (loadedResources.size >= resourcesCount) {
          // All resources loaded
          setLoadingProgress(100);
          loadingTimeoutRef.current = setTimeout(() => setLoading(false), 1000);
          return;
        }
        
        // Find a resource that hasn't been loaded yet
        let resourceIndex;
        do {
          resourceIndex = Math.floor(Math.random() * resourcesCount);
        } while (loadedResources.has(resourceIndex));
        
        // Mark resource as loaded
        loadedResources.add(resourceIndex);
        
        // Update progress
        loadedSize += resourceSizes[resourceIndex];
        const progress = Math.floor((loadedSize / totalSize) * 100);
        setLoadingProgress(progress);
        
        // Schedule next resource load
        const nextDelay = Math.random() * 300 + 100;
        loadingTimeoutRef.current = setTimeout(loadNextResource, nextDelay);
      };
      
      // Start loading
      loadingTimeoutRef.current = setTimeout(loadNextResource, 500);
      
      return () => {
        if (loadingTimeoutRef.current) {
          clearTimeout(loadingTimeoutRef.current);
        }
      };
    }
  }, [loading]);

  // Better navigation function
  const navigateToSection = (index: number) => {
    if (index >= 0 && index < sections.length && containerRef.current) {
      // Update the active section
      setPreviousSection(activeSection);
      setActiveSection(index);
      
      // Update season
      const seasonIndex = Math.min(index, seasons.length - 1);
      setCurrentSeason(seasons[seasonIndex]);
      
      // Scroll to the section
      const sectionHeight = containerRef.current.clientHeight;
      containerRef.current.scrollTo({
        top: index * sectionHeight,
        behavior: 'smooth'
      });
    }
  };

  // Set theme colors on theme change - IMMEDIATE UPDATE
  const setThemeColor = (theme: typeof colorThemes[0]) => {
    setColorTheme(theme);
    // Apply color changes immediately
    document.documentElement.style.setProperty('--theme-accent', theme.accent);
    document.documentElement.style.setProperty('--theme-secondary', theme.secondary);
    setThemeMenuOpen(false);
  };

  // Generate random font on page load
  useEffect(() => {
    const fonts = [
      'Courier New',
      'Consolas',
      'IBM Plex Mono',
      'Roboto Mono',
      'Space Mono',
      'Source Code Pro',
      'Ubuntu Mono',
      'Fira Mono',
      'JetBrains Mono',
      'Inconsolata'
    ];
    const randomIndex = Math.floor(Math.random() * fonts.length);
    setRandomFontIndex(randomIndex);
  }, []);

  // Update the font style function to actually change fonts
  const getFontStyle = (progress: number) => {
    const fontStyleIndex = Math.floor(progress / 10) + 1;
    return `font-style-${fontStyleIndex === 11 ? 11 : fontStyleIndex}`;
  };

  // Seasonal particles renderer with flower shapes for spring
  const renderParticles = () => {
    if (loading) return null;

    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {particles.map((particle) => {
          // Set animation and appearance based on particle type
          let animationClass = '';
          let particleContent = null;
          
          switch (particle.type) {
            case 'flowers':
              animationClass = 'animate-float-slow';
              // Render a simple flower shape for flowers
              particleContent = (
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    transform: `rotate(${particle.rotation}deg)`,
                    position: 'relative'
                  }}
                >
                  {/* Flower petals */}
                  <div style={{
                    position: 'absolute',
                    top: '0',
                    left: '50%',
                    width: '30%',
                    height: '40%',
                    borderRadius: '50%',
                    backgroundColor: currentSeason.color,
                    transform: 'translateX(-50%)'
                  }}></div>
                  <div style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '50%',
                    width: '30%',
                    height: '40%',
                    borderRadius: '50%',
                    backgroundColor: currentSeason.color,
                    transform: 'translateX(-50%)'
                  }}></div>
                  <div style={{
                    position: 'absolute',
                    left: '0',
                    top: '50%',
                    width: '40%',
                    height: '30%',
                    borderRadius: '50%',
                    backgroundColor: currentSeason.color,
                    transform: 'translateY(-50%)'
                  }}></div>
                  <div style={{
                    position: 'absolute',
                    right: '0',
                    top: '50%',
                    width: '40%',
                    height: '30%',
                    borderRadius: '50%',
                    backgroundColor: currentSeason.color,
                    transform: 'translateY(-50%)'
                  }}></div>
                  {/* Flower center */}
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '35%',
                    height: '35%',
                    borderRadius: '50%',
                    backgroundColor: 'white',
                    transform: 'translate(-50%, -50%)'
                  }}></div>
        </div>
              );
              break;
            case 'sun':
            case 'sunbeams':
              animationClass = 'animate-pulse-slow';
              particleContent = (
                <div style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  backgroundColor: currentSeason.color
                }}></div>
              );
              break;
            case 'leaves':
              animationClass = 'animate-fall';
              particleContent = (
                <div style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: currentSeason.color,
                  clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                  transform: `rotate(${particle.rotation}deg)`
                }}></div>
              );
              break;
            case 'wind':
              animationClass = 'animate-wind';
              particleContent = (
                <div style={{
                  width: '100%',
                  height: '20%',
                  backgroundColor: currentSeason.color,
                  borderRadius: '4px'
                }}></div>
              );
              break;
            case 'snow':
            case 'snowflakes':
              animationClass = 'animate-snow';
              particleContent = (
                <div style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  backgroundColor: currentSeason.color
                }}></div>
              );
              break;
            default:
              animationClass = 'animate-float';
              particleContent = (
                <div style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  backgroundColor: currentSeason.color
                }}></div>
              );
          }

          return (
            <div
              key={particle.id}
              className={`absolute ${animationClass}`}
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                opacity: particle.opacity,
                animationDuration: `${10 / particle.speed}s`
              }}
            >
              {particleContent}
            </div>
          );
        })}
      </div>
    );
  };

  // Finish loading effect and initialize container scrolling
  useEffect(() => {
    if (!loading && containerRef.current) {
      // Setup scrolling behavior once loading is complete
      containerRef.current.style.overflow = 'auto';
      containerRef.current.style.scrollBehavior = 'smooth';
      
      // Set initial section to ensure we start at the top
      setActiveSection(0);
      setCurrentSeason(seasons[0]);
      
      // Ensure we're at the top
      containerRef.current.scrollTop = 0;
    }
  }, [loading, seasons]);

  // Add a special navigation function to handle the "restart" from last to first section
  const navigateToNextSection = () => {
    const nextSection = activeSection + 1;
    
    // If we're at the last section, navigate to the first one
    if (nextSection >= sections.length) {
      navigateToSection(0);
    } else {
      navigateToSection(nextSection);
    }
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex flex-col items-center justify-center">
        <div className="mb-12 text-2xl font-bold text-white/80">Loading Portfolio</div>
        
        <div className="loading-animation mb-8"></div>
        
        <div className="w-64 h-1 bg-white/10 relative mb-8 rounded-full overflow-hidden">
          <div 
            className="absolute top-0 left-0 h-full rounded-full transition-all duration-300"
            style={{ 
              width: `${loadingProgress}%`,
              background: `linear-gradient(90deg, ${colorThemes[randomFontIndex % colorThemes.length].accent}, ${colorThemes[(randomFontIndex + 2) % colorThemes.length].accent})` 
            }}
          />
          </div>

        <div 
          className={`text-3xl text-white ${getFontStyle(loadingProgress)}`}
          key={Math.floor(loadingProgress / 10)} // Force re-render on font change
        >
          {loadingProgress}%
        </div>

        <div className="text-sm text-white/50 mt-6 max-w-xs text-center">
          {loadingProgress < 30 && "Initializing resources..."}
          {loadingProgress >= 30 && loadingProgress < 60 && "Loading content..."}
          {loadingProgress >= 60 && loadingProgress < 90 && "Preparing animations..."}
          {loadingProgress >= 90 && "Almost there..."}
        </div>
      </div>
    );
  }

  return (
    <div className={`font-style-${randomFontIndex}`} style={{ color: colorTheme.accent }}>
      {/* Seasonal background particles */}
      {renderParticles()}

      {/* Theme Color Selector */}
      <div className="fixed top-8 right-8 z-20">
        <button 
          onClick={() => setThemeMenuOpen(!themeMenuOpen)}
          className="w-10 h-10 rounded-full border-2 theme-selector-button"
          style={{ backgroundColor: colorTheme.accent }}
          aria-label="Change color theme"
        />
        
        {themeMenuOpen && (
          <div className="absolute right-0 mt-2 p-4 bg-black/90 border border-white/20 rounded-lg backdrop-blur-sm min-w-[180px] shadow-lg">
            <h3 className="text-sm mb-4 text-center">Theme Colors</h3>
            <div className="grid grid-cols-3 gap-4">
              {colorThemes.map((theme, index) => (
                <button
                  key={index}
                  onClick={() => setThemeColor(theme)}
                  className="w-10 h-10 rounded-full border border-white/30 theme-selector-button flex items-center justify-center"
                  style={{ backgroundColor: theme.accent }}
                  aria-label={`Select ${theme.name} theme`}
                >
                  {theme.accent === colorTheme.accent && (
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Current Season Indicator */}
      <div className="fixed top-20 right-8 z-10 text-xs text-right">
        <div className="px-2 py-1 bg-black/60 backdrop-blur-sm rounded border border-white/10">
          <div className="text-white/60">{currentSeason.name}</div>
        </div>
      </div>
      
      {/* Fixed resume navigation */}
      <div className="fixed top-8 left-0 right-0 z-10 flex justify-center">
        <div className="flex flex-wrap justify-center gap-2 max-w-screen-lg mx-auto px-4 py-2 bg-black/30 backdrop-blur-sm rounded-full">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => navigateToSection(index)}
              className={`resume-section ${index === activeSection ? 'active' : ''}`}
              aria-label={`Go to ${section.title} section`}
            >
              {section.title}
            </button>
          ))}
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="resume-section"
          >
            RESUME PDF
          </a>
        </div>
      </div>
      
      {/* Navigation dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2 z-50">
        {sections.map((item, index) => (
          <div
            key={index}
            className={`nav-dot ${index === activeSection ? 'active' : ''}`}
            onClick={() => navigateToSection(index)}
          />
        ))}
        
        {/* Add a circular arrow indicator to show recursive behavior */}
        <div 
          className="mt-4 w-6 h-6 flex items-center justify-center cursor-pointer opacity-50 hover:opacity-100 transition-opacity"
          onClick={() => navigateToSection(0)}
          title="Return to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
               strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
            <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0z"></path>
            <path d="M12 8l-4 4 4 4"></path>
            <path d="M16 12H8"></path>
          </svg>
        </div>
      </div>
      
      {/* Main content */}
      <div 
        ref={containerRef} 
        className="h-screen overflow-y-auto"
        style={{ 
          scrollBehavior: 'smooth',
          overflowY: loading ? 'hidden' : 'auto',
          overscrollBehavior: 'none',
          paddingBottom: '1px'
        }}
      >
        {sections.map((section, index) => {
          // Calculate animation classes for smooth transitions
          const isActive = index === activeSection;
          const isPrevious = index === previousSection;
          
          // Use simplified animation for better performance
          const animationClasses = isActive
            ? 'opacity-100 translate-y-0'
            : 'opacity-0';

          return (
            <section 
              key={section.id} 
              className="h-screen w-full flex items-center justify-center"
              style={{ 
                minHeight: '100vh',
                scrollSnapAlign: 'start',
                scrollSnapStop: 'always'
              }}
              id={section.id}
            >
              {/* Scroll animation indicator */}
              {isActive && index < sections.length - 1 && (
                <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce opacity-40">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 20L4 12L5.41 10.59L11 16.17L11 4L13 4L13 16.17L18.59 10.59L20 12L12 20Z" 
                    fill={colorTheme.accent} />
                  </svg>
                </div>
              )}
              
              <div 
                className={`content-container transform transition-all duration-700 ${animationClasses}`}
                style={{ boxShadow: `0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px ${colorTheme.accent}10` }}
              >
                {/* First section - spring flowers animation */}
                {section.id === 'intro' && (
                  <div className="text-center relative">
                    {/* Spring animation: flower outline */}
                    <motion.div 
                      className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-20 pointer-events-none"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 0.2 }}
                      transition={{ duration: 2, delay: 1 }}
                    >
                      <svg width="400" height="400" viewBox="0 0 200 200" fill="none">
                        <path d="M100 20C120 40 150 40 170 30C170 50 150 80 100 100C50 80 30 50 30 30C50 40 80 40 100 20Z" 
                        stroke={colorTheme.accent} strokeWidth="1" />
                        <path d="M100 180C120 160 150 160 170 170C170 150 150 120 100 100C50 120 30 150 30 170C50 160 80 160 100 180Z" 
                        stroke={colorTheme.accent} strokeWidth="1" />
                        <path d="M20 100C40 120 40 150 30 170C50 170 80 150 100 100C80 50 50 30 30 30C40 50 40 80 20 100Z" 
                        stroke={colorTheme.accent} strokeWidth="1" />
                        <path d="M180 100C160 120 160 150 170 170C150 170 120 150 100 100C120 50 150 30 170 30C160 50 160 80 180 100Z" 
                        stroke={colorTheme.accent} strokeWidth="1" />
                      </svg>
                    </motion.div>
                    
                    <h1 className="text-5xl md:text-7xl mb-4 typewriter-title">{section.title}</h1>
                    <div className="space-y-2">
                      {section.subtitle && section.subtitle[0] && (
                        <p className="text-xl md:text-2xl typewriter-subtitle">{section.subtitle[0]}</p>
                      )}
                      {section.subtitle && section.subtitle[1] && (
                        <p className="text-xl md:text-2xl typewriter-subtitle" style={{ animationDelay: '2.2s' }}>{section.subtitle[1]}</p>
                      )}
                    </div>
                    
                    {/* Use externalized component with proper props */}
                    {section.descriptions && (
                      <RotatingDescriptions 
                        descriptions={section.descriptions} 
                        colorTheme={colorTheme} 
                      />
                    )}
                    
                    <div className="mt-8 flex flex-col items-center">
                      <div className="text-sm opacity-60 mb-2">Scroll or click below</div>
                      <button 
                        onClick={() => navigateToSection(1)} 
                        className="retro-button hover:scale-105 transition-transform"
                      >
                        EXPLORE
                      </button>
                    </div>
                  </div>
                )}

                {/* Second section - late spring flowers animation */}
                {section.id === 'about' && (
                  <div className="relative">
                    {/* Late Spring animation: more flowers */}
                    {isActive && (
                      <>
                        <motion.div 
                          className="absolute -top-20 -left-20 pointer-events-none"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 0.3 }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                        >
                          <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                            <path d="M60 10C70 25 90 25 100 15C100 30 80 45 60 55C40 45 20 30 20 15C30 25 50 25 60 10Z" 
                            stroke={colorTheme.accent} strokeWidth="1" fill="none" />
                          </svg>
                        </motion.div>
                        
                        <motion.div 
                          className="absolute top-20 -right-10 pointer-events-none"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 0.3 }}
                          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                        >
                          <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                            <path d="M50 10C60 20 75 20 85 15C85 25 75 40 50 50C25 40 15 25 15 15C25 20 40 20 50 10Z" 
                            stroke={colorTheme.accent} strokeWidth="1" fill="none" />
                          </svg>
                        </motion.div>
                        
                        <motion.div 
                          className="absolute -bottom-20 left-20 pointer-events-none"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 0.3 }}
                          transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
                        >
                          <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
                            <path d="M45 5C55 15 70 15 80 10C80 25 65 35 45 45C25 35 10 25 10 10C20 15 35 15 45 5Z" 
                            stroke={colorTheme.accent} strokeWidth="1" fill="none" />
                          </svg>
                        </motion.div>
                      </>
                    )}
                    
                    <h2 className="text-4xl md:text-5xl mb-8">{section.title}</h2>
                    <p className="text-lg leading-relaxed whitespace-pre-line">{section.content}</p>
                  </div>
                )}

                {/* Education section - summer sun animation */}
                {section.id === 'education' && (
                  <div className="relative education-section">
                    {/* Summer animation: sun swooping in */}
                    {isActive && (
                      <motion.div 
                        className="absolute -top-16 -right-16 pointer-events-none"
                        initial={{ x: -200, y: 200, opacity: 0 }}
                        animate={{ x: 0, y: 0, opacity: 0.3 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                      >
                        <div className="w-32 h-32 rounded-full" style={{ background: `radial-gradient(circle, ${colorTheme.accent}, transparent 70%)` }}></div>
                      </motion.div>
                    )}
                    
                    <h2 className="text-4xl md:text-5xl mb-8">{section.title}</h2>
                    <div className="max-h-[65vh] overflow-y-auto pr-4 custom-scrollbar">
                      {section.items?.map((item, i) => (
                        <motion.div 
                          key={i} 
                          className="mb-8"
                          initial={{ opacity: 0, y: 20 }}
                          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                          transition={{ duration: 0.5, delay: i * 0.2 }}
                        >
                          <div className="flex flex-col md:flex-row justify-between items-start mb-2">
                            <h3 className="text-xl font-bold">{item.title}</h3>
                            <span className="text-white/70">{item.period}</span>
                          </div>
                          {'description' in item && <p className="mb-4">{item.description}</p>}
                          {'awards' in item && item.awards && item.awards.map((award, j) => (
                            <div key={j} className="border border-white/20 p-3 mt-4">
                              {award}
                            </div>
                          ))}
                          {'details' in item && item.details && (
                            <div className="mt-4 space-y-2 education-details">
                              {item.details.map((detail, j) => (
                                <p key={j}>{detail}</p>
                              ))}
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {section.id === 'skills' && (
                  <div className="relative">
                    <h2 className="text-4xl md:text-5xl mb-8">{section.title}</h2>
                    {section.categories?.map((category, i) => (
                      <motion.div 
                        key={i} 
                        className="mb-6"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: i * 0.2 }}
                      >
                        <h3 className="text-lg font-bold mb-3">{category.name}</h3>
                        <div className="flex flex-wrap">
                          {category.items.map((item, j) => (
                            <motion.span 
                              key={j} 
                              className="tech-tag"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                              transition={{ duration: 0.3, delay: i * 0.1 + j * 0.05 }}
                            >
                              {item}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Fall leaves animation */}
                {section.id === 'projects' && (
                  <div className="relative">
                    <h2 className="text-4xl md:text-5xl mb-8">{section.title}</h2>
                    <div className="space-y-12 max-h-[70vh] overflow-y-auto pr-4">
                      {section.items?.map((item, i) => {
                        const project = item as ProjectItem;
                        return (
                          <motion.div 
                            key={i} 
                            className="border-l-2 border-white/30 pl-4"
                            initial={{ opacity: 0, x: -20 }}
                            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ duration: 0.5, delay: i * 0.2 }}
                          >
                            <div className="flex flex-col md:flex-row justify-between items-start mb-2">
                              <h3 className="text-xl font-bold">
                                {project.title}
                                {project.url && (
                                  <a 
                                    href={project.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="ml-2 text-sm text-white/70 hover:text-white transition-colors"
                                  >
                                    [View Project]
                                  </a>
                                )}
                              </h3>
                              <span className="text-white/70">{project.period}</span>
                            </div>
                            {'tech' in project && (
                              <div className="flex flex-wrap mb-4">
                                {project.tech.map((tech, j) => (
                                  <span key={j} className="tech-tag">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            )}
                            {'points' in project && (
                              <ul className="list-disc list-inside space-y-2">
                                {project.points.map((point, j) => (
                                  <li key={j}>{point}</li>
                                ))}
                              </ul>
                            )}
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Contact section - winter without snowflakes */}
                {section.id === 'contact' && (
                  <div className="relative">
                    {/* Winter animation removed - no more snowflakes */}
                    
                    <h2 className="text-4xl md:text-5xl mb-8">{section.title}</h2>
                    
                    <div className="space-y-6">
                      {section.email && (
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                          <span className="text-white/70">Email:</span>
                          <a 
                            href={`mailto:${section.email}`} 
                            className="typewriter"
                          >
                            {section.email}
                          </a>
                        </div>
                      )}
                      
                      {section.links && section.links.length > 0 && (
                        <div className="flex flex-col items-start gap-4">
                          <span className="text-white/70">Find me on:</span>
                          <div className="flex flex-wrap gap-3">
                            {section.links.map((link, i) => (
                              <a 
                                key={i}
                                href={link.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="border border-white/20 px-4 py-2 hover:border-white/40 transition-all hover:bg-black/30 hover:scale-105"
                              >
                                {link.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Change restart cycle indicator to 'continue scrolling' */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center flex-col opacity-70">
                      <div className="text-sm mb-2">Continue scrolling</div>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-6 w-6 animate-bounce" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </section>
          );
        })}
        
        {/* Add a glimpse of the first section at the bottom to indicate looping */}
        <div 
          className="h-20 w-full flex items-center justify-center"
          style={{
            background: `linear-gradient(to bottom, transparent, rgba(0,0,0,0.7))`,
            position: 'relative'
          }}
        >
          <div className="text-center opacity-60">
            <span className="text-xl">{sections[0].title}</span>
            <div className="text-sm">Beginning again...</div>
          </div>
        </div>
      </div>
    </div>
  );
}

