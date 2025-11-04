import {
  Facebook,
  Github,
  Instagram,
  Link as LinkIcon,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import React from "react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip";
import { SocialLinks } from "@workspace/types";

const SocialLinksCard = ({ links }: { links: SocialLinks }) => {
  return (
    <div className="md:p-8 p-4">
      <header className="flex items-center md:text-2xl text-lg gap-2">
        <LinkIcon className="md:size-8 size-6" />
        Social Links
      </header>
      <div className="grid grid-cols-2 gap-5 my-10">
        {Object.entries(links).map(([key, value]) => {
          return (
            <Tooltip key={key}>
              <TooltipTrigger>
                <Link href={value.length>0?value:"#"}>
                <p
                  key={key}
                  className="flex items-center gap-2 md:text-lg text-sm"
                  >
                  {icons[key as keyof typeof icons]} {key}
                </p>
                  </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{value.length == 0 ? "No link" : value}</p>
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
};
export default SocialLinksCard;

const icons = {
  github: <Github className="size-5 md:size-6" />,
  linkedin: <Linkedin className="size-5 md:size-6" />,
  twitter: <Twitter className="size-5 md:size-6" />,
  website: <LinkIcon className="size-5 md:size-6" />,
  instagram: <Instagram className="size-5 md:size-6" />,
  facebook: <Facebook className="size-5 md:size-6" />,
  behance: <LinkIcon className="size-5 md:size-6" />,
  youtube: <Youtube className="size-5 md:size-6" />,
};
