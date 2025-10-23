import React from "react";
import Skill from "../../components/Skill";
import AnimatedSection from "../../components/AnimatedSection";

const SkillsSection = ({ data }: { data: string[] }) => {
  return (
    <AnimatedSection delay={0.3}>
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-3 ">
        {data.map((skill) => {
          return <Skill key={skill} label={skill} animate={false} />;
        })}
      </div>
    </AnimatedSection>
  );
};

export default SkillsSection;
