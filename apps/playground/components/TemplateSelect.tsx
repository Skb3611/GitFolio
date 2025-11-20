import React from "react";
import { Data } from "@workspace/templates/metadata";
import Link from "next/link";
import { TemplateCard } from "./TemplateCard";  

const TemplateSelect = ({ setSelectedTemplateId }: { setSelectedTemplateId: (id: string) => void }) => {
  return (
    <div className="container mx-auto z-50 py-20 px-5">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-6">
        {Data.map((item, idx) => {
          return <TemplateCard key={idx} template={item} idx={idx} setSelectedTemplateId={setSelectedTemplateId} />;
        })}
      </div>
    </div>
  );
};

export default TemplateSelect;
