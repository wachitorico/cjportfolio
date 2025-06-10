"use client";
import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaRedditAlien, FaDiscord } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <motion.div 
      id="contact" 
      className="bg-[#FEF8E5] text-blue-900 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          whileHover={{
            scale: 1.05,
            color: "#1e40af",
            transition: { duration: 0.3 }
          }}
        >
          contact me
        </motion.h1>
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Form Section */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <motion.input 
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-blue-900 rounded bg-transparent text-blue-900 placeholder-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
                  required
                  whileFocus={{
                    scale: 1.02,
                    borderColor: "#1e40af",
                    boxShadow: "0 0 15px rgba(30, 64, 175, 0.3)",
                  }}
                  whileHover={{
                    borderColor: "#1e40af",
                    transition: { duration: 0.2 }
                  }}
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <motion.input 
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-blue-900 rounded bg-transparent text-blue-900 placeholder-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
                  required
                  whileFocus={{
                    scale: 1.02,
                    borderColor: "#1e40af",
                    boxShadow: "0 0 15px rgba(30, 64, 175, 0.3)",
                  }}
                  whileHover={{
                    borderColor: "#1e40af",
                    transition: { duration: 0.2 }
                  }}
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <motion.input 
                  type="url"
                  name="website"
                  placeholder="Your website (If exists)"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full p-3 border border-blue-900 rounded bg-transparent text-blue-900 placeholder-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
                  whileFocus={{
                    scale: 1.02,
                    borderColor: "#1e40af",
                    boxShadow: "0 0 15px rgba(30, 64, 175, 0.3)",
                  }}
                  whileHover={{
                    borderColor: "#1e40af",
                    transition: { duration: 0.2 }
                  }}
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <motion.textarea 
                  name="message"
                  placeholder="How can I help?*"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-3 border border-blue-900 rounded bg-transparent text-blue-900 placeholder-blue-900 resize-none focus:outline-none focus:ring-2 focus:ring-blue-900"
                  required
                  whileFocus={{
                    scale: 1.02,
                    borderColor: "#1e40af",
                    boxShadow: "0 0 15px rgba(30, 64, 175, 0.3)",
                  }}
                  whileHover={{
                    borderColor: "#1e40af",
                    transition: { duration: 0.2 }
                  }}
                />
              </motion.div>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <motion.button 
                  type="submit" 
                  className="bg-blue-900 text-white py-3 px-6 rounded font-medium"
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "#1e40af",
                    boxShadow: "0 10px 25px rgba(30, 64, 175, 0.4)",
                    y: -2
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Get In Touch
                </motion.button>
                
                <div className="flex gap-3 mt-2 sm:mt-0">
                  {[
                    { icon: FaFacebookF, href: "https://facebook.com", color: "#1877f2" },
                    { icon: FaRedditAlien, href: "https://reddit.com", color: "#ff4500" },
                    { icon: FaTwitter, href: "https://twitter.com", color: "#1da1f2" },
                    { icon: FaDiscord, href: "https://discord.com", color: "#5865f2" }
                  ].map((social, index) => (
                    <motion.a 
                      key={index}
                      href={social.href} 
                      className="border border-blue-900 p-2.5 rounded flex items-center justify-center"
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: social.color,
                        borderColor: social.color,
                        color: "white",
                        rotate: 5,
                        y: -3
                      }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <social.icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </form>
          </motion.div>
          
          {/* Contact Info Section */}
          <motion.div 
            className="lg:w-1/2 flex flex-col justify-center mt-8 lg:mt-0 lg:pl-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.h2 
                className="text-2xl md:text-3xl font-bold mb-2"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                Let's <motion.span 
                  className="text-white bg-blue-900 px-2 py-1 rounded"
                  whileHover={{
                    backgroundColor: "#1e40af",
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  talk
                </motion.span> for
              </motion.h2>
              <motion.h2 
                className="text-2xl md:text-3xl font-bold mb-6"
                whileHover={{
                  color: "#1e40af",
                  transition: { duration: 0.2 }
                }}
              >
                Something special
              </motion.h2>
              <motion.p 
                className="text-base leading-relaxed"
                whileHover={{
                  scale: 1.02,
                  color: "#1e40af",
                  transition: { duration: 0.2 }
                }}
              >
                I seek to push the limits of creativity to create high-engaging, 
                user-friendly, and memorable interactive experiences.
              </motion.p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.a 
                href="mailto:crisjhon6@gmail.com" 
                className="text-xl md:text-2xl font-bold block mb-3"
                whileHover={{ 
                  scale: 1.05,
                  color: "#1e40af",
                  textDecoration: "underline",
                  x: 10,
                  transition: { duration: 0.2 }
                }}
              >
                crisjhon6@gmail.com
              </motion.a>
              <motion.a 
                href="tel:+639913048785" 
                className="text-xl md:text-2xl font-bold"
                whileHover={{ 
                  scale: 1.05,
                  color: "#1e40af",
                  textDecoration: "underline",
                  x: 10,
                  transition: { duration: 0.2 }
                }}
              >
                +63 991 304 8785
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}