"use client";
import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@workspace/ui/components/sidebar";
import Navigation from "./Navigation";
import NavUser from "./NavUser";
import MainNav from "./MainNav";
import { TabTypes } from "@workspace/types";

// This is sample data.

export function AppSidebar({
  sidebarItems,
  setActiveTab,
  activeTab,
  selectedTemplate,
  username,
  ...props
}: React.ComponentProps<typeof Sidebar> & {
  sidebarItems: any;
  setActiveTab: React.Dispatch<React.SetStateAction<TabTypes>>;
  activeTab: string;
  selectedTemplate?: string;
  username:string;
}) {
  return (
    <Sidebar collapsible="icon" variant="inset" {...props}>
      <SidebarHeader>
        <Navigation navItems={sidebarItems.HeaderNavItems} />
      </SidebarHeader>
      <SidebarContent className="w-[85%] mx-auto my-2">
        <MainNav
          navItems={sidebarItems.MainNavItems}
          setActiveTab={setActiveTab}
          activeTab={activeTab}
        />
      </SidebarContent>

      <SidebarFooter>
        <NavUser template={selectedTemplate} username={username} />
      </SidebarFooter>
    </Sidebar>
  );
}
