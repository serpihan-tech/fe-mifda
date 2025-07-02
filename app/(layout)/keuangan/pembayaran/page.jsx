"use client"
import { Montserrat } from "next/font/google"
import PemasukanTable from "@/components/organisms/PemasukanTable"
import { useEffect, useState } from "react"
import PemasukanCard from "@/components/organisms/PemasukanCard"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})



export default function Page() {
  const [dataPemasukanCard, setDataPemasukanCard] = useState({
    result: [],
    status: false
  })
  const [dataPemasukanTable, setDataPemasukanTable] = useState({
    result: [],
    status: false
  })

  useEffect(() => {
    fetch('data/pemasukanCard.json')
      .then((res) => res.json())
      .then((data) => {
        setDataPemasukanCard({
          result: data,
          status: true
        })
      })
  }, [])

  useEffect(() => {
    fetch('data/pemasukanTable.json')
      .then((res) => res.json())
      .then((data) => {
        setDataPemasukanTable({
          result: data,
          status: true
        })
      })
  }, [])

  return (
    <div className="text-black flex-grow">
      <div>
        Data Pemasukan Pondok Pesantren
      </div>

      {
        dataPemasukanTable.status ?
          <PemasukanTable data={dataPemasukanTable.result} /> :
          <PemasukanTable />
      }
    </div>
  )
}