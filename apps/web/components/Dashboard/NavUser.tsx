"use client";
import { useIsMobile } from "@/hooks/use-mobile";
import { SignOutButton, useUser } from "@clerk/nextjs";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar";
import { Button } from "@workspace/ui/components/button";
import {
  DropdownMenuContent,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
} from "@workspace/ui/components/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@workspace/ui/components/sidebar";
import {
  BadgeCheck,
  Bell,
  Copy,
  CreditCard,
  Ellipsis,
  LogOut,
  MoveRight,
  MoveUpRight,
  Sparkles,
} from "lucide-react";
import React, { useEffect } from "react";
import { useAuth } from "@clerk/nextjs";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import { toast } from "@workspace/ui/components/sonner";
import { config } from "@/config";

const NavUser = ({
  template,
  username,
}: {
  template?: string;
  username: string;
}) => {
  const { userId, signOut, isLoaded } = useAuth();
  useEffect(() => {
    (async () => {
      if (isLoaded && !userId) await signOut();
    })();
  }, [userId, isLoaded]);
  const isMobile = useIsMobile();
  const { user } = useUser();
  const { open } = useSidebar();
  const handleCopy = () => {
    if (!template) toast.warning("No template Selected");
    else {
      const url = 
      `https://${username}.gitfolio.in`
      console.log(url)
      navigator.clipboard.writeText(url);
      toast.success("Link Coppied");
    }
  };

  return (
    <SidebarMenu className="items-center">
      <SidebarMenuItem className="w-full  mb-1">
        <SidebarMenuButton
          className={`p-5  font-semibold ${open ? "rounded-4xl" : ""}`}
          variant={"outline"}
          tooltip={"Copy Link"}
          onClick={handleCopy}
        >
          <Copy />
          <span>Copy PortFolio Link</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem className="w-full ">
        <SidebarMenuButton
          className={`p-5 font-semibold ${open ? "rounded-4xl" : ""} bg-primary hover:bg-primary/80`}
          variant={"outline"}
          tooltip={"Visit Portfolio"}
          onClick={() => {
            template
              ? window.open(
                  `https://${username}.gitfolio.in`,
                  "_blank"
                )
              : toast.warning("No Template Selected");
          }}
        >
          <MoveUpRight />
          <span>Visit Your Portfolio</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem className="w-full">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton size={"lg"}>
              <div className="flex justify-start w-full items-center gap-3">
                <Avatar className="aspect-square">
                  <AvatarImage src={user?.imageUrl} />
                  <AvatarFallback>{user?.firstName?.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-semibold">{user?.firstName}</p>
                  <p className="text-xs font-medium text-gray-500">
                    {user?.username}
                  </p>
                </div>
              </div>
              <Ellipsis />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width)] rounded-lg mb-1"
            side={isMobile ? "bottom" : "right"}
            align="start"
            sideOffset={!isMobile ? 10 : 0}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage
                    src={user?.imageUrl}
                    alt={user?.firstName ?? "logo"}
                  />
                  <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{user?.fullName}</span>
                  <AnimatedShinyText className="mx-0 truncate font-medium text-xs">
                    {user?.username}
                  </AnimatedShinyText>
                  <AnimatedShinyText className="mx-0 truncate text-xs ">
                    {user?.emailAddresses?.[0]?.emailAddress}
                  </AnimatedShinyText>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => signOut()}>
              <LogOut />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

export default NavUser;
