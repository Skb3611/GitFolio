"use client";
import React from "react";
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
          {TemplateData.map((template,idx) => (
            <CarouselItem key={idx} className="w-full h-full relative sm:basis-1/2 lg:basis-full">
              <Safari className="size-full" imageSrc={template.thumbnail} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default TemplatesSection;
