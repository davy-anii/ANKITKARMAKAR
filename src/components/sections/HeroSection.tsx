"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal, Trophy, MapPin } from "lucide-react";
import ProfileCard from "@/components/ui/ProfileCard";

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-24 pb-12 relative px-6 overflow-hidden">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-10">
          
          {/* Open to Work Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--color-neon-blue)]/50 bg-[var(--color-neon-blue)]/10 text-[var(--color-neon-blue)] text-sm font-medium mb-8"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-neon-blue)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--color-neon-blue)]"></span>
            </span>
            Open to Work
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4"
          >
            Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-neon-blue)] to-[var(--color-neon-purple)]">Ankit Karmakar</span>
          </motion.h1>

          {/* Role */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-2xl md:text-3xl text-gray-300 font-medium mb-6 flex items-center justify-center lg:justify-start gap-3 flex-wrap"
          >
            <Terminal className="text-[var(--color-neon-purple)]" />
            App &amp; IoT Developer
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mb-8"
          >
            &quot;Building scalable apps &amp; intelligent IoT solutions with real-world impact.&quot;
          </motion.p>

          {/* Location */}
          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.5, delay: 0.5 }}
             className="flex items-center gap-2 text-gray-400 mb-10"
          >
            <MapPin size={18} className="text-[var(--color-neon-blue)]" />
            Kolkata, India
          </motion.div>

          {/* Achievements Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10 w-full"
          >
            {[
              "4× Hackathon Winner",
              "DoubleSlash 4.0",
              "NextGen Hacks"
            ].map((achievement, i) => (
              <div key={i} className="glass rounded-xl p-3 flex items-center justify-center lg:justify-start gap-2 hover:border-[var(--color-neon-purple)]/50 transition-colors">
                <Trophy className="text-[var(--color-neon-purple)] shrink-0" size={16} />
                <span className="font-semibold text-gray-200 text-sm whitespace-nowrap">{achievement}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start"
          >
            <a
              href="#projects"
              className="cursor-target flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[var(--color-neon-purple)] text-white font-bold text-base hover:scale-105 transition-transform shadow-[0_0_20px_rgba(138,43,226,0.4)]"
            >
              View My Work <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="cursor-target flex items-center justify-center px-8 py-4 rounded-full border border-gray-600 text-gray-300 font-bold text-base hover:bg-gray-800 hover:text-white transition-colors"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Right Content - 3D Tilt Profile Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center items-center mt-12 lg:mt-0 z-10 w-full"
        >
          <ProfileCard
            name="Ankit Karmakar"
            title="App &amp; IoT Developer"
            handle="ankitcodes"
            status="Online"
            contactText="Hire Me"
            avatarUrl="https://i.postimg.cc/y8J30VFX/Whats-App-Image-2026-03-19-at-21-21-50.jpg"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            behindGlowEnabled={true}
            behindGlowColor="rgba(0, 240, 255, 0.5)"
            innerGradient="linear-gradient(145deg, rgba(16,16,26,0.9) 0%, rgba(30,30,50,0.6) 100%)"
            onContactClick={() => {
              window.location.href = "#contact";
            }}
          />
        </motion.div>

      </div>
    </section>
  );
}
