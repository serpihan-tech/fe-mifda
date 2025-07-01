import { Montserrat, Raleway, Righteous } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const righteous = Righteous({
  subsets: ["latin"],
  weight: ["400"],
})

export default function Text(props) {
  const { 
    children,
    font = "montserrat",
    type,
    className
  } = props

  const fontRef = font === "montserrat" ? montserrat : font === "raleway" ? raleway : righteous

  return(
    type === "h1" ?
    <h1 className={`${fontRef.className} ${className}`}>{children}</h1>
    :
    type === "h2" ?
    <h2 className={`${fontRef.className} ${className}`}>{children}</h2>
    :
    type === "h3" ?
    <h3 className={`${fontRef.className} ${className}`}>{children}</h3>
    :
    type === "h4" ?
    <h4 className={`${fontRef.className} ${className}`}>{children}</h4>
    :
    type === "h5" ?
    <h5 className={`${fontRef.className} ${className}`}>{children}</h5>
    :
    type === "h6" ?
    <h6 className={`${fontRef.className} ${className}`}>{children}</h6>
    :
    <p className={`${fontRef.className} ${className}`}>{children}</p>
  )
}