import React, { useEffect } from 'react'
import Header from './Header'
import useMoviesList from '../hooks/useMoviesList'

const Browser = () => {

  useMoviesList()

  return (
    <div>
      <Header />
    </div>
  )
}

export default Browser
