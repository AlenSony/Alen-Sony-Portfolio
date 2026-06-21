"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { name: "Home", href: "#home" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Tech Stack", href: "#tech-stack" },
  { name: "Education", href: "#education" },
];

export default function NavBar() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = links.map((link) => link.href.substring(1));
      let currentSection = "Home";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = links.find((l) => l.href.substring(1) === section)?.name || "Home";
          }
        }
      }
      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, name: string) => {
    e.preventDefault();
    setActive(name);
    setMobileMenuOpen(false); // Close mobile menu on click
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      window.scrollTo({
        top: elem.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-[var(--background)]/70 backdrop-blur-md shadow-sm border-b border-white/20 py-4" : "bg-transparent py-6"
      )}
    >
      <nav className="container mx-auto px-6 md:px-12 flex items-center justify-between md:justify-center relative">
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-2 bg-[var(--background)] neo-shadow-sm rounded-full px-4 py-2 border border-white/40">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleClick(e, link.href, link.name)}
              className={cn(
                "relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200",
                active === link.name ? "text-[var(--accent)]" : "text-gray-600 hover:text-[var(--foreground)]"
              )}
            >
              {active === link.name && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute inset-0 bg-white/60 neo-shadow-pressed-sm rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden w-full justify-end">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-3 rounded-full bg-[var(--background)] neo-shadow text-[var(--accent)]"
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-16 right-6 left-6 bg-[var(--background)] neo-shadow rounded-2xl p-4 flex flex-col space-y-2 border border-white/40 md:hidden"
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href, link.name)}
                className={cn(
                  "px-4 py-3 rounded-xl text-sm font-bold transition-all",
                  active === link.name ? "bg-white/50 text-[var(--accent)] neo-shadow-pressed-sm" : "text-gray-600"
                )}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </nav>
    </header>
  );
}
