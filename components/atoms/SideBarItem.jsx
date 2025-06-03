"use client";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// Komponen SidebarItem
export default function SidebarItem ({
  title,
  icon: Icon,
  colorIcon,
}) {
  return (
    <>
      <div
        className={`${montserrat.className} px-5 py-2 bg-[#f2fffa] inline-flex flex-col justify-start items-start gap-2.5`}
      >
        <button className="group self-stretch h-11 px-4 py-2 bg-[#f2fffa] hover:bg-[#146168] text-[#146168] hover:text-white rounded-2xl inline-flex justify-start items-center gap-2.5 transition-all duration-500 ease-in-out">
          <div className="flex justify-start items-center gap-5">
            <div className="flex items-center">
              <Icon
                size="25"
                className="mr-2 transition-colors duration-500 group-hover:text-white"
                variant="Bold"
                color="currentColor"
              />
            </div>
            <div className="justify-start  text-base font-semibold">
              {title}
            </div>
          </div>
        </button>
      </div>
    </>
  );
};