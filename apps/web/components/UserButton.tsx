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

const UserButton = () => {
  const { user } = useUser()
  const {signOut} = useClerk()
//   console.log(user)
  return (
    <DropdownMenu>
        <DropdownMenuTrigger>
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
            <DropdownMenuSeparator />
            <DropdownMenuItem>
            <Button 
            className='w-full h-full text-red-500'
            variant={"link"}
            onClick={()=> signOut()}
            >
               <LogOut /> Sign Out
            </Button>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserButton
