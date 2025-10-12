import React from "react";
import CommonButton from "./CommonButton";
import { getIconComponent } from "@workspace/ui/icons";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import AnimatedSection from "../../components/AnimatedSection";

const SkillsSection = ({ data }: { data: string[] }) => {
  return (
    <AnimatedSection>
      <div className="py-8 border-b border-dotted">
        <h2 className="text-2xl font-bold font-doto pb-4">
          Skills{" "}
          <AnimatedShinyText className="text-sm font-jetbrains">
            Which I use/know
          </AnimatedShinyText>
        </h2>
        <div className="flex flex-wrap gap-x-2 gap-y-1.5 ">
          {data.map((skill, idx) => {
            const Icon = getIconComponent(skill);
            return (
              <CommonButton key={idx} classname="w-auto">
                {Icon && <Icon className="w-5 h-5 mr-1" />}
                {skill}
              </CommonButton>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default SkillsSection;
