'use client';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaTwitter, FaHeart, FaEnvelope, FaMapMarkerAlt, FaCode, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="relative bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-16 pb-8 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600"></div>
      <div className="absolute top-0 inset-x-0 flex justify-center">
        <div className="w-24 h-12 bg-white dark:bg-gray-900 rounded-b-full shadow-lg flex items-end justify-center pb-2">
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center text-white shadow-md"
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </motion.button>
        </div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-600"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-blue-400"></div>
        <div className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full bg-blue-500 opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-5">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center mb-4">
                <FaCode className="text-blue-600 dark:text-blue-400 text-2xl mr-3" />
                <h3 className="text-2xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                  Your Name
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Building exceptional digital experiences with modern technologies and best practices. Focused on creating responsive, accessible, and performant web applications.
              </p>
              <div className="flex space-x-3">
                <motion.a 
                  href="#" 
                  whileHover={{ y: -5, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                  className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/50 dark:hover:text-blue-400 transition-all"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-5 h-5" />
                </motion.a>
                <motion.a 
                  href="#" 
                  whileHover={{ y: -5, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                  className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/50 dark:hover:text-blue-400 transition-all"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn className="w-5 h-5" />
                </motion.a>
                <motion.a 
                  href="#" 
                  whileHover={{ y: -5, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                  className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/50 dark:hover:text-blue-400 transition-all"
                  aria-label="Twitter"
                >
                  <FaTwitter className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          </div>
          
          <div className="md:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {/* Quick Links */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold mb-4 dark:text-white flex items-center">
                  <span className="w-8 h-0.5 bg-blue-500 mr-3"></span>
                  Navigation
                </h4>
                <ul className="space-y-3">
                  {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                    <motion.li key={item} whileHover={{ x: 5 }}>
                      <a 
                        href={`#${item.toLowerCase()}`} 
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center"
                      >
                        <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                        {item}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              
              {/* Services */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold mb-4 dark:text-white flex items-center">
                  <span className="w-8 h-0.5 bg-blue-500 mr-3"></span>
                  Services
                </h4>
                <ul className="space-y-3">
                  {['Web Development', 'UI/UX Design', 'Mobile Apps', 'Consulting', 'SEO'].map((item) => (
                    <motion.li key={item} whileHover={{ x: 5 }}>
                      <a 
                        href="#contact" 
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {item}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              
              {/* Contact Info */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold mb-4 dark:text-white flex items-center">
                  <span className="w-8 h-0.5 bg-blue-500 mr-3"></span>
                  Contact
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <FaEnvelope className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-gray-600 dark:text-gray-300">
                      your.email@example.com
                    </p>
                  </div>
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-gray-600 dark:text-gray-300">
                      Your City, Country
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 dark:border-gray-700 mt-16 pt-8 text-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-500 dark:text-gray-400 mb-4 md:mb-0">
              © {currentYear} <span className="font-medium">Your Name</span>. All rights reserved.
            </p>
            <div className="flex items-center text-gray-500 dark:text-gray-400">
              <span className="flex items-center">
                Made with <FaHeart className="text-red-500 mx-1" /> using
              </span>
              <div className="flex items-center ml-2 space-x-2">
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs font-medium">Next.js</span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs font-medium">Tailwind CSS</span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs font-medium">Framer Motion</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 