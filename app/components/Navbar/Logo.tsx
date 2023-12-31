'use client'

import Image from "next/image"
import { useRouter } from "next/navigation"

function Logo() {
    const router = useRouter()

  return (
   <Image
        onClick={()=>router.push('/')}
        alt="Logo"
        className="hidden md:block cursor-pointer"
        height='100' 
        width='60' 
        src='/images/logo.png'  
     />
  )
}

export default Logo