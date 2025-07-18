import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import { Button } from "@workspace/ui/components/button";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@workspace/ui/components/sidebar";
import { ChevronsUpDown, Code } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";
import { useIsMobile } from "@/hooks/use-mobile";
import Link from "next/link";

const Navigation = ({
  navItems,
}: {
  navItems: {
    label: string;
    href: string;
    icon: React.ElementType;
  }[];
}) => {
  const router = useRouter()
  const isMobile = useIsMobile();
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className=" rounded-lg bg-white items-center justify-center flex aspect-square size-8 ">
                <Code className="w-5 h-5 text-black" />
              </div>
              <div>
                <span className="text-lg font- text-white bg-clip-text">
                  GitFolio
                </span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={5}
          >
            <DropdownMenuLabel className="text-muted-foreground text-xs">
              Navigation
            </DropdownMenuLabel>
            {navItems.map((nav, index) => (
              <DropdownMenuItem key={nav.label} className="gap-2 p-2" onClick={()=>router.push(nav.href,{scroll:false})}>
                <div className="flex size-6.5 items-center justify-center rounded-md border">
                  <nav.icon className="size-4 shrink-0" />
                </div>
                {nav.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

export default Navigation;
