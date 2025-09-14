"use client";
import { useIsMobile } from "@/hooks/use-mobile";
import React from "react";
import { OrbitingCircles } from "@workspace/ui/components/magicui/orbiting-circles";
import Image from "next/image";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import { Safari } from "@workspace/ui/components/magicui/safari";
import { Data as TemplateData } from "@workspace/templates/metadata";
import {
  Autoplay,
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@workspace/ui/components/carousel";

const TemplatesSection = () => {
  const isMobile = useIsMobile();
  return (
    <div className="h-90 flex flex-col p-4 sm:p-8 justify-between items-center">
      <div className="w-full">
        <h2 className="w-full text-left text-lg sm:text-2xl z-10 ">
          GitFolio Templates ✨
        </h2>
        <AnimatedShinyText className='z-10 text-sm sm:text-base w-full'>
      Discover Amazing templates from GitFolio ✨
      </AnimatedShinyText>
      </div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
            stopOnInteraction: false,
            stopOnMouseEnter: false,
          }),
        ]}
        className="h-full max-w-sm sm:max-w-2xl lg:max-w-full w-full"
      >
        <CarouselContent className=" h-max mt-2 ">
          {TemplateData.map((template) => (
            <CarouselItem key={template.id} className="w-full h-full relative sm:basis-1/2 lg:basis-full">
              <Safari className="size-full" imageSrc={template.thumbnail} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      {/* <div className="absolute -bottom-10 blur-[.5px] opacity-20 flex h-full w-full flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles iconSize={isMobile?30:40} radius={70}>
        <Image src="/icons/nextjs.png" alt='nextjs' height={50}  width={50}/ >
        <Image src="/icons/prisma.png" alt='prisma' height={50}  width={50}/ >
        <Image src="/icons/clerk.png" alt='clerk' height={50}  width={50}/ >
      </OrbitingCircles>
      <OrbitingCircles iconSize={isMobile?30:40} radius={isMobile?120:150} reverse speed={2}>
        <Image src="/icons/github.png" alt='github' height={50}  width={50}/ >
        <Image src="/icons/magicui.png" alt='magicui' height={50}  width={50}/ >
        <Image src="/icons/shadcn.png" alt='shadcn' height={50}  width={50}/ >
        <Image src="/icons/turborepo.png" alt='turborepo' height={50}  width={50}/ >
      </OrbitingCircles>
    </div> */}
    </div>
  );
};

export default TemplatesSection;
