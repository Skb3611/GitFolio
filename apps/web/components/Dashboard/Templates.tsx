import React from 'react'
import { Data  } from '@workspace/templates/metadata'
import TemplateCard from '../TemplateCard'
import { SavePayload } from '@workspace/types'

const Templates = ({onSelect}:{onSelect:({ type, data }: SavePayload) => void}) => {
  return (
    <div className='h-full w-full'>
   <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium">Select a Template</h3>
          <p className="text-sm  text-muted-foreground">
            Browse and select a template that pleases you !
          </p>
        </div>
      </div>
       <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto ">
        {Data.map((template,idx)=>{
         return <TemplateCard key={template.id} template={template} idx={idx} onSelect={onSelect}/>
        })}
        </div>
        </div>
     
    </div>
  )
}



export default Templates
