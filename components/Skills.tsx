'use client';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaCode, FaFire } from 'react-icons/fa';
import { SiNextdotjs, SiExpress, SiMysql } from 'react-icons/si';
import { DiMongodb } from 'react-icons/di';

const skillsData = {
  frontend: [
    { 
      name: 'React.js', 
      level: 90, 
      icon: <div className="bg-[#282c34] p-1.5 rounded-md w-full h-full flex items-center justify-center">
              <FaReact className="text-[#61DAFB] text-4xl" />
            </div> 
    },
    { 
      name: 'Next.js', 
      level: 85, 
      icon: <div className="bg-white dark:bg-black p-1.5 rounded-md w-full h-full flex items-center justify-center">
              <SiNextdotjs className="text-black dark:text-white text-4xl" />
            </div> 
    },
    { 
      name: 'Micro-Frontend Architecture', 
      level: 80, 
      icon: <div className="bg-blue-100 dark:bg-blue-900 p-1.5 rounded-md w-full h-full flex items-center justify-center">
              <FaCode className="text-blue-600 dark:text-blue-300 text-4xl" />
            </div> 
    },
  ],
  backend: [
    { 
      name: 'Node.js', 
      level: 85, 
      icon: <div className="bg-black p-1.5 rounded-md w-full h-full flex items-center justify-center">
              <FaNodeJs className="text-[#8CC84B] text-4xl" />
            </div> 
    },
    { 
      name: 'Express.js', 
      level: 85, 
      icon: <div className="bg-white dark:bg-gray-800 p-1.5 rounded-md w-full h-full flex items-center justify-center">
              <SiExpress className="text-black dark:text-white text-4xl" />
            </div> 
    },
  ],
  database: [
    { 
      name: 'MongoDB', 
      level: 80, 
      icon: <div className="bg-[#023430] p-1.5 rounded-md w-full h-full flex items-center justify-center">
              <DiMongodb className="text-[#3FA037] text-5xl" />
            </div> 
    },
    { 
      name: 'SQL', 
      level: 75, 
      icon: <div className="bg-[#00758F] p-1.5 rounded-md w-full h-full flex items-center justify-center">
              <SiMysql className="text-[#F29111] text-4xl" />
            </div> 
    },
    { 
      name: 'Firebase', 
      level: 80, 
      icon: <div className="bg-[#FFCA28] p-1.5 rounded-md w-full h-full flex items-center justify-center">
              <FaFire className="text-[#F57C00] text-4xl" />
            </div> 
    },
  ]
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-20">
          {/* Frontend Skills */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center justify-center w-14 h-14 bg-blue-100 dark:bg-blue-900/50 rounded-xl shadow-md">
                <FaReact className="text-4xl text-blue-600 dark:text-blue-400" />
              </div>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100"
              >
                Frontend Development
              </motion.h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skillsData.frontend.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 overflow-hidden rounded-lg">
                      {skill.icon}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">{skill.name}</h4>
                  </div>
                  
                  <div className="relative pt-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-100 dark:bg-blue-900/50 dark:text-blue-300">
                          Proficiency
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-blue-600 dark:text-blue-400">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-blue-600 to-blue-400 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      ></motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center justify-center w-14 h-14 bg-green-100 dark:bg-green-900/50 rounded-xl shadow-md">
                <FaNodeJs className="text-4xl text-green-600 dark:text-green-400" />
              </div>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100"
              >
                Backend Development
              </motion.h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skillsData.backend.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 overflow-hidden rounded-lg">
                      {skill.icon}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">{skill.name}</h4>
                  </div>
                  
                  <div className="relative pt-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-100 dark:bg-green-900/50 dark:text-green-300">
                          Proficiency
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-green-600 dark:text-green-400">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-green-600 to-green-400 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      ></motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Database Skills */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center justify-center w-14 h-14 bg-purple-100 dark:bg-purple-900/50 rounded-xl shadow-md">
                <FaDatabase className="text-4xl text-purple-600 dark:text-purple-400" />
              </div>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100"
              >
                Database & Cloud
              </motion.h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skillsData.database.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 overflow-hidden rounded-lg">
                      {skill.icon}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">{skill.name}</h4>
                  </div>
                  
                  <div className="relative pt-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 bg-purple-100 dark:bg-purple-900/50 dark:text-purple-300">
                          Proficiency
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-purple-600 dark:text-purple-400">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-purple-600 to-purple-400 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      ></motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Additional Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="flex items-center gap-3 mb-8 justify-center">
              <div className="flex items-center justify-center w-14 h-14 bg-gray-200 dark:bg-gray-700 rounded-xl shadow-md">
                <FaCode className="text-4xl text-gray-700 dark:text-gray-300" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">Additional Expertise</h3>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'REST APIs',
                'Git & Version Control',
                'Agile Development',
                'CI/CD',
                'Test-Driven Development',
                'Responsive Design',
                'Performance Optimization',
                'Web Security'
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-5 py-2.5 bg-white dark:bg-gray-800 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 text-gray-800 dark:text-gray-200"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 