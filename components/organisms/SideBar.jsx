"use client";
import Image from "next/image";
import SidebarItem from "../atoms/SideBarItem";
import {
  Home3,
  ProfileAdd,
  WalletMinus,
  WalletAdd1,
  Cards,
} from "iconsax-react";

// Komponen Utama SideBar
export default function SideBar({ isOpen, toggleSidebar }) {

  return (
    <>
      <div
        className={`w-56 lg:w-64 fixed bg-[#f2fffa] dark:bg-dark_net-ter min-h-screen transition-all duration-300 ease-in-out z-20`}
      >
        {/* Logo dan Judul */}
        <div
          className={`${
            isOpen ? "flex" : "hidden md:flex"
          } gap-4 items-center justify-center pt-10 pb-8`}
        >
          <Image
            src="/svg/e-mifda.svg"
            alt="e-mifda"
            width={50}
            height={50}
            priority
          />
          <h1
            className={`text-[#146168] text-xl font-semibold transition-all duration-300 ease-in-out ${
              !isOpen && "hidden"
            }`}
          >
            E-mifda
          </h1>
        </div>

        {/* Menu Items */}
        <div className={`${isOpen ? "flex" : "hidden md:flex"} flex-col pb-3`}>
          
          {/* Dashboard */}
          <SidebarItem
            title="Dashboard"
            icon={Home3}
            colorIcon="#146168"
            url="/dashboard"
            open={isOpen}
          />

          {/* Pendaftaran */}
          <SidebarItem
            title="Pendaftaran"
            icon={ProfileAdd}
            colorIcon="#146168"
            url="/pendaftaran"
            open={isOpen}
          />

          {/* Pemasukan */}
          <SidebarItem
            title="Pemasukan"
            icon={WalletAdd1}
            colorIcon="#146168"
            url="/pemasukan"
            open={isOpen}
          />

          {/* Pengeluaran */}
          <SidebarItem
            title="Pengeluaran"
            icon={WalletMinus}
            colorIcon="#146168"
            url="/pengeluaran"
            open={isOpen}
          />

          {/* Rekening */}
          <SidebarItem
            title="Rekening"
            icon={Cards}
            colorIcon="#146168"
            url="/rekening"
            open={isOpen}
          />
        </div>
      </div>
    </>
  );
}
