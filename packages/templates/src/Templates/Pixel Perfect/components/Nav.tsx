"use client";

import { Button } from "@workspace/ui/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import { cn } from "@workspace/ui/lib/utils";
type NavItem = {
  title: string;
  href: string;
};

export function MobileNav({
  items,
  className,
}: {
  items: NavItem[];
  className?: string;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={cn("group/toggle flex flex-col gap-1", className)}
          size="icon"
        >
          <span className="flex h-0.5 w-4 transform rounded-[1px] bg-foreground transition-transform group-data-[state=open]/toggle:translate-y-[3px] group-data-[state=open]/toggle:rotate-45" />
          <span className="flex h-0.5 w-4 transform rounded-[1px] bg-foreground transition-transform group-data-[state=open]/toggle:translate-y-[-3px] group-data-[state=open]/toggle:-rotate-45" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-64" align="end" sideOffset={8}>
        {items.map((link) => (
          <DropdownMenuItem key={link.href} asChild>
            <span onClick={() => scrollIntoView(link.href)}>{link.title}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export function DeskTopNav({ items }: { items: NavItem[] }) {
  return (
    <>
      <nav className={cn("sm:flex items-center gap-4 hidden")}>
        {items.map(({ title, href }) => {
          return (
            <span
              key={href}
              className={cn(
                "font-mono text-sm font-medium text-muted-foreground transition-all duration-300 cursor-pointer"
              )}
              onClick={() => scrollIntoView(href)}
            >
              {title}
            </span>
          );
        })}
      </nav>
    </>
  );
}
function scrollIntoView(elementId: string) {
  const element = document.querySelector(elementId);
  console.log(element);
  if (element) {
    const yOffset = -100;
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}
