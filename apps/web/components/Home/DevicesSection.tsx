"use client";
import React from "react";
import Android from "@workspace/ui/components/magicui/android";
import Iphone15Pro from "@workspace/ui/components/magicui/iphone-15-pro";
import { Safari } from "@workspace/ui/components/magicui/safari";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import { BorderBeam } from "@workspace/ui/components/magicui/border-beam";
import { Particles } from "@workspace/ui/components/magicui/particles";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Autoplay,
} from "@workspace/ui/components/carousel";
import SectionLabel from "../SectionLabel";
import { TypewriterEffectSmooth } from "@workspace/ui/components/magicui/typewriter-effect";
import {motion} from "motion/react"
import { SplitTextAnimation } from "../SplitTextAnimation";

const DevicesSection = () => {
  return (
    <div className="h-full w-full relative">
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />

      <div className="relative h-full my-10 mx-auto max-w-7xl flex gap-4 justify-center items-center flex-col overflow-hidden">
        <SectionLabel title={"✨ Fully Responsive UI"} />
          <SplitTextAnimation
          whileInView
          delay={0.2}
          staggerDelay={0.08}
          className="w-[90%] mx-auto sm:w-full text-3xl mb-0 text-center font-semibold md:text-6xl"
          >
          Seamless on Every Device
          </SplitTextAnimation>
        
        <AnimatedShinyText className="">
          <SplitTextAnimation
          className="w-[80%] mx-auto md:w-full text-center text-sm md:text-xl   "
          whileInView
          delay={0.2}
          >
          From compact mobiles to widescreen monitors, your portfolio always 
          looks its best.
          </SplitTextAnimation>
        </AnimatedShinyText>

        <div className=" justify-center items-center relative gap-24 w-[90%] mt-10 mx-auto hidden lg:flex">
          <motion.div
          initial={{
            x:-20,
            opacity:0,
            scale:0.9,
            filter:"blur(10px)"
          }}
          whileInView={{
            x:0,
            opacity:1,
            scale:1,
            filter:"blur(0px)"
          }}
          viewport={{once:true}}
          transition={{
            duration:0.4,
            delay:0.4,
          }}

          >
            <Iphone15Pro
              src="/assets/mobileview.png"
              className="w-[90%] h-full"
            />
          </motion.div>
          <motion.div
           initial={{
            x:20,
            opacity:0,
            scale:0.9,
            filter:"blur(10px)"
          }}
          whileInView={{
            x:0,
            opacity:1,
            scale:1,
            filter:"blur(0px)"
          }}
          viewport={{once:true}}
          transition={{
            duration:0.4,
            delay:0.4,
          }}
          >
            <Safari
              height={700}
              imageSrc="/assets/webview.png"
              className="w-[90%] h-[90%]"
              mode="simple"
              url="gitfolio.example"
            />
          </motion.div>
        </div>
        <Carousel
          className="w-full -my-50 z-10 lg:hidden"
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
              stopOnMouseEnter: false,
              // pauseOnVisibilityChange: false,
            }),
          ]}
        >
          <CarouselContent className="w-full">
            <CarouselItem className=" flex justify-center items-center">
              <Iphone15Pro src="/assets/mobileview.png" className="w-[200px]" />
            </CarouselItem>
            <CarouselItem className=" flex justify-center items-center ml-2">
              <Safari
                // height={700}
                imageSrc="/assets/webview.png"
                className="w-[90%] h-[90%]"
                mode="simple"
                url="gitfolio.example"
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default DevicesSection;
