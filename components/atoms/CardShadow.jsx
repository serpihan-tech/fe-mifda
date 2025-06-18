"use client";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function CardShadow ({bgColor="bg-[#f2fffa]", children}) {
  return (
    <div
      className={`${montserrat.className} ${bgColor} rounded-[20px] shadow-[2px_4px_6px_0px_rgba(162,221,217,0.25)] outline outline-[0.50px] outline-offset-[-0.50px] outline-[#a2dcd9]/50 overflow-hidden flex-grow`}
    >
      {children}
    </div>
  );
}
