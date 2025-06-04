"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function DashboardHeader() {
  return (
    <div
      className={`${montserrat.className} w-full flex py-10 ps-[60px] pe-14 justify-between`}
    >
      <div className="space-y-1">
        <div className="text-black text-base font-medium">Welcome Back!,</div>
        <div className="text-black text-[35px] font-bold">Admin Maura</div>
      </div>
      <div className="flex items-center space-x-10">
        <button className="px-5 py-3 bg-[#146168] h-[46px] text-[#f9fbff] text-lg font-semibold rounded-[15px] inline-flex items-center">
          Periode 2024/2025
        </button>
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
