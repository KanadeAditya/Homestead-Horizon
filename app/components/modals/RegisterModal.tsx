'use client'

import React, { useState } from 'react'
import axios from 'axios'
import {AiFillGithub} from "react-icons/ai"
import {FcGoogle} from "react-icons/fc"
import {FieldValues, SubmitHandler , useForm} from "react-hook-form"
import useRegisterModel from '@/app/hooks/useRegisterModel'
import { error } from 'console'
import Modal from './Modal'
import Heading from '../Heading'
import Input from '../Input'
import { toast } from 'react-hot-toast'
import Button from '../Button'

const  RegisterModal =  ()=>{
    const registerModal = useRegisterModel();
    const [isLoading, setisLoading] = useState(false)

    const {
        register, 
        handleSubmit , 
        formState : {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues : {
            name: '',
            email: '',
            password: ''
        }
    }) // Zustand helps as we dont need to write form submisson code 

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setisLoading(true) // to let user know that screen is loading or for your own help 

        axios.post('/api/register',data)
        .then(()=>{
            registerModal.onClose()
        })
        .catch((error)=>{
            toast.error(error.message)
        })
        .finally(()=>{
            setisLoading(false)
        })
    }

    const bodyContent = (
        <div className='flex flex-col gap-3'>
            <Heading title='Welcome to Homestead Horizon'
            subtitle='Create an Account!'
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
                id='name'
                label='Name'
                disabled={isLoading}
                register={register}
                errors={errors}
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

    const footerContent = (
        <div className='flex flex-col gap-3 mt-3'>
            <hr className='border-blue-400' />
            <Button
            outline
            label='Continue With Google'
            icon={FcGoogle}
            onClick={()=>{}}
            /> 
            <Button
            outline
            label='Continue With Github'
            icon={AiFillGithub}
            onClick={()=>{}}
            /> 
            <div className='
                text-neutral-500
                text-center
                mt-4
                font-light
            '>
                <div className='text-center flex flex-row items-center gap-2'>
                   <div> Already have an account ?</div>
                   <div className='text-neutral-800 cursor-pointer hover:underline'>
                    Log In
                   </div>
                </div>
            </div>
        </div>
    )

  return (
   <Modal
    disabled={isLoading}
    isOpen={registerModal.isOpen}
    title="Register"
    actionLabel='Continue'
    onClose={registerModal.onClose}
    onSubmit={handleSubmit(onSubmit)}
    body={bodyContent}
    footer={footerContent}
   />
  )
}

export default RegisterModal