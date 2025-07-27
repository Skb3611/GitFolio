"use client"
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Safari } from '@workspace/ui/components/magicui/safari'
import { Badge } from 'lucide-react'
import Image from 'next/image'
import {motion} from "motion/react"

const TemplateCard = ({template,idx}:{template:any,idx:number}) => {
  return (
    <motion.div
    variants={CardVariants}
    initial={idx%2==0?CardVariants.fromLeft.hidden:CardVariants.fromRight.hidden}
    whileInView={idx/2==0?CardVariants.fromLeft.visible:CardVariants.fromRight.visible}
    transition={{duration:0.5,delay:idx*0.1}}
    viewport={{once:true}}
    >
      
  <Card key={template.id} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm pt-0">
              <div className="p-4">
                <BrowserMockup url={`${template.title.toLowerCase().replace(/\s+/g, "")}.com`}>
                  <Image
                    src={ "/assets/webview.png"}
                    alt={template.title}
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover"
                    />
                </BrowserMockup>
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{template.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">{template.description}</CardDescription>
              </CardHeader>
            </Card>
                    </motion.div>
  )
}
function BrowserMockup({ children, url = "example.com" }: { children: React.ReactNode; url?: string }) {
  return (
   <motion.div
    whileHover={{scale:1.02,y:-5}}
    transition={{duration:0.2}}
   className="relative aspect-[16/10] overflow-hidden">
        {/* Browser Mockup Frame */}
        <div className="absolute inset-0 bg-transparent p-2">
          {/* Browser Top Bar */}
          <div className="flex items-center gap-2 bg-gray-100 rounded-t-lg px-3 py-2 mb-1">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
            <div className="flex-1 bg-white rounded px-2 py-1 text-xs text-gray-500 ml-2">
             {url}
            </div>
          </div>
          
          <div
          className="relative overflow-hidden rounded-b-lg" style={{ height: 'calc(100% - 40px)' }}>
           {children}
          </div>
        </div>
        </motion.div>
  )
}

export default TemplateCard

const CardVariants={
  fromLeft:{
    hidden:{
      opacity:0,
      x:-20,
      filter:"blur(8px)"
    },
    visible:{
      opacity:1,
      x:0,
      filter:"blur(0px)"
    }
  },
  fromRight:{
    hidden:{
      opacity:0,
      x:20,
      filter:"blur(8px)"
    },
    visible:{
      opacity:1,
      x:0,
      filter:"blur(0px)"
    }
  }
}