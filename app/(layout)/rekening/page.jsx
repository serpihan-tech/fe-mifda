"use client";

import RekeningCard from "@/components/organisms/RekeningCard";
import { Raleway } from "next/font/google";
import { Montserrat } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RekeningPage() {
  const rekeningData = [
    {
      id: 1,
      iconSrc: "/svg/electricity.svg",
      title: "Listrik",
      percentageChange: "-15%",
      amount: 5600000,
      lastUpdated: "24/02/2024",
    },
    {
      id: 2,
      iconSrc: "/svg/waters.svg",
      title: "Air PDAM",
      percentageChange: "+10%",
      amount: 5000000,
      lastUpdated: "24/02/2024",
    },
    {
      id: 3,
      iconSrc: "/svg/buildings.svg",
      title: "Sarana Prasarana",
      percentageChange: "+10%",
      amount: 4700000,
      lastUpdated: "20/02/2024",
    },
    {
      id: 4,
      iconSrc: "/svg/health-cost.svg",
      title: "Biaya Kesehatan",
      percentageChange: "+10%",
      amount: 1000000,
      lastUpdated: "15/02/2024",
    },
    {
      id: 5,
      iconSrc: "/svg/registration-cost.svg",
      title: "Biaya Pendaftaran",
      percentageChange: "+10%",
      amount: 2500000,
      lastUpdated: "15/02/2024",
    },
  ];

  return (
    <div className={`container mx-auto p-4 ${montserrat.className}`}>
      {/* Responsive Grid */}
      <div className="grid [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))] gap-6">
        {rekeningData.map((data) => (
          <RekeningCard
            key={data.id}
            iconSrc={data.iconSrc}
            title={data.title}
            percentageChange={data.percentageChange}
            amount={data.amount}
            lastUpdated={data.lastUpdated}
          />
        ))}
      </div>
    </div>
  );
}
