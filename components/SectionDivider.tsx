'use client';
import { motion } from 'framer-motion';

interface SectionDividerProps {
  className?: string;
  variant?: 'primary' | 'secondary';
}

const SectionDivider = ({ 
  className = '',
  variant = 'primary'
}: SectionDividerProps) => {
  
  // Colors based on variant
  const colors = {
    primary: {
      line: 'bg-gradient-to-r from-transparent via-blue-500 to-transparent',
      dot: 'bg-blue-500',
      dotSecondary: 'bg-blue-300',
      text: 'text-blue-500 dark:text-blue-400'
    },
    secondary: {
      line: 'bg-gradient-to-r from-transparent via-indigo-500 to-transparent',
      dot: 'bg-indigo-500',
      dotSecondary: 'bg-indigo-300',
      text: 'text-indigo-500 dark:text-indigo-400'
    }
  };
  
  // Get colors for current variant
  const currentColors = colors[variant];
  
  return (
    <div className={`w-full py-12 flex justify-center items-center overflow-hidden ${className}`}>
      <div className="w-full max-w-5xl px-4 relative">
        {/* Main horizontal line */}
        <motion.div 
          className={`h-px ${currentColors.line}`}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: true }}
        />
        
        {/* Center element */}
        <div className="flex justify-center -mt-3">
          <motion.div 
            className="bg-white dark:bg-gray-900 px-6 relative z-10 flex items-center space-x-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Left code brackets */}
            <motion.div
              initial={{ opacity: 0, x: -5 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.7 }}
              viewport={{ once: true }}
              className={`font-mono text-sm ${currentColors.text}`}
            >
              &lt;/&gt;
            </motion.div>
            
            {/* Animated dots */}
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`h-1.5 w-1.5 rounded-full ${i % 2 === 0 ? currentColors.dot : currentColors.dotSecondary}`}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: 0.8 + (i * 0.05),
                    type: "spring",
                    stiffness: 300
                  }}
                  viewport={{ once: true }}
                />
              ))}
            </div>
            
            {/* Right code brackets */}
            <motion.div
              initial={{ opacity: 0, x: 5 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.7 }}
              viewport={{ once: true }}
              className={`font-mono text-sm ${currentColors.text}`}
            >
              &lt;/&gt;
            </motion.div>
          </motion.div>
        </div>
        
        {/* Subtle animated background elements */}
        <div className="absolute inset-0 flex justify-between items-center pointer-events-none">
          <motion.div 
            className={`w-16 h-px ${currentColors.line} opacity-30`}
            initial={{ scaleX: 0, x: -20, opacity: 0 }}
            whileInView={{ scaleX: 1, x: 0, opacity: 0.3 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
          />
          <motion.div 
            className={`w-16 h-px ${currentColors.line} opacity-30`}
            initial={{ scaleX: 0, x: 20, opacity: 0 }}
            whileInView={{ scaleX: 1, x: 0, opacity: 0.3 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionDivider; 