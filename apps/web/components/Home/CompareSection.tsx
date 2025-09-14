import React from "react";

import { Marquee } from "@workspace/ui/components/magicui/marquee";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import { div } from "motion/react-client";
import { MessageCircleQuestion, MoveRight } from "lucide-react";
import { cn } from "@workspace/ui/lib/utils";
import { Safari } from "@workspace/ui/components/magicui/safari";
import {
  Autoplay,
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@workspace/ui/components/carousel";
const faqs = [
  {
    question: "How does this platform work?",
    answer:
      "We fetch your public GitHub profile data and automatically turn it into a professional-looking portfolio website—instantly and without any signup.",
    backgroundColor: "#00C9A7",
  },
  {
    question: "Is it safe to use my GitHub link here?",
    answer:
      "Yes, we only access publicly available information from your GitHub profile. No authentication or private data is involved.",
    backgroundColor: "#FFB800",
  },
  {
    question: "Can I customize the generated portfolio?",
    answer:
      "Not yet—but customization options like themes, layout tweaks, and additional sections are in the works.",
    backgroundColor: "#FF3D71",
  },
  {
    question: "Is this affiliated with GitHub?",
    answer:
      "No. This tool is independently built and not officially associated with GitHub Inc.",
    backgroundColor: "#1E86FF",
  },
];

const CompareSection = () => {
  return (
    <div className="relative sm:p-8 p-4">
      <h2 className="text-lg sm:text-2xl mb-5">From GitHub to GitFolio</h2>
      <div className="hidden sm:grid grid-cols-7 items-center justify-center w-full mx-auto">
        <Safari
          className="size-full col-span-3 max-w-xs mx-auto"
          imageSrc="/assets/github.png"
          url="github.com/skb3611"
        />
        <div className="w-full h-full flex justify-center items-center">
          <MoveRight className="size-10" />
        </div>
        <Safari
          className="size-full col-span-3 max-w-xs"
          imageSrc="/assets/desktop-black.png"
          url="skb3611.gitfolio.in"
        />
      </div>
      <Carousel
        className="max-w-sm mx-auto sm:hidden"
        plugins={[
          Autoplay({
            delay: 2000,
            stopOnInteraction: false,
            stopOnMouseEnter: false,
          }),
        ]}
      >
        <CarouselContent className="">
          <CarouselItem>
            <Safari
              className="size-full col-span-3"
              imageSrc="/assets/github.png"
              url="github.com/skb3611"
            />
          </CarouselItem>
          <CarouselItem>
            <Safari
              className="size-full col-span-3"
              imageSrc="/assets/desktop-black.png"
              url="skb3611.gitfolio.in"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CompareSection;

const FaqItem = ({
  faq,
}: {
  faq: {
    index: number;
    question: string;
    answer: string;
    backgroundColor: string;
  };
}) => {
  return (
    <figure
      key={faq.index}
      className={cn(
        "relative mx-auto h-max w-full max-w-full cursor-pointer overflow- rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="h-full flex flex-col items-start">
        <div className="flex h-full justify-center items-center gap-3 mb-3 ">
          <MessageCircleQuestion
            style={{ backgroundColor: faq.backgroundColor }}
            className="rounded-full h-8 w-8 p-1"
          />
          <p className="text-sm sm:text-lg leading-none">{faq.question}</p>
        </div>
        <div className="flex flex-col h-max overflow-">
          <AnimatedShinyText>
            <p className="text-xs font-normal dark:text-white/60">
              {faq.answer}
            </p>
          </AnimatedShinyText>
        </div>
      </div>
    </figure>
  );
};
