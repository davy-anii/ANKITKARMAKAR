"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Code, Zap, Award } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-neon-blue)] to-[var(--color-neon-purple)]">Connect</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg">
            I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi,
            I&apos;ll try my best to get back to you!
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-20">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ankit06.karmakar@gmail.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 glass rounded-full hover:bg-white/10 hover:text-[var(--color-neon-blue)] transition-all">
              <Mail size={20} /> <span className="font-medium">Email Me</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 glass rounded-full hover:bg-white/10 hover:text-[#0077b5] transition-all">
              <Linkedin size={20} /> <span className="font-medium">LinkedIn</span>
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 glass rounded-full hover:bg-white/10 hover:text-[var(--color-neon-purple)] transition-all">
              <Github size={20} /> <span className="font-medium">GitHub</span>
            </a>
          </div>

          {/* GitHub Stats Section / Overview Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="glass p-6 rounded-2xl flex flex-col items-center justify-center gap-2 border-t border-[var(--color-neon-blue)]/50">
               <Award className="text-[var(--color-neon-blue)] mb-2" size={32} />
               <span className="text-3xl font-bold text-white">4+</span>
               <span className="text-sm text-gray-400 uppercase tracking-widest text-center">Hackathon Wins</span>
            </div>
            <div className="glass p-6 rounded-2xl flex flex-col items-center justify-center gap-2 border-t border-[var(--color-neon-purple)]/50">
               <Code className="text-[var(--color-neon-purple)] mb-2" size={32} />
               <span className="text-3xl font-bold text-white">10+</span>
               <span className="text-sm text-gray-400 uppercase tracking-widest text-center">Projects Built</span>
            </div>
            <div className="glass p-6 rounded-2xl flex flex-col items-center justify-center gap-2 border-t border-yellow-500/50">
               <Zap className="text-yellow-500 mb-2" size={32} />
               <span className="text-3xl font-bold text-white">Fast</span>
               <span className="text-sm text-gray-400 uppercase tracking-widest text-center">Prototyping Specialist</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
