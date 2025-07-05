export async function getTunggakanTable() {
  const res = await fetch('/data/tunggakanTable.json')
  if (!res.ok) throw new Error('Failed to fetch')
  return await res.json()
}