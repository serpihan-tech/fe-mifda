export async function getMasterSppTable() {
  const res = await fetch('/data/masterSppTable.json')
  if (!res.ok) throw new Error('Failed to fetch')
  return await res.json()
}