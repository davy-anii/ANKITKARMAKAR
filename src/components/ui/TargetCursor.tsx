"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

interface TargetCursorProps {
  spinDuration?: number;
  hideDefaultCursor?: boolean;
  parallaxOn?: boolean;
  hoverDuration?: number;
}

export default function TargetCursor({
  spinDuration = 2,
  hideDefaultCursor = false,
  parallaxOn = false, 
  hoverDuration = 0.2,
}: TargetCursorProps) {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Direct values for dot
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring values for outer target (creating a trailing effect)
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Hide default cursor across document
    if (hideDefaultCursor) {
      document.body.style.cursor = 'none';
      const style = document.createElement('style');
      style.innerHTML = `* { cursor: none !important; }`;
      document.head.appendChild(style);
      
      return () => {
        document.body.style.cursor = 'auto';
        document.head.removeChild(style);
      };
    }
  }, [hideDefaultCursor]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  useEffect(() => {
    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    const setupListeners = () => {
      // Find all clickable / interactive elements or specifically those with .cursor-target class
      document.querySelectorAll(".cursor-target, button, a, input, textarea").forEach((el) => {
        el.addEventListener("mouseenter", handleHoverStart);
        el.addEventListener("mouseleave", handleHoverEnd);
      });
    };

    setupListeners();
    // Delayed setup just in case DOM nodes shift / mount after initial render
    const timeout = setTimeout(setupListeners, 500);

    return () => {
      clearTimeout(timeout);
      document.querySelectorAll(".cursor-target, button, a, input, textarea").forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart);
        el.removeEventListener("mouseleave", handleHoverEnd);
      });
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer rotating target shape */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center mix-blend-difference"
        style={{
          x: parallaxOn ? smoothX : cursorX,
          y: parallaxOn ? smoothY : cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          rotate: [0, 360],
          scale: isHovering ? 1.6 : 1,
          opacity: isHovering ? 0.9 : 0.6,
        }}
        transition={{
          rotate: {
            duration: spinDuration,
            ease: "linear",
            repeat: Infinity,
          },
          scale: { duration: hoverDuration },
          opacity: { duration: hoverDuration }
        }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="18" stroke="white" strokeWidth="1.5" strokeDasharray="6 4" />
          <path d="M20 0V8M20 32V40M0 20H8M32 20H40" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </motion.div>

      {/* Inner center dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[10000] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 0 : 1,
          opacity: isHovering ? 0 : 1,
        }}
        transition={{ duration: hoverDuration }}
      />
    </>
  );
}
