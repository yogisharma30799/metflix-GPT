import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constands';
import { addNowPlayngMovies } from '../utils/MovieSlice';

const useMoviesList = () => {
    const dispatch = useDispatch()
    const getPlayingMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
      const json = await data.json();
      console.log(json.results)
      dispatch(addNowPlayngMovies(json.results))
    }
  
    useEffect(() => {
      getPlayingMovies()
    },[])
}

export default useMoviesList
