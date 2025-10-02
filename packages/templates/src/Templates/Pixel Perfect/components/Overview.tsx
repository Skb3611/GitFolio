import {
  Github,
  GlobeIcon,
  Info,
  LucideProps,
  Mail,
  MapPinIcon,
  MarsIcon,
  VenusIcon,
} from "@workspace/ui/icons";
import React from "react";

import { cn } from "@workspace/ui/lib/utils";
import { PersonalInformation } from "@workspace/types";
import { Panel, PanelContent } from "./Panel";
export function urlToName(url: string) {
  return url.replace(/(^\w+:|^)\/\//, "");
}
export function Overview({ data }: { data: PersonalInformation }) {
  return (
    <Panel>
      <h2 className="sr-only">Overview</h2>

      <PanelContent className="space-y-2">
        <IntroItem icon={Github} content={data.username} />

        <IntroItem icon={Mail} content={data.email} />

        <IntroItem icon={MapPinIcon} content={data.location} />

        <IntroItem
          icon={GlobeIcon}
          content={urlToName(data.website || "")}
          href={data.website || ""}
        />

        <IntroItem icon={Info} content={data.bio} />
      </PanelContent>
    </Panel>
  );
}

export function IntroItem({
  icon: Icon,
  content,
  href,
}: {
  icon: React.ComponentType<LucideProps>;
  content: React.ReactNode;
  href?: string;
}) {
  return (
    <div className="flex items-start gap-4 font-mono text-sm">
      <div
        className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted ring-1 ring-edge ring-offset-1 ring-offset-background"
        aria-hidden
      >
        <Icon className="pointer-events-none size-4 text-muted-foreground" />
      </div>

      <p className="text-balance">
        {href ? (
          <a
            className="underline-offset-4 hover:underline"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {content}
          </a>
        ) : (
          content
        )}
      </p>
    </div>
  );
}
