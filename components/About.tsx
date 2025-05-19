'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  FaUser, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaGraduationCap,
  FaBriefcase,
  FaAward,
  FaChevronRight,
  FaCalendarAlt,
  FaBuilding,
  FaUniversity,
  FaLaptop
} from 'react-icons/fa';

const About = () => {
  const [activeTab, setActiveTab] = useState('story');
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  
  const tabs = [
    { id: 'story', label: 'My Story', icon: <FaUser /> },
    { id: 'experience', label: 'Experience', icon: <FaBriefcase /> },
    { id: 'education', label: 'Education', icon: <FaGraduationCap /> }
  ];
  
  const timelineItems = [
    { 
      year: '2023', 
      title: 'Senior Developer', 
      company: 'Tech Company', 
      description: 'Led development of scalable web applications using React and Node.js.',
      skills: ['React', 'Node.js', 'TypeScript', 'AWS'],
      achievements: [
        'Reduced application load time by 40% through code optimization',
        'Led a team of 5 developers to deliver projects on time',
        'Implemented CI/CD pipeline improving deployment efficiency'
      ],
      color: 'blue'
    },
    { 
      year: '2021', 
      title: 'Full Stack Developer', 
      company: 'Digital Agency', 
      description: 'Built and maintained client projects with modern JavaScript frameworks.',
      skills: ['JavaScript', 'React', 'Express', 'MongoDB'],
      achievements: [
        'Developed 10+ client websites with responsive designs',
        'Created reusable component library reducing development time',
        'Optimized database queries improving performance by 30%'
      ],
      color: 'indigo'
    },
    { 
      year: '2020', 
      title: 'Frontend Developer', 
      company: 'Startup', 
      description: 'Created responsive interfaces and implemented UI/UX designs.',
      skills: ['HTML/CSS', 'JavaScript', 'React', 'Figma'],
      achievements: [
        'Implemented pixel-perfect designs from Figma mockups',
        'Improved website accessibility to WCAG 2.1 standards',
        'Reduced bundle size by 35% through code splitting'
      ],
      color: 'purple'
    }
  ];
  
  const educationItems = [
    { 
      year: '2019', 
      degree: 'B.S. Computer Science', 
      institution: 'University Name', 
      description: 'Focused on software engineering and web technologies.',
      courses: ['Data Structures & Algorithms', 'Web Development', 'Database Systems', 'Software Engineering'],
      projects: 'Developed a full-stack e-commerce platform as capstone project',
      color: 'green'
    },
    { 
      year: '2022', 
      degree: 'Web Development Certification', 
      institution: 'Online Platform', 
      description: 'Advanced course in modern web development practices.',
      courses: ['Advanced JavaScript', 'React & Redux', 'Node.js Backend', 'API Development'],
      projects: 'Built a real-time chat application with WebSockets',
      color: 'teal'
    }
  ];
  
  const achievements = [
    { number: "3+", text: "Years Experience" },
    { number: "25+", text: "Projects Completed" },
    { number: "15+", text: "Happy Clients" },
    { number: "8+", text: "Technologies" }
  ];

  const toggleExpand = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-blue-100 dark:bg-blue-900/20 blur-3xl opacity-70 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-purple-100 dark:bg-purple-900/20 blur-3xl opacity-70 pointer-events-none"></div>
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 font-medium text-sm"
          >
            <FaUser className="inline-block mr-2" /> Discover Who I Am
          </motion.span>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            About <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">Me</span>
          </h2>
          
          <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            A passionate developer crafting beautiful digital experiences with code and creativity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Profile & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-8"
          >
            {/* Profile Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
              <div className="h-24 bg-gradient-to-r from-blue-600 to-blue-400 relative">
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                  <div className="w-24 h-24 rounded-full border-4 border-white dark:border-gray-800 overflow-hidden">
                    <img 
                      src="/images/profile.jpg" 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              <div className="pt-16 pb-8 px-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Your Name</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">Full Stack Developer</p>
                
                <div className="flex justify-center space-x-2 mb-6">
                  {['JavaScript', 'React', 'Node.js'].map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="space-y-3 text-left">
                  <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <FaEnvelope className="text-blue-500 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">your.email@example.com</span>
                  </div>
                  
                  <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <FaMapMarkerAlt className="text-blue-500 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">Your Location</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                  className="p-5 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 text-center"
                >
                  <h3 className="font-bold text-3xl mb-2 text-blue-600 dark:text-blue-400">{item.number}</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Right Column - Content Tabs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            {/* Tab Navigation */}
            <div className="flex mb-8 bg-white dark:bg-gray-800 p-1.5 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                    activeTab === tab.id 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
            
            {/* Tab Content */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
              {/* My Story Tab */}
              {activeTab === 'story' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">My Journey</h3>
                  
                  <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
                    <p>
                      I&apos;m a <span className="font-semibold text-blue-600 dark:text-blue-400">Full Stack Developer</span> with a passion for creating elegant solutions to complex problems. My journey in web development began over 3 years ago, and I&apos;ve been in love with coding ever since.
                    </p>
                    
                    <p>
                      I specialize in building modern web applications using React.js, Next.js, and Node.js. My expertise extends to micro-frontend architecture, allowing me to create scalable and maintainable systems that deliver exceptional user experiences.
                    </p>
                    
                    <p>
                      What drives me is the perfect blend of technical problem-solving and creative design. I believe that great software should not only function flawlessly but also delight users with its interface and performance.
                    </p>
                    
                    <p>
                      When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical writing and mentoring.
                    </p>
                  </div>
                  
                  <div className="pt-4">
                    <a 
                      href="#contact" 
                      className="inline-flex items-center px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                    >
                      Get In Touch
                      <FaChevronRight className="ml-2" />
                    </a>
                  </div>
                </motion.div>
              )}
              
              {/* Experience Tab */}
              {activeTab === 'experience' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                      <FaBriefcase className="mr-3 text-blue-500" />
                      Work Experience
                    </h3>
                    <div className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-sm font-medium rounded-full">
                      {timelineItems.length} Positions
                    </div>
                  </div>
                  
                  <div className="space-y-10 relative">
                    {/* Timeline line */}
                    <div className="absolute left-[28px] top-2 bottom-20 w-1 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 rounded-full"></div>
                    
                    {timelineItems.map((item, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="relative pl-16"
                      >
                        {/* Timeline dot */}
                        <div className={`absolute left-0 top-0 w-14 h-14 rounded-xl bg-${item.color}-100 dark:bg-${item.color}-900/30 border-2 border-${item.color}-500 dark:border-${item.color}-400 flex items-center justify-center text-${item.color}-600 dark:text-${item.color}-400 shadow-md`}>
                          <div className="text-center">
                            <span className="block text-xs font-bold">{item.year}</span>
                          </div>
                        </div>
                        
                        {/* Content card */}
                        <motion.div 
                          whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                          className={`bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-lg relative`}
                        >
                          {/* Card header */}
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                            <h4 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h4>
                            <div className="flex items-center mt-2 sm:mt-0">
                              <FaCalendarAlt className="text-gray-400 mr-2" />
                              <span className="text-sm text-gray-500 dark:text-gray-400">{item.year}</span>
                            </div>
                          </div>
                          
                          {/* Company */}
                          <div className="flex items-center mb-4">
                            <div className={`w-8 h-8 rounded-lg bg-${item.color}-100 dark:bg-${item.color}-900/30 flex items-center justify-center mr-3`}>
                              <FaBuilding className={`text-${item.color}-500`} />
                            </div>
                            <span className={`font-medium text-${item.color}-600 dark:text-${item.color}-400`}>{item.company}</span>
                          </div>
                          
                          {/* Description */}
                          <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
                          
                          {/* Skills */}
                          <div className="mb-4">
                            <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Skills & Technologies</div>
                            <div className="flex flex-wrap gap-2">
                              {item.skills.map((skill, i) => (
                                <span 
                                  key={i} 
                                  className={`px-2 py-1 bg-${item.color}-50 dark:bg-${item.color}-900/20 text-${item.color}-600 dark:text-${item.color}-400 text-xs font-medium rounded`}
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          {/* Expand/Collapse button */}
                          <button 
                            onClick={() => toggleExpand(index)}
                            className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                          >
                            {expandedItem === index ? 'Show less' : 'Show achievements'}
                            <FaChevronRight className={`ml-1 transition-transform duration-200 ${expandedItem === index ? 'rotate-90' : ''}`} />
                          </button>
                          
                          {/* Expanded content */}
                          {expandedItem === index && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700"
                            >
                              <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Key Achievements</div>
                              <ul className="space-y-2">
                                {item.achievements.map((achievement, i) => (
                                  <li key={i} className="flex items-start">
                                    <div className={`w-5 h-5 rounded-full bg-${item.color}-100 dark:bg-${item.color}-900/30 flex items-center justify-center text-${item.color}-500 mt-0.5 mr-3 flex-shrink-0`}>
                                      <span className="text-xs">✓</span>
                                    </div>
                                    <span className="text-gray-600 dark:text-gray-300 text-sm">{achievement}</span>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
              
              {/* Education Tab */}
              {activeTab === 'education' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                      <FaGraduationCap className="mr-3 text-purple-500" />
                      Education & Certifications
                    </h3>
                    <div className="px-3 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-sm font-medium rounded-full">
                      {educationItems.length + 3} Credentials
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    {educationItems.map((item, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                        className={`bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-lg overflow-hidden`}
                      >
                        {/* Header */}
                        <div className={`bg-gradient-to-r from-${item.color}-500 to-${item.color}-400 p-5 text-white relative`}>
                          <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mt-10 -mr-10"></div>
                          <div className="flex items-center">
                            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                              <FaUniversity className="text-2xl" />
                            </div>
                            <div>
                              <h4 className="text-xl font-bold">{item.degree}</h4>
                              <div className="flex items-center text-white/80 text-sm">
                                <FaCalendarAlt className="mr-1" />
                                <span>{item.year}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="p-5">
                          <div className="flex items-center mb-4">
                            <div className={`w-8 h-8 rounded-lg bg-${item.color}-100 dark:bg-${item.color}-900/30 flex items-center justify-center mr-3`}>
                              <FaBuilding className={`text-${item.color}-500`} />
                            </div>
                            <span className={`font-medium text-${item.color}-600 dark:text-${item.color}-400`}>{item.institution}</span>
                          </div>
                          
                          <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
                          
                          {/* Courses */}
                          <div className="mb-4">
                            <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Key Courses</div>
                            <div className="grid grid-cols-2 gap-2">
                              {item.courses.map((course, i) => (
                                <div 
                                  key={i}
                                  className="flex items-center"
                                >
                                  <div className={`w-2 h-2 rounded-full bg-${item.color}-500 mr-2`}></div>
                                  <span className="text-gray-600 dark:text-gray-300 text-sm">{course}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          {/* Projects */}
                          <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                            <div className="flex items-center mb-2">
                              <FaLaptop className={`text-${item.color}-500 mr-2`} />
                              <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Notable Project</div>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">{item.projects}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Certifications */}
                  <div className="mt-8">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                      <FaAward className="mr-2 text-amber-500" />
                      Professional Certifications
                    </h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {['AWS Certified Developer', 'Google Cloud Associate', 'Scrum Master Certified'].map((cert, index) => (
                        <motion.div 
                          key={index}
                          whileHover={{ y: -5, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                          className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-md flex flex-col items-center text-center"
                        >
                          <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-3">
                            <FaAward className="text-amber-500" />
                          </div>
                          <h5 className="font-medium text-gray-900 dark:text-white mb-1">{cert}</h5>
                          <p className="text-gray-500 dark:text-gray-400 text-xs">Issued 2022</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 