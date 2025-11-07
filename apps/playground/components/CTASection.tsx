import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import { RainbowButton } from "@workspace/ui/components/magicui/rainbow-button";
import { Ripple } from "@workspace/ui/components/magicui/ripple";
import Image from "next/image";
import React from "react";

const CTASection = () => {
  return (
    <div
      className="relative min-h-96 overflow-hidden flex flex-col gap-10 justify-center items-center max-w-6xl mx-auto border-t border-accent  my-10"
    >
      <div className="absolute w-full h-full top-[-50%]">
        <Ripple mainCircleSize={300} mainCircleOpacity={0.3} />
      </div>
      {/* <Image src="https://gitfolio.in/favicon.ico" alt="gitfolio" width={100} height={100} className=" top-3" /> */}
      <span className="text-5xl font-semibold text-center max-w-3xl">
        Connect With GitFolio And Get Your Dev Portfolio
      </span>
      <RainbowButton className="font-semibold">Get Started</RainbowButton>
    </div>
  );
};

export default CTASection;
