import { config } from "../../../config";
import { PersonalInformation } from "@workspace/types";
import {RainbowButton} from "@workspace/ui/components/magicui/rainbow-button"

export default function Footer({data}:{data:PersonalInformation}) {
  return (
    <footer className="py-10">
        
      <div className="self-stretch text-center justify-start text-zinc-400 text-base font-normal flex flex-col gap-5">
        <a href={config.siteUrl} target="_blank">
        <RainbowButton variant={"default"}>
            Powered by GitFolio <img src={config.siteUrl + "/favicon.ico"} alt="GitFolio" className="w-5 h-5"/>
        </RainbowButton>
        </a>
        Copyright © {new Date().getFullYear()} {data.full_name.split(" ")[0]}. <br />
        All rights reserved.
      </div>
    </footer>
  );
}
