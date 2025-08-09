import { Education, Experience } from "@workspace/types";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";

const CommonCard = ({ data }: { data: Experience | Education }) => {
  return (
    <div className="border-b last:border-b-0 pb-2">
      <div className="flex justify-between items-center">
        <div className="w-[90%] space-y-0.5">
          <h2 className="sm:text-lg font-medium">
            {"company" in data ? data.company : data.title}
          </h2>

          <p className="text-sm sm:text-base flex items-center gap-x-2 flex-wrap">
            {"role" in data ? data.role : data.institution}{" "}
            <span className="text-xs  text-muted-foreground">
              { data.start_date } -
              { data.end_date }
            </span>
          </p>
          <AnimatedShinyText className="text-xs md:text-sm">
            {data.description}
          </AnimatedShinyText>
        </div>
        <div className="hidden md:block">
          <Avatar className="size-12">
            <AvatarImage src={data.logo} />
            <AvatarFallback>
              {"company" in data ? data.company.split("")[0] : data.title.split("")[0]}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default CommonCard;
