"use client";

import StatisticChart from "@/components/organisms/StatisticChart";
import InfoTotalCard from "@/components/organisms/InfoTotalCard";
import StatusCard from "@/components/organisms/StatusCard";
import TunggakanCard from "@/components/organisms/TunggakanCard";
import PemasukanCard from "@/components/organisms/PemasukanCard";
import PengeluaranCard from "@/components/organisms/PengeluaranCard";
import PerizinanCard from "@/components/organisms/PerizinanCard";

export default function dashboard() {
  return (
    <>
      <div className="w-full space-y-8">
        <div className="w-full flex space-x-8">
          <div className="w-1/2">
            <InfoTotalCard />
          </div>
          <div className="w-1/2">
            <StatusCard />
          </div>
        </div>
        <div className="w-full flex space-x-8">
          <div className="w-3/5">
            <StatisticChart />
          </div>
          <div className="w-2/5">
            <TunggakanCard />
          </div>
        </div>
        <div className="w-full flex space-x-8">
          <div className="w-3/5 space-x-8 flex">
            <div className="w-1/2">
              <PemasukanCard />
            </div>
            <div className="w-1/2">
              <PengeluaranCard />
            </div>
          </div>
          <div className="w-2/5">
            <PerizinanCard/>
          </div>
        </div>
      </div>
    </>
  );
}
