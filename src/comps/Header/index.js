import React, { useState } from 'react';
import './style.scss'
import { Link } from 'react-router-dom';
import user from '../../images/user.png'
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/slice'

const Header = () => {
  const [term, setTerm] = useState('')
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    if(term === "") {
      alert("search is empty") 
      return
    }
    console.log(term)
    dispatch(fetchAsyncMovies(term))
    dispatch(fetchAsyncShows(term))
    setTerm("")
  }
  return (
    <div className="header">
        
        <div className="logo">
        <Link to="/">Movie App</Link></div>
        <div className="search-bar">
          <form onSubmit={handleSubmit}>
            <input tyoe="text" value={term} placeholder="search movie or show" onChange={e => setTerm(e.target.value)} />
            <button type="submit" onClick={handleSubmit}><i className="fa fa-search"></i></button>
          </form>
        </div>
        
        <div className="user-image">
            <img src={user} alt="user image" />
        </div>
    </div>
  );
};

export default Header;
