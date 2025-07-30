import { Data as Templates } from "@workspace/templates/metadata"
import { TemplateData } from "@workspace/types"
export default async function Page({
  params,
}: {
  params: Promise<{ template: string }>
}) {
  const id = decodeURIComponent((await params).template)
  const template = Templates.filter((temp:TemplateData)=>temp.id==id)
  const Component = template[0]?.component
  return Component ? <Component /> : null
}