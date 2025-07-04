
export async function getPendaftaranCard() {
  const res = await fetch('/data/pendaftaranCard.json')
  if (!res.ok) throw new Error('Failed to fetch')
  return await res.json()
} 

export async function getPendaftaranTable() {
  const res = await fetch('/data/pendaftaranTable.json')
  if (!res.ok) throw new Error('Failed to fetch')
  return await res.json()
}