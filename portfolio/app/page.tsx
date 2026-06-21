import HomeSection from "@/components/sections/HomeSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import TechStackSection from "@/components/sections/TechStackSection";
import EducationSection from "@/components/sections/EducationSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HomeSection />
      <ExperienceSection />
      <ProjectsSection />
      <TechStackSection />
      <EducationSection />
    </div>
  );
}
