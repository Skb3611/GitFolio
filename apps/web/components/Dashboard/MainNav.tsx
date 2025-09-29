import { TabTypes } from "@workspace/types";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@workspace/ui/components/sidebar";
import React, { Dispatch, SetStateAction } from "react";

const MainNav = ({
  navItems,
  setActiveTab,
  activeTab,
}: {
  navItems: {
    label: string;
    icon: React.ElementType;
  }[];
  setActiveTab: Dispatch<SetStateAction<TabTypes>>;
  activeTab: string;
}) => {
  const {open}= useSidebar()
  return (
    <SidebarMenu>
      {navItems.map((nav) => {
        return (
          <SidebarMenuItem key={nav.label}>
            <SidebarMenuButton
              isActive={activeTab === nav.label}
              tooltip={nav.label}
              className={`mx-auto w-[95%] sm:w-full py-5 px-5 `}
              onClick={() => setActiveTab(nav.label as TabTypes)}
            >
              <nav.icon/>
              <span className="text-base">{nav.label}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        );
      })}
    </SidebarMenu>
  );
};

export default MainNav;
