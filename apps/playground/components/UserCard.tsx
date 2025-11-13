"use client";

import { useState } from "react";
import Image from "next/image";

export function UserCard({ user }: { user: USER_DETAILS }) {
  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="flex flex-col items-center gap-6 p-8 bg-card border border-border rounded-xl shadow-md">
        {/* Avatar */}
        <div className="relative w-24 h-24 rounded-full overflow-hidden ring-4 ring-primary/30">
          <img
            src={user.avatar_url || "/placeholder.svg"}
            alt={user.name}
            className="object-cover"
          />
        </div>

        {/* Name and Username */}
        <div className="text-center">
          <h2 className="text-xl font-bold text-foreground">{user.name}</h2>
          <p className="text-sm text-muted-foreground">@{user.username}</p>
        </div>

        {/* Stats Badges */}
        <div className="flex gap-3 w-full">
          <div className="flex-1 text-center px-3 py-2 bg-muted rounded-lg">
            <div className="text-lg font-bold text-foreground">
              {user.followers?.toLocaleString() || 0}
            </div>
            <div className="text-xs text-muted-foreground">Followers</div>
          </div>
          <div className="flex-1 text-center px-3 py-2 bg-muted rounded-lg">
            <div className="text-lg font-bold text-foreground">
              {user.total_repos?.toLocaleString() || 0}
            </div>
            <div className="text-xs text-muted-foreground">Repos</div>
          </div>
          <div className="flex-1 text-center px-3 py-2 bg-muted rounded-lg">
            <div className="text-lg font-bold text-foreground">
              {user.following?.toLocaleString() || 0}
            </div>
            <div className="text-xs text-muted-foreground">Following</div>
          </div>
        </div>
      </div>
    </div>
  );
}
