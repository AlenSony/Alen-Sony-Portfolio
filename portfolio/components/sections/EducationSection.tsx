"use client";

import { motion } from "framer-motion";
import { BookOpen, Calendar, GraduationCap, MapPin } from "lucide-react";

const educationData = {
  degree: "Bachelor of Technology",
  institution: "College of Engineering, Chengannur",
  duration: "2023 - 2027",
  coursework: [
    "Data Structures",
    "Algorithms",
    "Database Management Systems",
    "Web Technologies",
    "Systems Programming",
    "Network Protocols"
  ]
};

export default function EducationSection() {
  return (
    <section id="education" className="py-24 px-6 bg-[var(--background)] relative overflow-hidden">
      <div className="container mx-auto max-w-4xl relative">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20 relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] tracking-tight">Education</h2>
          <p className="mt-4 text-lg text-gray-600">Academic Foundation & Core Competencies</p>
        </motion.div>

        {/* Timeline Graphic Layout Wrapper */}
        <div className="relative pl-6 md:pl-12 border-l border-gray-300/40 ml-4 md:ml-8">
          
          {/* Timeline Node Point Indicator */}
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-[var(--background)] neo-shadow flex items-center justify-center border border-[var(--accent)]/20 z-20"
          >
            <GraduationCap size={16} className="text-[var(--accent)]" />
          </motion.div>

          {/* Main Card Element */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 80 }}
            className="p-8 md:p-10 rounded-3xl bg-[var(--background)] neo-shadow neo-shadow-hover relative overflow-hidden group"
          >
            {/* Soft Hover Overlay Effect */}
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl z-0 pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col gap-6">
              
              {/* Card Header Information block */}
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold tracking-wider text-[var(--accent)] uppercase rounded-full bg-[var(--background)] neo-shadow-pressed-sm mb-4">
                  Undergraduate Program
                </span>
                
                <h3 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] tracking-tight leading-snug mb-2">
                  {educationData.degree}
                </h3>
                
                <h4 className="text-gray-700 font-semibold text-lg flex items-center gap-2">
                  <MapPin size={18} className="text-gray-400 shrink-0" />
                  {educationData.institution}
                </h4>
              </div>

              {/* Timeframe Metadata Row */}
              <div className="flex items-center gap-2 text-gray-500 font-medium text-sm">
                <Calendar size={16} className="text-gray-400" />
                <span className="tracking-wide">{educationData.duration}</span>
              </div>

              <hr className="border-gray-300/30 my-2" />

              {/* Key Competencies Component Layout */}
              <div>
                <h5 className="text-sm font-bold text-[var(--foreground)] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <BookOpen size={16} className="text-[var(--accent)]" />
                  Core Coursework
                </h5>
                
                <div className="flex flex-wrap gap-2.5">
                  {educationData.coursework.map((course, idx) => (
                    <span 
                      key={idx} 
                      className="px-4 py-2 text-xs font-semibold rounded-full bg-[var(--background)] neo-shadow-pressed-sm text-gray-600 transition-colors duration-200 hover:text-[var(--accent)]"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}