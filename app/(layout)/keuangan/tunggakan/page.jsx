"use client"
import { Edit2, Trash } from "iconsax-react"
import Table from "@/components/organisms/Table"
import { useEffect, useState } from "react"
import Text from "@/components/atoms/Text"
import Modal from "@/components/atoms/Modal"
import { getTunggakanTable } from "@/lib/tunggakan.js"

export default function TunggakanPage() {
  const [dataTunggakanTable, setDataTunggakanTable] = useState({
    result: [],
    status: false
  })

  useEffect(() => {
    getTunggakanTable()
    .then((res) => setDataTunggakanTable({
      result: res,
      status: true
    }))
  }, [])

  const [open, setOpen] = useState(false);

  return (
    <div className="text-black flex-grow">
      <Text className="font-semibold mt-4 mb-2">Data Tunggakan Pembayaran Santri/wati</Text>
      
      {dataTunggakanTable.status ? (
        <>
          <Table
            data={dataTunggakanTable.result}
            searchField="nama_santri"
            columns={[
              {
                key: "id",
                label: "No",
              },
              {
                key: "bulan",
                label: "Bulan",
              },
              {
                key: "putra",
                label: "putra",
              },
              {
                key: "putri",
                label: "putri",
              },
              {
                key: "total_tunggakan",
                label: "Total Tunggakan",
              }
            ]}
            componentButton={[
              {
                text: "2023/2024",
                variants: "secondary"
              },
              {
                text: "2024/2025",
                variants: "secondary-2"
              },
              {
                text: "2025/2026",
                variants: "secondary-2"
              }
            ]}
            hasAction={true}
            componentAction={[
              {
                // func: 
                title: "Ingatkan",
                style: "bg-[#e40514] rounded-[10px] px-3 py-2 text-[#f2fffa] text-sm font-semibold hover:shadow-[0px_0.10000000149011612px_4px_0px_rgba(228,5,20,0.40)] outline outline-1 outline-offset-[-1px] outline-[#f6acb1]"
              }
            ]}
          /> 
          {open && <Modal onClose={() => setOpen(false)} />}
        </>
      ) : (
        <div className="p-4 bg-gray-100 rounded">
          <Text>Loading...</Text>
        </div>
      )}
    </div>
  )
}