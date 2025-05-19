'use client';
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });
  const avatarRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  useEffect(() => {
    if (!isMounted || !avatarRef.current) return;
    
    const rect = avatarRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate distance from center (limited to a small range)
    const maxDistance = 3;
    const distanceX = (mousePosition.x - centerX) / 50;
    const distanceY = (mousePosition.y - centerY) / 50;
    
    setEyePosition({
      x: Math.min(Math.max(distanceX, -maxDistance), maxDistance),
      y: Math.min(Math.max(distanceY, -maxDistance), maxDistance)
    });
  }, [mousePosition, isMounted]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 font-medium text-sm"
            >
              Full Stack Developer
            </motion.div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Hi, I&apos;m <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">Your Name</span>
            </h1>
            
            <motion.p
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              I build exceptional and accessible digital experiences for the web, specializing in modern JavaScript frameworks and micro-frontend architecture.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg hover:from-blue-700 hover:to-blue-600 shadow-lg transition-all"
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 text-lg font-medium text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-900 transition-all"
              >
                Contact Me
              </motion.a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              <motion.a 
                href="#" 
                whileHover={{ y: -5 }}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/50 dark:hover:text-blue-400 transition-all"
              >
                <FaGithub className="text-xl" />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ y: -5 }}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/50 dark:hover:text-blue-400 transition-all"
              >
                <FaLinkedinIn className="text-xl" />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ y: -5 }}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/50 dark:hover:text-blue-400 transition-all"
              >
                <FaTwitter className="text-xl" />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div ref={avatarRef} className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Animated Character */}
              <motion.div
                className="absolute inset-0"
                animate={{ 
                  rotate: [0, 2, 0, -2, 0],
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 5,
                  ease: "easeInOut" 
                }}
              >
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  {/* Background Circle */}
                  <motion.circle 
                    cx="100" 
                    cy="100" 
                    r="90" 
                    fill="url(#gradient)" 
                    animate={{
                      r: [90, 93, 90, 87, 90],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 8,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Face */}
                  <circle cx="100" cy="100" r="70" fill="#FFDBB5" />
                  
                  {/* Eyes */}
                  <g>
                    {/* Left Eye Socket */}
                    <circle cx="75" cy="85" r="12" fill="white" />
                    {/* Left Eye */}
                    <motion.circle 
                      cx={75 + eyePosition.x} 
                      cy={85 + eyePosition.y} 
                      r="6" 
                      fill="#333" 
                    />
                    
                    {/* Right Eye Socket */}
                    <circle cx="125" cy="85" r="12" fill="white" />
                    {/* Right Eye */}
                    <motion.circle 
                      cx={125 + eyePosition.x} 
                      cy={85 + eyePosition.y} 
                      r="6" 
                      fill="#333" 
                    />
                  </g>
                  
                  {/* Mouth */}
                  <motion.path 
                    d="M 70 125 Q 100 145 130 125" 
                    stroke="#333" 
                    strokeWidth="3" 
                    fill="transparent"
                    animate={{
                      d: ["M 70 125 Q 100 145 130 125", "M 70 125 Q 100 150 130 125", "M 70 125 Q 100 145 130 125"]
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 5,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Hair */}
                  <path d="M 50 70 Q 60 40 100 40 Q 140 40 150 70" fill="#333" />
                  <path d="M 40 80 Q 50 50 100 30 Q 150 50 160 80" fill="#333" />
                  
                  {/* Gradient Definition */}
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#60A5FA" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Floating Elements */}
                <motion.div 
                  className="absolute -top-8 -right-8 w-16 h-16 bg-blue-400 rounded-lg opacity-70"
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 10, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 6,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.div 
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-400 rounded-full opacity-70"
                  animate={{
                    y: [0, 10, 0],
                    x: [0, -5, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 5,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
                
                <motion.div 
                  className="absolute top-1/2 -right-12 w-8 h-8 bg-yellow-300 rounded-lg opacity-70"
                  animate={{
                    y: [0, 15, 0],
                    rotate: [0, -15, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 7,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 