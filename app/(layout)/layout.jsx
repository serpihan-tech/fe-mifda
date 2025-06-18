"use client";
import DashboardHeader from "@/components/organisms/DashboardHeader";
import SideBar from "@/components/organisms/SideBar";

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-[200px_1fr] lg:grid-cols-[256px_1fr] min-h-screen">
      {/* Sidebar */}
      <aside className="bg-[#f2fffa]">
        <SideBar />
      </aside>

      {/* Main area */}
      <div className="grid grid-rows-[auto_1fr]">
        {/* Header */}
        <header className="h-[145px] sticky top-0 z-10">
          <DashboardHeader/>
        </header>

        {/* Content */}
        <main className="bg-[#f9fffb] ps-10 pe-12 overflow-auto pt-[2px]">
          {children}
        </main>
      </div>
    </div>
  );
}
