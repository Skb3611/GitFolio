import { Button } from '@workspace/ui/components/button'
import { AnimatedShinyText } from '@workspace/ui/components/magicui/animated-shiny-text'
import { Code, Linkedin } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Meteors } from '@workspace/ui/components/magicui/meteors'


const SocialLinks = () => {
  return (
    <div className='relative p-4 sm:p-8 flex flex-col gap-4 justify-center items-start'>
        <Meteors/>
        <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
              <Code className="w-8 h-8 text-black" />
            </div>
            <span className="text-3xl font- text-white bg-clip-text">
              GitFolio
            </span>
          </div>
          <AnimatedShinyText className='text-lg'>
          Built for developers who’d rather code than design — we make your GitHub shine so you can focus on building.
          </AnimatedShinyText>
      <div className='flex w-full gap-3 items-start'>
        <Button 
        className='h-12 w-12 rounded-full cursor-pointer p-0'
        variant={'outline'}
        size={'default'}
        >
          <div className='bg-white rounded-2xl'>
            <Image
            src={'/icons/x.png'}
            height={30}
            width={30}
            alt='X'
            className=''
            />
            </div>
        </Button>
        <Button
        className='h-12 w-12 rounded-full cursor-pointer'
        variant={'outline'}
        size={'default'}
        >
         <Linkedin />
        </Button>
        <Button
        className='h-12 w-12 rounded-full cursor-pointer p-0'
        variant={'outline'}
        size={'default'}
        >
         <Image
            src={'/icons/github.png'}
            width={25}
            height={25}
            alt='github'
            />
        </Button>


      </div>
    </div>
  )
}

export default SocialLinks
