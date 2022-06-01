const getImages = async (category) => {
  const URL = `https://api.unsplash.com/search/photos?query=${category}&client_id=1slLPSYzHnOnsuBfmSVy7O5SpFiYcqwNy-DznY95-0E`
  const response = await fetch(URL)
  const { results } = await response.json()

  const data = results.map(image => (
    {
      id: image.id,
      image: image.urls.small,
      description: image.description
    }
  ))

  // console.log(data)
  return data
}

export default getImages