import React from "react";
import { cn } from "@workspace/ui/lib/utils";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./Panel";
import { getIconComponent } from "@workspace/ui/icons";

export function TeckStack({ skills }: { skills: string[] }) {
  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>

      <PanelContent
        className={cn(
          "[--pattern-foreground:var(--color-zinc-950)]/5 dark:[--pattern-foreground:var(--color-white)]/5",
          "bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center",
          "bg-zinc-950/0.75 dark:bg-white/0.75"
        )}
      >
        <ul className="flex flex-wrap gap-6 select-none">
          {skills.map((tech, idx) => {
            const Icon = getIconComponent(tech);

            return Icon ? (
              <li key={idx} className="flex">
                <Icon className="size-8" />
                <span className="sr-only">{tech}</span>
              </li>
            ) : null;
          })}
        </ul>
      </PanelContent>
    </Panel>
  );
}
