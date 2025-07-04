export async function getKeuanganTable() {
  const res = await fetch('/data/KeuanganTable.json')
  if (!res.ok) throw new Error('Failed to fetch')
  return await res.json()
}