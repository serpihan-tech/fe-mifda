"use client";

import { Montserrat, Raleway } from "next/font/google";
import Image from "next/image";
import CardShadow from "../atoms/CardShadow";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function StatusCard() {
  return (
    <CardShadow>
      <div className="w-full flex justify-between relative">
        <div className="px-6 py-3">
          <div className="text-[#146168] text-xl font-semibold">
            Status Santri
          </div>
          <div className="text-[#b0b3b3] text-base font-normal">
            Diperbarui 12 Oktober 2024
          </div>
        </div>
        <div className="absolute right-0">
          <Image src="/svg/leaf.svg" alt="" width={64} height={70}/>
        </div>
      </div>
      <div className="w-full flex px-6">
        <div className="w-1/3 flex">
          <div className="w-full px-5 items-end">
            <div className="text-left text-[#115157] text-lg font-medium">
              Aktif
            </div>
            <div
              className={`${raleway.className} text-left text-[#115157] text-[35px] -mt-1.5 font-semibold`}
            >
              625
            </div>
          </div>
          <div className="border-r-2 border-[#b1cacd] h-[65px]"></div>
        </div>
        <div className="w-1/3 flex">
          <div className="w-full px-5 items-end">
            <div className="text-center text-[#115157] text-lg font-medium">
              Cuti
            </div>
            <div
              className={`${raleway.className} text-center text-[#115157] text-[35px] -mt-1.5 font-semibold`}
            >
              625
            </div>
          </div>
          <div className="border-r-2 border-[#b1cacd] h-[65px]"></div>
        </div>
        <div className="w-1/3 flex">
          <div className="w-full px-5 items-end">
            <div className="text-right text-[#115157] text-lg font-medium">
              Boyong
            </div>
            <div
              className={`${raleway.className} text-right text-[#115157] text-[35px] -mt-1.5 font-semibold`}
            >
              715
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/svg/lantern.svg"
        alt=""
        width={52}
        height={42}
        className="-left-2 -mt-1"
      />
    </CardShadow>
  );
}
