import { config } from "@/config";
import { DATA } from "@workspace/types";
import { useEffect, useRef } from "react";

const TemplatePreview = ({ id, data }: { id: string; data: DATA | null }) => {
  const ref = useRef<HTMLIFrameElement>(null);
  useEffect(() => {
    console.log("RendererComponent re-rendered with data:", data);
    window.addEventListener("message", (event) => {
      if (event.origin !== config.renderer_url) return; // renderer origin
      if (event.data?.type === "RENDERER_READY") {
        if (ref.current) {
          ref.current.contentWindow?.postMessage(
            { type: "update-data", payload: data },
            config.renderer_url
          );
        }
      }
    });
    if (ref.current) {
      ref.current.contentWindow?.postMessage(
        { type: "update-data", payload: data },
        config.renderer_url
      );
    }
  }, [data]);

  const URL = `${config.renderer_url}/playground-renderer/${id}`;
  return (
    <iframe
      id="renderer-frame"
      ref={ref}
      className="p-1 rounded-lg  md:p-5 md:rounded-4xl"
      src={URL}
      title="Template Preview"
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default TemplatePreview;
