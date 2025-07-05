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
    variants === 'secondary' ? 
    'bg-[#146168] text-[#f2fffa] rounded-[10px] px-4 py-2 text-base font-semibold rounded-[10px] hover:shadow-[0px_0.5px_8px_0px_rgba(15,74,73,0.40)] outline outline-1 outline-offset-[-1px] outline-[#b1cacd]' :
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

