
export async function getUser() {
  const result = await fetch('data/pemasukanCard.json')
    .then((res) => res.json())
    .then((data) => {
        return data
    })

  return result
}