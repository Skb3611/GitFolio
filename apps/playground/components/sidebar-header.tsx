import { Button } from "@workspace/ui/components/button";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import { Separator } from "@workspace/ui/components/separator";
import { SidebarTrigger } from "@workspace/ui/components/sidebar";

export function SiteHeader() {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 z-50">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
        <AnimatedShinyText>OnBoarding Process</AnimatedShinyText>
      </div>
    </header>
  );
}
