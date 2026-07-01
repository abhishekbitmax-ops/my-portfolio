"use client";

import { useEffect } from "react";
import { BackgroundScene } from "./components/BackgroundScene";
import { Footer } from "./components/Footer";
import { MouseGlow } from "./components/MouseGlow";
import { Navbar } from "./components/Navbar";
import { About } from "./sections/About";
import { Achievements } from "./sections/Achievements";
import { Certificates } from "./sections/Certificates";
import { Contact } from "./sections/Contact";
import { Education } from "./sections/Education";
import { Experience } from "./sections/Experience";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";

interface AppProps {
  initialSection?: string;
}

function App({ initialSection }: AppProps) {
  useEffect(() => {
    if (!initialSection) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      document.getElementById(initialSection)?.scrollIntoView({ block: "start" });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [initialSection]);

  const sectionMap = {
    about: <About />,
    skills: <Skills />,
    experience: <Experience />,
    projects: <Projects />,
    certificates: <Certificates />,
    education: <Education />,
    achievements: <Achievements />,
    contact: <Contact />,
  };

  const sectionContent =
    initialSection && initialSection in sectionMap ? (
      <div className="pt-20">
        {sectionMap[initialSection as keyof typeof sectionMap]}
      </div>
    ) : (
      <>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Education />
        <Achievements />
        <Contact />
      </>
    );

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#090909] text-white antialiased">
      <BackgroundScene />
      <MouseGlow />
      <Navbar />
      <main>{sectionContent}</main>
      <Footer />
    </div>
  );
}

export default App;
