"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "./CountUp";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  // Prevent scrolling while loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    // Safety fallback just in case countUp doesn't trigger onEnd
    const safetyTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    
    return () => clearTimeout(safetyTimeout);
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[99999] bg-[#050505] flex flex-col items-center justify-center pointer-events-auto"
        >
          {/* Unique Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-neon-blue)]/5 blur-[120px] rounded-full" />
            <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[var(--color-neon-purple)]/5 blur-[100px] rounded-full" />
            {/* Fine Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_40%,transparent_100%)] opacity-30" />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Glitchy/Neon Pre-loader text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[var(--color-neon-blue)] tracking-[0.4em] text-sm md:text-base font-medium mb-6 uppercase drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]"
            >
              INITIALIZING SYSTEM
            </motion.div>

            {/* Huge Number */}
            <div className="flex items-baseline text-white font-black text-8xl md:text-[10rem] tracking-tighter tabular-nums drop-shadow-[0_0_40px_rgba(255,255,255,0.15)] leading-none">
              <CountUp
                from={0}
                to={100}
                separator=","
                direction="up"
                duration={2.5}
                className="count-up-text"
                startWhen={true}
                onEnd={() => {
                  setTimeout(() => setIsLoading(false), 400); // 400ms pause at 100% before swiping up
                }}
              />
              <span className="text-4xl md:text-6xl text-white/30 ml-2">%</span>
            </div>

            {/* Glowing progress bar */}
            <motion.div 
              className="w-full md:w-[350px] h-[3px] bg-white/5 mt-14 rounded-full overflow-hidden relative shadow-[0_0_15px_rgba(255,255,255,0.1)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div 
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-[var(--color-neon-blue)] via-[var(--color-neon-purple)] to-white rounded-full shadow-[0_0_10px_var(--color-neon-blue)]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.5, ease: "easeOut" }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
