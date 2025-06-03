"use client"

import "@/app/globals.css";
import { BarsArrowDown } from "@/components/icons/BarsArrowDown";
import Image from "next/image";
import BannerBot from "@/public/images/banner-bottom.webp"
import BannerTop from "@/public/images/banner-top.webp"
import BannerHumans from "@/public/images/banner-humans.webp"
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import {
  useState,
  useEffect
} from "react";


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Page() {
  const stateOrientation = useMediaQuery({ query: "(orientation: portrait)" })
  const [isPortrait, setIsPortrait] = useState(null);

  useEffect(() => {
    stateOrientation ? setIsPortrait(true) : setIsPortrait(false);
  }, []);

  return (
    <div className={`${montserrat.className} w-full h-full bg-gradient-4-green py-8 px-4 md:px-8 md:py-16 lg:py-24 lg:px-16 flex flex-col justify-center items-center text-black`}>
      <Image
        src={BannerBot}
        alt="banner-bottom"
        width={100}
        height={100}
        sizes="100vw"
        priority={false}
        className="w-full object-cover bottom-0 left-0 absolute z-1"
      />
      <Image
        src={BannerTop}
        alt="banner-top"
        width={100}
        height={100}
        sizes="100vw"
        priority={false}
        className="w-full object-cover top-0 left-0 absolute z-1"
      />
      {isPortrait ? (
        <div className="bg-white w-full h-full max-h-[474px] md:max-h-[632px] md:py-16 md:px-8 lg:max-h-[791px] xl:max-h-[949px] 2xl:max-h-[2071px] overflow-hidden rounded-md relative z-2 p-2 flex">
          <div className="flex flex-col flex-grow">
            <div className="w-full text-center mb-4">
              <div className="text-2xl font-bold mb-2 md:text-4xl">Selamat Datang</div>
              <div className="font-medium md:text-lg">Silahkan login dengan akun anda miliki</div>
            </div>
            <form className="flex flex-col justify-between w-full grow" action="">
              <div className="flex flex-col font-medium gap-2 md:gap-4">
                <div className="flex flex-col-reverse gap">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="text-gray-300 border px-2 py-1 rounded text-sm md:px-4 md:py-2" placeholder="olivia@example.com" />
                  <label htmlFor="email" className="text-neutral-600 text-sm">Email</label>
                </div>
                <div className="flex flex-col-reverse gap">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="text-gray-300 border px-2 py-1 rounded text-sm"
                    placeholder="********" />
                  <label htmlFor="password" className="text-neutral-600 text-sm">Password</label>
                </div>
                <div className="flex gap-2 w-full justify-end">
                  <input
                    type="checkbox"
                    name="remember-me"
                    id="remember-me"
                    className="text-gray-300 border px-2 py-1 rounded text-sm"
                    value={true}
                    checked />
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
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex gap-4">
          <div className="absolute lg:relative top-0 left-0 z-1 w-[55%] h-full text-white flex-col hidden lg:flex">
            <div>Selamat Datang</div>
            <div>Kelola semua administrasi & transaksi pondok pesantren dengan mudah dalam satu platform terpadu.</div>
            <div className="w-full bottom-0 left-0 absolute z-1 flex justify-center">
              <Image
                src={BannerHumans}
                alt="banner-humans"
                width={100}
                height={100}
                sizes="100vh"
                priority={false}
                className="w-[40%] object-cover bottom-0 left-0"
              />
            </div>
          </div>
          <div className="bg-white w-full lg:w-[45%] h-full max-w-[474px] md:max-w-[632px] md:py-16 md:px-8 lg:max-w-[791px] xl:max-w-[949px] 2xl:max-w-[474px] rounded-md relative z-2 p-2 flex">
            <div>
              <div className="w-full text-center mb-4">
                <div className="text-2xl font-bold mb-2 md:text-4xl">Selamat Datang Landscape</div>
                <div className="font-medium md:text-lg">Silahkan login dengan akun anda miliki</div>
              </div>
              <form className="flex flex-col justify-between w-full grow" action="">
                <div className="flex flex-col font-medium gap-2 md:gap-4">
                  <div className="flex flex-col-reverse gap">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="text-gray-300 border px-2 py-1 rounded text-sm md:px-4 md:py-2" placeholder="olivia@example.com" />
                    <label htmlFor="email" className="text-neutral-600 text-sm">Email</label>
                  </div>
                  <div className="flex flex-col-reverse gap">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="text-gray-300 border px-2 py-1 rounded text-sm"
                      placeholder="********" />
                    <label htmlFor="password" className="text-neutral-600 text-sm">Password</label>
                  </div>
                  <div className="flex gap-2 w-full justify-end">
                    <input
                      type="checkbox"
                      name="remember-me"
                      id="remember-me"
                      className="text-gray-300 border px-2 py-1 rounded text-sm"
                      value={true}
                      checked />
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
            </div>
          </div>
        </div>
      )}
    </div>
  )
}