import React from "react";
import CommonButton from "./CommonButton";
import { config } from "../../../config";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";

const Footer = ({ username }: { username: string }) => {
  return (
    <div className="py-15 space-y-2 w-full flex flex-col justify-center items-center">
      <p>
        © {new Date().getFullYear()} {username}. All rights reserved.
      </p>
      <a
        href={config.siteUrl}
        target="_blank"
        className="flex items-center gap-2"
      >
        {/* <AnimatedShinyText>Powered by</AnimatedShinyText> */}
        <CommonButton classname="w-auto font-figtree ">
          <img
            src={config.siteUrl + "/favicon.ico"}
            alt=""
            className="size-5"
          />
          GitFolio
        </CommonButton>
      </a>
    </div>
  );
};

export default Footer;
