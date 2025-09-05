"use client";
import { BackgroundBeams } from "@workspace/ui/components/ui/background-beams";
import { ShinyButton } from "@workspace/ui/components/magicui/shiny-button";
import { SocialLinks } from "@workspace/types";
import { Icons } from "@workspace/ui/icons";
import { Button } from "@workspace/ui/components/button";
import { config } from "../../../config";
import { motion } from "motion/react";
const Footer = ({ socialLinks }: { socialLinks: SocialLinks }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="flex flex-col justify-center items-center antialiased relative border border-dark-300 rounded-xl mb-5 mt-20 py-10"
      id="contact"
    >
      <BackgroundBeams className="h-full w-full" />
      <div className="z-50 w-full">
        <div className="space-y-8 p-5 sm:p-10 flex flex-col sm:flex-row justify-between items-center">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold max-w-2xl leading-[110%] relative z-10 text-center sm:text-left">
              Like what you see? Reach out to{" "}
              <span className="text-[#3B82F6]">collaborate!</span>
            </h1>
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-2 sm:gap-2 justify-center items-center">
            {Object.entries(socialLinks).map(([key, link]) => {
              if (link === "" || link.length <= 0) return null;
              let Icon = Icons[key as keyof typeof Icons] || Icons.link;
              return !Icon ? null : (
                <a
                  key={key}
                  href={link}
                  target={link === "#" ? "_self" : "_blank"}
                >
                  <Button
                    size={"icon"}
                    variant={"ghost"}
                    className="cursor-pointer"
                  >
                    <Icon className="size-6 md:size-8" />
                  </Button>
                </a>
              );
            })}
          </div>
        </div>
        <div className="space-y-1 mt-2 px-5 sm:px-10 flex flex-col justify-center items-center sm:items-start">
          <a href={config.siteUrl} target="_blank">
            <ShinyButton>
              <span className="flex gap-2 text-xs">
                Powered by GitFolio
                <img
                  src={config?.siteUrl + "/assets/logo.png"}
                  className="size-5"
                />
              </span>
            </ShinyButton>
          </a>
          <p className="text-xs sm:text-base relative z-10">
            &copy; {new Date().getFullYear()} | All rights reserved.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
