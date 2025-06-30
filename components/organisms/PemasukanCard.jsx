"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import CardShadow from "../atoms/CardShadow";
import { ArrowRight } from "iconsax-react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function PemasukanCard() {
  return (
    <CardShadow bgColor="bg-[#146168]">
      <div className="w-full px-5 pt-5 flex space-x-4 items-center">
        <div className="rounded-full bg-[#f2fffa] w-20 h-20 flex items-center justify-center overflow-hidden">
          <Image
            src="/svg/pemasukan.svg"
            alt="pemasukan"
            width={72.11}
            height={59.75}
          />
        </div>
        <div className="space-y-2">
          <div className="self-stretch text-[#f2fffa] text-xl font-semibold">
            Pemasukan
          </div>
          <div className="self-stretch text-[#f2fffa] text-base font-normal">
            Oktober 2023
          </div>
        </div>
      </div>
      <div className="w-full pt-7 pb-5 text-[#f2fffa] text-[28px] font-semibold justify-center flex">
        Rp. 7.400.000
      </div>
      <hr color="#b1cacd" className="h-1/5" />
      <div className="self-stretch px-8 pt-7 pb-5 flex justify-between items-center">
        <button className="w-full flex px-5 py-2 self-stretch bg-[#f2fffa] rounded-[25px] shadow-[0px_0.5px_6px_0px_rgba(255,255,255,0.40)] justify-between items-center group">
          <div className="text-[#146168] text-base font-semibold">
            Lihat Detail
          </div>
          <div className="bg-[#115157] rounded-full p-1">
            <ArrowRight size={24} color="#f9fbff" />
          </div>
        </button>
      </div>
    </CardShadow>
  );
}
