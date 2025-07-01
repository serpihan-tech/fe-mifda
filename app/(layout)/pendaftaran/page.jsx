"use client"
import { WalletAdd } from "iconsax-react"
import { Montserrat } from "next/font/google"
import PemasukanTable from "@/components/organisms/Table"
import { useEffect, useState } from "react"
import PemasukanCard from "@/components/organisms/Card"

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
      {/* Cards Layout */}
      <div className="w-{inherit} flex gap-2">
        {/* Cards*/}
        {
          dataPemasukanCard.status ?
            dataPemasukanCard.result.map((item, index) => {
              return (
                <PemasukanCard key={index} data={item} />
              )
            }) : 
            (
            <>
              <PemasukanCard />
              <PemasukanCard />
              <PemasukanCard />
            </>
            )
        }
      </div>

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