import React from "react";
import { Template1 } from "./Templates";

type TemplateData = {
  slug:string
  title: string;
  description: string;
  thumbnail: string;
  component: React.FC;
};
export const Data: TemplateData[] = [
  {
    slug:"Template001",
    title: "Clean Professional Template",
    description: "Clean Professional template from magic ui",
    thumbnail: "",
    component: Template1,
  },
];
