import { Experience, TabTypes } from "@/app/types/types";
import { dummyexperience } from "@/lib/dummy";
import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";
import React, { Dispatch, SetStateAction } from "react";

const ExperienceCard = ({ experience,setActiveTab }: { experience?: Experience[],setActiveTab:Dispatch<SetStateAction<TabTypes>> }) => {
  return (
    <div className="p-8">
      <header className="flex items-center justify-between">
        <h2 className="flex items-center gap-3 text-2xl">
          <BriefcaseBusiness />
          Experience
        </h2>
        <Button variant={"outline"} size={"sm"} onClick={()=>setActiveTab("Experience")}>
          View All <ArrowRight />
        </Button>
      </header>
      <div className="my-3 space-y-2">
        {experience && experience.length > 0 ? (
          experience.slice(0,2).map((exp: Experience) => {
            return (
              <div key={exp.id} className="w-full border rounded-lg p-2 px-4">
                <header>
                  <div className="flex items-center justify-between">
                    <span> {exp.company} </span>
                    <span className="text-xs ">
                      {" "}
                      {exp.start_date} - {exp.end_date}{" "}
                    </span>
                  </div>
                  <AnimatedShinyText className="text-sm">
                    {exp.role}{" "}
                  </AnimatedShinyText>
                </header>
                <div className="text-sm">{exp.description}</div>
              </div>
            );
          })
        ) : (
          <div className="text-center py-8 text-muted-foreground">
          <BriefcaseBusiness className="h-12 w-12 mx-auto mb-4 opacity-50" />
          <AnimatedShinyText className="flex flex-col">
          <span className="text-sm">No Experience included in portfolio yet</span>
          <span className="text-xs">
            Go to Experience tab to add some experiences
          </span>
          </AnimatedShinyText>
        </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
