import { AnimatedShinyText } from '@workspace/ui/components/magicui/animated-shiny-text'
import { Globe } from '@workspace/ui/components/magicui/globe'
import React from 'react'

const GlobeSection = () => {
  return (
    <div className='relative w-full h-96 flex flex-col overflow-hidden p-8'>
        <Globe className='absolute translate-y-48 h-full w-full '/>
        <h1 className='text-2xl '>Resume That Travels With You</h1>
        <AnimatedShinyText>
        Choose a theme, and GitFolio instantly turns your GitHub profile into a professional resume—no code, no stress.<br/>
        Your resume is globally accessible and easy to share with a personal link.
        </AnimatedShinyText>
<div className='w-48 h-48'>
</div>
    </div>
  )
}

export default GlobeSection
