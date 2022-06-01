import React from 'react'
import useFetch from '../hooks/useFetch'
import ImageItem from './ImageItem'

const ImageGrid = ({ category }) => {
  const { data, loading } = useFetch(category)

  return (
    <>
      <h1>{category}</h1>
      {loading && <p>Cargando</p>}
      {data.map(image => (
        <ImageItem
          key={image.id}
          {...image}
        />
      ))}
    </>
  )
}

export default ImageGrid