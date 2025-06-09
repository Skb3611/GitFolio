"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@workspace/ui/lib/utils";
import { AnimatedBeam } from "@workspace/ui/components/magicui/animated-beam";
import { ArrowRight, CircleCheckBig, Github, Layout, Palette, ThumbsUp } from "lucide-react";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import Image from "next/image";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-20 items-center justify-center rounded-full border-2 bg-black p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex flex-col w-full h-full items-start justify-center overflow-hidden p-8"
      ref={containerRef}
    >
      <div>
        <h1 className="text-2xl inline-flex gap-1 items-center mb-10">
          How GitFolio Works
        </h1>
      </div>
      <div className="flex size-full flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row justify-center items-baseline gap-10">
          <div className="flex flex-col justify-center items-center">
            <Circle className="mb-4" ref={div1Ref}>
              <Icons.github />
            </Circle>
            <h2 className="text-lg font-medium">Login with Github</h2>
            <AnimatedShinyText className="text-center">
            <span className="text-sm text-center  mx-auto">Connect your GitHub account to sync your repositories.</span>
            </AnimatedShinyText>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Circle className="mb-4" ref={div2Ref}>
              <Icons.theme />
            </Circle>
            <h2 className="text-lg font-medium">Select a Template</h2>
            <AnimatedShinyText className="text-center">
            <span className="text-sm text-center  mx-auto">Choose from our collection of portfolio templates.</span>
            </AnimatedShinyText>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Circle className="mb-4" ref={div3Ref}>
              <Icons.ready />
            </Circle>
            <h2 className="text-lg font-medium">Your Portfolio is Ready</h2>
            <AnimatedShinyText className="text-center">
            <span className="text-sm text-center  mx-auto">Your professional portfolio is live and ready to share.</span>
            </AnimatedShinyText>
          </div>
        </div>
      </div>

      <AnimatedBeam
        duration={3}
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div2Ref}
        curvature={50}
      />
      <AnimatedBeam
        duration={3}
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div3Ref}
        curvature={-50}
      />
    </div>
  );
}

const Icons = {
  github: () => <Image src="/icons/github.png" className="size-10" height={70} width={70} alt="github" />,
  theme: () => <Layout className="text-white size-10" />,
  ready: () => <ThumbsUp className="text-white size-10" />,
};
