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
    <div className="md:col-span-1 lg:col-span-2 p-8">
        <header className='flex items-center gap-2 text-2xl'>
        <Layout className="size-8" />
          Portfolio Statistics
        </header>
        <div className="grid grid-cols-2 gap-10 text-center my-10">
               <div>
                 <div className="text-xl font-bold">{stats.repos}</div>
                 <p className=" text-muted-foreground">Total Repos</p>
               </div>
               <div>
                 <div className="text-xl font-bold">{stats.education}</div>
                 <p className=" text-muted-foreground">Total Education</p>
               </div>
               <div>
                 <div className="text-xl font-bold">{stats.experience}</div>
                 <p className=" text-muted-foreground">Total Experience</p>
               </div>
               <div>
                 <div className="text-xl font-bold">{stats.skills}</div>
                 <p className=" text-muted-foreground">Total Skills</p>
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
