import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactModal } from "@/components/modals/ContactModal";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { CodingSection } from "@/components/sections/CodingSection";
import { GithubSection } from "@/components/sections/GithubSection";
import { QuoteSection } from "@/components/sections/QuoteSection";

export default function Portfolio() {
  const [dark, setDark] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <Navbar
        dark={dark}
        onToggleTheme={() => setDark(!dark)}
        onOpenContact={() => setContactOpen(true)}
        onScrollTo={scrollTo}
      />

      <HeroSection
        onViewProjects={() => scrollTo("projects")}
        onOpenContact={() => setContactOpen(true)}
      />

      <AboutSection />

      <EducationSection />

      <TechStackSection />

      <ProjectsSection />

      <CodingSection />

      <GithubSection />

      <QuoteSection />

      <Footer onOpenContact={() => setContactOpen(true)} />

      <ContactModal
        open={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </main>
  );
}
