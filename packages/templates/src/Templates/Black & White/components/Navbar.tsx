"use client";

import { HomeIcon } from "@workspace/ui/icons";
import React, { useEffect, useState } from "react";

import { ModeToggle } from "../../components/mode-toggle";
import { buttonVariants } from "@workspace/ui/components/button";
import { Separator } from "@workspace/ui/components/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip";
import { cn } from "@workspace/ui/lib/utils";
import { Dock, DockIcon } from "@workspace/ui/components/magicui/dock";
import { Icons } from "../../../icons/index";
import { SocialLinks } from "@workspace/types";
import { useIsMobile } from "@workspace/ui/hooks/use-mobile";

export type IconProps = React.HTMLAttributes<SVGElement>;

export default function Navbar({ data }: { data: SocialLinks | undefined }) {
  const isMobile = useIsMobile();
  const [iconSize, setIconSize] = useState<number>();
  const [navItems, setNavItems] = useState<any>();
  useEffect(() => {
    if (data) {
      setNavItems({
        navbar: [{ href: "#", icon: HomeIcon, label: "Home" }],
        contact: {
          social: {
            GitHub: {
              name: "GitHub",
              url: data.github ?? "#",
              icon: Icons.github,
              visible: true,
            },
            LinkedIn: {
              name: "LinkedIn",
              url: data.linkedin ?? "#",
              icon: Icons.linkedin,
              visible: true,
            },
            X: {
              name: "X",
              url: data.twitter ?? "#",
              icon: Icons.twitter,
              visible: true,
            },
            website: {
              name: "Send Email",
              url: data.website ?? "#",
              icon: Icons.email,
              visible: data?.website && data.website.length > 0 ? true : false,
            },
            instagram: {
              name: "Instagram",
              url: data.instagram ?? "#",
              icon: Icons.instagram,
              visible:
                data?.instagram && data.instagram.length > 0 ? true : false,
            },
            facebook: {
              name: "Facebook",
              url: data.facebook ?? "#",
              icon: Icons.facebook,
              visible:
                data?.facebook && data.facebook.length > 0 ? true : false,
            },
            behance: {
              name: "Behance",
              url: data.behance ?? "#",
              icon: Icons.behance,
              visible: data?.behance && data.behance.length > 0 ? true : false,
            },
            youtube: {
              name: "Youtube",
              url: data.youtube ?? "#",
              icon: Icons.youtube,
              visible: data?.youtube && data.youtube.length > 0 ? true : false,
            },
          },
        },
      });
    }
  }, [data]);
  useEffect(() => {
    let count = 0;
    navItems?.contact?.social &&
      Array.from(Object.values(navItems?.contact?.social)).map((obj) => {
        (obj as { visible: boolean })?.visible ? (count += 1) : null;
      });
    count <= 6
      ? setIconSize(isMobile ? 30 : 35)
      : setIconSize(isMobile ? 22 : 35);
  }, [navItems]);

  return (
    data != null &&
    data != undefined && (
      <div className="pointer-events-none fixed inset-x-0 bottom-8 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14">
        <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
        <TooltipProvider>
          <Dock
            iconSize={iconSize}
            iconMagnification={isMobile ? 40 : 60}
            className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] rounded-full"
          >
            {navItems?.navbar.map((item: any) => (
              <DockIcon key={item.label}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={item.href}
                      aria-label={item.label}
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "size-12 rounded-full"
                      )}
                    >
                      <item.icon className="size-4" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            ))}
            <Separator orientation="vertical" className="h-full" />
            {navItems?.contact &&
              Object.entries(
                navItems.contact.social as Record<
                  string,
                  {
                    name: string;
                    url: string;
                    visible: boolean;
                    icon: React.ComponentType<IconProps>;
                  }
                >
              ).map(
                ([name, social]) =>
                  social?.visible && (
                    <DockIcon key={name}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            target="_blank"
                            href={social.url}
                            aria-label={social.name}
                            className={cn(
                              buttonVariants({
                                variant: "ghost",
                                size: "icon",
                              }),
                              "size-12 rounded-full"
                            )}
                          >
                            <social.icon className="size-4" />
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </DockIcon>
                  )
              )}
            <Separator orientation="vertical" className="h-full py-2" />
            <DockIcon>
              <Tooltip>
                <TooltipTrigger asChild>
                  <ModeToggle />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Theme</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          </Dock>
        </TooltipProvider>
      </div>
    )
  );
}
