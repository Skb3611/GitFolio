"use client";
import { useIsMobile } from "@/hooks/use-mobile";
import * as React from "react";
import { BookOpen, Command, File, Home, User } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@workspace/ui/components/sidebar";
import { useRouter } from "next/navigation";
import Navigation from "./Navigation";
import NavUser from "./NavUser";
import { label } from "motion/react-client";
import MainNav from "./MainNav";
import { TabTypes } from "@/app/types/types";

// This is sample data.

export function AppSidebar({
  sidebarItems,
  setActiveTab,
  activeTab,
  ...props
}: React.ComponentProps<typeof Sidebar> & {
  sidebarItems: any;
  setActiveTab: React.Dispatch<React.SetStateAction<TabTypes>>;
  activeTab: string;
}) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Navigation navItems={sidebarItems.HeaderNavItems} />
      </SidebarHeader>
      <SidebarContent className="w-[85%] mx-auto my-2">
        <MainNav navItems={sidebarItems.MainNavItems} setActiveTab={setActiveTab} activeTab={activeTab} />
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
      <SidebarRail />
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
