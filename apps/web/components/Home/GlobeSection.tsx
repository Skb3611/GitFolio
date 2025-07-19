import { useIsMobile } from "@/hooks/use-mobile";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import { Globe } from "@workspace/ui/components/magicui/globe";
import React, { useRef } from "react";
import { useState,useEffect } from "react";

const GlobeSection = () => {
  const [isInView, setIsInView] = useState(false);
  const isMobile = useIsMobile()
const ref=useRef<HTMLDivElement>(null)
    useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          // Add a small delay to ensure smooth loading
          setTimeout(() => setIsInView(true), 100);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = ref.current;
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [ref.current]);
  return (
    <div ref={ref} className=" relative w-full h-96 flex flex-col overflow-hidden p-4 sm:p-8">
       {!isInView? (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse" />
      ):
      <Globe className="absolute w-[600px] h-[600px] min-[425px]:w-[500px] min-[425px]:h-[500px] min-[425px]:inset-y-30 lg:inset-y-50
      lg:w-full lg:h-full xl:inset-y-50 inset-y-40  bg-transparent" />
      }
      <div >
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