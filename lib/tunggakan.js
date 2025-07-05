export async function getTunggakanTable() {
  const res = await fetch('/data/tunggakanTable.json')
  if (!res.ok) throw new Error('Failed to fetch')
  return await res.json()
}

export async function getTunggakanJuniTable() {
  const res = await fetch('/data/tunggakanJuniTable.json')
  if (!res.ok) throw new Error('Failed to fetch')
  return await res.json()
}