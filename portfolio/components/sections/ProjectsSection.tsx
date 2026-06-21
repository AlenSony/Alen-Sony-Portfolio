"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "AI-Powered Multi-Agent Logistics Management & Route Optimization Platform",
    description: "An advanced backend system utilizing a multi-agent framework to solve complex logistics problems, automate workflows, and handle intelligent routing.",
    tags: ["Python", "Multi-Agent Systems", "AI", "Route Optimization"],
  },
  {
    title: "RailSeat / Interactive Train Booking System",
    description: "Features an interactive real-time seat configuration map, auto-generation booking algorithm, pdfkit pipelines, and secure Razorpay integration.",
    tags: ["React", "Express.js", "Razorpay", "PDFKit"],
  },
  {
    title: "PharmaNear / Local Inventory Tracker",
    description: "Built a dual-interface real-time medicine locator that maps physical stock distributions directly onto client maps with low-latency spatial routing logic.",
    tags: ["Node.js", "MongoDB", "Maps API", "WebSockets"],
  },
  {
    title: "Novara / Consumer Tech E-Commerce Platform",
    description: "Built a modern tech e-commerce experience implementing JWT session authorization and Bcrypt credential hashing.",
    tags: ["Next.js", "JWT", "Bcrypt", "PostgreSQL"],
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1 }}
      className={`rounded-2xl md:rounded-3xl bg-[var(--background)] neo-shadow flex flex-col group relative overflow-hidden`}
    >
      {/* Code Editor Window Header */}
      <div className="flex items-center space-x-2 px-4 md:px-6 py-3 md:py-4 border-b border-[#d1c9bf] bg-white/30">
        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-teal-400 neo-shadow-pressed-sm"></div>
        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-orange-400 neo-shadow-pressed-sm"></div>
        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-indigo-400 neo-shadow-pressed-sm"></div>
      </div>
      
      {/* Main Body */}
      <div className="p-6 md:p-8 relative flex-1 flex flex-col h-full mt-2 md:mt-4">
         <div className="relative z-10">
           <h3 className="text-xl md:text-2xl font-bold text-[var(--foreground)] mb-3 md:mb-4 w-full md:w-4/5">{project.title}</h3>
           <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6 md:mb-8">{project.description}</p>
         </div>
         
         <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
           {project.tags.map((tag: string, tagIndex: number) => (
             <span 
               key={tagIndex} 
               className="px-3 md:px-4 py-1.5 md:py-2 text-[10px] md:text-xs font-semibold rounded-full bg-[var(--background)] neo-shadow-pressed-sm text-[var(--accent)]"
             >
               {tag}
             </span>
           ))}
         </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 px-4 md:px-6 bg-[var(--background)] relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--foreground)] tracking-tight">Projects</h2>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-gray-600">Selected Works in Software Engineering</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 auto-rows-min">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
