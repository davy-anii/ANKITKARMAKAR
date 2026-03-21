"use client";

import { motion } from "framer-motion";
import { Cpu, Smartphone, Sparkles } from "lucide-react";
import ScrollStack, { ScrollStackItem } from "@/components/ui/ScrollStack";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12 flex items-center gap-4">
            <span className="text-[var(--color-neon-blue)]">01.</span> About Me
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                I am an <span className="text-white font-semibold">App &amp; IoT Developer</span> with hands-on experience in building scalable applications and smart systems. Currently working as an App &amp; IoT Associate at <span className="text-[var(--color-neon-purple)] font-medium">RCCTechz</span>, I focus on developing efficient mobile applications and innovative IoT solutions.
              </p>
              <p>
                With a strong foundation in Android development, Firebase, and modern JavaScript frameworks, I enjoy transforming ideas into real-world products. I actively participate in hackathons, where I have secured multiple wins by building impactful solutions under pressure.
              </p>
              <p>
                I am continuously exploring new technologies, including AI, to build smarter, more efficient applications.
              </p>
            </div>

            {/* Visual Cards */}
            <div className="relative w-full h-[460px] rounded-[40px] overflow-hidden bg-white/[0.01] border border-white/5 backdrop-blur-md">
              {/* Atmospheric Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[var(--color-neon-purple)]/10 blur-[100px] rounded-full pointer-events-none" />
              
              <ScrollStack 
                itemDistance={50} 
                itemScale={0.06} 
                itemStackDistance={35}
                blurAmount={3}
                rotationAmount={2}
                onStackComplete={() => {}}
              >
                <ScrollStackItem itemClassName="group bg-[#0f0f13]/90 backdrop-blur-3xl border border-white/10 hover:border-[var(--color-neon-blue)]/50 transition-colors flex flex-col gap-4 overflow-hidden rounded-[2.5rem]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-neon-blue)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="w-12 h-12 rounded-[1.25rem] bg-[var(--color-neon-blue)]/10 border border-[var(--color-neon-blue)]/20 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_var(--color-neon-blue)] transition-all duration-500 z-10">
                    <Smartphone className="text-[var(--color-neon-blue)]" size={24} />
                  </div>
                  <div className="z-10 mt-auto">
                    <h3 className="text-2xl font-bold text-white mb-1.5">App Dev</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">Android, React Native, Next.js building scalable user experiences.</p>
                  </div>
                </ScrollStackItem>
                
                <ScrollStackItem itemClassName="group bg-[#0f0f13]/90 backdrop-blur-3xl border border-white/10 hover:border-[var(--color-neon-purple)]/50 transition-colors flex flex-col gap-4 overflow-hidden rounded-[2.5rem]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-neon-purple)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="w-12 h-12 rounded-[1.25rem] bg-[var(--color-neon-purple)]/10 border border-[var(--color-neon-purple)]/20 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_var(--color-neon-purple)] transition-all duration-500 z-10">
                    <Cpu className="text-[var(--color-neon-purple)]" size={24} />
                  </div>
                  <div className="z-10 mt-auto">
                    <h3 className="text-2xl font-bold text-white mb-1.5">IoT Solutions</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">Bridging the gap between hardware sensors and cloud systems.</p>
                  </div>
                </ScrollStackItem>

                <ScrollStackItem itemClassName="group bg-[#0f0f13]/90 backdrop-blur-3xl border border-white/10 hover:border-yellow-500/50 transition-colors flex flex-col gap-4 overflow-hidden rounded-[2.5rem]">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="w-12 h-12 rounded-[1.25rem] bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.5)] transition-all duration-500 z-10">
                    <Sparkles className="text-yellow-500" size={24} />
                  </div>
                  <div className="z-10 mt-auto">
                    <h3 className="text-2xl font-bold text-white mb-1.5">AI Integration</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">Leveraging Prompting & Automation to craft intelligent features within applications.</p>
                  </div>
                  
                  {/* Shimmer effect inside AI card */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out pointer-events-none" />
                </ScrollStackItem>
              </ScrollStack>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
