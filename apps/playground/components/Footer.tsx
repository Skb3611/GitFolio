import { config } from "@/config";
import { Button } from "@workspace/ui/components/button";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import { Icons } from "@workspace/ui/icons";
import Image from "next/image";
import Link from "next/link";

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
    <footer className="border-t min-h-72 px-5">
      <div className="flex flex-col relative max-w-5xl mx-auto py-20 gap-20">
        <div className="flex w-full flex-col  sm:flex-row gap-5">
          <div className="sm:w-1/2 space-y-2">
            <div className="initial flex items-center gap-2">
              <Image
                src={config.gitfolio_url + "/favicon.ico"}
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
                <Link href={"/craft"}>
                  <Button className="playground-white-button playground-white-shadow">
                    Get Started
                  </Button>
                </Link>
                <Link href={"https://gitfolio.in"} target="_blank">
                  <Button
                    className="font-medium cursor-pointer"
                    variant={"outline"}
                  >
                    Visit GitFolio.in
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="sm:w-1/2">
            <h2 className="text-lg font-medium mb-2 sm:text-right">
              GitFolio Templates
            </h2>
            <div className="grid sm:justify-items-end  grid-cols-2 gap-1.5">
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
        <div className="w-full bottom-0 flex flex-col gap-2 sm:flex-row items-center justify-between">
          <div>
            <AnimatedShinyText className="text-sm text-center block">
              @{new Date().getFullYear()} GitFolio Playground. All rights
              reserved.
            </AnimatedShinyText>
          </div>
          <div className="flex gap-2 items-center">
            <Link href={LINKS.x} target="_blank">
              <Icons.twitter className="size-5 cursor-pointer" />
            </Link>
            <Link href={LINKS.github} target="_blank">
              <Icons.github className="size-5 cursor-pointer" />
            </Link>
            <Link href={LINKS.linkedin} target="_blank">
              <Icons.linkedin className="size-5 cursor-pointer" />
            </Link>
            <Link href={LINKS.peerlist} target="_blank">
              <Icons.peerlist className="size-5 cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const LINKS = {
  x: "https://x.com/SKB3611",
  github: "https://github.com/skb3611/GitFolio",
  linkedin: "https://www.linkedin.com/in/shubham-bhilare-0a694a309/",
  peerlist:
    "https://peerlist.io/skb3611/project/gitfolio--from-github-to-greatness",
};
