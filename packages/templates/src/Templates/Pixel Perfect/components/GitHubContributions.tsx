"use client";
import { Suspense } from "react";
import { Panel } from "./Panel";
import {GitHubContributionsResponse,Activity} from "@workspace/types";
import { LoaderIcon } from "@workspace/ui/icons";
import { use } from "react";
import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
} from "@workspace/ui/components/ui/kibo-ui/contribution-graph";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip";
import { format } from "date-fns";

export function GitHubContributions({username}:{username:string}) {
  const contributions = getGitHubContributions(username);

  return (
    <Panel>
      <h2 className="sr-only">GitHub Contributions</h2>
    
      <Suspense fallback={<GitHubContributionFallback />}>
        <GitHubContributionGraph contributions={contributions} username={username} />
      </Suspense>
    </Panel>
  );
}

export async function getGitHubContributions(username:string) {
  const res = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
    {
    //   next: { revalidate: 86400 }, // Cache for 1 day (86400 seconds)
    }
  );
  const data = (await res.json()) as GitHubContributionsResponse;
  return data.contributions;
}


export function GitHubContributionGraph({
  contributions,
  username
}: {
  contributions: Promise<Activity[]>;
  username:string
}) {
  const data = use(contributions);

  return (
    <ContributionGraph
      className="mx-auto py-2"
      data={data}
      blockSize={11}
      blockMargin={3}
      blockRadius={0}
    >
      <ContributionGraphCalendar className="no-scrollbar px-2">
        {({ activity, dayIndex, weekIndex }) => (
          <Tooltip>
            <TooltipTrigger  asChild>
              <g>
                <ContributionGraphBlock
                  activity={activity}
                  dayIndex={dayIndex}
                  weekIndex={weekIndex}
                />
              </g>
            </TooltipTrigger>

            <TooltipContent className="font-sans" sideOffset={0}>
              <p>
                {activity.count} contribution{activity.count > 1 ? "s" : null}{" "}
                on {format(new Date(activity.date), 'dd.MM.yyyy')}
              </p>
            </TooltipContent>
          </Tooltip>
        )}
      </ContributionGraphCalendar>

      <ContributionGraphFooter className="px-2">
        <ContributionGraphTotalCount>
          {({ totalCount, year }) => (
            <div className="text-muted-foreground">
              {totalCount.toLocaleString("en")} contributions in {year} on{" "}
              <a
                className="font-medium underline underline-offset-4"
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener"
              >
                GitHub
              </a>
              .
            </div>
          )}
        </ContributionGraphTotalCount>

        <ContributionGraphLegend />
      </ContributionGraphFooter>
    </ContributionGraph>
  );
}

export function GitHubContributionFallback() {
  return (
    <div className="flex h-[162px] w-full items-center justify-center">
      <LoaderIcon className="animate-spin text-muted-foreground" />
    </div>
  );
}
