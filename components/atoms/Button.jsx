/**
 * @param {{ 
 *  variant: 'primary' | 'secondary', 
 *  label: string ,
 *  size: 'sm' | 'md' | 'lg'
 * }} props
 */

import Text from "./Text"

export default function Button(props) {
  const { 
    variants = 'primary', 
    label,
    children
  } = props
  const variantRef = (
    variants === 'primary' ? 
    'bg-[#146168] text-white rounded-full py-2 px-8 text-sm font-semibold' : 
    variants === 'inline-orange' ? 
    'bg-[#FDECCE] text-[#F49F0A] rounded-full py-2 px-8 text-sm font-semibold border border-[#FBDFAD]' :
    '')
  return(
    <button className={`${variantRef}`}>
      <Text>
        {children ? children : "Button"}
      </Text>
    </button>
  )
}

