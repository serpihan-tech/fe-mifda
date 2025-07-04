"use client";

import { WalletAdd } from 'iconsax-react';
import { Montserrat } from "next/font/google"
import Text from '../atoms/Text';

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export function PemasukanCard(props) {
  const { data } = props;
  const rupiah = data
    ? new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
      }).format(data.amount)
    : null;

  return (
    <div bgColor="bg-[#146168]">
      <div className="w-full px-5 pt-5 flex space-x-4 items-center">
        <div className="rounded-full bg-[#f2fffa] w-20 h-20 flex items-center justify-center overflow-hidden">
          <Image
            src="/svg/pemasukan.svg"
            alt="pemasukan"
            width={72.11}
            height={59.75}
          />
        </div>
        <div className="space-y-2">
          <div className="self-stretch text-[#f2fffa] text-xl font-semibold">
            Pemasukan
          </div>
          <div className="self-stretch text-[#f2fffa] text-base font-normal">
            Oktober 2023
          </div>
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

export function LayoutCard(props) {
  return (
    <div className="w-full space-x-8 flex flex-row p-4 bg-[#f2fffa] rounded-md shadow-sm">
      {props.children}
    </div>
  );
}

export function CardTitle(props) {
  return (
    <div className={`space-y-1 ${props.typeFlex? `flex ${propstypeFlex}`: "flex"}`}>
      <div className="text-sm font-semibold text-gray-800">
        <Text>
          {props.title}
        </Text>
      </div>
      <div className="text-xs text-gray-500">
        <Text>
          {props.subtitle}
        </Text>
      </div>
    </div>
  );
}

export function Card(props) {
  return (
    <div className="space-y-1 w-full gap-4">
      {props.children}
    </div>
  );
}

export function CardContent (props) {
  return (
    <div className={`${montserrat.className} font-semibold text h-7`}>
      {props.children}
    </div>
  );
}