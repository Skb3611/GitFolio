import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import { config } from "../../../config";

const Footer = () => {
  return (
    <div className="w-full border-t flex justify-between items-center  py-2 px-5">
      <a href={config.siteUrl} className="w-full">
      <AnimatedShinyText className="flex items-center justify-center gap-2 text-sm sm:text-base">
        Built with GitFolio <img src={config?.siteUrl +"/assets/logo.png"} className="size-5" />
      </AnimatedShinyText>
      </a>
    </div>
  );
};

export default Footer;
