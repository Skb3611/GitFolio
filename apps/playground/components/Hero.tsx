import { Button } from "@workspace/ui/components/button";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import Image from "next/image";

const Hero = () => {
  return (
    <div className=" pt-20 sm:pt-30 sm:px-10 overflow-hidden relative px-5">
      <div className="absolute inset-x-0 bottom-0 h-60 sm:h-80 md:h-120  w-full mask-t-from-10% bg-background z-50"></div>
      <div className="sm:space-y-2 max-w-6xl mx-auto  sm:px-0">
        <h1 className="text-2xl md:text-6xl font-semibold font-manrope">
          Where Ideas Go Live
        </h1>
        <h2 className="text-2xl md:text-6xl font-semibold font-manrope">
          The GitFolio Playground
        </h2>
        <div className="mt-6 text-muted-foreground">
          <AnimatedShinyText className="text-sm sm:text-xl block mx-0 max-w-xl italic">
            Design, test, and customize your portfolio with zero setup . See
            your vision turn real as you type.
          </AnimatedShinyText>
        </div>
        <div className="my-5 flex flex-col-reverse min-[425px]:flex-row  gap-2 items-center">
          <Button
            style={{
              boxShadow:
                "-82px 54px 27px 0px rgba(255,255,255,.01),-52px 35px 25px 0px rgba(255,255,255,.04),-29px 19px 21px 0px rgba(255,255,255,.15),-13px 9px 16px 0px rgba(255,255,255,.25),-3px 2px 9px 0px rgba(255,255,255,.29)",
            }}
            className="bg-foreground/90 font-semibold text-background hover:bg-foreground/70"
          >
            Craft your Portfolio
          </Button>
          <Button variant={"outline"}>
            Visit GitFolio
            <Image
              src={"https://gitfolio.in/favicon.ico"}
              alt="GitFolio Logo"
              width={20}
              height={20}
            />
          </Button>
        </div>
      </div>
      <div className="relative min-h-72 min-[425px]:min-h-80 md:h-[75vh] lg:h-[80vh]  flex justify-center translate-y-8 min-[425px]:translate-x-5 sm:translate-y-0 md:translate-x-15 lg:-translate-x-5 xl:translate-x-10">
        <div className="absolute perspective-[4000px] [transform-style:preserve:3d] z-10">
          <div className="rotate-x-[35deg] rotate-y-[10deg] rotate-z-[-30deg] translate-y-[-5px] translate-x-[55px] sm:translate-y-[-30px] lg:translate-y-[-100px] lg:translate-x-[150px]">
            <Image
              src={
                "https://pub-7e33da773f24477fad91084ffacf40cb.r2.dev/templates/pixel-perfect/preview/desktop-light.png"
              }
              className="rounded-md sm:rounded-lg mask-r-from-50% mask-b-from-70% sm:mask-b-from-65%  shadow-xl"
              alt="Pixel Perfect Template Preview"
              width={1280}
              height={720}
            />
          </div>
        </div>
        <div className="absolute perspective-[4000px] [transform-style:preserve:3d]">
          <div className="rotate-x-[35deg] rotate-y-[10deg] rotate-z-[-30deg] translate-y-[50px] translate-x-[25px] lg:translate-y-[50px] lg:translate-x-[100px]">
            <Image
              src={
                "https://pub-7e33da773f24477fad91084ffacf40cb.r2.dev/templates/pixel-perfect/preview/desktop-light.png"
              }
              className="rounded-md sm:rounded-lg mask-r-from-20% mask-b-from-20% shadow-xl"
              alt="Pixel Perfect Template Preview"
              width={1280}
              height={720}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
