"use client";
import React from "react";
import Iphone15Pro from "@workspace/ui/components/magicui/iphone-15-pro";
import { Safari } from "@workspace/ui/components/magicui/safari";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import Android from "@workspace/ui/components/magicui/android";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  Autoplay,
} from "@workspace/ui/components/carousel";
import SectionLabel from "@workspace/ui/components/SectionLabel";

import { motion } from "motion/react";
import { SplitTextAnimation } from "../SplitTextAnimation";
import { useIsMobile } from "@/hooks/use-mobile";
const DevicesSection = () => {
  const isMobile = useIsMobile();
  const mobileUrl = isMobile
    ? "https://pub-7e33da773f24477fad91084ffacf40cb.r2.dev/templates/devpro/preview/mobile-light.png"
    : "https://pub-7e33da773f24477fad91084ffacf40cb.r2.dev/templates/black-white/preview/mobile-light.png";
  const desktopUrl =
    "https://pub-7e33da773f24477fad91084ffacf40cb.r2.dev/templates/devpro/preview/desktop-light.png";
  return (
    <div className="h-full w-full relative">
      {/* <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      /> */}

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

        <div className="relative max-w-4xl xl:max-w-6xl mt-10 mx-auto hidden lg:grid grid-cols-3 gap-5 place-items-center">
          <motion.div
            className="col-span-1 flex justify-center"
            initial={{
              x: -50,
              opacity: 0,
              scale: 0.9,
              filter: "blur(5px)",
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: 0.3,
            }}
          >
            <Iphone15Pro src={mobileUrl} className=" w-2/3 h-full " />
          </motion.div>
          <motion.div
            className="col-span-2 relative place-content-center"
            initial={{
              x: 50,
              opacity: 0,
              scale: 0.9,
              filter: "blur(5px)",
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: 0.3,
            }}
          >
            <Safari
              height={650}
              imageSrc={desktopUrl}
              className="w-full h-full rounded-b-lg"
              mode="simple"
              url="gitfolio.example"
            />
          </motion.div>
        </div>
        <Carousel
          className="w-full mx-auto -my-40 min-[375px]:-my-20  min-[480px]:my-0 sm:my-10  z-10 lg:hidden"
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
            <CarouselItem className="flex justify-center items-center ">
              <Android src={mobileUrl} className="w-[80%] ml-15 z-10 " />
            </CarouselItem>
            <CarouselItem className=" flex justify-center items-center ml-2">
              <Safari
                // height={700}
                imageSrc={desktopUrl}
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
