import { ArrowRightIcon, ArrowUpRight, Github } from "@workspace/ui/icons";
import React from "react";

import { Button } from "@workspace/ui/components/button";

import { Panel, PanelHeader, PanelTitle } from "./Panel";
import { Projects } from "@workspace/types";
import { cn } from "@workspace/ui/lib/utils";

export function ProjectSection({ projects }: { projects: Projects[] }) {
  return (
    <Panel id="projects">
      <PanelHeader>
        <PanelTitle>Projects</PanelTitle>
      </PanelHeader>

      <div className="relative py-4">
        <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
          <div className="border-r border-edge"></div>
          <div className="border-l border-edge"></div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* <div className="screen-line-before flex justify-center py-2">
        <Button variant="default" asChild>
          <Link href="/blog">
            All Posts
            <ArrowRightIcon />
          </Link>
        </Button>
      </div> */}
    </Panel>
  );
}

function ProjectCard({
  project,
  shouldPreloadImage,
}: {
  project: Projects;
  shouldPreloadImage?: boolean;
}) {
  return (
    <div
      className={cn(
        "group/post flex flex-col gap-2 p-2",
        "screen-line-before screen-line-after",
        "sm:nth-[2n+1]:screen-line-before sm:nth-[2n+1]:screen-line-after"
      )}
    >
      {project.thumbnail && (
        <div className="relative select-none [&_img]:aspect-1200/630 [&_img]:rounded-xl">
          <img
            src={project.thumbnail}
            alt={project.name}
            width={1200}
            height={630}
          />

          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10 ring-inset dark:ring-white/10" />

          {/* {post.metadata.new && (
            <span className="absolute top-1.5 right-1.5 rounded-md bg-info px-1.5 font-mono text-sm font-medium text-white text-shadow-xs">
              New
            </span>
          )} */}
        </div>
      )}

      <div className="flex flex-col gap-1 p-2">
        <h3 className="text-lg leading-snug font-medium text-balance underline-offset-4 group-hover/post:underline">
          {project.name}
        </h3>

        <dl className="space-y-2">
          <dt className="sr-only">Desc</dt>
          <dd className="text-sm text-muted-foreground">
            {project.description}
          </dd>

          <dt className="sr-only">Links</dt>
          <dd className="text-sm text-muted-foreground space-x-2">
            {project.repoLink && (
              <Button variant={"outline"} size={"icon"} className="cursor-pointer">
                <Github />
              </Button>
            )}
            {project.liveLink && (
              <Button variant={"outline"} size={"icon"} className="cursor-pointer">
                <ArrowUpRight />
              </Button>
            )}
          </dd>
        </dl>
      </div>
    </div>
  );
}
