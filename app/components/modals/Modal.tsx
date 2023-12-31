'use client'

import { useState, useEffect, useCallback } from "react";
import {IoMdClose} from 'react-icons/io'
import Button from "../Button";

interface ModalProps {
  isOpen? : boolean;
  onClose : ()=>void;
  onSubmit: ()=>void; 
  title? : string ; 
  body? : React.ReactElement ; 
  footer? : React.ReactElement ; 
  actionLabel? : string ; 
  disabled? : boolean ; 
  secondaryAction? : () => void ; 
  secondaryActionLabel? : string; 
}

/*
  This is a default Nodal will use this as a blueprint or foundation for all the components in our project
*/

const Modal : React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryActionLabel
})=> {

  const [ShowModal, setShowModal] = useState(isOpen) // For Managing state of isOpen basically to see if component is present in DOM or not 

  useEffect(() => {
    setShowModal(isOpen) //When isOpen is Updated we will update the whole DOM so we use useeffect
  }, [isOpen])
  
  const handleClose = useCallback(
    () => {
      if(disabled){
        return 
      }

      setShowModal(false) // to change the state of isOpen this will also trigger the useEffect and it will update the DOM
      
      setTimeout(() => {
        onClose();
        // This is for any animations to run while unmounting and onClose for a cleanup function 
      }, 300);
    },
    [disabled, onClose],
  )
  
  const handleSubmit = useCallback(
    () => {
      if(disabled){
        return 
      }

      onSubmit(); //to handle a Submit event if any
    },
    [disabled,onSubmit],
  )
  
  const handleSecondaryAction = useCallback(
    () => {
      if(disabled || !secondaryAction){
        return  // you need to check if there is even any secondary action if not than dont do anything
      }

      secondaryAction()
    },
    [disabled, secondaryAction],
  )
  
  if(!isOpen){
    return null  // if the isOpen is false then it says that this component should not be rendered in DOM so just return null 
    // This will help when useEffect refreshes the function 
  }

  return (
  <>
    <div className="
      justify-center
      items-center
      flex
      overflow-x-hidden
      overflow-y-auto
      fixed
      inset-0
      z-50
      outline-none
      focus:outline-none
      bg-neutral-800/70
    ">
      <div className="
        relative
        w-full
        md:w-4/6
        lg:w-3/6
        xl:w-2/5
        my-6
        mx-auto
        h-full
        lg:h-auto
        md:h-auto
      ">
        {/* Content */}
        <div className={`
          translate
          duration-300
          h-full
          ${ShowModal ? 'translate-y-0' : 'translate-y-full'} 
          ${ShowModal ? 'opacity-100' : 'opacity-0'} 
        `}>

          <div className="
            translate 
            h-full
            lg:h-auto
            md:h-auto
            border-0
            rounded-lg
            shadow-lg
            relative
            flex
            flex-col
            w-full
            bg-blue-100
            outline-none
            focus:outline-none
          ">
              {/* Header */}
              <div className="
                flex
                items-center
                p-6
                rounded-t
                justify-center
                relative
                border-b-[1px]
                border-blue-300
              ">
                <button 
                onClick = {handleClose}
                className="
                  p-1
                  border-0
                  hover:opacity-70
                  transition
                  absolute
                  left-9
                ">
                  <IoMdClose size={18}/>
                </button>
                  <div className="
                    text-lg text-blue-400
                    font-semibold
                  ">
                    {title}
                  </div>
              </div>
              <div className="
                relative
                p-6
                flex-auto
              ">
                {body}
              </div>
              {/* Footer */}
              <div className="
                flex
                flex-col
                gap-2
                p-6
              ">
                <div className="
                  flex
                  flex-row
                  items-center
                  gap-4
                  w-full
                ">

                  {secondaryAction && secondaryActionLabel && (
                    <Button 
                      disabled={disabled} 
                      label={secondaryActionLabel} 
                      onClick={handleSecondaryAction}
                      outline
                    />  
                  )}
                  <Button 
                    disabled={disabled} 
                    label={actionLabel} 
                    onClick={handleSubmit}
                  />
                </div>
                {footer}
              </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Modal