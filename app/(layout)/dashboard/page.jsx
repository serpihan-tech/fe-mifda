"use client"

import InfoTotalCard from "@/components/organisms/InfoTotalCard"
import StatusCard from "@/components/organisms/StatusCard"


export default function dashboard () {
  return (
    <div className="w-full flex space-x-8">
      <InfoTotalCard/>
      <StatusCard/>
    </div>
  )
}