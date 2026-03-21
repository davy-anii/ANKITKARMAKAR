"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Folder } from "lucide-react";

const projects = [
  {
    title: "Smart IoT Automation System",
    description: "Built a comprehensive system to automate real-world devices, providing seamless control and monitoring capabilities.",
    tech: ["IoT", "Firebase", "React Native", "Node.js"],
    github: "#",
    live: "#"
  },
  {
    title: "AI Powered Assistant App",
    description: "Built under 24–36 hours during a hackathon. Features robust AI integration for smart recommendations and real-time functionality.",
    tech: ["Next.js", "OpenAI API", "Tailwind CSS"],
    github: "#",
    live: "#"
  },
  {
    title: "E-Commerce Mobile App",
    description: "A full-scale e-commerce application with real-time inventory management, payment gateway integration, and sleek UI.",
    tech: ["Android (Kotlin)", "Firebase", "Stripe API"],
    github: "#",
    live: "#"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 relative bg-black/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <h2 className="text-3xl md:text-5xl font-bold flex items-center gap-4">
              <span className="text-[var(--color-neon-purple)]">04.</span> Featured Projects
            </h2>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-[var(--color-neon-blue)] hover:underline flex items-center gap-2">
              View full archive <ExternalLink size={16} />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-8 rounded-2xl flex flex-col h-full group hover:-translate-y-2 hover:border-[var(--color-neon-blue)]/50 transition-all duration-300 relative overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-neon-blue)]/0 to-[var(--color-neon-purple)]/0 group-hover:from-[var(--color-neon-blue)]/5 group-hover:to-[var(--color-neon-purple)]/5 transition-colors duration-500" />
                
                <div className="flex justify-between items-center mb-8 relative z-10">
                  <Folder className="text-[var(--color-neon-blue)]" size={40} />
                  <div className="flex gap-4">
                    <a href={project.github} className="text-gray-400 hover:text-[var(--color-neon-purple)] transition-colors" target="_blank" rel="noreferrer">
                      <Github size={22} />
                    </a>
                    <a href={project.live} className="text-gray-400 hover:text-[var(--color-neon-blue)] transition-colors" target="_blank" rel="noreferrer">
                      <ExternalLink size={22} />
                    </a>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10 group-hover:text-[var(--color-neon-blue)] transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-8 flex-grow relative z-10">
                  {project.description}
                </p>
                
                <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-[var(--color-neon-purple)] font-mono relative z-10">
                  {project.tech.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
