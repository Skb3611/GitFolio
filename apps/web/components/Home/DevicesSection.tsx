import React from "react";
import Android from "@workspace/ui/components/magicui/android";
import Iphone15Pro from "@workspace/ui/components/magicui/iphone-15-pro";
import { Safari } from "@workspace/ui/components/magicui/safari";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import { Meteors } from "@workspace/ui/components/magicui/meteors";
import { BorderBeam } from "@workspace/ui/components/magicui/border-beam";
import { Particles } from "@workspace/ui/components/magicui/particles";

const DevicesSection = () => {
  return (
    <div className="h-full w-full relative">
      <Particles
        className="absolute inset-0 z-0"
        quantity={200}
        ease={80}
        color={"#ffffff"}
        refresh
      />

      <div className="relative h-full my-10 mx-auto max-w-7xl flex gap-4 justify-center items-center flex-col overflow-hidden">
        {/* <Meteors number={50}/> */}

        <div className="relative group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800 mb-">
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span>✨ Fully Responsive UI</span>
            {/* <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" /> */}
          </AnimatedShinyText>
          <BorderBeam />
        </div>

        <h1 className="w-full text-7xl text-center font-semibold">
          Seamless on Every Device{" "}
        </h1>
        <AnimatedShinyText className="text-xl text-center">
          From compact mobiles to widescreen monitors, your portfolio always
          looks its best.
        </AnimatedShinyText>
        <div className="flex justify-center items-center relative justify-between gap-24 -mt-20 ">
          <div>
            <Iphone15Pro src="/assets/mobileview.png" className="w-[250px]" />
          </div>
          <div>
            <Safari
              height={700}
              // videoSrc="https://magicui.design/portfolio-demo.mp4"
              imageSrc="/assets/webview.png"
              className="w-[900px]"
              mode="simple"
              url="gitfolio.example"
            />
            {/* <BorderBeam/> */}
          </div>
          {/* <Android src="/assets/mobileview.png" className="w-[250px]" /> */}
          {/* <div className="absolute h-64 bg-linear-to-t from-background to-background/70 backdrop-blur-sm w-full bottom-3 "></div> */}
        </div>
      </div>
    </div>
  );
};

export default DevicesSection;
