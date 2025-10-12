import { Button } from '@workspace/ui/components/button'
import React from 'react'

const CommonButton = ({children,classname}:{children:React.ReactNode,classname?:string}) => {
  return (
    <Button
    size={"sm"}
    variant={"outline"}
    className={`w-full items-center cursor-pointer font-jetbrains hover:bg-background hover:border-red-600 ${classname}`}
    >{children}</Button>
  )
}

export default CommonButton
