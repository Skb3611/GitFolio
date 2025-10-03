import React from "react";
import { Panel, PanelHeader, PanelTitle } from "./Panel";
import { SocialLinks } from "@workspace/types";
import { cn } from "@workspace/ui/lib/utils";
import { ArrowUpRightIcon, getIconComponent } from "@workspace/ui/icons";

export function SocialLinksSection({ data }: { data: SocialLinks }) {
  return (
    <Panel id="connect">
      <PanelHeader>
        <PanelTitle>Connect</PanelTitle>
      </PanelHeader>
      <h2 className="sr-only">Social Links</h2>

      <div className="relative">
        <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
          <div className="border-r border-edge"></div>
          <div className="border-l border-edge"></div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {Object.entries(data).map(([socialNetwork, link], index) => {
            return (
              <SocialLinkItem
                key={index}
                socialNetwork={socialNetwork}
                link={link}
              />
            );
          })}
        </div>
      </div>
    </Panel>
  );
}

function SocialLinkItem({
  socialNetwork,
  link,
}: {
  socialNetwork: string;
  link: string;
}) {
  const Icon = getIconComponent(socialNetwork);
  return (
    <a
      className={cn(
        "group/link flex cursor-pointer items-center gap-4 rounded-2xl p-4 pr-2 transition-colors select-none",
        "screen-line-before screen-line-after",
        "odd:screen-line-before odd:screen-line-after"
      )}
      href={link}
      target={link!="#"?"_blank":"_self"}
      rel="noopener"
    >
      {Icon && <Icon className="size-10" />}

      <div className="flex-1">
        <h3 className="flex items-center font-medium underline-offset-4 group-hover/link:underline">
          {socialNetwork?.charAt(0).toUpperCase() + socialNetwork?.slice(1)}
        </h3>
      </div>

      <ArrowUpRightIcon className="size-4 text-muted-foreground" />
    </a>
  );
}
