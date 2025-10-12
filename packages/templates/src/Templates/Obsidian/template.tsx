"use client";
import React from "react";
import { DummyData } from "../dummyData";
import { DATA } from "@workspace/types";
import Hero from "./components/Hero";
import SocialButtons from "./components/SocialButtons";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/Projects";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";
import { useTheme } from "next-themes";

const template = ({ data = DummyData }: { data?: DATA }) => {
  const { setTheme } = useTheme();
  React.useEffect(() => {
    setTheme("dark");
  }, []);
  return (
    <div className="max-w-xl mx-auto overflow-hidden p-4 ">
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Doto:wght@100..900&family=Figtree:ital,wght@0,300..900;1,300..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap');`}
      </style>
      <Hero data={data.personalInfo} />
      <SocialButtons data={data.socialLinks} />
      {data.skills && <SkillsSection data={data.skills} />}
      {data.projects && <ProjectsSection data={data.projects} />}
      {data.experience && <ExperienceSection data={data.experience} />}
      <Footer username={data.personalInfo.username} />
    </div>
  );
};

export default template;
