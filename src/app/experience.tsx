"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { HiLink } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';

type ProjectKey =
  | "ate-gangs"
  | "student-handbook"
  | "blood-donation"
  | "seasense"
  | "ate-gangs-ui"
  | "seasense-ui"
  | "viyline"
  | "starbucks"
  | "blood-donation-ui"
  | "handbook-ui";

type ProjectData = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
};

export default function Projects() {
  // State to manage which project popup is currently open
  const [activePopup, setActivePopup] = useState<ProjectKey | null>(null);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  
  // Project data with descriptions and images - COMPLETE WITH ALL PROJECTS
  const projectsData: Record<ProjectKey, ProjectData> = {
    // Projects
    "ate-gangs": {
      title: "Ate Gangs Catering",
      subtitle: "Full-Stack Web Application",
      description: "A comprehensive catering management system that streamlines order processing, menu management, and customer relationship features. Built with React, Node.js, and MongoDB.",
      image: "/projects/2 copy.jpg"
    },
    "student-handbook": {
      title: "College Student Handbook",
      subtitle: "Digital Documentation Platform",
      description: "An interactive digital handbook that provides students with easy access to college policies, procedures, and resources. Features search functionality and responsive design for all devices.",
      image: "/projects/3 copy.jpg"
    },
    "blood-donation": {
      title: "Blood Donation",
      subtitle: "Community Health Platform",
      description: "A platform connecting blood donors with recipients and hospitals, featuring real-time inventory management, appointment scheduling, and emergency request handling.",
      image: "/projects/blood-donation.jpg"
    },
    "seasense": {
      title: "Seasense",
      subtitle: "Environmental Monitoring System",
      description: "An IoT-based system for monitoring marine environments, collecting and analyzing data on water quality, temperature, and marine life conditions to support conservation efforts.",
      image: "/projects/6 copy.jpg"
    },
    
    // UI Designs
    "ate-gangs-ui": {
      title: "Ate Gangs Catering",
      subtitle: "UI/UX Design",
      description: "A colorful, user-friendly interface design for a catering service with emphasis on food photography, intuitive ordering flow, and seamless checkout process.",
      image: "/UI Designs/2.jpg"
    },
    "seasense-ui": {
      title: "Seasense",
      subtitle: "Data Visualization Interface",
      description: "A clean, information-dense UI for environmental data with interactive charts, real-time updates, and accessibility features for researchers and conservationists.",
      image: "/UI Designs/4.jpg"
    },
    "viyline": {
      title: "Viyline Store Website",
      subtitle: "E-commerce UI Design",
      description: "Modern, minimalist e-commerce interface with strong visual hierarchy, prominent product imagery, and a streamlined shopping experience from browsing to purchase.",
      image: "/UI Designs/1.jpg"
    },
    "starbucks": {
      title: "Starbucks Mockup",
      subtitle: "Mobile App Redesign",
      description: "A conceptual redesign of the Starbucks mobile experience focusing on personalization, quick ordering, and reward tracking with a warm, inviting color palette.",
      image: "/UI Designs/5.jpg"
    },
    "blood-donation-ui": {
      title: "Blood Donation Website",
      subtitle: "Healthcare UI Design",
      description: "A compassionate and accessible interface design for blood donation services, featuring clear call-to-actions, donor registration flow, and emergency request system.",
      image: "/UI Designs/blood-donation-ui.jpg"
    },
    "handbook-ui": {
      title: "College Student Handbook",
      subtitle: "Information Architecture Design",
      description: "A well-structured digital handbook design with intuitive navigation, search functionality, and visual organization of complex institutional information.",
      image: "/UI Designs/3.jpg"
    }
  };

  // Certificate data
  const certificates = [
    {
      title: "Introduction to Figma",
      subtitle: "UI/UX Design Fundamentals",
      img: "/certificates/cert1.jpg",
    },
    {
      title: "Introduction to Android Studio Course",
      subtitle: "Mobile App Development",
      img: "/certificates/cert2.jpg",
    },
    {
      title: "Introduction to Graphic Design; Basics of UIUX",
      subtitle: "Design Principles",
      img: "/certificates/cert3.jpg",
    },
    {
      title: "Adobe Photoshop Course from Basic to Advanced for Graphics",
      subtitle: "Photoshop Mastery",
      img: "/certificates/cert4.jpg",
    },
    {
      title: "C# Mastering Course For Beginners",
      subtitle: "Programming Foundations",
      img: "/certificates/cert5.jpg",
    },
    {
      title: "Python Machine Learning",
      subtitle: "AI & Data Science",
      img: "/certificates/cert6.jpg",
    },
    {
      title: "Web Analytics with Similarweb from Basic to PRO!",
      subtitle: "Web Analytics",
      img: "/certificates/cert7.jpg",
    },
    {
      title: "MSITS 2023",
      subtitle: "Conference Participation",
      img: "/certificates/cert8.jpg",
    },
    {
      title: "MSITS 2024",
      subtitle: "Conference Participation",
      img: "/certificates/cert9.jpg",
    },
    {
      title: "OJT Certificate",
      subtitle: "On-the-Job Training",
      img: "/certificates/cert10.jpg",
    },
    {
      title: "Certificate of Participation",
      subtitle: "Various Events",
      img: "/certificates/cert11.jpg",
    },
    {
      title: "Infographics 2nd Placer",
      subtitle: "Design Competition",
      img: "/certificates/cert12.jpg",
    },
  ];

  // Open popup when button is clicked
  const openPopup = (id: ProjectKey) => {
    setActivePopup(id);
    document.body.style.overflow = 'hidden';
  };

  // Close popup function
  const closePopup = () => {
    setActivePopup(null);
    document.body.style.overflow = 'auto';
  };

  // Toggle certificates view
  const toggleCertificates = () => {
    setShowAllCertificates(!showAllCertificates);
  };

  // Determine which certificates to display
  const certificatesToShow = showAllCertificates ? certificates : certificates.slice(0, 4);

  return (
    <div className="py-10 bg-[#FEF8E5] text-blue-900">
      <div className="container mx-auto px-4">
        
        {/* Projects and UI Design Section - Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Projects Section */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">projects</h2>
            <div className="flex flex-wrap gap-3">
              <motion.button 
                onClick={() => openPopup("ate-gangs")}
                className="flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-md transition-colors"
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "#1e3a8a",
                  boxShadow: "0 8px 25px rgba(30, 58, 138, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Ate Gangs Catering <HiLink className="inline-block" />
              </motion.button>
              <motion.button 
                onClick={() => openPopup("student-handbook")}
                className="flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-md transition-colors"
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "#1e3a8a",
                  boxShadow: "0 8px 25px rgba(30, 58, 138, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                College Student Handbook <HiLink className="inline-block" />
              </motion.button>
              <motion.button 
                onClick={() => openPopup("blood-donation")}
                className="flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-md transition-colors"
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "#1e3a8a",
                  boxShadow: "0 8px 25px rgba(30, 58, 138, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Blood Donation <HiLink className="inline-block" />
              </motion.button>
              <motion.button 
                onClick={() => openPopup("seasense")}
                className="flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-md transition-colors"
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "#1e3a8a",
                  boxShadow: "0 8px 25px rgba(30, 58, 138, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Seasense <HiLink className="inline-block" />
              </motion.button>
            </div>
          </div>

          {/* UI Design Section */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">ui design</h2>
            <div className="flex flex-wrap gap-3">
              <motion.button 
                onClick={() => openPopup("ate-gangs-ui")}
                className="flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-md transition-colors"
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "#1e3a8a",
                  boxShadow: "0 8px 25px rgba(30, 58, 138, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Ate Gangs Catering <HiLink className="inline-block" />
              </motion.button>
              <motion.button 
                onClick={() => openPopup("seasense-ui")}
                className="flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-md transition-colors"
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "#1e3a8a",
                  boxShadow: "0 8px 25px rgba(30, 58, 138, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Seasense <HiLink className="inline-block" />
              </motion.button>
              <motion.button 
                onClick={() => openPopup("viyline")}
                className="flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-md transition-colors"
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "#1e3a8a",
                  boxShadow: "0 8px 25px rgba(30, 58, 138, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Viyline Store Website <HiLink className="inline-block" />
              </motion.button>
              <motion.button 
                onClick={() => openPopup("starbucks")}
                className="flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-md transition-colors"
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "#1e3a8a",
                  boxShadow: "0 8px 25px rgba(30, 58, 138, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Starbucks Mockup <HiLink className="inline-block" />
              </motion.button>
              <motion.button 
                onClick={() => openPopup("blood-donation-ui")}
                className="flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-md transition-colors"
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "#1e3a8a",
                  boxShadow: "0 8px 25px rgba(30, 58, 138, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Blood Donation Website <HiLink className="inline-block" />
              </motion.button>
              <motion.button 
                onClick={() => openPopup("handbook-ui")}
                className="flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-md transition-colors"
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "#1e3a8a",
                  boxShadow: "0 8px 25px rgba(30, 58, 138, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                College Student Handbook <HiLink className="inline-block" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Popup Modal - FIXED IMAGE DISPLAY */}
        <AnimatePresence>
          {activePopup && projectsData[activePopup] && (
            <motion.div 
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={closePopup}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Enhanced Blur Overlay */}
              <motion.div 
                className="fixed inset-0 bg-black/60 backdrop-blur-md"
                initial={{ backdropFilter: "blur(0px)", backgroundColor: "rgba(0,0,0,0)" }}
                animate={{ backdropFilter: "blur(12px)", backgroundColor: "rgba(0,0,0,0.6)" }}
                exit={{ backdropFilter: "blur(0px)", backgroundColor: "rgba(0,0,0,0)" }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Modal content */}
              <motion.div 
                className="relative bg-white rounded-lg shadow-2xl max-w-4xl w-full z-10 overflow-hidden"
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                {/* Close button */}
                <motion.button 
                  onClick={closePopup}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 z-20 p-2 rounded-full bg-white/80 backdrop-blur-sm"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.9)" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IoMdClose size={24} />
                </motion.button>
                
                {/* Project image - FIXED AND ENHANCED */}
                <div className="w-full aspect-video bg-gradient-to-br from-gray-100 to-gray-300 rounded-t-lg relative overflow-hidden">
                  <Image
                    src={projectsData[activePopup].image}
                    alt={projectsData[activePopup].title}
                    fill
                    className="object-cover transition-all duration-300"
                    onError={(e) => {
                      console.log(`Image not found: ${projectsData[activePopup].image}`);
                      // Hide the image and show fallback
                      e.currentTarget.style.display = 'none';
                    }}
                    priority
                    onLoad={(e) => {
                      // Hide fallback when image loads successfully
                      const fallback = e.currentTarget.parentElement?.querySelector('.fallback-overlay') as HTMLElement;
                      if (fallback) fallback.style.display = 'none';
                    }}
                  />
                  
                  {/* Beautiful fallback that shows when image fails to load */}
                  <div className="fallback-overlay absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200">
                    <div className="text-center p-8">
                      <div className="text-6xl mb-4">
                        {activePopup.includes('ui') ? '🎨' : '💻'}
                      </div>
                      <div className="text-2xl font-bold text-blue-900 mb-2">
                        {projectsData[activePopup].title}
                      </div>
                      <div className="text-lg text-blue-700 mb-4">
                        {projectsData[activePopup].subtitle}
                      </div>
                      <div className="text-sm text-gray-600">
                        Image preview coming soon
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover overlay for loaded images */}
                  <motion.div
                    className="absolute inset-0 bg-blue-900/10 opacity-0 pointer-events-none"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                
                {/* Project details */}
                <motion.div 
                  className="p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  <motion.h3 
                    className="text-3xl font-bold text-blue-900 mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                  >
                    {projectsData[activePopup].title}
                  </motion.h3>
                  <motion.h4 
                    className="text-xl text-blue-700 mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                  >
                    {projectsData[activePopup].subtitle}
                  </motion.h4>
                  <motion.p 
                    className="text-gray-700 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                  >
                    {projectsData[activePopup].description}
                  </motion.p>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Training/Seminar and Internship Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Training/Seminar Section */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">training/seminar</h2>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              <div>
                <p className="font-semibold">Capstone 101</p>
                <p className="font-semibold">Capstone 102</p>
                <p className="font-semibold">Arduino Seminar</p>
                <p className="font-semibold">Tech Talk 1.0</p>
              </div>
              <div>
                <p className="font-semibold">Video Production</p>
                <p className="font-semibold">Layout Design</p>
                <p className="font-semibold">Photography Seminar</p>
                <p className="font-semibold">Video Edit</p>
              </div>
            </div>
          </div>

          {/* Internship Section */}  
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">internship</h2>
            <div>
              <p className="font-semibold text-lg">5th Civil Relation Group</p>
              <p className="text-sm">Naval Station Felix Apolinario, Panacan, Philippines</p>
              <p className="text-xs">(486 Hours)</p>
            </div>
          </div>
        </div>

        {/* Certificates Section */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">certificates</h2>
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ${showAllCertificates ? 'lg:grid-cols-3' : ''}`}>
            {certificatesToShow.map((cert, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col gap-3 mb-4 sm:mb-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ 
                  y: -8, 
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                <motion.div 
                  className="bg-slate-600 aspect-[16/11] w-full flex items-center justify-center text-white relative rounded overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <Image
                    src={cert.img}
                    alt={cert.title}
                    fill
                    className="object-cover rounded"
                  />
                  <motion.div
                    className="absolute inset-0 bg-blue-900/20 opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                <motion.div 
                  className="flex flex-col justify-center px-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.3 }}
                >
                  <h3 className="text-xl md:text-2xl font-bold text-blue-900">{cert.title}</h3>
                  <p className="text-blue-900">{cert.subtitle}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <motion.button
              className="px-6 py-2 bg-blue-900 text-white rounded shadow"
              onClick={toggleCertificates}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "#1e3a8a",
                boxShadow: "0 8px 25px rgba(30, 58, 138, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {showAllCertificates ? 'Show Less' : 'Show All'}
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}