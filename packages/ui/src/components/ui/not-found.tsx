import React from "react";
import { Ripple } from "@workspace/ui/components/magicui/ripple";

import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import { Button } from "@workspace/ui/components/button";
import { Code } from "lucide-react";
export const NotFound = () => {
  return (
    <div className="min-h-[100dvh] min-w-screen h-full w-full relative flex justify-center items-center overflow-hidden">
      <Ripple className="absolute" />
      <div className="absolute top-5 left-5 sm:top-8 sm:left-8  flex items-center space-x-3 cursor-pointer">
        <div className="w-8 sm:w-12 h-8 sm:h-12 rounded-md sm:rounded-xl bg-white flex items-center justify-center">
          <Code className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
        </div>
        <span className="text-2xl sm:text-3xl text-white bg-clip-text">GitFolio</span>
      </div>
      <div className="space-y-2 flex flex-col justify-center items-center">
        <p className="text-3xl md:text-5xl lg:text-9xl text-center font-bold opacity-50">404</p>
        <p className="text-center text-xl md:text-3xl lg:text-5xl">No commit history for this page</p>
        <AnimatedShinyText className="text-center w-[80%] sm:w-auto text-sm md:text-lg lg:text-xl">
          But don't worry - your perfect portfolio is just a click away!
        </AnimatedShinyText>
        <a
          href="https://gitfolio-dev.vercel.app/"
          className="w-full flex justify-center"
        >
          <Button
            className="cursor-pointer w-1/3"
            variant={"secondary"}
            size={"lg"}
          >
            Return Home
          </Button>
        </a>
      </div>
    </div>
  );
};
