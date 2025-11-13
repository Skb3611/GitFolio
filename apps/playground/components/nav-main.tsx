"use client";

import { PlusCircle, MailIcon, type Icon } from "@workspace/ui/icons";

import { Button } from "@workspace/ui/components/button";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@workspace/ui/components/sidebar";
import Link from "next/link";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: typeof MailIcon;
  }[];
}) {
  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu className="gap-1">
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <Link
                href={`?edit=${item.title.toLocaleLowerCase().replace(" ", "-")}`}
              >
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
