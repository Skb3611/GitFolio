"use client"
import React from 'react'
import { useUser,useClerk } from '@clerk/nextjs'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@workspace/ui/components/dropdown-menu"
  import {
    Avatar,
    AvatarImage,
    AvatarFallback,
  } from "@workspace/ui/components/avatar"
import { Button } from '@workspace/ui/components/button'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'

const UserButton = () => {
  const { user } = useUser()
  const {signOut} = useClerk()
//   console.log(user)
const router= useRouter()
  return (
    <DropdownMenu>
        <DropdownMenuTrigger className='outline-0'>
            <Avatar>
            <AvatarImage src={user?.imageUrl} />
            <AvatarFallback>
                {user?.firstName?.charAt(0) || user?.lastName?.charAt(0)}
            </AvatarFallback>
            </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='px-4'  side='bottom' align='end'>
            <DropdownMenuLabel>
              <div className='flex gap-5 justify-center items-center'>
              <Avatar>
            <AvatarImage src={user?.imageUrl} />
            <AvatarFallback>
                {user?.firstName?.charAt(0) || user?.lastName?.charAt(0)}
            </AvatarFallback>
            </Avatar>
            <div>
                <p>{user?.fullName}</p>
                <p>{user?.username}</p>
            </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator  />
            <div className='space-y-2'>

            <DropdownMenuItem className='p-0'>
              <Button variant={"default"} onClick={()=>router.push("/dashboard")} className='w-full h-full text-white'>
              Dashboard
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem className='p-0'>
            <Button 
            className='w-full h-full text-white '
            variant={"outline"}
            onClick={()=> signOut()}
            >
               <LogOut className='text-white' /> Sign Out
            </Button>
            </DropdownMenuItem>
            </div>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserButton
