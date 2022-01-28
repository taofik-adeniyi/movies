import React, { useEffect } from 'react';
import MovieListing from '../MovieListing';
import movieapi from '../../common/apis/movieapi'
import { apikey } from '../../common/apis/movieapikey'
import { useDispatch } from 'react-redux'
import { addMovies, fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/slice'

const movieText = "Harry"
const showText = "Friends";
const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        // const fetchMovies = async () => {
        //     try{
        //     const res = await movieapi.get(`/?apikey=${apikey}&s=${movieText}&type=movie`)
        //         console.log('THE RES:', res.data)
        //         dispatch(addMovies(res.data))
        //     }catch(e){
        //         console.log(e.response)
        //     }
        // }
        // fetchMovies()
        dispatch(fetchAsyncMovies(movieText))
        dispatch(fetchAsyncShows(showText))
    }, [])
  return (<div> 
      <div className="banner-img"></div>
      <MovieListing />
  </div>);
};

export default Home;
