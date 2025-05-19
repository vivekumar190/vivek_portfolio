'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedinIn, FaTwitter, FaTerminal, FaCode, FaPaperPlane, FaCalendarAlt, FaTimes } from 'react-icons/fa';
import { InlineWidget } from 'react-calendly';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  } | null>(null);

  const [focused, setFocused] = useState<string | null>(null);
  const [typingEffect, setTypingEffect] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const [commandExecuted, setCommandExecuted] = useState(false);
  const [showCalendlyModal, setShowCalendlyModal] = useState(false);

  // Terminal typing effect
  useEffect(() => {
    const text = '> Initializing contact form...';
    let currentIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setTypingEffect(prev => prev + text.charAt(currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCommandExecuted(true);
        }, 500);
      }
    }, 50);
    
    return () => clearInterval(typingInterval);
  }, []);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus({ submitted: true, success: true, message: 'Message sent successfully! Status: 200 OK' });
    
    // Reset form after successful submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      // Clear success message after 5 seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 5000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFocus = (field: string) => {
    setFocused(field);
  };

  const handleBlur = () => {
    setFocused(null);
  };

  const toggleCalendlyModal = () => {
    setShowCalendlyModal(!showCalendlyModal);
  };

  return (
    <>
      {/* Permanent Floating Calendly Button */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.5)' }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleCalendlyModal}
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-3 rounded-full shadow-lg"
        >
          <FaCalendarAlt className="text-lg" />
          <span className="font-medium">Schedule a Call</span>
        </motion.button>
      </motion.div>

      {/* Calendly Modal */}
      {showCalendlyModal && (
        <div className="fixed inset-0 bg-black/80 z-50 overflow-hidden flex flex-col">
          <div className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
              <FaCalendarAlt className="mr-2 text-blue-500" />
              Schedule a Meeting
            </h3>
            <button 
              onClick={toggleCalendlyModal}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 p-2"
            >
              <FaTimes className="text-2xl" />
            </button>
          </div>
          
          <div className="flex-1 w-full bg-white">
            <InlineWidget 
              url="https://calendly.com/vivekumar190" 
              styles={{ 
                height: 'calc(100vh - 64px)', 
                width: '100%',
                overflow: 'auto'
              }}
              prefill={{}}
              pageSettings={{
                backgroundColor: 'ffffff',
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                primaryColor: '2563eb',
                textColor: '000000'
              }}
            />
          </div>
        </div>
      )}

      <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 font-medium text-sm"
            >
              <FaCode className="mr-2" /> Contact Me
            </motion.div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Get In <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">Touch</span>
            </h2>
            
            <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
              Have a project in mind or just want to say hello? Feel free to reach out!
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="lg:col-span-2 bg-gradient-to-br from-blue-600 to-blue-400 text-white p-10 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Tech pattern background */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-10 left-10 text-xs font-mono">
                    {Array.from({ length: 15 }).map((_, i) => (
                      <div key={i} className="whitespace-nowrap">
                        {Array.from({ length: 20 }).map((_, j) => (
                          <span key={j}>{Math.random() > 0.5 ? '1' : '0'}</span>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <FaTerminal className="mr-3 text-xl" />
                    <h3 className="text-2xl font-bold font-mono">Contact Information</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0 border border-white/30">
                        <FaEnvelope className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-white/70 text-sm font-mono">Email</p>
                        <p className="font-medium font-mono">your.email@example.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0 border border-white/30">
                        <FaMapMarkerAlt className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-white/70 text-sm font-mono">Location</p>
                        <p className="font-medium font-mono">Your City, Country</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Calendly Section */}
                <div className="mt-8 mb-8 relative z-10">
                  <h3 className="text-xl font-bold mb-4 font-mono flex items-center">
                    <FaCalendarAlt className="mr-2" />
                    Schedule a Meeting
                  </h3>
                  <p className="text-white/80 mb-4 font-mono text-sm">
                    Prefer to talk in real-time? Book a slot directly in my calendar.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.03, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                    whileTap={{ scale: 0.97 }}
                    onClick={toggleCalendlyModal}
                    className="w-full py-3 px-4 bg-white text-blue-600 rounded-lg font-medium flex items-center justify-center shadow-lg transition-all"
                  >
                    <FaCalendarAlt className="mr-2" />
                    Open Scheduler
                  </motion.button>
                </div>
                
                <div className="mt-4 relative z-10">
                  <h3 className="text-xl font-bold mb-6 font-mono">Connect With Me</h3>
                  <div className="flex space-x-4">
                    <motion.a 
                      href="#" 
                      whileHover={{ y: -5, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                      className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all border border-white/30"
                    >
                      <FaGithub className="w-5 h-5" />
                    </motion.a>
                    <motion.a 
                      href="#" 
                      whileHover={{ y: -5, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                      className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all border border-white/30"
                    >
                      <FaLinkedinIn className="w-5 h-5" />
                    </motion.a>
                    <motion.a 
                      href="#" 
                      whileHover={{ y: -5, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                      className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all border border-white/30"
                    >
                      <FaTwitter className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-white/10"></div>
                <div className="absolute top-1/2 -right-8 w-32 h-32 rounded-full bg-white/10"></div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="lg:col-span-3 p-10 relative"
              >
                {/* Terminal header */}
                <div className="bg-gray-800 dark:bg-gray-900 rounded-t-lg p-3 flex items-center mb-6 border-b border-gray-700">
                  <div className="flex space-x-2 mr-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-gray-300 font-mono text-sm flex-1 text-center">contact_form.js</div>
                </div>
                
                {/* Terminal typing effect */}
                <div className="bg-gray-900 dark:bg-gray-950 p-4 rounded-b-lg mb-8 font-mono text-sm text-green-400">
                  <div className="flex">
                    <span className="text-blue-400 mr-2">$</span>
                    <span>{typingEffect}</span>
                    {!commandExecuted && <span className={`ml-1 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}>|</span>}
                  </div>
                  {commandExecuted && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-gray-400 mt-1">Form ready. Please enter your details below.</div>
                    </motion.div>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold mb-8 dark:text-white font-mono flex items-center">
                  <FaTerminal className="mr-2 text-blue-500" />
                  Send Me a Message
                </h3>
                
                {formStatus && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mb-6 p-4 rounded-lg font-mono text-sm ${formStatus.success ? 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300 border border-green-200 dark:border-green-800' : 'bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300 border border-red-200 dark:border-red-800'}`}
                  >
                    <div className="flex items-center">
                      <span className="text-blue-500 mr-2">$</span>
                      {formStatus.message}
                    </div>
                  </motion.div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <motion.div
                        animate={{
                          y: focused === 'name' || formData.name ? -24 : 0,
                          scale: focused === 'name' || formData.name ? 0.8 : 1,
                          color: focused === 'name' ? 'rgb(59, 130, 246)' : 'rgb(107, 114, 128)'
                        }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 pointer-events-none origin-left flex items-center font-mono"
                      >
                        <span className="text-blue-500 mr-2">const</span> Name
                      </motion.div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => handleFocus('name')}
                        onBlur={handleBlur}
                        className="w-full px-4 pt-6 pb-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white font-mono"
                        required
                      />
                      <div className="absolute right-4 top-3 text-gray-400 font-mono">
                        {focused === 'name' && <span className="text-xs">string</span>}
                      </div>
                    </div>
                    
                    <div className="relative">
                      <motion.div
                        animate={{
                          y: focused === 'email' || formData.email ? -24 : 0,
                          scale: focused === 'email' || formData.email ? 0.8 : 1,
                          color: focused === 'email' ? 'rgb(59, 130, 246)' : 'rgb(107, 114, 128)'
                        }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 pointer-events-none origin-left flex items-center font-mono"
                      >
                        <span className="text-blue-500 mr-2">const</span> Email
                      </motion.div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => handleFocus('email')}
                        onBlur={handleBlur}
                        className="w-full px-4 pt-6 pb-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white font-mono"
                        required
                      />
                      <div className="absolute right-4 top-3 text-gray-400 font-mono">
                        {focused === 'email' && <span className="text-xs">email</span>}
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <motion.div
                      animate={{
                        y: focused === 'subject' || formData.subject ? -24 : 0,
                        scale: focused === 'subject' || formData.subject ? 0.8 : 1,
                        color: focused === 'subject' ? 'rgb(59, 130, 246)' : 'rgb(107, 114, 128)'
                      }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 pointer-events-none origin-left flex items-center font-mono"
                    >
                      <span className="text-blue-500 mr-2">const</span> Subject
                    </motion.div>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => handleFocus('subject')}
                      onBlur={handleBlur}
                      className="w-full px-4 pt-6 pb-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white font-mono"
                    />
                    <div className="absolute right-4 top-3 text-gray-400 font-mono">
                      {focused === 'subject' && <span className="text-xs">string</span>}
                    </div>
                  </div>
                  
                  <div className="relative">
                    <motion.div
                      animate={{
                        y: focused === 'message' || formData.message ? -24 : 0,
                        scale: focused === 'message' || formData.message ? 0.8 : 1,
                        color: focused === 'message' ? 'rgb(59, 130, 246)' : 'rgb(107, 114, 128)'
                      }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 pointer-events-none origin-left flex items-center font-mono"
                    >
                      <span className="text-blue-500 mr-2">const</span> Message
                    </motion.div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => handleFocus('message')}
                      onBlur={handleBlur}
                      rows={4}
                      className="w-full px-4 pt-6 pb-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white font-mono"
                      required
                    ></textarea>
                    <div className="absolute right-4 top-3 text-gray-400 font-mono">
                      {focused === 'message' && <span className="text-xs">string</span>}
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.03, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:from-blue-700 hover:to-blue-600 shadow-lg transition-all text-lg font-medium font-mono flex items-center justify-center"
                  >
                    <span className="mr-2">$ npm run send-message</span>
                    <FaPaperPlane />
                  </motion.button>
                  
                  {/* Code comment */}
                  <div className="text-gray-400 text-xs font-mono mt-2">
                    {/* Form submission will trigger a POST request to the server */}
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact; 