"use client"
import { Image, DocumentText, WalletMoney } from "iconsax-react"
import Table from "@/components/organisms/Table"
import { useEffect, useState } from "react"
import PemasukanCard from "@/components/organisms/Card"
import Text from "@/components/atoms/Text"
import { getPemasukanCard, getPemasukanTable } from "@/lib/pemasukan"
import { CardPemasukan } from "./components/CardPemasukan"


export default function ClientComponent() {
  const [dataPemasukanCard, setDataPemasukanCard] = useState({
    result: [],
    status: false
  })
  const [dataPemasukanTable, setDataPemasukanTable] = useState({
    result: [],
    status: false
  })

  useEffect(() => {
    getPemasukanCard()
      .then((data) => {
        setDataPemasukanCard({
          result: data,
          status: true
        })
      })
  }, [])

  useEffect(() => {
    getPemasukanTable()
      .then((data) => {
        setDataPemasukanTable({
          result: data,
          status: true
        })
      })
  }, [])

  const a = async(hasil) => {
    console.log(hasil)
  }
  const b = async(hasil) => {
    console.log(hasil)
  }

  return (
    <div className="text-black flex-grow">
      {/* Cards Layout */}
      <CardPemasukan data={dataPemasukanCard.result} />
      <Text className="font-semibold">Data Pemasukan Pondok Pesantren</Text>
      {
        dataPemasukanTable.status ?
          <Table
            data={dataPemasukanTable.result}
            columns={
              [
                {
                  key: "id",
                  label: "No",
                },
                {
                  key: "nama_pj",
                  label: "Nama PJ",
                },
                {
                  key: "tanggal",
                  label: "Tanggal",
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
                }
              ]
            }
            hasAction = {true}
            componentAction = {[
              {
                func: a,
                icon: <Image />,
                style: "bg-[#146168] rounded-full py-2 px-2 text-white"
              },
              {
                func: b,
                icon: <DocumentText />,
                style: "bg-[#0B31DB] rounded-full py-2 px-2 text-white"
              },
              {
                func: a,
                icon: <WalletMoney />,
                style: "bg-[#F49F0A] rounded-full py-2 px-2 text-white"
              }
            ]}
            /> :
          <Table />
      }
    </div>
  )
}