import React from "react";
import { DATA, Education } from "@workspace/types";
import { Dispatch, SetStateAction } from "react";
import { CommonCard } from "./CommonCard";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@workspace/ui/components/empty";
import { GraduationCap } from "@workspace/ui/icons";
const EducationSheetContent = ({
  data,
  setUser,
}: {
  data: Education[];
  setUser: Dispatch<SetStateAction<DATA>>;
}) => {
  if (data.length == 0)
    return (
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <GraduationCap />
          </EmptyMedia>
          <EmptyTitle>No Education Yet</EmptyTitle>
          <EmptyDescription>
            You haven&apos;t added any education yet. Get started by adding your
            first education.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    );
  return (
    <div className="space-y-2">
      {data.map((edu) => (
        <CommonCard
          dataType="Education"
          data={edu}
          key={edu.id}
          setUser={setUser}
        />
      ))}
    </div>
  );
};

export default EducationSheetContent;
