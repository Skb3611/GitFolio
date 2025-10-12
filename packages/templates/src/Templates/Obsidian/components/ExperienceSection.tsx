import React from "react";
import { ExperienceItem } from "../../Pixel Perfect/components/Experience";
import { Experience } from "@workspace/types";
import AnimatedSection from "../../components/AnimatedSection" 

const ExperienceSection = ({ data }: { data: Experience[] }) => {
  return (
    <AnimatedSection>
      <div className="py-8">
        <h2 className="text-2xl font-bold font-doto pb-4">Experience</h2>
        {data.map((exp) => {
          return <ExperienceItem key={exp.id} experience={exp} />;
        })}
      </div>
    </AnimatedSection>
  );
};

export default ExperienceSection;
