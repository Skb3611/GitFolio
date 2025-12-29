import React from "react";
import { Panel, PanelHeader, PanelTitle } from "./Panel";
import { Experience } from "@workspace/types";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible";
import {
  Building,
  ChevronsDownUpIcon,
  InfinityIcon,
} from "@workspace/ui/icons";
import { span } from "motion/react-client";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";

export function Experiences({ experiences }: { experiences: Experience[] }) {
  return (
    <Panel id="experience">
      <PanelHeader>
        <PanelTitle>Experience</PanelTitle>
      </PanelHeader>

      <div className="pr-2 pl-4">
        {experiences.map((experience) => (
          <ExperienceItem key={experience.id} experience={experience} />
        ))}
      </div>
    </Panel>
  );
}

export function ExperienceItem({ experience }: { experience: Experience }) {
  return (
    <div className="screen-line-after space-y-4">
      <div className="relative space-y-4">
        <Collapsible defaultOpen={false} asChild>
          <div>
            <div className="flex items-center hover:bg-accent2">
              {experience.logo ? (
                <img
                  src={experience.logo}
                  alt={experience.company}
                  width={32}
                  height={32}
                  className="mx-4 ml-2 flex size-10 shrink-0 select-none rounded-sm"
                  aria-hidden="true"
                />
              ) : (
                <div
                  className="mx-4 flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted text-muted-foreground ring-1 ring-edge ring-offset-1 ring-offset-background select-none"
                  aria-hidden="true"
                >
                  <Building className="size-4" />
                </div>
              )}

              <div className="flex-1 border-l border-dashed border-edge">
                <CollapsibleTrigger className="flex w-full items-center gap-4 p-4 pr-2 text-left select-none">
                  <div className="flex-1">
                    <h3 className="mb-1 leading-snug font-medium text-balance">
                      {experience.role}
                    </h3>

                    <dl className="text-sm text-muted-foreground">
                      <dt className="sr-only">Period</dt>
                      <dd className="flex items-center gap-0.5">
                        <span>{experience.start_date}</span>
                        <span className="font-mono">—</span>
                        {experience.onGoing ? (
                          <>
                            <InfinityIcon
                              className="size-4.5 translate-y-[0.5px]"
                              aria-hidden
                            />
                            <span className="sr-only">Present</span>
                          </>
                        ) : (
                          <span>{experience.end_date}</span>
                        )}
                      </dd>
                    </dl>
                  </div>

                   {experience.description &&  <div
                    className="shrink-0 text-muted-foreground [&_svg]:size-4"
                    aria-hidden
                  >
                    <ChevronsDownUpIcon />
                  </div>}
                </CollapsibleTrigger>
              </div>
            </div>
            {experience.description && (
              <CollapsibleContent className="group overflow-hidden duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
                <div className="border-t border-dashed border-edge">
                  <div className="space-y-4 p-4 duration-300 group-data-[state=closed]:animate-fade-out group-data-[state=open]:animate-fade-in">
                    {experience.description && (
                      <ul className="list-disc pl-6">
                        {experience.description.includes(".")
                          ? experience.description
                              .split(".")
                              .splice(
                                0,
                                experience.description.split(".").length - 1
                              )
                              .map((item, idx) => (
                                <li key={idx}>
                                  <AnimatedShinyText>{item}</AnimatedShinyText>
                                </li>
                              ))
                          : experience.description}
                      </ul>
                    )}
                  </div>
                </div>
              </CollapsibleContent>
            )}
          </div>
        </Collapsible>
      </div>
    </div>
  );
}
