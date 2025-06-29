"use client"
import { useIsMobile } from '@/hooks/use-mobile'
import { SignOutButton, useUser } from '@clerk/nextjs'
import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@workspace/ui/components/avatar'
import { Button } from '@workspace/ui/components/button'
import { DropdownMenuContent,DropdownMenu, DropdownMenuTrigger, DropdownMenuSeparator } from '@workspace/ui/components/dropdown-menu'
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@workspace/ui/components/sidebar'
import { Copy, Ellipsis, LogOut, MoveRight, MoveUpRight } from 'lucide-react'
import React from 'react'
import { useAuth } from '@clerk/nextjs'

const NavUser = () => {
    const isMobile = useIsMobile()
    const {user}= useUser()
    const {signOut}=useAuth()
  return (
    <SidebarMenu className='items-center'>
    <SidebarMenuItem  className='w-full  mb-1'>
        <SidebarMenuButton className='p-5  font-semibold' variant={"outline"} tooltip={"Copy Link"}>
            <Copy/>
            <span>Copy PortFolio Link</span>
        
        </SidebarMenuButton>
    </SidebarMenuItem>
    <SidebarMenuItem className='w-full ' >
        <SidebarMenuButton className='p-5 font-semibold bg-primary hover:bg-primary/80' variant={"outline"} tooltip={"Visit Portfolio"}>

            <MoveUpRight/>
            <span>Visit Your Portfolio</span>
            
        
        </SidebarMenuButton>
    </SidebarMenuItem>
        <SidebarMenuItem className='w-full'>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <SidebarMenuButton
                    size={"lg"}
                    >
                        <div className='flex justify-start w-full items-center gap-3'>
                        <Avatar className='aspect-square'>
                            <AvatarImage src={user?.imageUrl}/>
                            <AvatarFallback>{user?.firstName?.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div >
                            <p className="text-sm font-semibold">{user?.firstName}</p>
                            <p className="text-xs font-medium text-gray-500">{user?.username}</p>
                        </div>
                        </div>
                        <Ellipsis />
                    </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent side={isMobile?"top":"right"} sideOffset={15} className=''>
                    
                    <DropdownMenuItem>
                        <Button variant={"destructive"} size={"lg"} className='border-none'
                        onClick={()=>signOut()}
                        >
                            <LogOut/>
                            <span>Log Out</span>
                        </Button>
                        </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </SidebarMenuItem>
    </SidebarMenu>
  )
}

export default NavUser
