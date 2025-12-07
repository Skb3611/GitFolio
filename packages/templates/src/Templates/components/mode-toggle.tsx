"use client";

import { SunIcon, MoonIcon } from "@workspace/ui/icons";
import { Button, buttonVariants } from "@workspace/ui/components/button";
import { useTheme } from "next-themes";
import { cn } from "@workspace/ui/lib/utils";
export function ModeToggle({
  variant = "ghost",
  classname
}: {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
    classname?:string
}) {
  const { theme, setTheme,resolvedTheme } = useTheme();
  
  const changeTheme=() => {
    console.log(theme,resolvedTheme)
    setTheme(theme === "dark" ? "light" : "dark")
  }


  return (
    <Button
      variant={variant}
      type="button"
      size="icon"
      className={cn(classname,"px-2")}
      onClick={changeTheme}
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:hidden dark:text-neutral-200" />
      <MoonIcon className="hidden h-[1.2rem] w-[1.2rem] text-neutral-800 dark:block dark:text-neutral-200" />
    </Button>
  );
}
