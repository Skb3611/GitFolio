import React from "react";
import { Button } from "@workspace/ui/components/button";
import { Dot, findIcon, getIconComponent } from "@workspace/ui/icons";
import { Marquee } from "@workspace/ui/components/magicui/marquee";
import { PersonalInformation } from "@workspace/types";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import Skill from "../../components/Skill";
import AnimatedSection from "../../components/AnimatedSection";

const Hero = ({
  personalInfo,
  skills,
}: {
  personalInfo: PersonalInformation;
  skills: string[];
}) => {
  return (
    <AnimatedSection>
      <section className="grid justify-center items-center text-center py-20 ">
        <div className="inline-flex items-center justify-center">
          <Avatar className="rounded-full mt-6 size-25">
            <AvatarImage src={personalInfo.profileImg} />
            <AvatarFallback>{personalInfo.full_name[0]}</AvatarFallback>
          </Avatar>
        </div>

        <div className="">
          <h1 className="font-bold md:leading-14 leading-8 sm:text-4xl md:text-6xl text-2xl mt-6">
            Hi, I&apos;m {personalInfo.full_name}
          </h1>
          <p className="text-lg md:text-2xl font-bold my-2 max-w-[80%] sm:max-w-full mx-auto">
            {personalInfo.tagline || "Add a tagline from darhboard"}
          </p>
          <AnimatedShinyText className=" text-base md:text-lg my-4 flex-wrap md:px-0 px-4 max-w-[80%] text-center tracking-tighter  block">
            {personalInfo.bio || "Add bio from Dashboard"}
          </AnimatedShinyText>
        </div>

        <div className="flex items-center justify-center mt-6 gap-2 flex-wrap">
          <Button className="!bg-black/90 text-white !cursor-pointer !py-4 !px-6 hover:!bg-black/82">
            <a href="#contact">Hire Me!</a>
          </Button>
          <div className="border h-full flex bg-[#E1F9DC] text-[#178D00] px-4 py-1.5 rounded-full">
            <Dot className="size-6" />
            <span>Available for collaborations</span>
          </div>
        </div>
      </section>
      <StackLoop skills={skills} />
    </AnimatedSection>
  );
};

export default Hero;

function StackLoop({ skills }: { skills: string[] }) {
  return (
    <>
      <Marquee className="rounded-xs overflow-hidden py-1 md:max-w-[400px] max-w-[320px] mx-auto opacity-100 [--duration:10s]">
        {skills.map((skill) => (
          <Skill label={skill} key={skill} animate={false} />
        ))}
      </Marquee>
    </>
  );
}
