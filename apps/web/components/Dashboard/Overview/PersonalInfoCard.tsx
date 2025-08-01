import { PersonalInformation } from '@workspace/types'
import { Avatar, AvatarFallback, AvatarImage } from '@workspace/ui/components/avatar'
import { AnimatedShinyText } from '@workspace/ui/components/magicui/animated-shiny-text'
import { AtSign, Info, Mail, MapPin, Rocket, User, User2, User2Icon, UserCircle2 } from 'lucide-react'
import React from 'react'
const personalInfo = {
  name: "John Doe",
  username: "johndoe",
  email: "",
  location: "New York, NY",
  bio: "I am a software engineer with 5 years of experience.",
  profilePicture: "",
}

const PersonalInfoCard = ({info}:{info:PersonalInformation}) => {
  return (
  <div className='p-4 md:p-8 h-full w-full'>
  <header className='mb-3'>
    <h2 className="text-lg md:text-2xl font-medium inline-flex items-center gap-2"><User className='size-8'/> Personal Information</h2>
  </header >
  <div className='flex flex-col justify-between gap-5 '>
    <div className='flex items-center gap-5'>
    <div>
    <Avatar className='md:size-30 size-20' >
        <AvatarImage src={info.profileImg} alt='profile'/>
        <AvatarFallback>
          <User2Icon className='md:size-20 size-10'/>
        </AvatarFallback>
    </Avatar>
    </div>
    <div className='space-y-1'>
        <span className='flex item-start gap-1.5'><User/><AnimatedShinyText className='text-left w-full mx-0 text-sm md:text-base my-auto'>{info.full_name.length==0 ? "Name...":info.full_name}</AnimatedShinyText></span>
        <span className='flex item-start gap-1.5'><AtSign /><AnimatedShinyText className='text-left w-full mx-0 text-sm md:text-base my-auto'>{info.username.length==0 ?"Username...":info.username}</AnimatedShinyText></span>
        <span className='flex item-start gap-1.5'><Mail /><AnimatedShinyText className='text-left w-full mx-0 text-sm md:text-base my-auto'>{info.email.length==0 ?"email...":info.email}</AnimatedShinyText></span>
        <span className='flex item-start gap-1.5'><MapPin /><AnimatedShinyText className='text-left w-full mx-0 text-sm md:text-base my-auto'>{info.location || "No location . . ."}</AnimatedShinyText></span>
    </div>
    </div>
    <footer className='space-y-1'>
        <span className='flex item-start gap-1.5'><Rocket /><AnimatedShinyText className='text-left w-full mx-0 text-sm md:text-base my-auto'>{info.tagline || "No Tagline added . . ."}</AnimatedShinyText></span>
        <span className='flex item-start gap-1.5'><Info /><AnimatedShinyText className='text-left w-full max-w-full mx-0 text-sm  my-auto'>{info.bio || "No bio added . . ."}</AnimatedShinyText></span>

    </footer>
  </div>
  </div>
  )
}

export default PersonalInfoCard
