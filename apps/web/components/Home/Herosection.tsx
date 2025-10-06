"use client";
import { AnimatedGridPattern } from "@workspace/ui/components/magicui/animated-grid-pattern";
import { cn } from "@workspace/ui/lib/utils";
import React from "react";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import { ChevronRight } from "lucide-react";
import { Button } from "@workspace/ui/components/button";
import Link from "next/link";
import SectionLabel from "@workspace/ui/components/SectionLabel";
import { motion } from "motion/react";
import { SplitTextAnimation } from "../SplitTextAnimation";
import AnimatedScrollSection from "./AnimatedScrollSection";

const HeroSection = () => {
  return (
    <div
      id="home"
      className="relative min-h-screen flex flex-col  w-full  bg-background md:p-20 p-4"
    >
      <AnimatedGridPattern
        height={50}
        width={50}
        numSquares={30}
        maxOpacity={0.3}
        duration={3}
        repeatDelay={1}
        className={cn(
          "max-h-screen md:[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] [mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
          "inset-x-0 h-[200%] skew-y-12"
        )}
      />
      <main className="flex flex-col mx-auto min-w-full lg:max-w-[85%] justify-center items-center md:mt-20 mt-30">
        <Link href={"/templates/pixel-perfect"}>
          <SectionLabel badge="New" title={"Template Pixel Perfect ✨"} />
        </Link>
        <SplitTextAnimation
          highlightWord="Seconds"
          className="md:text-7xl text-3xl font-semibold text-center mb-5 "
        >
          Turn Your GitHub Into a Personal Portfolio in Seconds
        </SplitTextAnimation>
        <AnimatedShinyText>
          <SplitTextAnimation
            delay={0.5}
            className="md:text-xl text-sm text-center max-w-2xl"
          >
            Your GitHub already tells your story — now turn it into a personal
            site that speaks for itself.
          </SplitTextAnimation>
        </AnimatedShinyText>
        <div className="md:space-x-5 mt-10 flex flex-col md:flex-row gap-1.5 justify-center items-center z-20">
          <motion.div
            variants={buttonVariants.fromLeft}
            initial="initial"
            animate="animate"
          >
            <Link href={"/dashboard"}>
              <Button
                className="bg-white hover:bg-white/70 cursor-pointer text-black  rounded-full py-7 p-4 px-8 text-base "
                size={"lg"}
              >
                Get Started
                <ChevronRight className="h-10 w-10" />
              </Button>
            </Link>
          </motion.div>
          <motion.div
            variants={buttonVariants.fromRight}
            initial="initial"
            animate="animate"
          >
            <Link href={"/templates"}>
              <Button className="text-white cursor-pointer" variant={"link"}>
                Browse Templates
                <ChevronRight className="h-10 w-10" />
              </Button>
            </Link>
          </motion.div>
        </div>
        <AnimatedScrollSection />
      </main>
    </div>
  );
};

export default HeroSection;

const buttonVariants = {
  fromLeft: {
    initial: {
      x: -20,
      opacity: 0,
      filter: "blur(10px)",
    },
    animate: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.4,
        delay: 0.2,
      },
    },
  },
  fromRight: {
    initial: {
      x: 20,
      opacity: 0,
      filter: "blur(10px)",
    },
    animate: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.4,
        delay: 0.2,
      },
    },
  },
};
