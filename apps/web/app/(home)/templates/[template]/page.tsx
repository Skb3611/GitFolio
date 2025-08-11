import TemplatePage from "@/components/TemplatePage"

export default async function Page({params}:{params:Promise<{template:string}>}){
    const templateId = (await params).template 
    return <TemplatePage templateId={templateId}/>
}