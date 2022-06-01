import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import ImageGrid from './components/ImageGrid'

const ImagesApp = () => {
  const [categories, setCategories] = useState([])

  return (
    <>
      <AddCategory setCategories={setCategories} />
      <ol>
        {categories.map(category => (
          <ImageGrid key={category} category={category} />
        ))}
      </ol>
    </>
  )
}

export default ImagesApp