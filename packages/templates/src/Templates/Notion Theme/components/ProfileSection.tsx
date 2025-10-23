import { PersonalInformation } from "@workspace/types";
import AnimatedSection from "../../components/AnimatedSection";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";

const ProfileSection = ({ data }: { data: PersonalInformation }) => {
  return (
    <AnimatedSection delay={0.1}>
      <div className="flex flex-col-reverse sm:flex-row justify-between gap-10 items-center">
        <div className="flex items-center sm:items-start  flex-col gap-2 sm:w-[80%]">
          <h2 className="text-2xl sm:text-4xl font-bold">
            Hello , I'm {data.full_name}
          </h2>
          <p className="sm:text-xl font-medium ">{data.tagline || "No tagline"}</p>
          <span className="max-w-sm sm:max-w-full text-sm sm:text-base text-muted-foreground text-justify sm:text-left">
            {data.bio || "No bio"}
          </span>
        </div>
        <div className="sm:w-[20%] mx-auto">
          <Avatar className="size-full">
            <AvatarImage src={data.profileImg} />
            <AvatarFallback>{data.full_name[0]}</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ProfileSection;
