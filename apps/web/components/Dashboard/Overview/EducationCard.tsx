import { Education, TabTypes } from '@/app/types/types'
import { Button } from '@workspace/ui/components/button'
import { AnimatedShinyText } from '@workspace/ui/components/magicui/animated-shiny-text'
import { ArrowRight, GraduationCap, MoveRight } from 'lucide-react'
import React, { Dispatch, SetStateAction } from 'react'

const EducationCard = ({education,setActiveTab }:{education?:Education[],setActiveTab:Dispatch<SetStateAction<TabTypes>>}) => {
  return (
    <div className='md:p-8 p-4'>
      <header className='flex items-center justify-between'>
        <h2 className='flex items-center gap-3 md:text-2xl text-lg'>
          <GraduationCap/>
          Education
        </h2>
        <Button variant={"outline"} size={"sm"} className='text-xs md:text-sm' onClick={()=>setActiveTab("Education")}>
        View All <MoveRight />
        </Button>
      </header>
      <div className='space-y-2 my-3'>
        {
          education && education.length > 0 ? 
          education?.slice(0,2).map((edu:Education)=>{
            return <div key={edu.id} className="w-full border rounded-lg p-2 px-4">
              <header>
                <div className="flex items-center justify-between">
                  <span className='text-sm md:text-base'> {edu.title} </span>
                  <span className='text-xs'>{edu.start_date } - {edu.end_date} </span>
                </div>
                <AnimatedShinyText>
                <span className='text-sm md:text-base'>{edu.institution} </span>
                </AnimatedShinyText>
              </header>
              <p className='text-xs md:text-sm'>
                {edu.description.split(" ").slice(0,4).join(" ")  } . . . 
              </p>
            </div>
          }):
          <div className="text-center py-8 text-muted-foreground">
          <GraduationCap className="h-12 w-12 mx-auto mb-4 opacity-50" />
          <AnimatedShinyText className='flex flex-col'>
          <span className="text-sm">No Education included in portfolio yet</span>
          <span className="text-xs">
            Go to Education tab and add some
          </span>
          </AnimatedShinyText>
        </div>
        }
      </div>
    </div>
  )
}

export default EducationCard
