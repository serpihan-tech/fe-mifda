"use client";

import { MoneyTime } from "iconsax-react";
import CardShadow from "../atoms/CardShadow";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function TunggakanCard() {
  return (
    <CardShadow>
      <div className={`${montserrat.className} w-full py-[14px]`}>
        <div className="w-full flex relative space-x-3 px-4">
          <MoneyTime size="24" variant="Bulk" color="#146168" />
          <div>
            <div className="text-[#146168] text-xl font-semibold">
              Menunggak
            </div>
            <div className="text-[#b0b3b3] text-base font-normal">
              Dalam 5 bulan terakhir
            </div>
          </div>
        </div>
        <div className="w-full mt-7 mb-5 space-y-4 px-4">
          <div className="w-full justify-between flex">
            <div className="text-Black text-lg font-medium">Oktober</div>
            <div className="px-4 py-1 bg-[#f9fbff] rounded-[15px] text-[#146168] text-lg font-bold outline outline-1 outline-offset-[-1px] outline-[#b1cacd] inline-flex flex-col justify-center items-center gap-2.5">
              12
            </div>
          </div>
          <div className="w-full justify-between flex">
            <div className="text-Black text-lg font-medium">September</div>
            <div className="px-4 py-1 bg-[#f9fbff] rounded-[15px] text-[#146168] text-lg font-bold outline outline-1 outline-offset-[-1px] outline-[#b1cacd] inline-flex flex-col justify-center items-center gap-2.5">
              12
            </div>
          </div>
          <div className="w-full justify-between flex">
            <div className="text-Black text-lg font-medium">Agustus</div>
            <div className="px-4 py-1 bg-[#f9fbff] rounded-[15px] text-[#146168] text-lg font-bold outline outline-1 outline-offset-[-1px] outline-[#b1cacd] inline-flex flex-col justify-center items-center gap-2.5">
              12
            </div>
          </div>
          <div className="w-full justify-between flex">
            <div className="text-Black text-lg font-medium">Juli</div>
            <div className="px-4 py-1 bg-[#f9fbff] rounded-[15px] text-[#146168] text-lg font-bold outline outline-1 outline-offset-[-1px] outline-[#b1cacd] inline-flex flex-col justify-center items-center gap-2.5">
              12
            </div>
          </div>
          <div className="w-full justify-between flex">
            <div className="text-Black text-lg font-medium">Juni</div>
            <div className="px-4 py-1 bg-[#f9fbff] rounded-[15px] text-[#146168] text-lg font-bold outline outline-1 outline-offset-[-1px] outline-[#b1cacd] inline-flex flex-col justify-center items-center gap-2.5">
              12
            </div>
          </div>
        </div>
        <hr 
         color="#a2dcd9"
         className="h-1/5"
        />
        <button className="w-full text-center text-[#115157] text-lg font-medium mt-3 px-4 flex justify-center items-center">
          Lihat Semua
        </button>
      </div>
    </CardShadow>
  );
}
