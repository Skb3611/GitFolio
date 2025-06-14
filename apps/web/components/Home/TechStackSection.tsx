"use client"
import { useIsMobile } from '@/hooks/use-mobile'
import React from 'react'
import { OrbitingCircles } from '@workspace/ui/components/magicui/orbiting-circles'
import Image from 'next/image'
import { AnimatedShinyText } from '@workspace/ui/components/magicui/animated-shiny-text'

const TechStackSection = () => {
  const isMobile = useIsMobile()
  return (
    <div className='h-90 flex flex-col p-4 sm:p-8 justify-start items-center'>
      <div>

    <h2 className='w-full text-left text-lg sm:text-2xl z-10 '>Built with Modern Web Technologies</h2>
      <AnimatedShinyText className='z-10 text-sm sm:text-base w-full'>
      Using industry-standard tools like Next.js, Prisma, and Vercel to ensure speed, reliability, and scalability.
      </AnimatedShinyText>
      </div>
    <div className="absolute -bottom-10 blur-[.7px] opacity-50 flex h-full w-full flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles iconSize={isMobile?30:40} radius={70}>
        <Image src="/icons/nextjs.png" alt='nextjs' height={50}  width={50}/ >
        <Image src="/icons/prisma.png" alt='prisma' height={50}  width={50}/ >
        <Image src="/icons/clerk.png" alt='clerk' height={50}  width={50}/ >
      </OrbitingCircles>
      <OrbitingCircles iconSize={isMobile?30:40} radius={isMobile?120:150} reverse speed={2}>
        <Image src="/icons/github.png" alt='github' height={50}  width={50}/ >
        <Image src="/icons/magicui.png" alt='magicui' height={50}  width={50}/ >
        <Image src="/icons/shadcn.png" alt='shadcn' height={50}  width={50}/ >
        <Image src="/icons/turborepo.png" alt='turborepo' height={50}  width={50}/ >
      </OrbitingCircles>
    </div>
    </div>
  )
}


export default TechStackSection

