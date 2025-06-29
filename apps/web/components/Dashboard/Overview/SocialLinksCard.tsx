import { Facebook, Github, Instagram, Link, Linkedin, Twitter, Youtube } from 'lucide-react'
import React from 'react'
import { initialSocailLinks } from '@/lib/dummy'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"
import { SocialLinks } from '@/app/types/types'

const SocialLinksCard = ({links}:{links:SocialLinks}) => {
  return (
    <div className='p-8'>
      <header className='flex text-2xl gap-2'>
        <Link className="size-8" />
        Social Links
      </header>
      <div className='grid grid-cols-2 gap-5 my-10'>
        {Object.entries(links).map(([key, value]) => {

            return(
              <Tooltip key={key}>
                <TooltipTrigger>
              <p key={key} className='flex items-center gap-2 text-lg'>{icons[key as keyof typeof icons] } {key}</p>
                </TooltipTrigger>
                <TooltipContent>  
                  <p>{value.length==0? "No link":value}</p>
                </TooltipContent>
              </Tooltip>
            ) 
        })}
      </div>

    </div>
  )
}
``
export default SocialLinksCard

const icons={
    github: <Github/>,
    linkedin: <Linkedin/>,
    twitter: <Twitter/>,
    website: <Link/>,
    instagram: <Instagram/>,
    facebook: <Facebook/>,
    behance: <Link/>,
    youtube: <Youtube/>,
}
