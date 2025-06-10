"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, useAnimation } from 'framer-motion';

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false, // Allow animation to trigger multiple times
    amount: 0.3 // Trigger when 30% of the element is visible
  });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  // Handle "Get Started" button click
  const handleGetStarted = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 1, staggerChildren: 0.2 }
    }
  };

  const backgroundVariants = {
    hidden: { 
      opacity: 0.8,
      background: "linear-gradient(135deg, #111827 0%, #1e3a8a 25%, #000000 50%, #1e40af 75%, #111827 100%)"
    },
    visible: { 
      opacity: 0.9,
      background: [
        "linear-gradient(135deg, #111827 0%, #1e3a8a 25%, #000000 50%, #1e40af 75%, #111827 100%)",
        "linear-gradient(225deg, #1e40af 0%, #000000 25%, #1e3a8a 50%, #111827 75%, #1e40af 100%)",
        "linear-gradient(315deg, #000000 0%, #111827 25%, #1e40af 50%, #1e3a8a 75%, #000000 100%)",
        "linear-gradient(45deg, #1e3a8a 0%, #1e40af 25%, #111827 50%, #000000 75%, #1e3a8a 100%)"
      ],
      transition: {
        opacity: { duration: 0.8 },
        background: { duration: 8, repeat: Infinity, ease: "easeInOut" }
      }
    }
  };

  const textVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const titleVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const nameVariants = {
    hidden: { 
      scale: 0.8, 
      opacity: 0 
    },
    visible: { 
      scale: 1.1, // Larger when in view
      opacity: 1,
      textShadow: "0 0 20px rgba(254, 248, 229, 0.8)", // Glow effect when in view
      transition: { 
        duration: 0.8, 
        type: "spring", 
        stiffness: 200 
      }
    }
  };

  const descriptionVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const arrowVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      y: [0, -10, 0],
      transition: {
        opacity: { duration: 0.6 },
        y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
      }
    }
  };

  return (
    <main className="min-h-screen bg-[#FEF8E5] overflow-hidden">
      {/* Hero Section - Exact viewport height */}
      <section id="home">
        <motion.section
          ref={ref}
          className="relative flex flex-col items-center justify-center text-center text-white h-screen w-screen"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
        >
          {/* Moving Texture Background */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-black"
            variants={backgroundVariants}
            whileHover={{
              opacity: 0.85,
              background: "linear-gradient(135deg, #1e3a8a 0%, #3730a3 25%, #4338ca 50%, #1e40af 75%, #000000 100%)",
              transition: { duration: 0.5 }
            }}
          />

          {/* Moving Geometric Patterns */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Large moving circles */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`circle-${i}`}
                className="absolute rounded-full border border-white/10"
                style={{
                  width: `${100 + i * 50}px`,
                  height: `${100 + i * 50}px`,
                  left: `${20 + i * 15}%`,
                  top: `${10 + i * 20}%`,
                }}
                initial={{ 
                  opacity: 0,
                  scale: 0,
                  x: 0,
                  y: 0,
                  rotate: 0
                }}
                animate={isInView ? {
                  opacity: 1,
                  scale: 1,
                  x: [0, 50, -50, 0],
                  y: [0, -30, 30, 0],
                  rotate: [0, 180, 360],
                } : {
                  opacity: 0,
                  scale: 0,
                  x: 0,
                  y: 0,
                  rotate: 0
                }}
                transition={{
                  opacity: { duration: 0.5, delay: i * 0.1 },
                  scale: { duration: 0.5, delay: i * 0.1 },
                  x: { duration: 10 + i * 2, repeat: Infinity, ease: "easeInOut" },
                  y: { duration: 10 + i * 2, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 10 + i * 2, repeat: Infinity, ease: "easeInOut" }
                }}
              />
            ))}

            {/* Moving grid pattern */}
            <motion.div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px'
              }}
              initial={{ opacity: 0, x: 0, y: 0 }}
              animate={isInView ? {
                opacity: 0.1,
                x: [0, 40, 0],
                y: [0, 40, 0],
              } : {
                opacity: 0,
                x: 0,
                y: 0
              }}
              transition={{
                opacity: { duration: 0.5 },
                x: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
            />

            {/* Floating particles with different sizes */}
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute bg-white rounded-full opacity-20"
                style={{
                  width: `${2 + Math.random() * 4}px`,
                  height: `${2 + Math.random() * 4}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                initial={{ 
                  opacity: 0,
                  y: 0,
                  x: 0,
                  scale: 0.5
                }}
                animate={isInView ? {
                  opacity: [0.1, 0.4, 0.1],
                  y: [-20, -150, -20],
                  x: [0, Math.random() * 100 - 50, 0],
                  scale: [0.5, 1.5, 0.5],
                } : {
                  opacity: 0,
                  y: 0,
                  x: 0,
                  scale: 0.5
                }}
                transition={{
                  duration: 4 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                  ease: "easeInOut"
                }}
              />
            ))}

            {/* Moving diagonal lines */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`line-${i}`}
                className="absolute h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                style={{
                  width: '200%',
                  left: '-50%',
                  top: `${i * 12.5}%`,
                  transform: 'rotate(45deg)',
                }}
                initial={{ x: '-100%', opacity: 0 }}
                animate={isInView ? {
                  x: ['-100%', '100%'],
                  opacity: [0, 0.3, 0],
                } : {
                  x: '-100%',
                  opacity: 0
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
          
          <motion.div 
            className="relative z-10 max-w-3xl px-4"
            variants={textVariants}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            <motion.h2 
              className="text-xl sm:text-2xl font-semibold mb-2"
              variants={titleVariants}
              whileHover={{
                scale: 1.1,
                color: "#fbbf24",
                transition: { duration: 0.2 }
              }}
            >
              hello i'm
            </motion.h2>
            
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#FEF8E5] drop-shadow-lg mb-4"
              variants={nameVariants}
            >
              CRIS JHON B. CANTOS
            </motion.h1>
            
            <motion.p 
              className="text-sm sm:text-base mb-8"
              variants={descriptionVariants}
              whileHover={{
                scale: 1.05,
                color: "#e5e7eb",
                transition: { duration: 0.2 }
              }}
            >
              a collection of visual stories and digital designs <br />
              crafted with creativity and purpose
            </motion.p>
            
            <motion.button 
              onClick={handleGetStarted}
              className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-md shadow-lg transition-all transform cursor-pointer"
              variants={buttonVariants}
              whileHover={{ 
                scale: 1.1,
                y: -8,
                backgroundColor: "#1e40af",
                boxShadow: "0 20px 40px rgba(30, 58, 138, 0.4)",
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              get started →
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-8 cursor-pointer"
            variants={arrowVariants}
            onClick={handleGetStarted}
            whileHover={{
              scale: 1.2,
              y: -5,
              transition: { duration: 0.2 }
            }}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.section>
      </section>

      {/* Enhanced Footer Strip */}
      <motion.div 
        className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        whileHover={{
          background: "linear-gradient(90deg, #1e3a8a 0%, #3730a3 25%, #4338ca 50%, #3730a3 75%, #1e3a8a 100%)",
          transition: { duration: 0.5 }
        }}
      >
        <motion.div 
          className="h-6 bg-[conic-gradient(at_bottom_right,_#fef8e5_25%,_#002B7F_25%,_#002B7F_75%,_#fef8e5_75%)] bg-[length:40px_40px]"
          whileHover={{
            backgroundSize: "60px 60px",
            transition: { duration: 0.3 }
          }}
        />
      </motion.div>
    </main>
  );
}