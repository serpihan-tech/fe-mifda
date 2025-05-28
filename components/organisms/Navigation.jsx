import Link from "next/link";
import "@/app/globals.css";
import { Montserrat } from 'next/font/google'

const montserrat =  Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

/**
 * @param {{ 
 *  variant: 'primary' | 'secondary', 
 *  label: string ,
 *  size: 'sm' | 'md' | 'lg'
 * }} props
 */
export function NavigationLabel(props) {
  const {
    variants,
    label
  } = props

  return (
    <Link>{label? label : "Label"}</Link>
  );
}
/*-------------------------------*/
/**
 * @param {{ 
 *  variant: 'primary' | 'secondary', 
 *  label: string ,
 *  size: 'sm' | 'md' | 'lg'
 * }} props
 */
export function NavigationContent(props) {
  const {
    variants,
    label
  } = props

  return (
    <Link>{label? label : "Label"}</Link>
  );
}
/*-------------------------------*/
/**
 * @param {{ 
 *  variant: 'primary' | 'secondary', 
 *  label: string ,
 *  size: 'sm' | 'md' | 'lg'
 * }} props
 */
export function NavigationMain(props) {
  const {
    variants,
    label
  } = props

  return (
    <div className={`w-full flex justify-center py-4 px-8 ${montserrat.className} font-bold`}>
      <div className="flex gap-4">
        <Link href={"/"}>{"Label"}</Link>
        <Link href={"/"}>{"Label"}</Link>
        <Link href={"/"}>{"Label"}</Link>
        <Link href={"/"}>{"Label"}</Link>
      </div>
    </div>
  )
}