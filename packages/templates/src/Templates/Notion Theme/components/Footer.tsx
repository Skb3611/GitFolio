import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import { config } from "../../../config";

const Footer = ({ username }: { username: string }) => {
  return (
    <div className="space-y-2">
      <p className="text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} {username}. All rights reserved.
      </p>
      <a href={config.siteUrl} target="_blank">
        <div className="flex justify-center items-center gap-2 cursor-pointer">
          <img
            src={config.siteUrl + "/favicon.ico"}
            alt=""
            className="size-8"
          />
          <AnimatedShinyText className="mx-0 font-bold italic">
            Crafted by GitFolio
          </AnimatedShinyText>
        </div>
      </a>
    </div>
  );
};

export default Footer;
