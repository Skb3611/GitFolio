import { Check, Github, Loader2, Send, ThumbsUp, X } from "@workspace/ui/icons";
import Image from "next/image";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@workspace/ui/components/input-group";
import { useState } from "react";
import { Button } from "@workspace/ui/components/button";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import { UserCard } from "@/components/UserCard";
import { DATA as USER_DATA } from "@workspace/types";

export function Onboarding({
  setState,
  setUser,
  user,
}: {
  setState: (state: State) => void;
  setUser: (user: USER_DATA) => void;
  user?: USER_DATA;
}) {
  const [step, setStep] = useState<"input" | "loading" | "success" | "error">(
    "input"
  );
  const [username, setUsername] = useState("");

  const handleSubmit = async () => {
    setStep("loading");
    try {
      let res = await fetch(`/api/v1/user/${username}`);
      const data = await res.json();
      if (data.status) {
        setStep("success");
        setUser(data.data);
        localStorage.setItem("user", JSON.stringify(data.data));
      } else {
        setStep("error");
      }
    } catch (e) {}
  };

  const handleReset = () => {
    setStep("input");
    setUsername("");
  };

  return (
    <div className="w-full max-w-md mx-auto my-auto">
      {/* Modal Container */}
      <div className="relative">
        {/* Input State */}
        {step === "input" && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="space-y-2">
              <div className="flex  relative items-center justify-center size-15 mx-auto">
                <Image src={"/github.png"} alt="" fill />
              </div>
              <h2 className="text-2xl font-bold text-foreground text-center">
                Connect GitHub
              </h2>
              <p className="text-center text-sm text-muted-foreground">
                Enter your GitHub username below
              </p>
            </div>

            <div className="space-y-4">
              <InputGroup className="rounded-full has-[[data-slot=input-group-control]:focus-visible]:border-white has-[[data-slot=input-group-control]:focus-visible]:ring-1 has-[[data-slot=input-group-control]:focus-visible]:ring-white/50">
                <InputGroupAddon>
                  <InputGroupButton
                    variant="secondary"
                    size="icon-xs"
                    className="rounded-full"
                  >
                    <Github />
                  </InputGroupButton>
                </InputGroupAddon>
                <InputGroupAddon className="text-muted-foreground pl-1.5">
                  https://github.com/
                </InputGroupAddon>
                <InputGroupInput
                  type="text"
                  placeholder="your-username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSubmit();
                    }
                  }}
                />
              </InputGroup>

              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  onClick={handleReset}
                  className="w-full bg-transparent"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleSubmit}
                  disabled={!username}
                  className="w-full playground-white-button"
                >
                  Connect
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Loading State */}
        {step === "loading" && (
          <div className="space-y-8 py-8 animate-in fade-in duration-300">
            <div className="text-center space-y-3">
              <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto" />
              <h2 className="text-xl font-semibold text-foreground">
                Fetching Details
              </h2>
              <p className="text-sm text-muted-foreground">
                Please wait while we sync your data...
              </p>
            </div>

            {/* Skeleton loader for preview */}
            <div className="space-y-3 animate-pulse">
              <div className="h-12 bg-muted rounded-lg" />
              <div className="h-4 bg-muted rounded-lg w-3/4 mx-auto" />
              <div className="h-4 bg-muted rounded-lg w-1/2 mx-auto" />
              <div className="grid grid-cols-2 gap-2">
                <div className="h-8 bg-muted rounded-lg" />
                <div className="h-8 bg-muted rounded-lg" />
              </div>
            </div>
          </div>
        )}

        {/* Success State */}
        {step === "success" && (
          <div className="space-y-4 text-center animate-in fade-in zoom-in duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 text-green-600 dark:text-green-400">
              <Check className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-foreground">Fetched!</h2>
              <AnimatedShinyText className="text-sm text-muted-foreground">
                Your details has been fetched successfully
              </AnimatedShinyText>
            </div>

            <UserCard user={user!} />

            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" onClick={handleReset}>
                Add Another
              </Button>
              <Button
                className="playground-white-button"
                onClick={() => setState("template-select")}
              >
                Continue
              </Button>
            </div>
          </div>
        )}

        {/* Error State */}
        {step === "error" && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-destructive/20 mx-auto">
              <X className="w-8 h-8 text-destructive" />
            </div>

            <div className="text-center space-y-2">
              <h2 className="text-xl font-bold text-foreground">Invalid URL</h2>
              <p className="text-sm text-muted-foreground">
                Please enter a valid GitHub URL in the format:
                github.com/username/repo
              </p>
            </div>

            <Button onClick={handleReset} className="w-full">
              Try Again
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
