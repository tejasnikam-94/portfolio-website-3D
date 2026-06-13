// import Navbar from "@/components/Navbar";
// import Hero from "@/components/Hero";
// import About from "@/components/About";
// import Experience from "@/components/Experience";

// import PatentShowcase from "@/components/PatentShowcase";
// import ResearchTimeline from "@/components/ResearchTimeline";
// import ProjectGallery from "@/components/ProjectGallery";
// import SkillsGalaxy from "@/components/SkillsGalaxy";

// import Footer from "@/components/Footer";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import PatentShowcase from "../components/PatentShowcase";
import ResearchTimeline from "../components/ResearchTimeline";
import ProjectGallery from "../components/ProjectGallery";
import SkillsGalaxy from "../components/SkillsGalaxy";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Experience />

      <PatentShowcase />

      <ResearchTimeline />

      <ProjectGallery />

      <SkillsGalaxy />

      <Footer />
    </>
  );
}