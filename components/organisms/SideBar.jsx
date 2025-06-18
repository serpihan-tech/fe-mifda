"use client";
import Image from "next/image";
import SidebarItem from "../atoms/SideBarItem";
import {
  Home3,
  ProfileAdd,
  WalletMinus,
  WalletAdd1,
  Cards,
  LogoutCurve,
} from "iconsax-react";
import LogOutButton from "../atoms/LogOutButton";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// Komponen Utama SideBar
export default function SideBar() {
  return (
    <>
      <div
        className={`${montserrat.className} w-56 lg:w-64 fixed bg-[#f2fffa] dark:bg-dark_net-ter min-h-screen transition-all duration-300 ease-in-out z-20`}
      >
        {/* Logo dan Judul */}
        <div className="flex gap-4 items-center justify-center pt-10 pb-8">
          <Image
            src="/svg/e-mifda.svg"
            alt="e-mifda"
            width={50}
            height={50}
            priority
          />
          <h1 className="text-[#146168] text-xl font-semibold transition-all duration-300 ease-in-out">
            e-mifda
          </h1>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col pb-3">
          {/* Dashboard */}
          <SidebarItem title="Dashboard" icon={Home3} url="/dashboard" />

          {/* Pendaftaran */}
          <SidebarItem
            title="Pendaftaran"
            icon={ProfileAdd}
            url="/pendaftaran"
          />

          {/* Pemasukan */}
          <SidebarItem title="Pemasukan" icon={WalletAdd1} url="/pemasukan" />

          {/* Pengeluaran */}
          <SidebarItem
            title="Pengeluaran"
            icon={WalletMinus}
            url="/pengeluaran"
          />

          {/* Rekening */}
          <SidebarItem title="Rekening" icon={Cards} url="/rekening" />

          {/* Logout */}
          <LogOutButton title="Logout" icon={LogoutCurve} colorIcon="#dc1010" />
        </div>
      </div>
    </>
  );
}
