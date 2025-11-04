import React from "react";

import { MoveRight } from "lucide-react";
import { Safari } from "@workspace/ui/components/magicui/safari";
import {
  Autoplay,
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@workspace/ui/components/carousel";

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