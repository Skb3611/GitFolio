"use client";
import { Button } from '@workspace/ui/components/button'
import { ArrowLeft } from 'lucide-react'
import React from 'react'
import { useRouter } from 'next/navigation';
const BackHomeButton = () => {
    const router = useRouter()
  return (
    <Button variant={"outline"} className="absolute top-5 left-5" onClick={()=>router.push("/")} >
        <ArrowLeft/> Home
      </Button>
  )
}

export default BackHomeButton
