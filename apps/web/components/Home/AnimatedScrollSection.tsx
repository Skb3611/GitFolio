import React, { useRef } from 'react'
import {motion, useMotionValueEvent, useScroll, useTransform } from "motion/react"
import { Safari } from '@workspace/ui/components/magicui/safari'
import { useIsMobile } from '@/hooks/use-mobile'
const AnimatedScrollSection = () => {
    const isMobile = useIsMobile()
    const ref = useRef<HTMLDivElement>(null)
    const {scrollYProgress}= useScroll({
        target:ref,
        offset: ["start end", "end start"]
    })
useMotionValueEvent(scrollYProgress,"change", (latest:number)=>{
})
const setScale=() => {
  return isMobile ? [0.8,1]:[0.8,1.05]
}
const setTranslateY=() => {
  return isMobile ? [0,100]:[0,200]
}
const setRotateX=() => {
  return isMobile ? [20,0]:[12,0]
}

const rotateX = useTransform(scrollYProgress,[0,0.5],setRotateX())
const scale = useTransform(scrollYProgress,[0,0.2],setScale())
const translateY = useTransform(scrollYProgress,[0,0.7],setTranslateY())
  return (
    <motion.div
    initial={{
      opacity:0,
      y:20,
      filter:"blur(5px)"
    }}
    animate={{
      opacity:1,
      y:0,
      filter:"blur(0px)"
    }}
    transition={{
      duration:0.3,
      delay:0.1
    }}
    ref={ref} 
    className='[perspective:300px] [transform-style:preserve-3d] md:-mt-10 mb-20 '>
     <motion.div
     
      style={{
          rotateX:rotateX,
          scale,
          translateY
        }}
        
        className="mt-20 mb-10 relative md:rounded-xl   z-20"
        >
          <Safari
          
          url="https://gitfolio.example"
          mode="simple"
          videoSrc="https://magicui.design/portfolio-demo.mp4"
          className="size-full rounded-b-sm md:rounded-b-xl max-w-full md:max-w-6xl"
          height={650}
          />
        </motion.div>
          </motion.div>
  )
}

export default AnimatedScrollSection
