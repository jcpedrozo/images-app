import React, { useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (search.trim().length > 1) {
      setCategories(cats => [search, ...cats])
      setSearch('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={search}
        onChange={handleSearch}
      />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}

export default AddCategory