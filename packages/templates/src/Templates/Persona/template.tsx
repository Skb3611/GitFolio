"use client";
import {
  BriefcaseBusiness,
  Contact as ContactIco,
  House,
  UserRound,
} from "@workspace/ui/icons";
import { Navbar } from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/TechSection";
import ProjectsSection from "./components/ProjectSection";
import Footer from "./components/Footer";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import { DATA } from "@workspace/types";
import { DummyData } from "../dummyData";
const navItems = [
  { name: "Home", link: "#home", icon: <House /> },
  { name: "Work", link: "#work", icon: <BriefcaseBusiness /> },
  { name: "About", link: "#about", icon: <UserRound /> },
  { name: "Experience", link: "#experience", icon: <BriefcaseBusiness /> },
  { name: "Education", link: "#education", icon: <BriefcaseBusiness /> },
  { name: "Contact", link: "#contact", icon: <ContactIco /> },
];
const template = ({ data = DummyData }: { data?: DATA }) => {
  return (
    <main className="antialiased  bg-[#0a0a0a] text-dark-200 dark:text-stone-200 min-h-screen w-full flex flex-col px-5 sm:px-10 relative">
      <div className="max-w-6xl mx-auto w-full">
        <Navbar navItems={navItems} />
        <HeroSection data={data.personalInfo} />
        {data.skills && data.skills.length > 0 && <Skills data={data.skills} />}
        <ProjectsSection data={data.projects} />
        {data.experience && data.experience.length > 0 && (
          <ExperienceSection data={data.experience} />
        )}
        {data.education && data.education.length > 0 && (
          <EducationSection data={data.education} />
        )}
        <Footer socialLinks={data.socialLinks} />
      </div>
    </main>
  );
};

export default template;
