import { Ripple } from "@workspace/ui/components/magicui/ripple";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import { Button } from "@workspace/ui/components/button";
import { Code, Linkedin, Twitter } from "lucide-react";
const Maintenance = () => {
  return (
    <div className="min-h-[100dvh] min-w-full h-full w-full relative flex justify-center items-center overflow-hidden">
      <Ripple className="absolute" />
      <div className="absolute top-5 left-5 sm:top-8 sm:left-8  flex items-center space-x-3 cursor-pointer">
        <div className="w-8 sm:w-12 h-8 sm:h-12 rounded-md sm:rounded-xl bg-white flex items-center justify-center">
          <Code className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
        </div>
        <span className="text-2xl sm:text-3xl text-white bg-clip-text">
          GitFolio
        </span>
      </div>
      <div className="space-y-2 flex flex-col justify-center items-center">
        <p className="text-5xl md:text-5xl lg:text-9xl text-center font-bold opacity-50">
          503
        </p>
        <p className="text-center text-xl md:text-3xl lg:text-5xl">
          Improving Things Behind the Scenes
        </p>
        <AnimatedShinyText className="text-center w-[80%] mt-2 sm:w-auto text-sm md:text-lg lg:text-xl">
          We're making updates to bring you a faster, smoother, and more secure
          experience.
        </AnimatedShinyText>
        <span>Stay Connected for further updates !</span>
        <div className="flex flex-wrap gap-5 justify-around items-center mt-4">
          <a
            href="https://www.linkedin.com/in/shubham-bhilare-0a694a309/"
            className="flex justify-center "
            target="_blank"
          >
            <Button
              className="cursor-pointer bg-blue-500 hover:bg-blue-600"
              variant={"outline"}
              size={"lg"}
            >
              <Linkedin /> Connect on Linkedin
            </Button>
          </a>
          <a
            href="https://x.com/SKB3611"
            className=" flex justify-center  "
            target="_blank"
          >
            <Button
              className="cursor-pointer bg-black"
              variant={"outline"}
              size={"lg"}
            >
              <Twitter /> Follow on Twitter
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
