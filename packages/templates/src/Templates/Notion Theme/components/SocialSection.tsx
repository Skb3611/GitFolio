import { SocialLinks } from "@workspace/types";
import React from "react";
import AnimatedSection from "../../components/AnimatedSection";
import Skill from "../../components/Skill";
import { Button } from "@workspace/ui/components/button";
import { getIconComponent } from "@workspace/ui/icons";

const SocialSection = ({ data }: { data: SocialLinks }) => {
  return (
    <AnimatedSection delay={0.2}>
      <h2 className="text-2xl font-bold mb-3">Connect Me Via</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {Object.entries(data).map(([key, value]) => {
          if (value.length === 0 || value == "") return null;
          const Icon = getIconComponent(key);
          return (
            <a
            className="w-full"
              href={value}
              key={key}
              target={value == "#" ? "_self" : "_blank"}
              rel="noopener noreferrer"
            >
              <Button
                variant={"secondary"}
                className="cursor-pointer w-full"
                key={key}
              >
                {Icon && <Icon />}
                {key[0]?.toUpperCase() + key.slice(1)}
              </Button>
            </a>
          );
        })}
      </div>
    </AnimatedSection>
  );
};

export default SocialSection;
