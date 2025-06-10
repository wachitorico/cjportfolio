"use client";
import { FaJs, FaPython, FaPhp, FaReact } from 'react-icons/fa';
import { SiTypescript, SiSharp, SiNextdotjs } from 'react-icons/si';
import { FaCamera, FaFilm, FaPenNib, FaLaptopCode } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function SkillsLanguages() {
  // Refs for different sections
  const languagesRef = useRef(null);
  const skillsRef = useRef(null);
  
  // In-view detection - Animation triggers every time section comes into view
  const isLanguagesInView = useInView(languagesRef, { 
    once: false, // Allow animation to trigger multiple times
    amount: 0.3, // Trigger when 30% of the element is visible
    margin: "-100px"
  });
  
  const isSkillsInView = useInView(skillsRef, { 
    once: false,
    amount: 0.3,
    margin: "-100px"
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7 }
    }
  };

  const languageItemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        type: "spring",
        stiffness: 300
      }
    }
  };

  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: 90 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotateY: 0,
      transition: { 
        duration: 0.6,
        type: "spring",
        stiffness: 200
      }
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-black py-8 px-2 sm:px-4 md:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Known Languages */}
        <motion.div 
          ref={languagesRef}
          className="bg-[#193865] text-white rounded-2xl p-6 mb-6 shadow-2xl"
          variants={containerVariants}
          initial="hidden"
          animate={isLanguagesInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-3xl font-semibold mb-4 font-serif"
            variants={titleVariants}
          >
            known language
          </motion.h2>
          <div className="flex flex-wrap gap-4">
            {[
              { icon: FaJs, name: "JavaScript", color: "#f7df1e" },
              { icon: SiTypescript, name: "TypeScript", color: "#3178c6" },
              { icon: FaPython, name: "Python", color: "#306998" },
              { icon: SiSharp, name: "C#", color: "#512bd4" },
              { icon: FaPhp, name: "PHP", color: "#777bb4" },
              { icon: FaReact, name: "ReactJS", color: "#61dafb" },
              { icon: SiNextdotjs, name: "NextJS", color: "#000000" }
            ].map((lang, index) => (
              <motion.div 
                key={lang.name}
                className="bg-white text-[#193865] p-4 rounded-xl flex items-center gap-2 cursor-pointer"
                variants={languageItemVariants}
              >
                <lang.icon size={36} />
                <span className="font-medium">{lang.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Skills */}
        <motion.div 
          ref={skillsRef}
          className="bg-[#f8f4de] text-[#193865] rounded-2xl p-6 shadow-2xl"
          variants={containerVariants}
          initial="hidden"
          animate={isSkillsInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-3xl font-semibold mb-4 font-serif"
            variants={titleVariants}
          >
            skills
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                icon: FaCamera,
                title: "Photography & Videography",
                description: "Expertise in capturing and producing compelling visual content.",
                color: "#ef4444"
              },
              {
                icon: FaFilm,
                title: "Editing",
                description: "Proficient in post-production using industry-standard software.",
                color: "#8b5cf6"
              },
              {
                icon: FaLaptopCode,
                title: "UI/UX Design",
                description: "Experienced in creating user-friendly and engaging digital experiences.",
                color: "#06b6d4"
              },
              {
                icon: FaPenNib,
                title: "Graphic Designer",
                description: "Skilled in producing eye-catching graphics and layouts that enhance visual communication.",
                color: "#f59e0b"
              }
            ].map((skill, index) => (
              <motion.div 
                key={skill.title}
                className="bg-[#193865] text-white p-4 rounded-xl cursor-pointer"
                variants={skillItemVariants}
              >
                <div className="mb-2 flex justify-center">
                  <skill.icon size={48} />
                </div>
                <h3 className="font-bold mb-2">
                  {skill.title}
                </h3>
                <p className="text-sm">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}