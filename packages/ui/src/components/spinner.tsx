import { Loader2Icon } from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"

function Spinner({ className, state, ...props }: React.ComponentProps<"svg">&{state: "loading" | "pause" }) {
  return (
    <Loader2Icon
      role="status"
      aria-label="Loading"
      className={cn("size-4", state === "loading" && "animate-spin", className)}
      {...props}
    />
  )
}

export { Spinner }
