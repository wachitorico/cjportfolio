"use client";
import { FaJs, FaPython, FaPhp, FaReact } from 'react-icons/fa';
import { SiTypescript, SiSharp, SiNextdotjs } from 'react-icons/si';
import { FaCamera, FaFilm, FaPenNib, FaLaptopCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function SkillsLanguages() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-black py-8 px-2 sm:px-4 md:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Known Languages */}
        <motion.div 
          className="bg-[#193865] text-white rounded-2xl p-6 mb-6 shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)",
            transition: { duration: 0.3 }
          }}
        >
          <motion.h2 
            className="text-3xl font-semibold mb-4 font-serif"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ 
              scale: 1.05,
              color: "#fbbf24",
              transition: { duration: 0.2 }
            }}
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
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 300
                }}
                whileHover={{ 
                  scale: 1.1,
                  y: -5,
                  backgroundColor: lang.color,
                  color: lang.name === "NextJS" ? "#ffffff" : "#ffffff",
                  boxShadow: `0 10px 25px ${lang.color}40`,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <lang.icon size={36} />
                <span className="font-medium">{lang.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Skills */}
        <motion.div 
          className="bg-[#f8f4de] text-[#193865] rounded-2xl p-6 shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 25px 50px rgba(0, 0, 0, 0.2)",
            transition: { duration: 0.3 }
          }}
        >
          <motion.h2 
            className="text-3xl font-semibold mb-4 font-serif"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            whileHover={{ 
              scale: 1.05,
              color: "#dc2626",
              transition: { duration: 0.2 }
            }}
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
                initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.7 + (index * 0.1),
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  backgroundColor: skill.color,
                  rotateX: 5,
                  boxShadow: `0 15px 30px ${skill.color}40`,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className="mb-2 flex justify-center"
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.2,
                    transition: { duration: 0.6 }
                  }}
                >
                  <skill.icon size={48} />
                </motion.div>
                <motion.h3 
                  className="font-bold mb-2"
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                >
                  {skill.title}
                </motion.h3>
                <motion.p 
                  className="text-sm"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  {skill.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}