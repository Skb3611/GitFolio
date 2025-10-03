"use client";
import React, { useEffect } from "react";
import { Header } from "./components/Header";
import { cn } from "@workspace/ui/lib/utils";
import ProfileCover from "./components/ProfileCover";
import { DummyData } from "../dummyData";
import { DATA } from "@workspace/types";
import { ProfileHeader } from "./components/ProfileHeader";
import { Overview } from "./components/Overview";
import { SocialLinksSection } from "./components/SocialLinks";
import { TeckStack } from "./components/TechStack";
import { ProjectSection } from "./components/Projects";
import { Experiences } from "./components/Experience";
import { SiteFooter } from "./components/Footer";
import { GitHubContributions } from "./components/GitHubContributions";
import { useTheme } from "next-themes";
const template = ({ data = DummyData }: { data?: DATA }) => {
  const { setTheme } = useTheme();
  useEffect(() => {
    setTheme("dark");
  }, []);
  return (
    <div>
      <Header name={data.personalInfo.full_name} />
      <main className="max-w-screen overflow-x-hidden px-2">
        <div className="mx-auto md:max-w-3xl">
          <ProfileCover name={data.personalInfo.full_name} />
          <ProfileHeader data={data.personalInfo} />
          <Separator />
          <Overview data={data.personalInfo} />
          <Separator />
          {data.skills.length > 0 && (
            <>
              <TeckStack skills={data.skills} />
              <Separator />
            </>
          )}
          <GitHubContributions username={data.personalInfo.username} />
          <Separator />
          {data.projects.length > 0 && (
            <>
              <ProjectSection projects={data.projects} />
              <Separator />
            </>
          )}
          {data.experience.length > 0 && (
            <>
              <Experiences experiences={data.experience} />
              <Separator />
            </>
          )}
          <SocialLinksSection data={data.socialLinks} />
          <Separator />

          {/*
           */}
          <SiteFooter username={data.personalInfo.username} />
        </div>
      </main>
    </div>
  );
};
function Separator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-8 w-full border-x border-edge",
        "before:absolute before:-left-[100vw] before:-z-1 before:h-8 before:w-[200vw]",
        "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56",
        className
      )}
    />
  );
}
export default template;
