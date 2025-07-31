"use client";

import React, { forwardRef, useEffect, useRef, useState } from "react";

import { cn } from "@workspace/ui/lib/utils";
import { AnimatedBeam } from "@workspace/ui/components/magicui/animated-beam";
import { ArrowRight, CircleCheckBig, Github, Layout, Palette, ThumbsUp } from "lucide-react";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import Image from "next/image";
import { BorderBeam } from "@workspace/ui/components/magicui/border-beam";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode,initialOff?:number }
>(({ className, children,initialOff }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "relative z-10 flex size-12 sm:size-20 items-center justify-center rounded-full border-2 bg-black p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
      <BorderBeam initialOffset={initialOff} />
    </div>
  );
});

Circle.displayName = "Circle";

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
const [visible, setVisible] = useState(false);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) setVisible(true);
    },
    { threshold: 0.3 }
  );

  if (containerRef.current) {
    observer.observe(containerRef.current);
  }

  return () => {
    if (containerRef.current) observer.unobserve(containerRef.current);
  };
}, []);



  return (
    <div
      className="relative flex flex-col w-full h-full items-start justify-center overflow-hidden sm:p-8 p-4"
      ref={containerRef}
    >
      <div className="w-full">
        <h1 className="sm:text-2xl text-xl text-left w-full sm:mb-10 mb-2">
          How GitFolio Works
        </h1>
      </div>
      <div className="flex size-full flex-col items-stretch justify-between gap-10">
        <div className="flex flex-col sm:flex-row justify-center items-baseline sm:gap-10 gap-2">
          <div className="flex flex-row-reverse sm:flex-col justify-between sm:justify-center items-center gap-4 w-full">
            <Circle className="mb-4" ref={div1Ref} >
              <Icons.github />
            </Circle>
            <div className=" flex flex-col w-full items-start sm:items-center">

            <h2 className="text-sm sm:text-lg font-medium text-center">Login with Github</h2>
            <AnimatedShinyText className="max-w-full mx-0 sm:text-center ">
            <span className="text-xs sm:text-sm   sm:w-full   mx-auto">Connect your GitHub account to sync your repositories.</span>
            </AnimatedShinyText>
            </div>
          </div>
          <div className="flex flex-row-reverse sm:flex-col justify-between sm:justify-center items-center gap-4 w-full">
            <Circle className="mb-4" ref={div2Ref} initialOff={50} >
              <Icons.theme />
            </Circle>
            <div className=" flex flex-col w-full items-start sm:items-center">

            <h2 className="text-sm sm:text-lg font-medium text-center">Select a Template</h2>
            <AnimatedShinyText className="max-w-full mx-0 sm:text-center ">
            <span className="text-xs sm:text-sm   sm:w-full   mx-auto">Choose from our collection of portfolio templates.</span>
            </AnimatedShinyText>
            </div>
          </div>
          <div className="flex flex-row-reverse sm:flex-col justify-between sm:justify-center items-center gap-4 w-full">
            <Circle className="mb-4" ref={div3Ref}>
              <Icons.ready />
            </Circle>
            <div className=" flex flex-col w-full items-start sm:items-center">

            <h2 className="text-sm sm:text-lg font-medium text-center">Your Portfolio is Ready</h2>
            <AnimatedShinyText className="max-w-full mx-0 sm:text-center ">
            <span className="text-xs sm:text-sm   sm:w-full    mx-auto">Your professional portfolio is live and ready to share.</span>
            </AnimatedShinyText>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Icons = {
  github: () => <Image src="/icons/github.png" className=" size-5 sm:size-10" height={70} width={70} alt="github" />,
  theme: () => <Layout className="text-white  size-5 sm:size-10" />,
  ready: () => <ThumbsUp className="text-white  size-5 sm:size-10" />,
};
