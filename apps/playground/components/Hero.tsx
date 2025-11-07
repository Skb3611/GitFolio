import { Button } from "@workspace/ui/components/button";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import Image from "next/image";

const Hero = () => {
  return (
    <div className=" pt-30 px-10 overflow-hidden relative">
      <div className="absolute inset-x-0 bottom-0 h-40 md:h-100 w-full mask-t-from-10% bg-background z-50"></div>
      <div className="space-y-2 max-w-6xl mx-auto">
        <h1 className="text-6xl font-semibold font-manrope">
          Where Ideas Go Live
        </h1>
        <h2 className="text-6xl font-semibold font-manrope">
          The GitFolio Playground
        </h2>
        <div className="mt-6 text-muted-foreground">
          <AnimatedShinyText className="text-xl block mx-0 max-w-xl italic">
            Design, test, and customize your portfolio with zero setup . See
            your vision turn real as you type.
          </AnimatedShinyText>
        </div>
        <div className="my-5 space-x-3 flex items-center">
          <Button
            style={{
              boxShadow:
                "-82px 54px 27px 0px rgba(255,255,255,.01),-52px 35px 25px 0px rgba(255,255,255,.04),-29px 19px 21px 0px rgba(255,255,255,.15),-13px 9px 16px 0px rgba(255,255,255,.25),-3px 2px 9px 0px rgba(255,255,255,.29)",
            }}
            className="bg-foreground/90 font-semibold text-background hover:bg-foreground/70"
          >
            Craft your Portfolio
          </Button>
          <Button variant={"outline"}>Visit GitFolio
            <Image src={"https://gitfolio.in/favicon.ico"} alt="GitFolio Logo" width={20} height={20} />
          </Button>
        </div>
      </div>
      <div className="relative min-h-[80vh] flex justify-center">
        <div className="absolute perspective-[4000px] [transform-style:preserve:3d] z-10">
          <div className="rotate-x-[35deg] rotate-y-[10deg] rotate-z-[-30deg] translate-y-[-100px] translate-x-[150px]">
            <Image
              src={
                "https://pub-7e33da773f24477fad91084ffacf40cb.r2.dev/templates/pixel-perfect/preview/desktop-light.png"
              }
              className="rounded-lg mask-r-from-50% mask-b-from-80% shadow-xl"
              alt="Pixel Perfect Template Preview"
              width={1280}
              height={720}
            />
          </div>
        </div>
        <div className="absolute perspective-[4000px] [transform-style:preserve:3d]">
          <div className="rotate-x-[35deg] rotate-y-[10deg] rotate-z-[-30deg] translate-y-[20px] translate-x-[100px]">
            <Image
              src={
                "https://pub-7e33da773f24477fad91084ffacf40cb.r2.dev/templates/pixel-perfect/preview/desktop-light.png"
              }
              className="rounded-lg mask-r-from-20% mask-b-from-20% shadow-xl"
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
