import React from "react";
import { Experience } from "@workspace/types";
import CommonCard from "../../DevPro/components/CommonCard";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar";
import AnimatedSection from "../../components/AnimatedSection";

const ExperienceSection = ({ experience }: { experience: Experience[] }) => {
  return (
    <AnimatedSection>
      <div className="my-10 py-2 px-1 grid font-bold md:text-3xl text-3xl">
        <div className="text-center prose">
          <h1 className="text-[40px] max-md:text-[30px] mb-10">
            My Experience
          </h1>
        </div>
        <div className=" px-4 sm:px-6 md:px-8 space-y-3">
          {experience.map((exp) => (
            <div key={exp.id} className="border-b last:border-b-0 pb-2">
              <div className="flex justify-between items-center">
                <div className="w-[90%] space-y-1">
                  <h2 className="text-lg sm:text-lg font-bold ">
                    {exp.company}
                  </h2>
                  <p className="text-sm sm:text-base flex items-center gap-x-2 flex-wrap">
                    {exp.role}{" "}
                    <span className="text-xs  text-muted-foreground">
                      {exp.start_date} -{exp.end_date}
                    </span>
                  </p>
                  <p className="text-sm text-muted-foreground font-normal mb-1">
                    {exp.description}
                  </p>
                </div>
                <div className="hidden md:block">
                  <Avatar className="size-12">
                    <AvatarImage src={exp.logo} />
                    <AvatarFallback>{exp.company.split("")[0]}</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ExperienceSection;
