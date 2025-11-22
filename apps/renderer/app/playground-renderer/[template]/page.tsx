"use client";
import { useSearchParams } from "next/navigation";
import React, { use } from "react";
import { Data } from "@workspace/templates/metadata";

const page = ({ params }: { params: Promise<{ template: string }> }) => {
  let { template } = use(params);
  const searchParams = useSearchParams();
  const data = searchParams.get("data");
  const Component = Data.filter((temp) => temp.id == template)[0]?.component;
  return Component && <Component />;
};

export default page;
