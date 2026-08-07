"use client";

import { useEffect, useState } from "react";
import CardNav, { CardNavItem } from "./ui/CardNav";

const links = [
  { name: "Home", href: "#home" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Tech Stack", href: "#tech-stack" },
  { name: "Education", href: "#education" },
];

const navItems: CardNavItem[] = [
  {
    label: "Home",
    bgColor: "#111111",
    textColor: "#ffffff",
    links: [
      { label: "Home", href: "#home", ariaLabel: "Navigate to Home section" },
    ],
  },
  {
    label: "Work",
    bgColor: "#0a0a0a",
    textColor: "#ffffff",
    links: [
      { label: "Experience", href: "#experience", ariaLabel: "Navigate to Experience section" },
      { label: "Projects", href: "#projects", ariaLabel: "Navigate to Projects section" },
      { label: "Tech Stack", href: "#tech-stack", ariaLabel: "Navigate to Tech Stack section" },
    ],
  },
  {
    label: "Education",
    bgColor: "#333333",
    textColor: "#ffffff",
    links: [
      { label: "Education", href: "#education", ariaLabel: "Navigate to Education section" },
    ],
  },
];

export default function NavBar() {
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((link) => link.href.substring(1));
      let currentSection = "Home";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection =
              links.find((l) => l.href.substring(1) === section)?.name || "Home";
          }
        }
      }
      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateTo = (href: string, name?: string) => {
    if (name) setActive(name);
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      window.scrollTo({
        top: elem.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const link = links.find((l) => l.href === href);
    navigateTo(href, link?.name);
  };

  const handleCtaClick = () => {
    navigateTo("#home", "Home");
  };

  return (
    <CardNav
      logoText="Alen Sony"
      items={navItems}
      baseColor="#0a0a0a"
      menuColor="#ffffff"
      buttonBgColor="#ffffff"
      buttonTextColor="#000000"
      ctaLabel={active}
      onCtaClick={handleCtaClick}
      onLinkClick={handleLinkClick}
      activeLink={active}
      ease="power3.out"
    />
  );
}
