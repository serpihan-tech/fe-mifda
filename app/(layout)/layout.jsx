"use client"
import { useState } from "react";
import SideBar from "@/components/organisms/SideBar";

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true); // Tambahkan state ini

  return (
    <div className="flex min-h-screen">
      <SideBar
        isOpen={sidebarOpen}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />
      <main
        className={`bg-[#FAFAFA] dark:bg-dark_net-pri flex-1 transition-all duration-300 ease-in-out overflow-x-auto`}
      >
        <div
          className={`overflow-hidden z-10 fixed right-0 ${
            sidebarOpen
              ? "md:left-[200px] lg:left-[256px] "
              : "left-[22px] md:left-[62px] lg:left-[80px]"
          } transition-all duration-300 ease-in-out`}
        >
          {/* <DashboardHeader /> */}
        </div>

        <div
          className={`${
            sidebarOpen
              ? "ml-4 md:ml-[200px] lg:ml-[256px]"
              : "ml-[20px] md:ml-[60px] lg:ml-[80px]"
          } p-3 md:p-6 lg:p-10 mt-14 md:mt-16 lg:mt-[100px] transition-all duration-300 ease-in-out`}
        >
          {children}
        </div>
      </main>
    </div>
  );
}