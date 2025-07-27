"use client";

import {
  CalendarIcon,
  HomeIcon,
  MailIcon,
  PencilIcon,
} from "@workspace/ui/icons";
import React, { useEffect, useState } from "react";

import { ModeToggle } from "./mode-toggle";
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

export type IconProps = React.HTMLAttributes<SVGElement>;

interface NavItemsType {
  navbar: { href: string; icon: React.ReactSVGElement; label: string }[];
  contact: { href: string; icon: React.ReactSVGElement; label: string }[];
}

export default function Navbar({ data }: { data: SocialLinks | undefined }) {
  // const DATA =
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
              icon: Icons.x,
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

  return (
    data != null &&
    data != undefined && (
      <div className=" fixed bottom-8 z-30 mx-auto min-w-2xl">
        <div className="bottom-8 ">
          <TooltipProvider>
            <Dock direction="middle" className="rounded-full">
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
      </div>
    )
  );
}
