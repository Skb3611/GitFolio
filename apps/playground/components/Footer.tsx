import { Button } from "@workspace/ui/components/button";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import { Icons } from "@workspace/ui/icons";
import Image from "next/image";

const templates = [
  {
    name: "Black & White",
    href: "https://gitfolio.in/templates/black-white",
  },
  {
    name: "Clean Slate",
    href: "https://gitfolio.in/templates/clean-slate",
  },
  {
    name: "Dev Pro",
    href: "https://gitfolio.in/templates/dev-pro",
  },
  {
    name: "Persona",
    href: "https://gitfolio.in/templates/persona",
  },
  {
    name: "White Space",
    href: "https://gitfolio.in/templates/white-space",
  },
  {
    name: "Pixel Perfect",
    href: "https://gitfolio.in/templates/pixel-perfect",
  },
  {
    name: "Obsidian",
    href: "https://gitfolio.in/templates/obsidian",
  },
  {
    name: "Notion Theme",
    href: "https://gitfolio.in/templates/notion-theme",
  },
];

const Footer = () => {
  return (
    <footer className="border-t min-h-72 ">
      <div className="flex flex-col relative max-w-5xl mx-auto py-20 gap-20">
        <div className="flex w-full ">
          <div className="w-1/2 space-y-2">
            <div className="initial flex items-center gap-2">
              <Image
                src={"https://gitfolio.in/favicon.ico"}
                alt="logo"
                width={35}
                height={35}
              />
              <span className="text-xl font-semibold">GitFolio Playground</span>
            </div>
            <div>
              <AnimatedShinyText className="text-lg">
                Explore Premium GitFolio for Free{" "}
              </AnimatedShinyText>
              <div className="space-x-3 mt-3">
                <Button
                  className="bg-white/90 text-black font-medium"
                  style={{
                    boxShadow:
                      "-82px 54px 27px 0px rgba(255,255,255,.01),-52px 35px 25px 0px rgba(255,255,255,.04),-29px 19px 21px 0px rgba(255,255,255,.15),-13px 9px 16px 0px rgba(255,255,255,.25),-3px 2px 9px 0px rgba(255,255,255,.29)",
                  }}
                >
                  Get Started
                </Button>
                <Button className="font-medium" variant={"outline"}>
                  Visit GitFolio.in
                </Button>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <h2 className="text-lg font-medium mb-2 text-right">GitFolio Templates</h2>
            <div className="grid justify-items-end  grid-cols-2 gap-1.5">
              {templates.map((template) => (
                <a
                  key={template.name}
                  href={template.href}
                  className="text-sm text-muted-foreground hover:text-white"
                >
                  {template.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full bottom-0 flex justify-between">
          <div>
            <AnimatedShinyText>
              @{new Date().getFullYear()} GitFolio Playground. All rights
              reserved.
            </AnimatedShinyText>
          </div>
          <div className="flex gap-2 items-center">
            <Icons.twitter className="size-5 cursor-pointer" />
            <Icons.github className="size-5 cursor-pointer" />
            <Icons.linkedin className="size-5 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
