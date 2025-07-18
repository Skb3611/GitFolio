"use client";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import { BorderBeam } from "@workspace/ui/components/magicui/border-beam";
import { cn } from "@workspace/ui/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { motion } from "motion/react";

const SectionLabel = ({ title }: { title: string }) => {
  return (
    <motion.div
      initial={{
        y:-20,
        opacity: 0,
        scale:0.8,
        filter: "blur(10px)",
      }}
      whileInView={{
        y:0,
        opacity: 1,
        scale:1,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.5,
      }}
      viewport={{once:true}}
      className={cn(
        "relative w-max mx-auto group rounded-full border border-black/5 bg-neutral-100 text-base text-white hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800 mb-5"
      )}
    >
      <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 text-xs lg:text-base">
        <span>{title}</span>
        {/* <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" /> */}
      </AnimatedShinyText>
      <BorderBeam />
    </motion.div>
  );
};

export default SectionLabel;
