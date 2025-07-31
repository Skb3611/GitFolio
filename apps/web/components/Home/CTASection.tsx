"use client"
import { Button } from "@workspace/ui/components/button";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import { Marquee } from "@workspace/ui/components/magicui/marquee";
import { ChevronRight, HeartHandshake, ShieldQuestion } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { BorderBeam } from "@workspace/ui/components/magicui/border-beam";
import {motion}from "motion/react"
import { SplitTextAnimation } from "../SplitTextAnimation";
import {ThreeDMarquee } from "@workspace/ui/components/ui/3d-marquee"
interface ImageItemProps {
  img: string;
  gradient: string;
  alt: string;
}

const CTASection = () => {
  // Create consistent chunks for each marquee row
  const firstRow = images.slice(0, Math.ceil(images.length / 3));
  const secondRow = images.slice(Math.ceil(images.length / 3), Math.ceil(images.length * 2 / 3));
  const thirdRow = images.slice(Math.ceil(images.length * 2 / 3));

  return (
    <div className="relative min-h-[70dvh] flex w-full max-w-7xl mx-auto justify-center items-center overflow-hidden py-14 rounded-2xl">
      <div className="absolute inset-0 z-10 h-full w-full bg-black/45 ">
        </div>
<ThreeDMarquee
className="pointer-events-none absolute inset-0 h-full w-full -z-10 opacity-50"
images={images}
/>
      
      
      <div className="w-full  -translate-y-10 flex flex-col justify-center items-center z-10">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.5,
            filter: "blur(8px)"
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)"
          }}
          transition={{
            duration: 0.3,
            delay: 0.2
          }}
          viewport={{ once: true }}
          className="relative mx-auto size-24 rounded-[2rem] border  p-3 shadow-2xl backdrop-blur-md dark:bg-black/10 lg:size-32"
        >
           <div
        className={`pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-neutral-800 via-zinc-700 to-gray-600 opacity-70 blur-[20px] filter`}
      />
          <HeartHandshake className="mx-auto size-16 text-black dark:text-white lg:size-24" />
          <BorderBeam size={100} duration={4} />
        </motion.div>
       
        <SplitTextAnimation
          whileInView
          className="text-2xl sm:text-4xl md:text-6xl text-center mb-2 font-medium"
          delay={0.2}
        >
          What's stopping you now ?
        </SplitTextAnimation>
        
        <AnimatedShinyText>
          <SplitTextAnimation
            className="text-base sm:text-xl md:text-2xl text-center w-full font-medium"
            whileInView
            delay={0.2}
          >
            Let's Make Something Awesome
          </SplitTextAnimation>
        </AnimatedShinyText>
        
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.5,
            filter: "blur(4px)",
            y: 20
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            y: 0
          }}
          transition={{
            duration: 0.3,
          }}
          viewport={{ once: true }}
        >
          <Link href={"/dashboard"}>
            <Button size={"lg"} className="mx-auto mt-4 text-lg px-10 py-6 rounded-full cursor-pointer" variant={"outline"}>
              Get Started <ChevronRight />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default CTASection;
const images=[
  "/assets/desktop-white.png",
  "/assets/desktop-black.png",
  "/assets/not-found.png",
  "/assets/banner.png",
  "/assets/home_page.png",
  
  "/assets/desktop-white.png",
  "/assets/desktop-black.png",
  "/assets/not-found.png",
  "/assets/banner.png",
  "/assets/home_page.png",
  
  "/assets/desktop-white.png",
  "/assets/desktop-black.png",
  "/assets/not-found.png",
  "/assets/banner.png",
  "/assets/home_page.png",
  
  "/assets/desktop-white.png",
  "/assets/desktop-black.png",
  "/assets/not-found.png",
  "/assets/banner.png",
  "/assets/home_page.png",
  
  "/assets/desktop-white.png",
  "/assets/desktop-black.png",
  "/assets/not-found.png",
  "/assets/banner.png",
  "/assets/home_page.png",
  
  "/assets/desktop-white.png",
  "/assets/desktop-black.png",
  "/assets/not-found.png",
  "/assets/banner.png",
  "/assets/home_page.png",
  
]