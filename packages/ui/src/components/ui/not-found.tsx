import { Ripple } from "@workspace/ui/components/magicui/ripple";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import { Button } from "@workspace/ui/components/button";

export const NotFound = ({ title="No commit history for this page",code="404",desc="But don't worry - your perfect portfolio is just a click away!" }: { title?: string,code?:string,desc?:string }) => {
  return (
    <div className="min-h-[100dvh] min-w-full h-full w-full relative flex justify-center items-center overflow-hidden">
      <Ripple className="absolute" />
      <div className="space-y-2 flex flex-col justify-center items-center">
        <p className="text-3xl md:text-5xl lg:text-9xl text-center font-bold opacity-50">{code}</p>
        <p className="text-center text-xl md:text-3xl lg:text-5xl">{title}</p>
        <AnimatedShinyText className="text-center w-[80%] sm:w-auto text-sm md:text-lg lg:text-xl">
          {desc}
        </AnimatedShinyText>
        <a
          href="https://gitfolio.in/"
          className="w-full flex justify-center"
        >
          <Button
            className="cursor-pointer w-1/3"
            variant={"secondary"}
            size={"lg"}
          >
            Return Home
          </Button>
        </a>
      </div>
    </div>
  );
};
