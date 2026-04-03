import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useDevMode } from '@/contexts/DevModeContext';

export function CustomCursor() {
  const { isDevMode } = useDevMode();
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Mouse position values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Physics configuration differs by mode
  const springConfig = isDevMode 
    ? { stiffness: 800, damping: 25, mass: 0.5 } // Sharp, precise, mechanical
    : { stiffness: 150, damping: 15, mass: 0.1 }; // Smooth, elegant, laggy

  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Define what is "clickable" for the hover state
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  // Don't render cursor on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  // Dual-mode styling objects
  const devModeVariants = {
    default: {
      width: 14,
      height: 24,
      backgroundColor: '#00ff9f',
      border: 'none',
      opacity: isVisible ? 0.9 : 0,
    },
    hover: {
      width: 40,
      height: 40,
      backgroundColor: 'transparent',
      border: '2px solid #00ff9f',
      opacity: isVisible ? 1 : 0,
      borderRadius: '2px'
    }
  };

  const visualModeVariants = {
    default: {
      width: 12,
      height: 12,
      backgroundColor: 'rgb(20, 20, 20)',
      opacity: isVisible ? 0.7 : 0,
      borderRadius: '50%'
    },
    hover: {
      width: 40,
      height: 40,
      backgroundColor: 'rgba(20, 20, 20, 0.1)',
      backdropFilter: 'blur(4px)',
      opacity: isVisible ? 1 : 0,
      borderRadius: '50%',
      border: '1px solid rgba(20, 20, 20, 0.2)'
    }
  };

  const darkVisualModeVariants = {
    default: { ...visualModeVariants.default, backgroundColor: 'rgb(240, 240, 240)' },
    hover: { ...visualModeVariants.hover, backgroundColor: 'rgba(240, 240, 240, 0.1)', border: '1px solid rgba(240, 240, 240, 0.2)' }
  };

  // Select active variant set
  const activeVariants = isDevMode ? devModeVariants : darkVisualModeVariants;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: '-50%',
        translateY: '-50%'
      }}
      variants={activeVariants}
      animate={isHovering ? "hover" : "default"}
      transition={{ duration: isDevMode ? 0.1 : 0.25, ease: "easeOut" }}
    />
  );
}
