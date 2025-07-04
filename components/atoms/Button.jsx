import Text from "./Text"
import { ToastContainer, toast } from 'react-toastify';
import { createPortal } from "react-dom";

export default function Button(props) {
  const { 
    variants = 'primary', 
    label,
    children,
    notifyHandler,
    type="button"
  } = props

  const notify = notifyHandler ? notifyHandler : () => ('');

  const variantRef = (
    variants === 'primary' ? 
    'bg-[#146168] text-white rounded-full py-2 px-8 text-sm font-semibold' : 
    variants === 'inline-orange' ? 
    'bg-[#FDECCE] text-[#F49F0A] rounded-full py-2 px-8 text-sm font-semibold border border-[#FBDFAD]' :
    '')
  return (
    <>
    <button className={`${variantRef}`} onClick={notify} type={type}>
      <Text>
        {children ? children : "Button"}
      </Text>
    </button>
    <ToastContainer />
    </>
  )
}

