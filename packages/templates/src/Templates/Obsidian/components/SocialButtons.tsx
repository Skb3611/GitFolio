import { SocialLinks } from "@workspace/types";
import { Button } from "@workspace/ui/components/button";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import { getIconComponent } from "@workspace/ui/icons";
import React from "react";
import CommonButton from "./CommonButton";
import AnimatedSection from "../../components/AnimatedSection";

const SocialButtons = ({ data }: { data: SocialLinks }) => {
  return (
    <AnimatedSection>
      <div className="py-6 border-b border-dotted font-figtree">
        <AnimatedShinyText>
          Where to find me (digitally) if you wish to
        </AnimatedShinyText>
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2 items-center flex-wrap ">
          {Object.entries(data).map(([platform, link]) => {
            if (link.length === 0) return null;
            const Icon = getIconComponent(platform);
            return (
              <a
                key={platform}
                href={link}
                target={link.length > 1 ? "_blank" : "_self"}
                rel="noopener noreferrer"
              >
                <CommonButton key={platform}>
                  {Icon && <Icon className="size-4" />}{" "}
                  {platform[0]?.toUpperCase() + platform.slice(1)}
                </CommonButton>
              </a>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default SocialButtons;
