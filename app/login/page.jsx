"use client"
import "@/app/globals.css";
import { BarsArrowDown } from "@/components/icons/BarsArrowDown";
import Image from "next/image";
import BannerBot from "@/public/images/banner-bottom.webp"
import BannerTop from "@/public/images/banner-top.webp"
import { Montserrat } from "next/font/google";
import Link from "next/link";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Page() {
  return (
    <div className={`${montserrat.className} w-full h-full bg-gradient-4-green relative`}>
      <Image 
        src={BannerBot}
        alt="banner-bottom"
        width={100}
        height={100}
        sizes="100vw"
        className="w-full object-cover bottom-0 absolute z-1"
      />
      <Image 
        src={BannerTop}
        alt="banner-top"
        width={100}
        height={100}
        sizes="100vw"
        className="w-full object-cover top-0 absolute z-1"
      />
      <div className="absolute w-full flex justify-end items-center px-8 py-4">
        <button>
          <BarsArrowDown/>
        </button>
      </div>
      <div className="w-full h-dvh p-8 pb-8 flex flex-col items-center justify-center">
        <div className="bg-white w-full h-full rounded-lg text-[#1E1E1E] px-4 py-6 flex flex-col max-h-[480px] max-w-[450px]">
          <div className="w-full text-center mb-4">
            <div className="text-2xl font-bold mb-2">Selamat Datang</div>
            <div className="font-medium">Silahkan login dengan akun anda miliki</div>
          </div>
          <form className="flex flex-col justify-between w-full grow" action="">
            <div className="flex flex-col font-medium gap-2">
              <div className="flex flex-col-reverse gap">
                <input 
                  type="text" 
                  name="email" 
                  id="email" 
                  className="text-gray-300 border px-2 py-1 rounded text-sm" placeholder="olivia@example.com"
                />
                <label htmlFor="email" className="text-neutral-600 text-sm">Email</label>
              </div>
              <div className="flex flex-col-reverse gap">
                <input 
                  type="password" 
                  name="password" 
                  id="password" 
                  className="text-gray-300 border px-2 py-1 rounded text-sm"
                  placeholder="********"
                />
                <label htmlFor="password" className="text-neutral-600 text-sm">Password</label>
              </div>
              <div className="flex gap-2 w-full justify-end">
                <input 
                  type="checkbox" 
                  name="remember-me" 
                  id="remember-me" 
                  className="text-gray-300 border px-2 py-1 rounded text-sm"
                  value={true}
                  checked
                />
                <label htmlFor="remember-me" className="text-neutral-600 text-xs">Remember Me?</label>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center gap-2">
              <div className="text-center text-sm font-medium">Login As</div>
              <div className="flex w-full justify-center gap-2">
                <div className="w-20 h-20 flex gap-1 justify-center items-center flex-col bg-[#F2FFFA] border border-neutral-400 rounded-lg p-2">
                  <div className="bg-red-700 h-8 w-8 rounded-full flex justify-center items-center font-bold text-neutral-100">
                    A
                  </div>
                  <div className="text-xs text-[#146168] font-semibold line-clamp-1">Admin sudah datang</div>
                </div>
              </div>
            </div>
            <button type="submit" className="w-full text-neutral-100 bg-[#146168] rounded-full py-2 font-bold">
              Log in
            </button>
          </form>
          <Link href="/login" className="w-full flex justify-center text-neutral-600 text-sm mt-2">
            lupa password
          </Link>
        </div>
      </div>
    </div>
  )
}