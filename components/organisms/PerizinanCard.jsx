"use client";

import { Notepad } from "iconsax-react";
import CardShadow from "../atoms/CardShadow";
import { Montserrat } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function PerizinanCard() {
  return (
    <CardShadow>
      <div className={`${montserrat.className} w-full py-[14px]`}>
        <div className="w-full flex relative space-x-3 px-4">
          <Notepad size="24" variant="Bulk" color="#146168" />
          <div>
            <div className="text-[#146168] text-xl font-semibold">
              Perizinan
            </div>
          </div>
        </div>
        <div className="w-full mt-7 mb-5 px-4">
          <div className="w-full justify-between items-center flex py-3">
            <div className="space-x-3 flex">
              <Image
                src="/svg/santri-icon.svg"
                alt="santri"
                width={50}
                height={50}
              />
              <div>
                <div className="text-[#121b1c] text-lg font-semibold">
                  Santriwati Izin
                </div>
                <div className="self-stretch text-[#888d8d] text-base font-normal">
                  Diperbarui 12 Oktober 2024
                </div>
              </div>
            </div>
            <div className="px-4 py-1 bg-[#f9fbff] rounded-[15px] text-[#146168] text-lg font-bold outline outline-1 outline-offset-[-1px] outline-[#b1cacd] inline-flex flex-col justify-center items-center gap-2.5">
              6
            </div>
          </div>
          <div className="w-full justify-between items-center flex py-3">
            <div className="space-x-3 flex">
              <Image
                src="/svg/santriwati-icon.svg"
                alt="santriwati"
                width={50}
                height={50}
              />
              <div>
                <div className="text-[#121b1c] text-lg font-semibold">
                  Santriwati Izin
                </div>
                <div className="self-stretch text-[#888d8d] text-base font-normal">
                  Diperbarui 12 Oktober 2024
                </div>
              </div>
            </div>
            <div className="px-4 py-1 bg-[#f9fbff] rounded-[15px] text-[#146168] text-lg font-bold outline outline-1 outline-offset-[-1px] outline-[#b1cacd] inline-flex flex-col justify-center items-center gap-2.5">
              4
            </div>
          </div>
        </div>
        <hr color="#a2dcd9" className="h-1/5" />
        <button className="w-full text-center text-[#115157] text-lg font-medium mt-3 px-4 flex justify-center items-center">
          Lihat Semua
        </button>
      </div>
    </CardShadow>
  );
}
