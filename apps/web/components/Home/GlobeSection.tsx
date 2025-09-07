import { useIsMobile } from "@/hooks/use-mobile";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import { Globe } from "@workspace/ui/components/magicui/globe";
import React, { useRef } from "react";
import { useState,useEffect } from "react";

const GlobeSection = () => {
  return (
    <div className=" relative w-full h-96 flex flex-col overflow-hidden p-4 sm:p-8">
      <video
      src={"/assets/globe.mp4"}
      autoPlay
      loop
      muted
      className="absolute top-[50%] left-0 lg:top-[60%] xl:top-[50%]"
      />
      <div className="z-20">
      <h1 className="sm:text-2xl text-xl bg-transparent">Resume That Travels With You</h1>
      <AnimatedShinyText className="text-xs sm:text-base bg-transparent text-left max-w-[100%]">
        Choose a theme, and GitFolio instantly turns your GitHub profile into a
        professional resume—no code, no stress.
        <br />
        Your resume is globally accessible and easy to share with a personal
        link.
      </AnimatedShinyText>
      </div>
    </div>
  );
};

export default GlobeSection;