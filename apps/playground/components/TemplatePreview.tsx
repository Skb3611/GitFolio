import { DATA } from "@workspace/types";

const TemplatePreview = ({ id, data }: { id: string; data: DATA | null }) => {
  const URL = `http://localhost:4000/playground-renderer/${id}?data=${encodeURIComponent(JSON.stringify(data))}`;
  return (
    <iframe
      className="p-5 rounded-4xl"
      src={URL}
      title="Template Preview"
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default TemplatePreview;
