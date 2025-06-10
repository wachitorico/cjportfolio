"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FEF8E5] overflow-hidden">
      {/* Hero Section - Exact viewport height */}
      <motion.section
        className="relative flex flex-col items-center justify-center text-center text-white h-screen w-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.3 }
        }}
      >
        {/* Moving Texture Background */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-black"
          initial={{ opacity: 0.8 }}
          animate={{ 
            opacity: 0.9,
            background: [
              "linear-gradient(135deg, #111827 0%, #1e3a8a 25%, #000000 50%, #1e40af 75%, #111827 100%)",
              "linear-gradient(225deg, #1e40af 0%, #000000 25%, #1e3a8a 50%, #111827 75%, #1e40af 100%)",
              "linear-gradient(315deg, #000000 0%, #111827 25%, #1e40af 50%, #1e3a8a 75%, #000000 100%)",
              "linear-gradient(45deg, #1e3a8a 0%, #1e40af 25%, #111827 50%, #000000 75%, #1e3a8a 100%)"
            ]
          }}
          transition={{
            opacity: { duration: 0.8 },
            background: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
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
              animate={{
                x: [0, 50, -50, 0],
                y: [0, -30, 30, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.2, 0.8, 1],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
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
            animate={{
              x: [0, 40, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
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
              animate={{
                y: [-20, -150, -20],
                x: [0, Math.random() * 100 - 50, 0],
                opacity: [0.1, 0.4, 0.1],
                scale: [0.5, 1.5, 0.5],
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
              animate={{
                x: ['-100%', '100%'],
                opacity: [0, 0.3, 0],
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
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 }
          }}
        >
          <motion.h2 
            className="text-xl sm:text-2xl font-semibold mb-2"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
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
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7, type: "spring", stiffness: 200 }}
            whileHover={{
              scale: 1.05,
              textShadow: "0 0 20px rgba(254, 248, 229, 0.8)",
              transition: { duration: 0.3 }
            }}
          >
            CRIS JHON B. CANTOS
          </motion.h1>
          
          <motion.p 
            className="text-sm sm:text-base mb-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
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
            className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-md shadow-lg transition-all transform"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
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
          className="absolute bottom-8"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            y: [0, -10, 0],
          }}
          transition={{
            opacity: { duration: 0.6, delay: 1.3 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
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

      {/* Enhanced Footer Strip */}
      <motion.div 
        className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
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