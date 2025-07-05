"use client"
import { Edit2, Trash } from "iconsax-react"
import Table from "@/components/organisms/Table"
import { useEffect, useState } from "react"
import Text from "@/components/atoms/Text"
import Modal from "@/components/atoms/Modal"
import { getKeuanganTable } from "@/lib/keuangan.js"

export default function clientComponent() {
  const [dataKeuanganTable, setDataKeuanganTable] = useState({
    result: [],
    status: false
  })

  useEffect(() => {
    getKeuanganTable()
    .then((res) => setDataKeuanganTable({
      result: res,
      status: true
    }))
  }, [])

  const [open, setOpen] = useState(false);

  const handleView = async(data) => {
    setOpen(true)
    console.log("View data:", data)
  }

  const handleEdit = async(data) => {
    console.log("Edit data:", data)
    // Implementasi edit data
  }

  const handleDelete = async(data) => {
    if (confirm(`Apakah Anda yakin ingin menghapus data ${data.nama_santri}?`)) {
      console.log("Delete data:", data)
      // Implementasi delete data
    }
  }

  return (
    <div className="text-black flex-grow">
      <Text className="font-semibold mt-4 mb-2">Data Pembayaran Santri/wati</Text>
      
      {dataKeuanganTable.status ? (
        <>
          <Table
            data={dataKeuanganTable.result}
            searchField="nama_santri"
            columns={[
              {
                key: "id",
                label: "No",
              },
              {
                key: "tanggal",
                label: "Tanggal",
              },
              {
                key: "nama_santri",
                label: "Nama Santri",
              },
              {
                key: "jenis_kelamin",
                label: "L/P",
              },
              {
                key: "jenjang",
                label: "Jenjang",
              },
              {
                key: "nominal",
                label: "Nominal",
              },
              {
                key: "keperluan",
                label: "Keperluan",
              }
            ]}
            componentButton={[
              {
                // func: handleAddData,
                text: "Tambah Data",
                variants: "secondary"
              }
            ]}
            hasAction={true}
            componentAction={[
              {
                func: handleDelete,
                icon: <Trash size={20} />,
                style: "bg-[#DC2626] rounded-full py-2 px-2 text-white hover:bg-[#b91c1c] transition-colors"
              },
              {
                func: handleEdit,
                icon: <Edit2 size={20} />,
                style: "bg-[#0B31DB] rounded-full py-2 px-2 text-white hover:bg-[#0a2bb5] transition-colors"
              },
              
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