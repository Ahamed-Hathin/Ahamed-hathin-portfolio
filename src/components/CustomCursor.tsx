import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Smooth spring configuration for the trailing motion - premium SaaS feel
  const springConfig = { damping: 28, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Disable on mobile/touch devices
    const checkMobile = () => {
      if (window.matchMedia('(max-width: 768px)').matches || 'ontouchstart' in window) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const moveCursor = (e: MouseEvent) => {
      // 16px offset to perfectly center the 32x32px cursor circle
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Identify interactive elements
      const isInteractive = 
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.group\\/badge'); // Add skills badges to interactive elements
        
      setIsHovered(!!isInteractive);
    };

    if (!isMobile) {
      window.addEventListener('mousemove', moveCursor);
      window.addEventListener('mouseover', handleMouseOver);
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, isMobile]);

  if (isMobile) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border-[1.5px] border-[#cf59e6] pointer-events-none z-[10000] hidden md:flex items-center justify-center shadow-sm"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        scale: isHovered ? 1.6 : 1,
        backgroundColor: isHovered ? 'rgba(207, 89, 230, 0.08)' : 'rgba(207, 89, 230, 0)',
      }}
      transition={{ scale: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
    >
      {/* Tiny center dot for precision feeling */}
      <motion.div 
        className="w-1 h-1 bg-[#cf59e6] rounded-full"
        animate={{ opacity: isHovered ? 0 : 1, scale: isHovered ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
}
