import React from "react";
import {
  BentoGrid,
  BentoCard,
} from "@workspace/ui/components/magicui/bento-grid";
import SocialLinks from "./SocialLinks";
import QuickLinks from "./QuickLinks";
import { Ripple } from "@workspace/ui/components/magicui/ripple";
import { Code } from "lucide-react";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import Link from "next/link";
import { config } from "@/config";

const features = [
  {
    name: "",
    description: "",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1 ",
    background: <SocialLinks />,
    direction:"fromLeft",
  },
  {
    name: "",
    description: "",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2 h-full",
    background: <QuickLinks />,
    direction:"fromRight",
  },
  {
    name: "",
    description: "",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-3",
    background: (
      <div className="relative flex flex-col gap-2 justify-center items-center h-full w-full">
        <Ripple />
        <div className="flex items-center space-x-2 lg:space-x-5">
          <div className="w-14 h-14 sm:w-16 sm:h-16 md:h-18 md:w-18 lg:w-24 lg:h-24 rounded-2xl lg:rounded-3xl bg-white flex items-center justify-center">
            <Code className="w-10 h-10 sm:w-12 sm:h-12 md:h-14 md:w-14 lg:w-18 lg:h-18 text-black" />
          </div>
          <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font- text-white bg-clip-text">
            GitFolio
          </span>
        </div>
        <AnimatedShinyText className="text-lg md:text-xl">
          Made by <Link href={config.links.X}>SKB</Link>
        </AnimatedShinyText>
      </div>
    ),
    direction:"fromBottom"
  },
];

const Footer = () => {
  return (
    <div className="relative w-[90%] lg:w-[95%] xl:max-w-7xl mx-auto my-10">
      <BentoGrid className="h-full lg:grid-cols-3 auto-rows-[17.5rem]">
        {features.map((feature, index) => (
          <BentoCard
          initial={cardVariants[feature.direction as keyof typeof cardVariants].initial}
          animate={cardVariants[feature.direction as keyof typeof cardVariants].animate}
          transition={cardVariants[feature.direction as keyof typeof cardVariants].transition}

          key={index} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
};

export default Footer;

const cardVariants = {
  fromLeft:{
    initial:{
      x:-20,
      opacity:0,
      scale:0.9,
    },
    animate:{
      x:0,
      opacity:1,
      scale:1,
    },
    transition:{
      duration:0.4,
      delay:0.3,
      ease:"easeOut"
    }
  },
  fromRight:{
    initial:{
      x:20,
      opacity:0,
      scale:0.9,
    },
    animate:{
      x:0,
      opacity:1,
      scale:1,
    },
    transition:{
      duration:0.4,
      delay:0.3,
      ease:"easeOut"
    }
  },
  fromBottom:{
    initial:{
      y:20,
      opacity:0,
      scale:0.9,
    },
    animate:{
      y:0,
      opacity:1,
      scale:1,
    },
    transition:{
      duration:0.4,
      delay:0.3,
      ease:"easeOut"
    }
  }
}
