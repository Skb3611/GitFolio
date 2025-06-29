import { TabTypes } from "@/app/types/types";
import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import { Code2, Plus } from "lucide-react";
import React, { Dispatch, SetStateAction } from "react";

const SkillsCard = ({
  skills,
  setActiveTab
}: {
  skills?: string[];
  setActiveTab:Dispatch<SetStateAction<TabTypes>>
}) => {
  return <div className="p-8">
    <header className="flex justify-between items-center text-2xl">
        <h2 className="flex items-center text-2xl gap-2">
        <Code2/>
        <span>
        Skills 
        </span>
      
        </h2>
        <Button variant={"outline"} size={"sm"} onClick={()=>setActiveTab("Skills")}>
            Add more <Plus/>
        </Button>
    </header>
    <div className={`flex ${(skills && skills?.length > 0) && "justify-start items-start"} justify-center items-center flex-wrap space-x-3 space-y-3 my-5 w-full`}>
    {skills && skills.length>0 ?skills?.map((skill,idx)=>{
        return <Badge key={idx} variant={"default"} className="text-base rounded-xl px-4">
            {skill}
        </Badge>
    }):(
      <div className="text-center py-8 text-muted-foreground">
          <Code2 className="h-12 w-12 mx-auto mb-4 opacity-50" />
          <AnimatedShinyText className="flex flex-col">
          <span className="text-sm ">No Skills included in portfolio yet</span>
          <span className="text-xs ">
            Go to Skills tab to include some Skills
          </span>
          </AnimatedShinyText>
        </div>
    )
    }
    </div>
  </div>;
};

export default SkillsCard;
