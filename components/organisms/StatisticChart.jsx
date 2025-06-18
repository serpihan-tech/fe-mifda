"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import CardShadow from "../atoms/CardShadow";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function StatisticChart() {
  const data = {
    pendaftar: [260, 280, 250, 650, 800, 780],
    daftarUlang: [450, 480, 350, 780, 940, 950],
    aktif: [460, 450, 440, 720, 1000, 1020],
  };

  const categories = ["2020", "2021", "2022", "2023", "2024"];

  const chartOptions = {
    chart: {
      id: "basic-line",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: categories,
    },
    yaxis: {
      min: 0,
      max: 1000,
      tickAmount: 5,
    },
    colors: ["#4A5568", "#F6AD55", "#E53E3E"], // Abu-abu, Orange, Merah
    stroke: {
      width: 3,
      curve: "smooth",
    },
    legend: {
      show: false,
    },
    grid: {
      borderColor: "#f1f1f1",
    },
  };

  const chartSeries = [
    {
      name: "Pendaftar",
      data: data.pendaftar,
    },
    {
      name: "Daftar Ulang",
      data: data.daftarUlang,
    },
    {
      name: "Aktif",
      data: data.aktif,
    },
  ];

  return (
    <CardShadow>
      <div className="px-10 py-7">
        <div className="w-full flex justify-between">
          <div className="text-[#146168] text-xl font-semibold">Grafik Pendaftaran</div>

          <div className="flex gap-4 mb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 bg-[#4A5568] rounded-full" />
              <p className={`text-xs font-medium text-black`}>Pendaftar</p>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 bg-[#F6AD55] rounded-full" />
              <p className={`text-xs font-medium text-black`}>Daftar Ulang</p>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 bg-[#E53E3E] rounded-full" />
              <p className={`text-xs font-medium text-black`}>Aktif</p>
            </div>
          </div>
        </div>

        <div className="mixed-chart -ms-4 mt-7">
          <Chart
            className="w-full"
            options={{
              ...chartOptions,
              theme: { mode: "light" },
              xaxis: {
                ...chartOptions.xaxis,
                labels: {
                  style: { colors: "#666" },
                },
              },
              chart: {
                background: "#f2fffa",
              },
              yaxis: {
                ...chartOptions.yaxis,
                labels: {
                  style: { colors: "#666" },
                },
              },
            }}
            series={chartSeries}
            type="line"
            height={280}
          />
        </div>
      </div>
    </CardShadow>
  );
}
