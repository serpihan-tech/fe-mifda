'use client';

import { WalletAdd } from 'iconsax-react';
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export default function PemasukanCard(props) {
  const { data } = props;
  const rupiah = data
    ? new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
      }).format(data.amount)
    : null;

  return (
    <div className="space-x-8 flex-grow p-4 bg-[#f2fffa] rounded-md shadow-sm">
      <div className="flex justify-between items-start mb-2">
        <div className="space-y-1">
          {data ? (
            <>
              <div className="text-sm font-semibold text-gray-800">{data.title}</div>
              <div className="text-xs text-gray-500">{data.detail}</div>
            </>
          ) : (
            <>
              <div className="h-4 w-28 bg-gray-200 rounded animate-pulse" />
              <div className="h-3 w-20 bg-gray-200 rounded animate-pulse" />
            </>
          )}
        </div>

        {data ? (
          <WalletAdd size="20" />
        ) : (
          <div className="h-6 w-6 bg-gray-200 rounded-full animate-pulse" />
        )}
      </div>

      <div className={`${montserrat.className} font-semibold text h-7`}>
        {data ? (
          rupiah
        ) : (
          <div className="h-6 w-32 bg-gray-200 rounded animate-pulse" />
        )}
      </div>
    </div>
  );
}
