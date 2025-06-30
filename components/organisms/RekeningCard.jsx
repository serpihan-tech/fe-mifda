"use client";

import { Montserrat, Raleway } from "next/font/google";
import { ArrowRight } from "iconsax-react";
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RekeningCard({
  iconSrc,
  title,
  percentageChange,
  amount,
  lastUpdated,
}) {
  const percentageColor = percentageChange.startsWith("-")
    ? "text-red-500"
    : "text-green-500";

  return (
    <div
      className="bg-[#f2fffa] rounded-xl shadow-sm p-6 flex flex-col justify-between items-start w-full hover:shadow-md transition-shadow duration-300"
    >
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0 mr-4">
          {iconSrc && (
            <Image src={iconSrc} alt={`${title} icon`} width={48} height={48} />
          )}
        </div>
        <div>
          <h2 className={`${montserrat.className} text-xl font-semibold text-gray-800`}>
            {title}
          </h2>
          <p className={`${montserrat.className} text-sm text-gray-700`}>
            <span className={`${percentageColor}`}>
              {percentageChange}
            </span>{" "}
            dari bulan lalu
          </p>
        </div>
      </div>

      <div className="mb-4 w-full">
        <p className={`${raleway.className} text-left text-[#115157] text-[35px] -mt-1.5 font-semibold`}>
          Rp. {amount.toLocaleString("id-ID")}
        </p>
      </div>

      <div className="flex justify-between items-center w-full">
        <div>
          <p className={`${montserrat.className} text-gray-500 text-sm`}>
            Diperbarui
          </p>
          <p className={`${montserrat.className} text-sm text-[#115157] font-semibold`}>
            {lastUpdated}
          </p>
        </div>
        <div className="bg-[#115157] rounded-full p-1 hover:bg-[#0e3d42] transition-colors">
          <ArrowRight size={24} color="#f9fbff" />
        </div>
      </div>
    </div>
  );
}
