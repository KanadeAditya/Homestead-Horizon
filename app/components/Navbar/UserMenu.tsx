'use client'

import {AiOutlineMenu} from 'react-icons/ai'
import Avatar from '../Avatar'
import { useCallback, useState } from 'react'
import MenuItem from './MenuItem'
import useRegisterModel from '@/app/hooks/useRegisterModel'
import useLoginModal from '@/app/hooks/useLoginModal'
import LoginModal from '../Modals/LoginModal'
import {User} from '@prisma/client'
import { signOut } from 'next-auth/react'
import { SafeUser } from '@/app/types'

interface UserMenuProps{
  currentUser? : SafeUser | null
}

const UserMenu: React.FC<UserMenuProps> = ({
  currentUser
}) => {
    const [isOpen, setisOpen] = useState(false)
    const registerModal = useRegisterModel()
    const loginModal = useLoginModal()
    const toggleOpen = useCallback(
      () => {
        setisOpen((value)=> !value)
      },
      [],
    )
    

  return (
    <div className='relative'>
        <div className='
            flex
            flex-row
            items-center
            gap-3
        '>
             <div 
             onClick={()=>{}}
              className='
             hidden
             md:block
             text-sm
             font-semibold
             py-3
             px-4
             rounded-full
             bg-blue-100
             hover:bg-blue-200
             cursor-pointer
             text-blue-400
             '>
                Become A Host 
             </div>
             <div
             onClick={toggleOpen}
             className='
                p-4
                md:py-1md:px-2
                border-[1px]
                border-blue-200
                flex
                flex-row
                items-center
                gap-3
                rounded-full
                cursor-pointer
                hover:shadow-md
                transition
             '>
                <AiOutlineMenu />
                <div className='hidden md:block'>
                    <Avatar src={currentUser?.image}/>
                </div>
             </div>
        </div>

        {isOpen && (
            <div className='
                absolute
                rounded-xl
                shadow-md
                w-[40vw]
                md:w-3/4
                bg-blue-300
                overflow-hidden
                right-0
                top-12
                text-sm
            '>
                <div className='flex flex-col cursor-pointer'>
                   {currentUser ? (
                     <>
                     <MenuItem
                        onClick={()=>{}}
                        label='My Trips'
                     />
                     <MenuItem
                        onClick={()=>{}}
                        label='My Favorites'
                     />
                     <MenuItem
                        onClick={()=>{}}
                        label='My Reservations'
                     />
                     <MenuItem
                        onClick={()=>{}}
                        label='My Properties'
                     />
                     <MenuItem
                        onClick={()=>{}}
                        label='Become A Host'
                     />
                     <hr className='border-blue-400' />
                     <MenuItem
                        onClick={()=> signOut()}
                        label='LogOut'
                     />
                    </>
                   ) : (
                    <>
                    <MenuItem
                       onClick={loginModal.onOpen}
                       label='Login'
                    />
                    <MenuItem
                       onClick={registerModal.onOpen}
                       label='Signup'
                    />
                   </>
                   )}
                </div>
            </div>
        )}

    </div>
  )
}

export default UserMenu