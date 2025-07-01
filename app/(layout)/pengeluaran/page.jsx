"use client";
import { Image, DocumentText, WalletMoney } from "iconsax-react";
import { Montserrat } from "next/font/google";
import Table from "@/components/organisms/Table";
import { useEffect, useState } from "react";
import PemasukanCard from "@/components/organisms/Card";
import Text from "@/components/atoms/Text";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Page() {
  const [dataPengeluaranCard, setDataPengeluaranCard] = useState({
    result: [],
    status: false,
  });
  const [dataPengeluaranTable, setDataPengeluaranTable] = useState({
    result: [],
    status: false,
  });

  useEffect(() => {
    fetch("data/pengeluaranCard.json")
      .then((res) => res.json())
      .then((data) => {
        setDataPengeluaranCard({
          result: data,
          status: true,
        });
      });
  }, []);

  useEffect(() => {
    fetch("data/pengeluaranTable.json")
      .then((res) => res.json())
      .then((data) => {
        setDataPengeluaranTable({
          result: data,
          status: true,
        });
      });
  }, []);

  const a = async (hasil) => {
    console.log(hasil);
  };
  const b = async (hasil) => {
    console.log(hasil);
  };

  return (
    <div className="text-black flex-grow">
      {/* Cards Layout */}
      <div className="w-{inherit} flex gap-2">
        {/* Cards*/}
        {dataPengeluaranCard.status ? (
          dataPengeluaranCard.result.map((item, index) => {
            return <PemasukanCard key={index} data={item} />;
          })
        ) : (
          <>
            <PemasukanCard />
            <PemasukanCard />
            <PemasukanCard />
          </>
        )}
      </div>
      <Text className="font-semibold">Data Pengeluaran Pondok Pesantren</Text>
      {dataPengeluaranTable.status ? (
        <Table
          data={dataPengeluaranTable.result}
          columns={[
            {
              key: "tanggal",
              label: "Tanggal",
            },
            {
              key: "nama_pj",
              label: "Nama PJ",
            },

            {
              key: "nominal",
              label: "Nominal",
            },
            {
              key: "rekening",
              label: "Rekening",
            },
            {
              key: "petugas",
              label: "Petugas",
            },
          ]}
          hasAction={true}
          componentAction={[
            {
              func: a,
              icon: <Image />,
              style: "bg-[#146168] rounded-full py-2 px-2 text-white",
            },
            {
              func: b,
              icon: <DocumentText />,
              style: "bg-[#0B31DB] rounded-full py-2 px-2 text-white",
            },
            {
              func: a,
              icon: <WalletMoney />,
              style: "bg-[#F49F0A] rounded-full py-2 px-2 text-white",
            },
          ]}
        />
      ) : (
        <Table />
      )}
    </div>
  );
}
