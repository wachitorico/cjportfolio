"use client";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGraduationCap, FaSchool, FaBriefcase, FaTrophy, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function Education() {
  // Refs for each section
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const achievementsRef = useRef(null);
  
  // In-view detection
  const isEducationInView = useInView(educationRef, { once: false, amount: 0.3 });
  const isExperienceInView = useInView(experienceRef, { once: false, amount: 0.3 });
  const isAchievementsInView = useInView(achievementsRef, { once: false, amount: 0.3 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: { 
        duration: 0.7,
        type: "spring",
        stiffness: 100
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6,
        type: "spring",
        stiffness: 200
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: { 
        duration: 0.5,
        type: "spring",
        delay: 0.2
      }
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Education Section */}
        <motion.section 
          ref={educationRef}
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isEducationInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="flex items-center gap-4 mb-10"
            variants={titleVariants}
          >
            <motion.div variants={iconVariants}>
              <FaGraduationCap className="text-4xl text-blue-400" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              EDUCATION
            </h2>
          </motion.div>
          
          <div className="space-y-6">
            <motion.div 
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(59, 130, 246, 0.3)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/20 p-3 rounded-full">
                  <FaSchool className="text-2xl text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-bold text-blue-300">COLLEGE</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <FaCalendarAlt className="text-blue-400" />
                      <span>2021-2025</span>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-1">Holy Cross of Davao College</h4>
                  <p className="text-gray-300 mb-2">Bachelor of Science in Information Technology</p>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <FaMapMarkerAlt className="text-blue-400" />
                    <span>Davao City, Philippines</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(59, 130, 246, 0.3)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-purple-500/20 p-3 rounded-full">
                  <FaSchool className="text-2xl text-purple-400" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-bold text-purple-300">HIGH SCHOOL</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <FaCalendarAlt className="text-purple-400" />
                      <span>2015-2021</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Holy Cross of Davao College</h4>
                      <p className="text-gray-300">SHS - Science, Technology, Engineering, and Mathematics</p>
                      <p className="text-sm text-gray-400">2019-2021</p>
                    </div>
                    <div className="border-l-2 border-purple-400/30 pl-4">
                      <h4 className="text-lg font-semibold mb-1">Holy Cross of Davao College</h4>
                      <p className="text-gray-300">Junior High School</p>
                      <p className="text-sm text-gray-400">2015-2019</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(59, 130, 246, 0.3)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-green-500/20 p-3 rounded-full">
                  <FaSchool className="text-2xl text-green-400" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-bold text-green-300">ELEMENTARY</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <FaCalendarAlt className="text-green-400" />
                      <span>2008-2015</span>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-1">V.L. Angliongto Sr. Elementary School</h4>
                  <p className="text-gray-300">Grade 1 - 6</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Decorative divider */}
        <motion.div 
          className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent my-16"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        ></motion.div>
        
        {/* Experience Section */}
        <motion.section 
          ref={experienceRef}
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isExperienceInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="flex items-center gap-4 mb-10"
            variants={titleVariants}
          >
            <motion.div variants={iconVariants}>
              <FaBriefcase className="text-4xl text-purple-400" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              EXPERIENCE
            </h2>
          </motion.div>
          
          <div className="space-y-6">
            <motion.div 
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(147, 51, 234, 0.3)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-purple-500/20 p-3 rounded-full">
                  <FaGraduationCap className="text-2xl text-purple-400" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-bold text-purple-300">Holy Cross of Davao College</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <FaCalendarAlt className="text-purple-400" />
                      <span>2021 - 2025</span>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-white">Alumni Affairs Scholar</h4>
                  <p className="text-gray-300 mt-2">Supporting college initiatives and maintaining alumni relationships while pursuing academic excellence.</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(147, 51, 234, 0.3)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-pink-500/20 p-3 rounded-full">
                  <FaBriefcase className="text-2xl text-pink-400" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-bold text-pink-300">Freelance</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <FaCalendarAlt className="text-pink-400" />
                      <span>2020 - PRESENT</span>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-white">Creative Professional</h4>
                  <p className="text-gray-300 mt-2">Photography, Videography, Editing, and UI/UX Design</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {['Photography', 'Videography', 'Video Editing', 'UI/UX Design'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Decorative divider */}
        <motion.div 
          className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent my-16"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        ></motion.div>
        
        {/* Achievements Section */}
        <motion.section
          ref={achievementsRef}
          variants={containerVariants}
          initial="hidden"
          animate={isAchievementsInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="flex items-center gap-4 mb-10"
            variants={titleVariants}
          >
            <motion.div variants={iconVariants}>
              <FaTrophy className="text-4xl text-yellow-400" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              ACHIEVEMENTS
            </h2>
          </motion.div>
          
          <div className="space-y-6">
            <motion.div 
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(251, 191, 36, 0.3)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-yellow-500/20 p-3 rounded-full">
                  <FaTrophy className="text-2xl text-yellow-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-yellow-300 mb-1">MCITS 2024</h3>
                  <h4 className="text-lg font-semibold text-white">🥇 1st Place in Infographic</h4>
                  <p className="text-gray-300 mt-2">Recognized for excellence in visual communication and design innovation.</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(251, 191, 36, 0.3)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-orange-500/20 p-3 rounded-full">
                  <FaGraduationCap className="text-2xl text-orange-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-orange-300 mb-1">Dean's List</h3>
                  <h4 className="text-lg font-semibold text-white">2nd Year - Second Semester</h4>
                  <p className="text-gray-300 mt-2">Academic excellence recognition for outstanding scholastic performance.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}