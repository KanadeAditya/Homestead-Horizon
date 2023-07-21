'use client'

import React, { useCallback, useState } from 'react'
import axios from 'axios'
import {signIn} from 'next-auth/react'
import {AiFillGithub} from "react-icons/ai"
import {FcGoogle} from "react-icons/fc"
import {FieldValues, SubmitHandler , useForm} from "react-hook-form"
import useRegisterModel from '@/app/hooks/useRegisterModel'
import Modal from './Modal'
import Heading from '../Heading'
import Input from '../Inputs/Input'
import { toast } from 'react-hot-toast'
import Button from '../Button'
import useLoginModal from '@/app/hooks/useLoginModal'
import { useRouter } from 'next/navigation'

const  LoginModal =  ()=>{
    const registerModal = useRegisterModel();
    const loginModal = useLoginModal();
    const [isLoading, setisLoading] = useState(false)
    const router = useRouter()

    const {
        register, 
        handleSubmit , 
        formState : {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues : {
            email: '',
            password: ''
        }
    }) // Zustand helps as we dont need to write form submisson code 

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setisLoading(true) // to let user know that screen is loading or for your own help 
        // console.log(data)
        signIn('credentials',{
            ...data,
            redirect:false
        })
        .then((callback)=>{
            setisLoading(false)

            if(callback?.ok){
                toast.success('Logged In')
                router.refresh();
                loginModal.onClose()
            }

            if(callback?.error){
                toast.error(callback.error);
            }
        })
    }

    const bodyContent = (
        <div className='flex flex-col gap-3'>
            <Heading title='Welcome back !'
            subtitle='Login to your account.'
            />
            <Input
                id='email'
                label='Email'
                disabled={isLoading}
                register={register}
                errors={errors}
                type='email' 
                required
            />
            <Input
                id='password'
                type='password'
                label='Password'
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
        </div>
    )
    
    const onToggle = useCallback(() => {
        loginModal.onClose();
        registerModal.onOpen();
      }, [loginModal, registerModal])
    

    const footerContent = (
        <div className='flex flex-col gap-3 mt-3'>
            <hr className='border-blue-400' />
            <Button
            outline
            label='Continue With Google'
            icon={FcGoogle}
            onClick={()=>signIn("google")}
            /> 
            <Button
            outline
            label='Continue With Github'
            icon={AiFillGithub}
            onClick={()=>signIn("github")}
            /> 
            <div className='
                text-neutral-500
                text-center
                mt-4
                font-light
            '>
                <div className='text-center flex flex-row items-center gap-2'>
                   <div> First Time using Homestead ?</div>
                   <div onClick={onToggle} className='text-neutral-800 cursor-pointer hover:underline'>
                    Sign Up
                   </div>
                </div>
            </div>
        </div>
    )

  return (
   <Modal
    disabled={isLoading}
    isOpen={loginModal.isOpen}
    title="Login"
    actionLabel='Continue'
    onClose={loginModal.onClose}
    onSubmit={handleSubmit(onSubmit)}
    body={bodyContent}
    footer={footerContent}
   />
  )
}

export default LoginModal