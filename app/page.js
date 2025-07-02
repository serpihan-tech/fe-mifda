"use client";

import { ArrowRight } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="w-full h-full items-center justify-center flex flex-col space-y-16">
      <div className="w-full flex items-center justify-center space-x-9">
        <Image
          src="/svg/e-mifda.svg"
          alt="e-mifda"
          width={175}
          height={175}
          priority
        />
        <h1 className="text-[#146168] text-7xl font-semibold transition-all duration-300 ease-in-out">
          e-mifda
        </h1>
      </div>
      <button
        onClick={() => router.push("/login")}
        className="w-1/3 text-neutral-100 bg-[#146168] text-xl rounded-xl py-2.5 font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out"
      >
        Log in
      </button>
      <div className="flex">
        <Link href="/dashboard" className="text-blue-600 underline">
          <div className="flex underline items-center">
            <span> dahsboard </span>
            <span>
              {" "}
              <ArrowRight size={15} color="currentColor" className="underline"/>{" "}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
