"use client";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function CardShadow ({children}) {
  return (
    <div
      className={`${montserrat.className} h-[185px] bg-[#f2fffa] w-[530px] rounded-[20px] shadow-[2px_4px_6px_0px_rgba(162,221,217,0.25)] outline outline-[0.50px] outline-offset-[-0.50px] outline-[#a2dcd9]/50 z-10 overflow-hidden`}
    >
      {children}
    </div>
  );
}
