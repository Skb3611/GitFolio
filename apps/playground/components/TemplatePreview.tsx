const TemplatePreview = ({ id, data }: { id: string; data?: string }) => {
  return (
    <iframe
      src={`/render-template/?id=${id}${data ? `&data=${data}` : ""}`}
      title="Template Preview"
      style={{ width: "100%", height: "85%" }}
    />
  );
};

export default TemplatePreview;
