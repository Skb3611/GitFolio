import { config } from "../../../config";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import { RainbowButton } from "@workspace/ui/components/magicui/rainbow-button";
import React from "react";

const Footer = ({ username }: { username: string }) => {
  return (
    <div className="px-12 py-10 flex flex-col justify-center items-center">
      <a className="pb-2" href={config.siteUrl} target="_blank">
        <RainbowButton variant={"default"}>
          Powered by GitFolio{" "}
          <img
            src={config.siteUrl + "/favicon.ico"}
            alt="GitFolio"
            className="w-5 h-5"
          />
        </RainbowButton>
      </a>

      <AnimatedShinyText>Copyright © 2025 {username}.</AnimatedShinyText>
      <AnimatedShinyText>All rights reserved.</AnimatedShinyText>
    </div>
  );
};

export default Footer;
