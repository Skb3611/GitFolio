"use client";
import { DATA } from "@workspace/types";
import { DummyData } from "../dummyData";
import ProfileSection from "./components/ProfileSection";
import SkillsSection from "./components/SkillsSection";
import { useEffect } from "react";
import { useTheme } from "next-themes";
import ProjectsSection from "./components/ProjectsSection";
import SocialSection from "./components/SocialSection";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";
import { ModeToggle } from "../components/mode-toggle";
import UserLocalTime from "../components/UserTime";

const template = ({ data = DummyData }: { data?: DATA }) => {
  const { setTheme } = useTheme();
  useEffect(() => {
    setTheme("light");
  }, []);
  const { time, zone } = UserLocalTime();
  return (
    <>
      <div className="absolute top-2 flex items-center w-full justify-between px-5">
        <div className="text-sm text-muted-foreground font-architects_daughter">
          {time} {data.personalInfo.location || zone}
        </div>
        <ModeToggle />
      </div>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap');`}
      </style>
      <div className="max-w-3xl mx-auto mt-30 mb-10 px-5 sm:px-10 font-architects_daughter space-y-20 dark:bg-[oklch(0.21 0 0)]">
        <ProfileSection data={data.personalInfo} />
        <SocialSection data={data.socialLinks} />
        {data.skills && data.skills.length > 0 && (
          <SkillsSection data={data.skills} />
        )}
        {data.projects && data.projects.length > 0 && (
          <ProjectsSection data={data.projects} />
        )}
        {data.experience && data.experience.length > 0 && (
          <ExperienceSection data={data.experience} />
        )}
        <Footer username={data.personalInfo.username} />
      </div>
    </>
  );
};

export default template;
