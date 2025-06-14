import { AnimatedGridPattern } from "@workspace/ui/components/magicui/animated-grid-pattern";
import { cn } from "@workspace/ui/lib/utils";
import React from "react";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import { ArrowRightIcon, ChevronRight } from "lucide-react";
import { BorderBeam } from "@workspace/ui/components/magicui/border-beam";
import { Button } from "@workspace/ui/components/button";
import { Safari } from "@workspace/ui/components/magicui/safari";
import Link from "next/link";

const HeroSection = () => {

  return (
    <div
      id="home"
      className="relative min-h-screen flex flex-col  w-full  bg-background md:p-20 md:p-8 p-4"
    >
      <AnimatedGridPattern
        height={50}
        width={50}
        numSquares={30}
        maxOpacity={0.3}
        duration={3}
        repeatDelay={1}
        className={cn(
          "max-h-screen md:[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] [mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
          "inset-x-0 h-[200%] skew-y-12"
        )}
      />
      <main className="flex flex-col mx-auto min-w-full md:max-w-[85%] justify-center items-center mt-20">
        <div
          className={cn(
            "relative group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800 mb-5"
          )}
        >
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 text-xs lg:text-base">
            <span>✨ Introducing Gitfolio</span>
            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedShinyText>
          <BorderBeam />
        </div>
        <h1 className="lg:text-7xl text-3xl font-semibold text-center mb-5 ">
          Turn Your GitHub Into a Personal Portfolio in Seconds
        </h1>
        <h2 className="lg:text-xl text-sm text-center max-w-2xl">
          <AnimatedShinyText>
            Your GitHub already tells your story — now turn it into a personal
            site that speaks for itself.
          </AnimatedShinyText>
        </h2>
        <div className="md:space-x-5 mt-10 flex flex-col md:flex-row gap-1.5 justify-center items-center">

            <Button
              className="bg-white hover:bg-white/70 text-black  rounded-full py-7 p-4 px-8 text-base cursor-pointer"
              size={"lg"}
            >
          <Link href={"/sign-in"}>
              Get Started
          </Link>
              <ChevronRight className="h-10 w-10" />
            </Button>
          <Button className="text-white cursor-pointer" variant={"link"}>
            Browse Templates
            <ChevronRight className="h-10 w-10" />
          </Button>
        </div>
        <div className="mt-20 mb-10 relative md:rounded-xl">
          {/* <ShineBorder borderWidth={1.5} shineColor={["#ffaa40","#9c40ff"]} /> */}
          <Safari
            url="https://gitfolio.example"
            mode="simple"
            videoSrc="https://magicui.design/portfolio-demo.mp4"
            className="size-full rounded-b-sm md:rounded-b-xl max-w-full md:max-w-6xl"
            height={650}
          />
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
