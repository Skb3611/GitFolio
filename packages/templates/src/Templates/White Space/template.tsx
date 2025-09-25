"use client";
import { DATA } from "@workspace/types";
import React, { useEffect } from "react";
import { DummyData } from "../dummyData";
import Hero from "./components/Hero";
import { useTheme } from "next-themes";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

const template = ({ data = DummyData }: { data?: DATA }) => {
  const { setTheme } = useTheme();
  useEffect(() => {
    setTheme("light");
  }, []);
  return (
    <div className="border-b border-l border-r max-w-3xl mx-auto min-h-screen">
      {/* <Navbar personalInfo={data.personalInfo} links={data.socialLinks}/>    */}
      <Hero personalInfo={data.personalInfo} skills={data.skills} />
      {data.projects && data.projects.length > 0 && (
        <>
          <ProjectsSection projects={data.projects} />
          <hr className="mt-30 px-10 w-[80%] mx-auto" />
        </>
      )}
      {data.experience && data.experience.length > 0 && (
        <>
          <ExperienceSection experience={data.experience} />
          <hr className="mt-20 px-10 w-[80%] mx-auto" />
        </>
      )}
      <ContactSection links={data.socialLinks} />
      <hr className="mt-30 px-10 w-[80%] mx-auto" />
      <Footer
        username={
          data.personalInfo.full_name?.split(" ")[0] ??
          data.personalInfo.username
        }
      />
    </div>
  );
};

export default template;
