"use client";
import React from "react";
import { Data } from "@workspace/templates/metadata";
import {
  DATA
} from "@workspace/types";
import { NotFound } from "@workspace/ui/components/ui/not-found";

const Renderer = ({
  template,
  data,
}: {
  template: string;
  data: DATA;
}) => {

  const Template = Data.filter(
    (temp) => temp.id == decodeURIComponent(template)
  );
  const Component = Template[0]?.component as React.ComponentType<{
    data: DATA;
  }>;

  if (!Component) return <NotFound />;
  return data ? (
    <Component data={data} />
  ) : (
    <NotFound />
  );
};

export default Renderer;
