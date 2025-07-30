import React from "react";
import { Ripple } from "@workspace/ui/components/magicui/ripple";

import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import { Button } from "@workspace/ui/components/button";
import { Code } from "lucide-react";
export const NotFound = () => {
  return (
    <div className="h-screen w-screen relative flex justify-center items-center">
      <Ripple />
      <div className="absolute top-8 left-8  flex items-center space-x-3 cursor-pointer">
        <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
          <Code className="w-8 h-8 text-black" />
        </div>
        <span className="text-3xl font- text-white bg-clip-text">GitFolio</span>
      </div>
      <div className="space-y-2 flex flex-col justify-center items-center">
        <p className="text-9xl text-center font-bold opacity-50">404</p>
        <p className="text-center text-5xl">No commit history for this page</p>
        <AnimatedShinyText className="text-center text-xl">
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
