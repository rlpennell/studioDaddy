export const catHandler = (json) => {
  return json.data.map(({ breed }) => ({
    title: breed,
    value: breed.toLowerCase().split(' ').join('-')
  }))
}