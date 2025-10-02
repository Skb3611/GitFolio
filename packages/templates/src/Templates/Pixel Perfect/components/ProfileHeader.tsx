import { PersonalInformation } from "@workspace/types";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import { cn } from "@workspace/ui/lib/utils";

export function ProfileHeader({data}:{data:PersonalInformation}) {
  return (
    <div className="screen-line-after flex border-x border-edge">
      <div className="shrink-0 border-r border-edge">
        <div className="mx-[2px] my-[3px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="size-32 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-40"
            alt={`${data.username}'s avatar`}
            src={data.profileImg}
            fetchPriority="high"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col">
        <div
          className={cn(
            "flex grow items-end pb-1 pl-4",
            "bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-edge)]/56"
          )}
        >
          <div className="line-clamp-1 font-mono text-xs text-zinc-300 select-none max-sm:hidden dark:text-zinc-800">
            {"text-3xl "}
            <span className="inline dark:hidden">text-zinc-950</span>
            <span className="hidden dark:inline">text-zinc-50</span>
            {" font-medium"}
          </div>
        </div>

        <div className="border-t border-edge">
          <h1 className="flex items-center pl-4 text-3xl font-semibold">
            {data.full_name}
            &nbsp;
          </h1>

          <div className="h-12 border-t border-edge py-1 pl-4 sm:h-auto">
            <AnimatedShinyText>{data.tagline}</AnimatedShinyText>
          </div>
        </div>
      </div>
    </div>
  );
}
