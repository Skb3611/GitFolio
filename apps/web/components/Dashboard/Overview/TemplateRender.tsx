
import { config } from '@/config'
import { DATA } from '@workspace/types'
const TemplateRender =({data}:{data:DATA}) => {
return (
<iframe src={`${config.renderer_endpoint}/a/${data.personalInfo.username}`} className='h-full w-full rounded-2xl'/>
  )
}

export default TemplateRender
