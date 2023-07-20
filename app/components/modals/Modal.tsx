'use client'

import { useState, useEffect } from "react";

interface ModalProps {
  isOpen? : boolean;
  onClose : ()=>void;
  onSubmit: ()=>void ; 
  title : string ; 
  body : React.ReactElement ; 
  footer? : React.ReactElement ; 
  actionLabel? : string ; 
  disabled? : boolean ; 
  secondaryAction? : () => void ; 
  secondaryLabel? : () => void ; 
}


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
  secondaryLabel
})=> {

  const [setshowModal, setsetshowModal] = useState(isOpen)

  useEffect(() => {
    setsetshowModal(isOpen  )
  }, [isOpen])
  

  return (
    <div>Modal</div>
  )
}

export default Modal