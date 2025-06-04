"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Periode from "../atoms/Periode";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function DashboardHeader() {
  return (
    <div
      className={`${montserrat.className} w-full bg-[#f9fffb] h-[145px] flex py-10 ps-[60px] pe-14 justify-between`}
    >
      <div>
        <div className="text-black text-base font-medium">Welcome Back!,</div>
        <div className="text-black text-[35px] font-bold">Admin Maura</div>
      </div>
      <div className="flex items-center space-x-10">
        <Periode/>
        <Image 
            src="/svg/e-mifda.svg" 
            className="rounded-full w-15 h-15" 
            alt="photo" 
            width={60} 
            height={60} 
          />
      </div>
    </div>
  );
}
