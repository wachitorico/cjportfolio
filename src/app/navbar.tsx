"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaUser, FaGraduationCap, FaCogs, FaBriefcase, FaEnvelope } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [showOnScroll, setShowOnScroll] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  
  const navItems = [
    { id: 'home', icon: FaHome, label: 'Home', href: '/home' },
    { id: 'about', icon: FaUser, label: 'About', href: '/about' },
    { id: 'education', icon: FaGraduationCap, label: 'Education', href: '/education' },
    { id: 'skills', icon: FaCogs, label: 'Skills', href: '/skills' },
    { id: 'experience', icon: FaBriefcase, label: 'Experience', href: '/experience' },
    { id: 'contact', icon: FaEnvelope, label: 'Contact', href: '/contact' }
  ];

  useEffect(() => {
    setMounted(true);
    
    // Only add scroll listener on home page
    if (pathname === '/' || pathname === '') {
      const handleScroll = () => {
        // Show navbar when user scrolls down a bit
        if (window.scrollY > 100) {
          setShowOnScroll(true);
        } else {
          setShowOnScroll(false);
        }

        // Detect active section
        const sections = ['home', 'about', 'education', 'skills', 'experience', 'contact'];
        const scrollPosition = window.scrollY + 200;

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i]);
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(sections[i]);
            break;
          }
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [pathname]);
  
  // Hide navbar on home page if not scrolled
  if (!mounted || ((pathname === '/' || pathname === '') && !showOnScroll)) {
    return null;
  }

  const handleNavClick = (href: string, id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      <motion.nav 
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
      >
        <motion.div 
          className="bg-[#1e3a8a] backdrop-blur-lg bg-opacity-90 rounded-full px-6 py-3 shadow-2xl border border-white/20"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 25px 50px rgba(30, 58, 138, 0.4)"
          }}
        >
          <div className="flex items-center space-x-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.href, item.id)}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                className={`relative p-3 rounded-full transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'text-white' 
                    : 'text-blue-200 hover:text-white'
                }`}
                whileHover={{ 
                  scale: 1.1,
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {/* Active indicator */}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute inset-0 bg-blue-600 rounded-full"
                    layoutId="activeNav"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 400 }}
                  />
                )}
                
                {/* Icon */}
                <motion.div 
                  className="relative z-10"
                  whileHover={{ rotate: 5 }}
                >
                  <item.icon size={20} />
                </motion.div>

                {/* Enhanced Tooltip with pop-up animation */}
                <AnimatePresence>
                  {hoveredItem === item.id && (
                    <motion.div
                      className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-lg font-medium"
                      initial={{ opacity: 0, y: 10, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.8 }}
                      transition={{ 
                        duration: 0.2, 
                        type: "spring", 
                        stiffness: 400,
                        damping: 25
                      }}
                    >
                      {item.label}
                      {/* Arrow pointing down */}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
                      
                      {/* Glow effect */}
                      <motion.div
                        className="absolute inset-0 bg-blue-500 rounded-lg opacity-20 blur-sm"
                        animate={{ 
                          scale: [1, 1.1, 1],
                          opacity: [0.2, 0.4, 0.2]
                        }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Floating particles around navbar */}
        <div className="absolute inset-0 overflow-visible pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60"
              style={{
                left: `${20 + i * 60}px`,
                top: `${-10 - Math.random() * 20}px`,
              }}
              animate={{
                y: [-10, -30, -10],
                opacity: [0.3, 0.8, 0.3],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2 + Math.random(),
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};

export default Navbar;