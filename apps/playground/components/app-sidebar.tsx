"use client";

import * as React from "react";
import {
  BriefcaseBusiness,
  Code2,
  LinkIcon,
  FolderGit2,
  GraduationCap,
  UserRoundPenIcon,
} from "@workspace/ui/icons";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@workspace/ui/components/sidebar";
import Image from "next/image";
import { config } from "@/config";
import Link from "next/link";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Personal Information",
      url: "#",
      icon: UserRoundPenIcon,
      isActive: true,
    },
    {
      title: "Projects",
      url: "#",
      icon: FolderGit2,
    },
    {
      title: "Experience",
      url: "#",
      icon: BriefcaseBusiness,
    },
    {
      title: "Education",
      url: "#",
      icon: GraduationCap,
    },
    {
      title: "Socail Links",
      url: "#",
      icon: LinkIcon,
    },
    {
      title: "Skills",
      url: "#",
      icon: Code2,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" variant="inset"  {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className=" flex aspect-square size-8 items-center justify-center rounded-lg relative">
                <Image
                  src={config.gitfolio_url + "/favicon.ico"}
                  alt="logo"
                  fill
                />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">
                  GitFolio Playground
                </span>
                <span className="truncate text-xs">
                  <Link href={config.gitfolio_url} target="_blank">
                    By GitFolio
                  </Link>
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      {/* <SidebarRail /> */}
    </Sidebar>
  );
}
