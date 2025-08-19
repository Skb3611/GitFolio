"use client";
import React, { useEffect } from "react";
import { useUser, useClerk, useAuth } from "@clerk/nextjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@workspace/ui/components/avatar";
import { LogOut, User } from "lucide-react";
import { useRouter } from "next/navigation";

const UserButton = () => {
  const { user } = useUser();

  const { userId, signOut, isLoaded } = useAuth();
  useEffect(() => {
    (async () => {
      if (isLoaded && !userId) await signOut();
    })();
  }, [userId, isLoaded]);
  console.log(user)
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-0">
        <Avatar>
          <AvatarImage src={user?.imageUrl} />
          <AvatarFallback>
            {user?.firstName?.charAt(0) || user?.lastName?.charAt(0)}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="min-w-[200px] rounded-sm"
        side="bottom"
        align="end"
        forceMount
      >
        <DropdownMenuLabel>
          <div className="flex gap-2 justify-start items-center">
            <Avatar>
              <AvatarImage src={user?.imageUrl} />
              <AvatarFallback>
                {user?.firstName?.charAt(0) || user?.lastName?.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <p>{user?.fullName}</p>
              <p>{user?.username}</p>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => router.push("/dashboard")}>
          <User />
          Dashboard
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => signOut()}
          className="flex items-center"
        >
          <LogOut className="text-white" /> Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
