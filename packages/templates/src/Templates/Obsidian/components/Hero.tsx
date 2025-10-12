import { PersonalInformation } from "@workspace/types";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import AnimatedSection from "../../components/AnimatedSection";

const Hero = ({ data }: { data: PersonalInformation }) => {
  return (
    <AnimatedSection>
      <div className="pt-20 pb-8 space-y-5 border-b border-dashed">
        <div className="flex gap-5 items-center">
          <Avatar className="size-20">
            <AvatarImage src={data.profileImg} />
            <AvatarFallback>{data.full_name.split(" ")[0]}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-3xl font-doto font-bold">{data.full_name}</p>
            <p className="text-base font-normal text-neutral-500 font-jetbrains   ">
              @{data.username.toLocaleLowerCase()}
            </p>
          </div>
        </div>
        <div>
          <span className="text-xl font-normal font-figtree block text-left mx-0  mb-2">
            {data.tagline || "Add Tagline from Dashboard"}
          </span>
          <AnimatedShinyText className="text-base font-normal  font-figtree   ">
            {data.bio || "Add Bio from Dashboard"}
          </AnimatedShinyText>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Hero;
