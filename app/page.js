'use client';

import Button from "@/components/atoms/Button";
import dynamic from 'next/dynamic';
import { NavigationMain } from "@/components/organisms/Navigation";
import MyPDFViewer from "@/components/molecules/MyPDFViewer";

export default function Home() {
  return (
    <div className="w-full h-full">
      {/* Header Start */}
      <NavigationMain/>
      {/* Header End */}
      {/* Content Start */}
      <div className="sm:px-8 px-4 w-full mx-auto max-w-[1440px] ">
        <div className="bg-gray-500 w-fit rounded-lg">
            <MyPDFViewer />
          <div>

          </div>
        </div>
      </div>
      {/* Content End */}
      {/* Footer Start */}
      {/* Footer End */}
    </div>
  );
}
