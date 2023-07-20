'use client'

import React from 'react'
import {BiSearch} from 'react-icons/bi'

export default function Search() {
  return (
    <div
        className='
            border-[1px]
            w-full
            md:w-auto
            py-2
            rounded-full
            shadow-sm
            hover:shadow-md
            transition
            cursor-pointer
        '
    >
        <div 
        className='
            flex
            flex-row
            items-center
            justify-between
        '>
            <div
            className='
                text-sm
                text-blue-100
                font-semibold
                px-6
            '>
                    Anywhere
            </div>
            <div
            className='
                hidden
                sm:block
                text-sm
                text-blue-100
                font-semibold
                px-6
                border-x-[1px]
                flex-1
                text-center
            '>
                  Any Week
            </div>
            <div
            className='
                text-sm
                pl-6
                pr-2
                font-semibold
                text-blue-300
                flex
                flex-row
                items-center
                gap-3
            '>
                <div className='
                    hidden
                    sm:block
                '>
                    Add Guests
                </div>
                <div className='
                    p-2
                    bg-blue-200
                    rounded-full
                    text-primary
                '>
                    <BiSearch size={18}/>
                </div>
            </div>

        </div>
    </div>
  )
}
