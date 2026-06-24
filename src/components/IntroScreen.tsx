import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaUser, FaGithub } from 'react-icons/fa';

export const IntroScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide the intro screen after 4 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // Wait for exit animation to finish
    }, 4000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0d0d14] overflow-hidden"
        >
          {/* Background Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

          {/* Icons container */}
          <div className="flex items-center gap-6 mb-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="p-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_0_20px_rgba(139,92,246,0.15)] text-gray-300"
            >
              <FaCode size={18} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="p-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_0_20px_rgba(139,92,246,0.15)] text-gray-300"
            >
              <FaUser size={18} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="p-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_0_20px_rgba(139,92,246,0.15)] text-gray-300"
            >
              <FaGithub size={18} />
            </motion.div>
          </div>

          {/* Title */}
          <div className="text-center font-bold tracking-wide relative z-10">
            <h1 className="text-3xl md:text-4xl text-white mb-3 flex justify-center flex-wrap">
              {"Welcome To My".split("").map((char, index) => (
                <motion.span 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.05, ease: "easeOut" }}
                  className={char === " " ? "w-2 md:w-3" : ""}
                >
                  {char}
                </motion.span>
              ))}
            </h1>
            <h1 className="text-3xl md:text-4xl flex justify-center flex-wrap">
              {"Portfolio Website".split("").map((char, index) => (
                <motion.span 
                  key={index} 
                  className={`text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 ${char === " " ? "w-2 md:w-3" : ""}`}
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.5, delay: 1.5 + index * 0.05, ease: "easeOut" }}
                >
                  {char}
                </motion.span>
              ))}
            </h1>
          </div>


        </motion.div>
      )}
    </AnimatePresence>
  );
};
