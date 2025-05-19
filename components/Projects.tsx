'use client';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiMongodb, SiFirebase, SiTypescript, SiRedux } from 'react-icons/si';

const projectsData = [
  {
    title: 'Micro-Frontend Dashboard',
    description: 'A modern enterprise dashboard built using micro-frontend architecture with React and Module Federation. Features independent deployable modules and shared state management.',
    image: '/dashboard.jpg',
    tags: ['React.js', 'Micro-Frontend', 'Module Federation', 'Redux'],
    demoLink: '#',
    githubLink: '#',
    icons: [<FaReact key="react" className="text-[#61DAFB]" />, <SiRedux key="redux" className="text-[#764ABC]" />]
  },
  {
    title: 'Full-Stack E-Commerce Platform',
    description: 'A comprehensive e-commerce solution built with Next.js for the frontend and Node.js/Express.js backend. Includes real-time inventory management and payment processing.',
    image: '/ecommerce.jpg',
    tags: ['Next.js', 'Node.js', 'Express.js', 'MongoDB'],
    demoLink: '#',
    githubLink: '#',
    icons: [<SiNextdotjs key="next" className="text-black dark:text-white" />, <FaNodeJs key="node" className="text-[#8CC84B]" />, <SiMongodb key="mongodb" className="text-[#4DB33D]" />]
  },
  {
    title: 'Real-time Chat Application',
    description: 'A scalable chat application with real-time messaging capabilities, built using React.js for the frontend and Firebase for backend services.',
    image: '/chat-app.jpg',
    tags: ['React.js', 'Firebase', 'WebSocket', 'Real-time DB'],
    demoLink: '#',
    githubLink: '#',
    icons: [<FaReact key="react" className="text-[#61DAFB]" />, <SiFirebase key="firebase" className="text-[#FFCA28]" />]
  },
  {
    title: 'Task Management System',
    description: 'An enterprise task management system with role-based access control, built using Next.js and SQL database for robust data management.',
    image: '/task-app.jpg',
    tags: ['Next.js', 'SQL', 'TypeScript', 'REST API'],
    demoLink: '#',
    githubLink: '#',
    icons: [<SiNextdotjs key="next" className="text-black dark:text-white" />, <SiTypescript key="ts" className="text-[#3178C6]" />]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Showcasing my expertise in full-stack development and micro-frontend architecture
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300"
            >
              <div className="relative h-56 bg-gradient-to-r from-blue-500 to-purple-500 overflow-hidden">
                {/* Add actual images here */}
                <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-white p-4">
                  <div className="flex gap-4 mb-4 text-4xl">
                    {project.icons}
                  </div>
                  <h3 className="text-2xl font-bold text-center">{project.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <motion.a
                    href={project.demoLink}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all shadow-md"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    <span>Live Demo</span>
                  </motion.a>
                  <motion.a
                    href={project.githubLink}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-900 transition-all"
                  >
                    <FaGithub className="text-lg" />
                    <span>GitHub</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-all shadow-md"
          >
            <span>View All Projects</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 