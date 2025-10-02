import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import { config } from "../../../config";
import { cn } from "@workspace/ui/lib/utils";

export function SiteFooter({username}:{username:string}) {
  return (
    <footer className="max-w-screen">
      <div className="screen-line-before mx-auto border-x border-edge pt-4 md:max-w-3xl">
        <p className="mb-1 px-4 text-center font-mono text-sm text-balance text-muted-foreground">
          © {new Date().getFullYear()} {username}. All rights reserved.
        </p>


        <div
          className={cn(
            "screen-line-before screen-line-after flex w-full before:z-10 after:z-10",
            "bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-edge)]/56"
          )}
        >
          <div className="mx-auto flex items-center justify-center gap-3 border-x border-edge bg-background px-4">
            <a
              className="flex justify-center items-center gap-2 font-mono text-xs font-medium text-muted-foreground py-2"
              href={`${config.siteUrl}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="size-6"
                src={`${config.siteUrl}/favicon.ico`}
                alt="Favicon"
              />
              <AnimatedShinyText>Built with GitFolio</AnimatedShinyText>
            </a>

         
          </div>
        </div>
      </div>
      <div className="pb-[env(safe-area-inset-bottom,0px)]">
        <div className="flex h-2" />
      </div>
    </footer>
  );
}
