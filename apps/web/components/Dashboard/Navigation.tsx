import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@workspace/ui/components/dropdown-menu'
import { Button } from '@workspace/ui/components/button'
import { AnimatedShinyText } from '@workspace/ui/components/magicui/animated-shiny-text'
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@workspace/ui/components/sidebar'
import { ChevronsUpDown, Code } from 'lucide-react'
import React from 'react'
import { useRouter } from 'next/navigation'
import { useIsMobile } from '@/hooks/use-mobile'

const Navigation = ({navItems}:{navItems:{
    label:string,
    href:string,
    icon:React.ElementType
}[]}) => {
    const router = useRouter()
    const isMobile = useIsMobile()
  return (
    <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <div className=" rounded-lg bg-white items-center justify-center flex aspect-square size-8 ">
                    <Code className="w-5 h-5 text-black" />
                  </div>
                  <div>
                  <span className="text-lg font- text-white bg-clip-text">
                    GitFolio
                  </span>
                  </div>
                  <ChevronsUpDown className="ml-auto" />
               
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
               className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg border-sidebar-border border-1 p-2 flex justfy-center items-start flex-col gap-2"
               align="start"
               side={isMobile ? "bottom" : "right"}
               sideOffset={15}

              >
                <DropdownMenuLabel>
                    <AnimatedShinyText>
                        Navigation
                    </AnimatedShinyText>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="w-full"/>
                {navItems.map((item) => (
                
                  <DropdownMenuItem key={item.label} className="w-full p-0">
                    <Button
                    variant={"link"}
                      className="flex items-center gap-x-3 rounded-md p-0 text-sm"
                      onClick={()=>router.push(item.href,{scroll:false})}
                      >
                      <item.icon className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-400">{item.label}</span>
                    </Button>
                  </DropdownMenuItem>
                   
                     
                ))}

              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
  )
}

export default Navigation
