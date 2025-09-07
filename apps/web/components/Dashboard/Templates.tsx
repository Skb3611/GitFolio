import React, { useEffect, useRef, useState } from "react";
import { Data } from "@workspace/templates/metadata";
import TemplateCard from "../TemplateCard";
import { SavePayload } from "@workspace/types";
import TemplatePage from "../TemplatePage";
import { Button } from "@workspace/ui/components/button";
import { MoveLeft } from "lucide-react";

const Templates = ({
  onSelect,
}: {
  onSelect: ({ type, data }: SavePayload) => void;
}) => {
  const [Template, setTemplate] = useState<string>();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // optional: adds smooth scrolling
    });
  }, [Template]);
  return (
    <div className="h-full w-full">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium">Select a Template</h3>
          <p className="text-sm  text-muted-foreground">
            Browse and select a template that pleases you !
          </p>
        </div>
        {Template && (
          <Button
            className="w-full sm:w-auto"
            onClick={() => setTemplate(undefined)}
          >
            <MoveLeft className="mr-2 h-4 w-4" />
            Back to Templates
          </Button>
        )}
      </div>
      {!Template ? (
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto ">
            {Data.map((template, idx) => {
              return (
                <TemplateCard
                  key={template.id}
                  template={template}
                  idx={idx}
                  setTemplate={setTemplate}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <>
          <TemplatePage templateId={Template} onSelect={onSelect} />
        </>
      )}
    </div>
  );
};

export default Templates;
