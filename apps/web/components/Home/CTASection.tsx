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
interface ImageItemProps {
  img: string;
  gradient: string;
  alt: string;
}

const CTASection = () => {
  return (
    <div className="relative flex w-full justify-center items-center overflow-hidden py-14">
      <div className="opacity-60">
        <Marquee className="[--duration:15s]">
          {images.map((item, idx) => (
            <ImageItem key={idx} item={item} idx={idx} />
          ))}
        </Marquee>
        <Marquee reverse className="[--duration:20s]">
          {images.map((item, idx) => (
            <ImageItem key={idx} item={item} idx={idx} />
          ))}
        </Marquee>
        <Marquee className="[--duration:30s]">
          {images.map((item, idx) => (
            <ImageItem key={idx} item={item} idx={idx} />
          ))}
        </Marquee>
        <Marquee reverse className="[--duration:35s]">
          {images.map((item, idx) => (
            <ImageItem key={idx} item={item} idx={idx} />
          ))}
        </Marquee>
        <Marquee>
          {images.map((item, idx) => (
            <ImageItem key={idx} item={item} idx={idx} />
          ))}
        </Marquee>
        <Marquee reverse>
          {images.map((item, idx) => (
            <ImageItem key={idx} item={item} idx={idx} />
          ))}
        </Marquee>
        <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-transparent to-background to-70% dark:to-background"></div>
          </div>
      <div className="w-full absolute -translate-y-10 flex flex-col justify-center items-center">
      <motion.div
      initial={{
        opacity:0,
        scale:0.5,
        filter:"blur(8px)"
      }}
      whileInView={{
        opacity:1,
        scale:1,
        filter:"blur(0px)"
      }}
      transition={{
        duration:0.3,
        delay:0.2
      }}
      viewport={{once:true}}
      className="relative mx-auto size-24 rounded-[2rem] border bg-white/10 p-3 shadow-2xl backdrop-blur-md dark:bg-black/10 lg:size-32">
                <HeartHandshake className="mx-auto size-16 text-black dark:text-white lg:size-24" />
                <BorderBeam size={100} duration={4}/>
              </motion.div>
       
          <SplitTextAnimation
          whileInView
          className="text-2xl sm:text-4xl md:text-6xl text-center mb-2"
          delay={0.2}
          >
          What's stopping you now ?
          </SplitTextAnimation>
        <AnimatedShinyText>
          <SplitTextAnimation
          className="text-base sm:text-xl  md:text-2xl text-center w-full"
          whileInView
          delay={0.2}
          >
            Let's Make Something Awesome
          </SplitTextAnimation>
        </AnimatedShinyText>
        <motion.div
        initial={{
          opacity:0,
          scale:0.5,
          filter:"blur(4px)",
          y:20
        }}
        whileInView={{
          opacity:1,
          scale:1,
          filter:"blur(0px)",
          y:0
        }}
        transition={{
          duration:0.3,
        }}
        viewport={{once:true}}
        >
        <Link href={"/dashboard"}>
          <Button size={"lg"} className=" mx-auto mt-4 text-lg px-10 py-6 rounded-full cursor-pointer " variant={"outline"}>
            Get Started <ChevronRight />
          </Button>
        </Link>
        </motion.div>
        
      </div>
    </div>
  );
};

export default CTASection;

const ImageItem = ({ item, idx }: { item: ImageItemProps; idx: number }) => {
  const isMobile = useIsMobile()

  return (
    <div
      key={idx}
      className="relative size-12 sm:size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:bg-transparent dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] hover:scale-105 transition-transform duration-200"
    >
      <Image
        src={item.img}
        alt={item.alt}
        width={isMobile?30:50}
        height={isMobile?30:50}
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <div
        className={`pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r ${item.gradient} opacity-70 blur-[20px] filter`}
      />
    </div>
  );
};

const images: ImageItemProps[] = [
  {
    img: "/icons/clerk.png",
    gradient: "from-fuchsia-500 via-purple-500 to-indigo-600",
    alt: "clerk",
  },
  {
    img: "/icons/express.png",
    gradient: "from-neutral-600 via-zinc-700 to-gray-800",
    alt: "express",
  },
  {
    img: "/icons/firebase.png",
    gradient: "from-yellow-400 via-orange-500 to-amber-600",
    alt: "firebase",
  },
  {
    img: "/icons/github.png",
    gradient: "from-gray-300 via-gray-500 to-gray-700",
    alt: "github",
  },
  {
    img: "/icons/magicui.png",
    gradient: "from-pink-500 via-rose-500 to-red-500",
    alt: "magicui",
  },
  {
    img: "/icons/mongo.png",
    gradient: "from-green-400 via-emerald-500 to-teal-600",
    alt: "mongo",
  },
  {
    img: "/icons/nextjs.png",
    gradient: "from-neutral-800 via-zinc-700 to-gray-600",
    alt: "nextjs",
  },
  {
    img: "/icons/node.png",
    gradient: "from-lime-400 via-green-500 to-emerald-600",
    alt: "node",
  },
  {
    img: "/icons/prisma.png",
    gradient: "from-teal-400 via-cyan-500 to-emerald-500",
    alt: "prisma",
  },
  {
    img: "/icons/react.png",
    gradient: "from-cyan-400 via-blue-500 to-indigo-500",
    alt: "react",
  },
  {
    img: "/icons/shadcn.png",
    gradient: "from-sky-500 via-blue-600 to-indigo-700",
    alt: "shadcn",
  },
  {
    img: "/icons/tailwind.png",
    gradient: "from-cyan-400 via-teal-500 to-blue-500",
    alt: "tailwind",
  },
  {
    img: "/icons/turborepo.png",
    gradient: "from-orange-400 via-amber-500 to-yellow-500",
    alt: "turborepo",
  },
  {
    img: "/icons/vite.svg",
    gradient: "from-purple-500 via-violet-500 to-yellow-400",
    alt: "vite",
  },
  {
    img: "/icons/vue.png",
    gradient: "from-emerald-400 via-green-500 to-lime-500",
    alt: "vue",
  },
];
