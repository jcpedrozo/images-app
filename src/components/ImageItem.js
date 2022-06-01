import React from 'react'

const ImageItem = ({ image, description }) => {
  return (
    <div>
      <img src={image} alt={description} />
    </div>
  )
}

export default ImageItem