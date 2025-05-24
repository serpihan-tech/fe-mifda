/**
 * @param {{ 
 *  variant: 'primary' | 'secondary', 
 *  label: string ,
 *  size: 'sm' | 'md' | 'lg'
 * }} props
 */

export default function Button(props) {
  const { 
    variants, 
    label
  } = props

  return(
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {label? label : "Button"}
    </button>
  )
}

