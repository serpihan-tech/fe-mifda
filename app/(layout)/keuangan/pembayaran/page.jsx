"use client"
import { Image, DocumentText, WalletMoney, Edit2, Trash } from "iconsax-react"
import Table from "@/components/organisms/Table"
import { useEffect, useState } from "react"
import Text from "@/components/atoms/Text"
import Modal from "@/components/atoms/Modal"

export default function SantriPage() {
  const [dataSantriTable, setDataSantriTable] = useState({
    result: [],
    status: false
  })

  useEffect(() => {
    // Simulasi data - pastikan semua field ada
    const sampleData = [
      {
        id: 1,
        tanggal: "2024-01-15",
        nama_santri: "Ahmad Fauzan",
        jenis_kelamin: "L",
        jenjang: "SMP",
        nominal: "Rp 500.000",
        keperluan: "SPP Bulanan",
      },
      {
        id: 2,
        tanggal: "2024-01-16",
        nama_santri: "Fatimah Zahra",
        jenis_kelamin: "P",
        jenjang: "SMA",
        nominal: "Rp 750.000",
        keperluan: "Biaya Makan",
      },
      // ... data lainnya
    ];

    setDataSantriTable({
      result: sampleData,
      status: true
    });
  }, [])

  const [open, setOpen] = useState(false);

  const handleView = async(data) => {
    setOpen(true)
    console.log("View data:", data)
  }

  const handleEdit = async(data) => {
    console.log("Edit data:", data)
  }

  const handleDelete = async(data) => {
    if (confirm(`Apakah Anda yakin ingin menghapus data ${data.nama_santri}?`)) {
      console.log("Delete data:", data)
    }
  }

  return (
    <div className="text-black flex-grow">
      <Text className="font-semibold mt-4 mb-2">Data Pembayaran Santri Pondok Pesantren</Text>
      
      {dataSantriTable.status ? (
        <>
          <Table
            data={dataSantriTable.result}
            searchField="nama_santri" // Specify field untuk pencarian
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
            hasAction={true}
            componentAction={[
              {
                func: handleView,
                icon: <Image />,
                style: "bg-[#146168] rounded-full py-2 px-2 text-white hover:bg-[#0f4c52] transition-colors"
              },
              {
                func: handleEdit,
                icon: <Edit2 />,
                style: "bg-[#0B31DB] rounded-full py-2 px-2 text-white hover:bg-[#0a2bb5] transition-colors"
              },
              {
                func: handleDelete,
                icon: <Trash />,
                style: "bg-[#DC2626] rounded-full py-2 px-2 text-white hover:bg-[#b91c1c] transition-colors"
              }
            ]}
          /> 
          {open && <Modal onClose={() => setOpen(false)} />}
        </>
      ) : (
        <Table />
      )}
    </div>
  )
}