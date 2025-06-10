"use client";
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export default function AboutMe() {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageError, setImageError] = useState<{ [key: number]: boolean }>({});
  
  // Images array - fallback to placeholder if images don't exist
  const images = [
    '/pictures/profile-1.jpg',
    '/pictures/profile-2.jpg', 
    '/pictures/profile-3.jpg',
    '/pictures/profile-4.jpg',
    '/pictures/profile-5.jpg',
    '/pictures/profile-6.jpg'
  ];

  // Auto-rotate slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);
    
    return () => clearInterval(timer);
  }, [images.length]);

  // Smooth scrolling
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);
  
  // Navigation handlers
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  // Handle image error
  const handleImageError = (index: number) => {
    setImageError(prev => ({ ...prev, [index]: true }));
  };

  // Handle View Resume button click
  const handleViewResume = () => {
    window.open('https://docs.google.com/document/d/114dVRK_-vmLw4CIkJtybB-ZrqV0L74h3zsYL79g6sxU/edit?usp=sharing', '_blank');
  };

  // Handle Contact Me button click
  const handleContactMe = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    /* About Me Section - Full viewport height */
    <section 
      ref={sectionRef}
      id="about" 
      className="min-h-screen flex flex-col md:flex-row items-stretch relative overflow-hidden"
    >
      {/* Left content area */}
      <motion.div 
        className="md:w-1/2 bg-[#FEF8E5] p-8 md:p-16 flex items-center"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 0.3 }
        }}
      >
        <div className="max-w-xl">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-blue-900 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            whileHover={{ 
              scale: 1.05,
              color: "#1e3a8a",
              transition: { duration: 0.2 }
            }}
          >
            about me
          </motion.h1>
          
          <motion.div 
            className="text-blue-900 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.p 
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              whileHover={{ 
                x: 10,
                color: "#312e81",
                transition: { duration: 0.2 }
              }}
            >
              My academic journey has equipped me with a comprehensive skillset spanning front-end development (React JS, JavaScript, Python, NextJS, PHP, HTML/CSS), mobile application development, system design, and the creation of intuitive UX/UI experiences.
            </motion.p>
            
            <motion.p 
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              whileHover={{ 
                x: 10,
                color: "#312e81",
                transition: { duration: 0.2 }
              }}
            >
              Furthermore, I bring practical experience in visual storytelling through graphic design, photography, videography, and video production.
            </motion.p>
            
            <motion.p 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.0 }}
              whileHover={{ 
                x: 10,
                color: "#312e81",
                transition: { duration: 0.2 }
              }}
            >
              I am drawn to environments that foster innovative strategies and prioritize impactful technological solutions.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.2 }}
            >
              <motion.button 
                onClick={handleViewResume}
                className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded shadow-lg transition-all cursor-pointer"
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0px 10px 25px rgba(30, 58, 138, 0.4)",
                  y: -3
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                View Resume
              </motion.button>
              
              <motion.button 
                onClick={handleContactMe}
                className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-6 py-2 rounded shadow-lg transition-all cursor-pointer"
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0px 10px 25px rgba(30, 58, 138, 0.2)",
                  backgroundColor: "#1e3a8a",
                  color: "#ffffff",
                  y: -3
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Right image area */}
      <motion.div 
        className="md:w-1/2 bg-gray-100 relative h-screen md:h-auto"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 0.3 }
        }}
      >
        {/* Image slides */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentSlide}
            className="w-full h-full"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-full h-full relative">
              {imageError[currentSlide] ? (
                // Fallback placeholder
                <div className="w-full h-full bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400 flex items-center justify-center">
                  <div className="text-center text-blue-800">
                    <div className="w-24 h-24 mx-auto mb-4 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">CJ</span>
                    </div>
                    <p className="text-lg font-medium">Profile Photo {currentSlide + 1}</p>
                  </div>
                </div>
              ) : (
                <>
                  {/* Gradient background as fallback */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400 absolute inset-0" />
                  
                  {/* Image component */}
                  <Image
                    src={images[currentSlide]}
                    alt={`Profile image ${currentSlide + 1}`}
                    fill
                    className="object-cover"
                    priority={currentSlide === 0}
                    onError={() => handleImageError(currentSlide)}
                  />
                </>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Slideshow navigation */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between z-10 px-4">
          <motion.button 
            onClick={prevSlide}
            className="bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-2 text-gray-800 transition-all"
            aria-label="Previous slide"
            whileHover={{ 
              scale: 1.2,
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              rotate: -5
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <IoIosArrowBack size={20} />
          </motion.button>
          <motion.button 
            onClick={nextSlide}
            className="bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-2 text-gray-800 transition-all"
            aria-label="Next slide"
            whileHover={{ 
              scale: 1.2,
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              rotate: 5
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <IoIosArrowForward size={20} />
          </motion.button>
        </div>
        
        {/* Slide indicators */}
        <div className="absolute bottom-6 left-0 w-full flex justify-center gap-2 z-10">
          {images.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === index 
                  ? 'bg-gray-800 w-4' 
                  : 'bg-gray-400 hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              whileHover={{ 
                scale: 1.5,
                backgroundColor: currentSlide === index ? "#1f2937" : "#6b7280"
              }}
              whileTap={{ scale: 0.8 }}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}