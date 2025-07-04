"use client"
import { Image, DocumentText, WalletMoney } from "iconsax-react"
import { Montserrat } from "next/font/google"
import Table from "@/components/organisms/Table"
import { useEffect, useState } from "react"
import Text from "@/components/atoms/Text"
import Modal from "@/components/atoms/Modal"
import { getPendaftaranCard, getPendaftaranTable } from "@/lib/pendaftaran.js"
import { CardPendaftaran } from "./components/CardPendaftaran"



export default function clientComponent() {
  const [dataPendaftaranCard, setDataPendaftaranCard] = useState({
    result: [],
    status: false
  })
  const [dataPendaftaranTable, setDataPendaftaranTable] = useState({
    result: [],
    status: false
  })

  useEffect(() => {
    getPendaftaranCard()
      .then((res) => setDataPendaftaranCard({
        result: res,
        status: true
      }))
    getPendaftaranTable()
      .then((res) => setDataPendaftaranTable({
        result: res,
        status: true
      }))
  }, [])
  const [open, setOpen] = useState(false);

  const a = async (hasil) => {
    setOpen(true)
    console.log(hasil)
  }
  const b = async (hasil) => {
    console.log(hasil)
  }

  return (
    <div className="text-black flex-grow">
      <CardPendaftaran
        data={dataPendaftaranCard.result}
        status={dataPendaftaranCard.status}
      />
      <Text className="font-semibold mt-4 mb-2">Data Pendaftaran Putra/Putri Pondok Pesantren</Text>
      {
        dataPendaftaranTable.status ?
          (<>
            <Table
              data={dataPendaftaranTable.result}
              columns={
                [
                  {
                    key: "id",
                    label: "No",
                  },
                  {
                    key: "nama",
                    label: "Nama",
                  },
                  {
                    key: "l_p",
                    label: "L/P",
                  },
                  {
                    key: "nomor_telp",
                    label: "Nomor Telp",
                  },
                  {
                    key: "status",
                    label: "Status",
                  },
                ]
              }
              hasAction={true}
              componentAction={[
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
            />
            {open && <Modal onClose={() => setOpen(false)} />}
          </>)
          :
          <Table />
      }
    </div>
  )
}