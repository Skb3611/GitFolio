"use client"
import { Data } from "@workspace/templates/metadata";
import { use } from "react";

const page = ({
  searchParams,
}: {
  searchParams: Promise<{ id: string; data?: string }>;
}) => {
  const { id, data } = use(searchParams);
  console.log(id, data);
  const template = Data.filter((template) => template.id === id)[0];

  return template.component({ data });
};

export default page;
