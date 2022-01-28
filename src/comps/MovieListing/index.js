import React from 'react';
import './style.scss'
import { useSelector } from 'react-redux'
import { getAllMovies, getAllShows } from '../../features/movies/slice';
import MovieCard from '../MovieCard';
import Slider from 'react-slick'
import { settings } from '../../common/settings'


const MovieListing = () => {
    const movies = useSelector(getAllMovies)
    const shows = useSelector(getAllShows)
    console.log('movies via useSelector', movies)

    let renderMovies, renderShows;

    renderMovies = movies.Response === "True" ? (
        movies.Search.map(movie => {
            return <MovieCard key={movie.imdbID} data={movie} />
        })
    ) : (
        <div className="movies-error">{movies.Error}</div>
    )

    renderShows = shows.Response === "True" ? (
        shows.Search.map(show => {
            return <MovieCard key={show.imdbID} data={show} />
        })
    ):(
        <div className="movies-error">{shows.Error}</div>
    )
  return <div className="movie-wrapper">
      <div className="movie-list">
          <h2>Movies</h2>
          <div className="movie-container">
              <Slider {...settings}>
              {renderMovies}
              </Slider>
          </div>
      </div>

      <div className="movie-list">
          <h2>Shows</h2>
          <div className="movie-container">
          <Slider {...settings}>
              {renderShows}
              </Slider>
          </div>
      </div>
  </div>;
};

export default MovieListing;
