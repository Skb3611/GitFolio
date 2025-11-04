"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog";
import {
  Share2,
  Linkedin,
  Check,
  Icons,
} from "@workspace/ui/icons";
import { useIsMobile } from "@/hooks/use-mobile";
import { useUser } from "@clerk/nextjs";

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
  DropdownMenuItem,
  DropdownMenuLabel,
} from "@workspace/ui/components/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@workspace/ui/components/sidebar";
import {
  Copy,
  Ellipsis,
  LogOut,
  MoveUpRight,
} from "lucide-react";
import React, { useEffect } from "react";
import { useAuth } from "@clerk/nextjs";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import { toast } from "@workspace/ui/components/sonner";

const NavUser = ({
  template,
  username,
}: {
  template?: string;
  username: string;
}) => {
  const url = `https://${username}.gitfolio.in`;
  const title = "Check out my developer portfolio built with GitFolio! \n";
  const { userId, signOut, isLoaded } = useAuth();
  useEffect(() => {
    (async () => {
      if (isLoaded && !userId) await signOut();
    })();
  }, [userId, isLoaded]);
  const isMobile = useIsMobile();
  const { user } = useUser();
  const [copied, setCopied] = useState(false);

  const socialPlatforms = [
    {
      name: "X (Twitter)",
      icon: Icons.twitter,
      shareUrl: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURI(title)}`,
      color: "",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      shareUrl: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      color: "text-sky-600",
    },
    {
      name: "Reddit",
      icon: Icons.reddit,
      shareUrl: `https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
      color: "text-orange-500",
    },
    {
      name: "WhatsApp",
      icon: Icons.whatsapp,
      shareUrl: `https://wa.me/?text=${encodeURIComponent(title)}%20${encodeURIComponent(url)}`,
      color: "text-green-600",
    },
  ];

  const handleShare = (shareUrl: string) => {
    window.open(shareUrl, "_blank");
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast.success("Link Copied");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to Copy",{description:err as string});
    }
  };

  return (
    <SidebarMenu className="items-center">
      <Dialog>
        <SidebarMenuItem className="w-full  mb-1">
          <DialogTrigger asChild>
            <SidebarMenuButton
              className={`p-5  font-semibold`}
              variant={"outline"}
              tooltip={"Copy Link"}
            >
              <Share2 />
              <span>Share Portfolio</span>
            </SidebarMenuButton>
          </DialogTrigger>
        </SidebarMenuItem>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Share this content</DialogTitle>
            <DialogDescription>
              Choose a platform to share this content with your friends and
              followers.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            {/* Social Media Platforms */}
            <div className="grid grid-cols-2 gap-3">
              {socialPlatforms.map((platform) => {
                const IconComponent = platform.icon;
                return (
                  <Button
                    key={platform.name}
                    variant="outline"
                    className={`justify-start gap-1 sm:gap-3 h-12 ${platform.color}`}
                    onClick={() => handleShare(platform.shareUrl)}
                  >
                    <IconComponent className="h-5 w-5" />
                    {platform.name}
                  </Button>
                );
              })}
            </div>

            {/* Copy Link Section */}
            <div className="border-t pt-4">
              <div className="flex items-center space-x-2">
                <div className="flex-1 bg-muted rounded-md px-3 py-2 text-sm text-muted-foreground truncate">
                  {url}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleCopyLink}
                  className="shrink-0 bg-transparent"
                >
                  {copied ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <SidebarMenuItem className="w-full ">
        <SidebarMenuButton
          className={`p-5 font-semibold  bg-primary hover:bg-primary/80`}
          variant={"outline"}
          tooltip={"Visit Portfolio"}
          onClick={() => {
            template
              ? window.open(`https://${username}.gitfolio.in`, "_blank")
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
