import React from 'react'
import {  Layout } from 'lucide-react'

const StatsCard = ({stats}:{
  stats:{
    repos:number
    education:number,
    experience:number,
    skills:number
  }
}) => {
  return (
    <div className="md:col-span-1 lg:col-span-2 md:p-8 p-4">
        <header className='flex items-center gap-2 text-lg   mg:text-2xl'>
        <Layout className="size-8" />
          Portfolio Statistics
        </header>
        <div className="grid grid-cols-2 md:gap-10 gap-y-10 gap-x-5  text-center my-10">
               <div>
                 <div className="md:text-xl text-base font-bold">{stats.repos}</div>
                 <p className=" text-muted-foreground text-sm md:text-base">Total Repos</p>
               </div>
               <div>
                 <div className="md:text-xl text-base font-bold">{stats.education}</div>
                 <p className=" text-muted-foreground text-sm md:text-base">Total Education</p>
               </div>
               <div>
                 <div className="md:text-xl text-base font-bold">{stats.experience}</div>
                 <p className=" text-muted-foreground text-sm md:text-base">Total Experience</p>
               </div>
               <div>
                 <div className="md:text-xl text-base font-bold">{stats.skills}</div>
                 <p className=" text-muted-foreground text-sm md:text-base">Total Skills</p>
               </div>
             </div>
             {/* <footer className='w-full flex justify-center'>
                <Button className='w-2/3'>
                    Sync Now
                </Button>
             </footer> */}
    </div>
  )
}

export default StatsCard
