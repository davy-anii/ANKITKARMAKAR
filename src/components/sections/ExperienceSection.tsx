"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12 flex items-center gap-4">
            <span className="text-[var(--color-neon-blue)]">03.</span> Experience
          </h2>
          
          <div className="relative border-l border-gray-800 ml-4 md:ml-0 pl-8 md:pl-10">
            {/* Timeline Dot */}
            <div className="absolute w-4 h-4 bg-[var(--color-neon-blue)] rounded-full -left-2 top-1.5 shadow-[0_0_10px_var(--color-neon-blue)]" />
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass p-8 rounded-2xl relative group hover:border-[var(--color-neon-blue)]/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                    App &amp; IoT Associate
                  </h3>
                  <div className="text-xl text-[var(--color-neon-blue)] font-medium mt-1">
                    RCCTechz
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm bg-black/30 px-3 py-1.5 rounded-full w-fit">
                  <Calendar size={14} />
                  <span>Present</span>
                </div>
              </div>
              
              <ul className="space-y-4 mt-6 text-gray-300">
                <li className="flex items-start gap-3">
                  <ChevronRight className="text-[var(--color-neon-purple)] shrink-0 mt-0.5" size={18} />
                  <span>Developing scalable and efficient mobile applications.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="text-[var(--color-neon-purple)] shrink-0 mt-0.5" size={18} />
                  <span>Working on IoT-based real-world solutions bridging hardware and software.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="text-[var(--color-neon-purple)] shrink-0 mt-0.5" size={18} />
                  <span>Collaborating in technical teams to design, iterate, and ship products effectively.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
