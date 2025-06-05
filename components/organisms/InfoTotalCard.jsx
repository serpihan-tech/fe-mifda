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

export default function InfoTotalCard() {
  return (
    <CardShadow>
      <div className="w-full px-6 py-3">
        <div className="self-stretch text-[#146168] text-xl font-semibold">
          Jumlah Santri
        </div>
        <div className="self-stretch text-[#b0b3b3] text-base font-normal">
          Diperbarui 12 Oktober 2024
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2 flex">
          <Image
            src="/svg/santri-putra.svg"
            alt="santri putra"
            width={143.31}
            height={113.19}
          />
          <div className="self-stretch px-7 items-end gap-0.5">
            <div className="text-right text-[#115157] text-lg font-medium">
              Putra
            </div>
            <div
              className={`${raleway.className} text-right text-[#115157] text-[35px] -mt-1.5 font-semibold`}
            >
              625
            </div>
          </div>
        </div>
        <div className="border-r-2 border-[#b1cacd] h-[65px]"></div>
        <div className="w-1/2 flex">
          <div className="self-stretch px-7 items-end gap-0.5">
            <div className="text-left text-[#115157] text-lg font-medium">
              Putri
            </div>
            <div
              className={`${raleway.className} text-right text-[#115157] text-[35px] -mt-1.5 font-semibold`}
            >
              715
            </div>
          </div>
          <Image
            src="/svg/santri-putri.svg"
            alt="santri putra"
            width={143.31}
            height={113.19}
          />
        </div>
      </div>
    </CardShadow>
  );
}
