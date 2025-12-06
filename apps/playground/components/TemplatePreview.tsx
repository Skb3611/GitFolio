import { config } from "@/config";
import { DATA } from "@workspace/types";
import { useEffect, useRef } from "react";

const TemplatePreview = ({ id, data }: { id: string; data: DATA | null }) => {
  const ref = useRef<HTMLIFrameElement>(null);
  useEffect(() => {
    console.log("RendererComponent re-rendered with data:", data);
    window.addEventListener("message", (event) => {
      if (event.origin !== "https://portfolio.gitfolio.in") return; // renderer origin
      if (event.data?.type === "RENDERER_READY") {
        if (ref.current) {
          ref.current.contentWindow?.postMessage(
            { type: "update-data", payload: data },
            "https://portfolio.gitfolio.in"
          );
        }
      }
    });
    if (ref.current) {
      ref.current.contentWindow?.postMessage(
        { type: "update-data", payload: data },
        "https://portfolio.gitfolio.in"
      );
    }
  }, [data]);

  const URL = `https://portfolio.gitfolio.in/playground-renderer/${id}`;
  return (
    <iframe
      id="renderer-frame"
      ref={ref}
      className="p-5 rounded-4xl"
      src={URL}
      title="Template Preview"
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default TemplatePreview;
