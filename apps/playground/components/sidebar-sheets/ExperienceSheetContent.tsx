import { DATA, Experience } from "@workspace/types";
import { Dispatch, SetStateAction } from "react";
import { CommonCard } from "./CommonCard";
import { EmptyDescription, EmptyMedia, EmptyTitle } from "@workspace/ui/components/empty";
import { EmptyHeader } from "@workspace/ui/components/empty";
import { Empty } from "@workspace/ui/components/empty";
import { BriefcaseBusiness } from "@workspace/ui/icons";

const ExperienceSheetContent = ({
  data,
  setUser,
}: {
  data: Experience[];
  setUser: Dispatch<SetStateAction<DATA>>;
}) => {
    if (data.length == 0)
    return (
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <BriefcaseBusiness/>
          </EmptyMedia>
          <EmptyTitle>No Experience Yet</EmptyTitle>
          <EmptyDescription>
            You haven&apos;t added any experience yet. Get started by adding your
            first experience.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    );
  return (
    <div className="space-y-2">
      {data.map((exp) => (
        <CommonCard
          dataType="Experience"
          data={exp}
          key={exp.id}
          setUser={setUser}
        />
      ))}
    </div>
  );
};

export default ExperienceSheetContent;
