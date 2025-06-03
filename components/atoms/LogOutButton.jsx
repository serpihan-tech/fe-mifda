"use client";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
// Komponen LogoutButton
export default function LogOutButton({
  title,
  icon: Icon,
  colorIcon,
  open = true,
  onConfirm,
}) {
  return (
    <div
      className={`${montserrat.className} px-5 py-2 bg-[#f2fffa] inline-flex flex-col justify-start items-start mt-10`}
    >
      <button className="group self-stretch h-11 px-4 py-2 bg-[#f2fffa] hover:bg-[#e40514] text-[#e40514] hover:text-white rounded-2xl inline-flex justify-start items-center gap-2.5 transition-all duration-300 ease-in-out">
        <div className="flex justify-start items-center gap-5">
          <div className="flex items-center">
            <Icon size="25" className="mr-2" variant="Bold" color="currentColor" />
          </div>
          <span className="transition-opacity font-semibold">
            {title}
          </span>
        </div>
      </button>
    </div>
  );
}
