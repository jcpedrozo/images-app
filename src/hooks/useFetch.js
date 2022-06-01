import { useEffect, useState } from "react"
import getImages from '../helpers/getImages'


const useFetch = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  })

  useEffect(() => {
    getImages(category)
      .then(image => {
        setState({
          data: image,
          loading: false
        })
      })
    // eslint-disable-next-line
  }, [category])

  return state
}

export default useFetch