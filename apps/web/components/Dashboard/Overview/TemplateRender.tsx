import { Template1 } from '@workspace/templates'
import { DATA } from '@workspace/types'
const TemplateRender =({data}:{data:DATA}) => {
  return (
//  <Template1 data={data}/>
<iframe src='http://localhost:4000' className='h-full w-full rounded-2xl'/>
  )
}

export default TemplateRender
