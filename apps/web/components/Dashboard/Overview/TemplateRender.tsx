
import { DATA } from '@workspace/types'
const TemplateRender =({data,template}:{data:DATA,template?:string}) => {
return template ? (
<iframe src={`${data.personalInfo.username}.gitfolio.in`} className='h-full w-full rounded-2xl'/>
  ):(
    <>No Template Selected</>
  )
}

export default TemplateRender
