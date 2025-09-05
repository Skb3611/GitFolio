import { ChevronRight, Mail } from "@workspace/ui/icons";
import { ShinyButton } from "@workspace/ui/components/magicui/shiny-button";
import { TextGenerateEffect } from "./text-generate";
import { PersonalInformation } from "@workspace/types";

const HeroSection = ({data}:{data:PersonalInformation}) => {
  return (
    <>
      <div
        id="home"
        className="min-h-screen w-full flex items-center justify-center absolute top-0 left-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255%20255%20255%20/%200.04)'%3e%3cpath d='M0%20.5H31.5V32'/%3e%3c/svg%3e")`,
        }}
      >
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#0a0a0a] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div
        className="pb-20 pt-36 sm:p-0 sm:min-h-screen flex flex-col items-center justify-center relative"
        id="#home"
      >
        <div className="flex flex-col justify-center items-center relative z-10 text-center">
          {/* <h1 className="text-[40px] md:text-6xl lg:text-7xl font-bold text-center max-w-5xl leading-tight tracking-wide">
            Full Stack Development &{" "}
            <span className="text-primary">Modern Solutions</span> Expert
          </h1> */}
          <TextGenerateEffect
            words={data.tagline || "Add a title from your Dashboard"}
            className="text-[40px] md:text-6xl lg:text-7xl font-bold text-center max-w-5xl leading-tight tracking-wide"
          />
          <p className="pt-5 pb-8 text-sm sm:text-base md:text-lg text-dark-200 dark:text-stone-200/70">
            Hi, I am {data.full_name.split(" ")[0]} — {data.bio || "Add bio from your dashboard"} 
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="#work">
              <ShinyButton>See My Work</ShinyButton>
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2.5 group"
            >
              <Mail className="text-[#3B82F6]" />
              <span className="group-hover:text-white/70 transition-colors duration-200 font-semibold">
                Get In Touch
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
