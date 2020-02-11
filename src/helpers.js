export const getRandomLikesCount = () => {
  const min = 100
  const max = 1000

  return min + Math.floor((max - min) * Math.random())
}
