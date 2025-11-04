const TemplateRender = ({
  username,
  template,
}: {
  username: string;
  template?: string;
}) => {
  return template ? (
    <iframe
      src={`https://${username}.gitfolio.in`}
      className="h-full w-full rounded-md"
    />
  ) : (
    <>No Template Selected</>
  );
};

export default TemplateRender;
