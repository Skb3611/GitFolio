"use client";
import React from "react";
import { useUser, useClerk } from "@clerk/nextjs";
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
import { Button } from "@workspace/ui/components/button";
import { LogOut, User } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const UserButton = () => {
  const { user } = useUser();
  const { signOut } = useClerk();
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
      <DropdownMenuContent className="min-w-[200px] rounded-sm" side="bottom" align="end" forceMount>
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
