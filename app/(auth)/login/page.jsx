"use client"

import "@/app/globals.css";
import Image from "next/image";
import BannerBot from "@/public/images/banner-bottom.webp"
import BannerTop from "@/public/images/banner-top.webp"
import BannerHumans from "@/public/images/banner-humans.webp"
import { useMediaQuery } from "react-responsive";
import {
  useState,
  useEffect
} from "react";
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation";
import Text from "@/components/atoms/Text";
import InputText from "@/components/molecules/InputText";


export default function Page() {
  const router = useRouter();
  const stateOrientation = useMediaQuery({ query: "(orientation: portrait)" })
  const [isPortrait, setIsPortrait] = useState(true);

  useEffect(() => {
    stateOrientation ? setIsPortrait(true) : setIsPortrait(false);
  }, [stateOrientation]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const fetchUser = async (dataForm) => {
    try {
      const response = await fetch("data/users.json");
      const data = await response.json();
      const {
        email,
        password
      } = dataForm

      for (let i = 0; i < data.length; i++) {
        if (data[i].email === email && data[i].password === password) {
          router.push("/dashboard");
          return data[i];
        }
      }
      throw new Error("User not found");
    } catch (error) {
      return error;
    }
  }

  const onSubmit = async (data) => {
    return await fetchUser(data);
  };

  return (
    // Banner
    <div className={`w-full h-full bg-gradient-4-green py-8 px-4 md:px-8 md:py-16 lg:py-24 lg:px-16 flex flex-col justify-center items-center text-black`}>    
      <div className="w-full h-full flex justify-center gap-4 relative z-10">
        {/* Human Banner */}
        {!isPortrait && <div className="absolute lg:relative top-0 left-0 z-1 w-[55%] h-full text-white flex-col hidden lg:flex">
          <Text className="text-4xl" font="righteous" type="h1">Selamat Datang!</Text>
          <Text>Kelola semua administrasi & transaksi pondok pesantren dengan mudah dalam satu platform terpadu.</Text>
          <div className="w-full bottom-0 left-0 absolute z-1 flex justify-center">
            <Image
              src={BannerHumans}
              alt="banner-humans"
              width={100}
              height={100}
              sizes="100vh"
              className="w-[40%] object-cover bottom-0 left-0"
            />
          </div>
        </div>}
        {/* Main Content */}
        <div className="bg-white w-full lg:w-[45%] h-full max-w-[474px] md:max-w-[632px] md:py-16 md:px-8 lg:max-w-[791px] xl:max-w-[949px] 2xl:max-w-[474px] rounded-md relative z-2 p-2 flex flex-col">
          <div className="w-full text-center mb-4">
            <Text className="text-2xl font-bold mb-2 md:text-4xl" type="h1">Selamat Datang</Text>
            <Text className="font-medium md:text-lg" type="h2">Silahkan login dengan akun anda miliki</Text>
          </div>
          <form className="flex flex-col justify-between w-full grow" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col font-medium gap-2 md:gap-4">
              <InputText type="email" id="email" label="Email" placeholder="olivia@example.com" register={register('email')} />
              <InputText type="password" id="password" label="Password" placeholder="********" register={register('password')} />
              <div className="flex gap-2 w-full justify-end">
                <input
                  className="text-gray-300 border px-2 py-1 rounded text-sm"
                  value={true}
                  type="checkbox"
                  {...register("remember-me")}
                  checked
                />
                <label htmlFor="remember-me" className="text-neutral-600 text-xs">Remember Me?</label>
              </div>
            </div>
            <button type="submit" className="w-full text-neutral-100 bg-[#146168] rounded-full py-2 font-bold">
              Log in
            </button>
          </form>
        </div>
      </div>
      <Image
        src={BannerBot}
        alt="banner-bottom"
        width={100}
        height={100}
        sizes="100vw"
        className="w-full object-cover bottom-0 left-0 absolute -z-0"
        priority
      />
      <Image
        src={BannerTop}
        alt="banner-top"
        width={100}
        height={100}
        sizes="100vw"
        className="w-full object-cover top-0 left-0 absolute -z-0"
      />
    </div>
  )
}