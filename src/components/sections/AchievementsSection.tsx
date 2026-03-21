"use client";

import { motion } from "framer-motion";
import { Award, Trophy, Star } from "lucide-react";

export default function AchievementsSection() {
  const achievements = [
    { title: "Winner – DoubleSlash 4.0", org: "IEEE Jadavpur University", icon: <Trophy className="text-yellow-400" /> },
    { title: "Winner – NextGen Hacks", org: "Calcutta University", icon: <Trophy className="text-yellow-400" /> },
    { title: "4× Hackathon Winner", org: "Multiple Events", icon: <Award className="text-[var(--color-neon-blue)]" /> },
    { title: "Best App Track", org: "ShowcaseX", icon: <Star className="text-[var(--color-neon-purple)]" /> },
    { title: "GitLinked Certification", org: "RCCTechz", icon: <Award className="text-green-400" /> },
  ];

  return (
    <section id="achievements" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12 flex items-center gap-4">
            <span className="text-[var(--color-neon-blue)]">05.</span> Achievements
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass p-6 rounded-xl flex items-center gap-4 hover:border-[var(--color-neon-blue)]/30 transition-colors cursor-default"
              >
                <div className="p-3 bg-white/5 rounded-full border border-white/10 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.org}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
