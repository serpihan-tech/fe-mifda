"use client";

import StatisticChart from "@/components/organisms/StatisticChart";
import InfoTotalCard from "@/components/organisms/InfoTotalCard";
import StatusCard from "@/components/organisms/StatusCard";
import TunggakanCard from "@/components/organisms/TunggakanCard";
import PemasukanCard from "@/components/organisms/PemasukanCard";

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
          <div className="w-2/3">
            <StatisticChart />
          </div>
          <div className="w-1/3">
            <TunggakanCard />
          </div>
        </div>
        <div className="w-full flex space-x-8">
          <div className="w-2/3 space-x-8 flex">
            <div className="w-1/2">
              <PemasukanCard />
            </div>
            <div className="w-1/2">
            </div>
          </div>
          <div className="w-1/3">
          </div>
        </div>
      </div>
    </>
  );
}
