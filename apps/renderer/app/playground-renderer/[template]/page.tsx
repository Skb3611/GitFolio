"use client";
import { useSearchParams } from "next/navigation";
import React, { use, useEffect, useState } from "react";
import { Data } from "@workspace/templates/metadata";
import { DATA } from "@workspace/types";
import { PLAYGROUND_URL } from "@/app/config";

const page = ({ params }: { params: Promise<{ template: string }> }) => {
  let { template } = use(params);
  const [data, setData] = useState<DATA | null>(null);
  useEffect(() => {
    window.parent.postMessage({ type: "RENDERER_READY" }, "*");
    const handler = (event: MessageEvent) => {
      if (event.origin !== PLAYGROUND_URL) return; // playground origin
      if (event.data?.type === "update-data") {
        setData({ ...event.data.payload });
      }
    };

    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);
  const Component = Data.filter((temp) => temp.id == template)[0]?.component;
  return Component && data ? (
    <Component data={data} />
  ) : (
    <>Something went wrong</>
  );
};

export default page;
