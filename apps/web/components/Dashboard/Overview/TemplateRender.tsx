
import { config } from '@/config'
import { DATA } from '@workspace/types'
const TemplateRender =({data,template}:{data:DATA,template?:string}) => {
return template ? (
<iframe src={`${config.renderer_endpoint}/${template}/${data.personalInfo.username}`} className='h-full w-full rounded-2xl'/>
  ):(
    <>No Template Selected</>
  )
}

export default TemplateRender
