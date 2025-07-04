
export async function getPemasukanTable() {
  const res = await fetch('/data/pemasukanTable.json')
  if (!res.ok) throw new Error('Failed to fetch')
  return await res.json()
}

export async function getPemasukanCard() {
  const res = await fetch('/data/pemasukanCard.json')
  if (!res.ok) throw new Error('Failed to fetch')
  return await res.json()
}