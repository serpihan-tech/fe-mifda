'use client';

import Button from "@/components/atoms/Button";
import { NavigationMain } from "@/components/organisms/Navigation";

export default function Home() {
  return (
    <div className="w-full h-full max-w-[1920px] mx-auto">
      {/* Header Start */}
      <NavigationMain/>
      {/* Header End */}
      {/* Content Start */}
      <div className="sm:px-8 px-4 w-full mx-auto max-w-[1440px] ">
        <div className="bg-gray-500 w-full">
          
        </div>
      </div>
      {/* Content End */}
      {/* Footer Start */}
      {/* Footer End */}
    </div>
  );
}
