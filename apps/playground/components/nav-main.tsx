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
import { useRouter } from "next/navigation";

export function NavMain({
  state,
  items,
}: {
  state: State;
  items: {
    title: string;
    url: string;
    icon?: typeof MailIcon;
  }[];
}) {
  const router = useRouter();
  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu className="gap-1">
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
              className="cursor-pointer"
                tooltip={item.title}
                disabled={state != "craft"}
                onClick={() =>
                  router.push(
                    `?edit=${item.title.toLocaleLowerCase().replace(" ", "-")}`
                  )
                }
              >
                {item.icon && <item.icon />}
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
