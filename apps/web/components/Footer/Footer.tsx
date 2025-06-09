import React from 'react'
import { BentoGrid,BentoCard } from '@workspace/ui/components/magicui/bento-grid'
import SocialLinks from './SocialLinks';
import QuickLinks from './QuickLinks';
import { Ripple } from '@workspace/ui/components/magicui/ripple';
import { Code } from 'lucide-react';

const features = [
  {
    name: "",
    description: "",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1 min-h-64",
    background: (
     <SocialLinks/>
    ),
  },
  {
    name: "",
    description: "",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2 min-h-64 h-full",
    background: (
     <QuickLinks/>
    ),
  },
  {
    name: "",
    description: "",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-3 max-h-84",
    background: (
      <div className='relative flex justify-center items-center h-full w-full'>
       <Ripple />
       <div className="flex items-center space-x-5">
            <div className="w-32 h-32 rounded-3xl bg-white flex items-center justify-center">
              <Code className="w-24 h-24 text-black" />
            </div>
            <span className="text-9xl font- text-white bg-clip-text">
              GitFolio
            </span>
          </div>
      </div>
    ),
  },
 
];


const Footer = () => {
  return (
    <div className='relative max-w-7xl mx-auto max-h-screen my-10'>

    <BentoGrid className="h-full lg:grid-rows-2 ">
        {features.map((feature,index) => (
            <BentoCard key={index} {...feature}/>
        ))}
      </BentoGrid>
        </div>
  )
}

export default Footer
