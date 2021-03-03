import React, {useState, useEffect } from 'react';
import Axios from "axios";
import MovieCard from './MovieCard';
import data from "./Data";



function Main() {
  const [movieName, setMovieName] = useState("");
  const [movies, setMovies] = useState(data);
  const url = `http://www.omdbapi.com/?i=tt3896198&apikey=bb527392&s=${movieName}`;
  useEffect(() => {
    const searchMovie = async () => {
      const response = await Axios(url);
      const data = response.data;
      if (data.Response) {
        setMovies(data.Search);
      }
     
    }
    if (movieName.length > 1) {
      
      searchMovie();
    }
  }, [url,movieName]);
  
    const handleSearch = (e) => {
      setMovieName(e.target.value);
      console.log(movieName);
  };

  

  return (
    <div className="container-fluid main mt-md-5 mt-sm-2">
      <div className="row">
        <div className="col-3 left">
          <h4 className="ml-md-3">Filters</h4>
          <div className="filters ml-md-3">
            <div className="All">
              <button
                type="button"
                onClick={(e) => setMovies(data)}
                className="btn"
              >
                All
              </button>
            </div>
            <div className="Comedy">
              <button onClick={(e) => setMovieName("comedy")} className="btn">
                Comedy
              </button>
            </div>

            <div className="Thriller">
              <button onClick={(e) => setMovieName("thriller")} className="btn">
                Thriller
              </button>
            </div>
            <div className="Horror">
              <button onClick={(e) => setMovieName("horror")} className="btn">
                Horror
              </button>
            </div>
            <div className="Drama">
              <button onClick={(e) => setMovieName("drama")} className="btn">
                Drama
              </button>
            </div>
            <div className="Fantasy">
              <button onClick={(e) => setMovieName("fantasy")} className="btn">
                Fantasy
              </button>
            </div>
            <div className="Animation">
              <button
                onClick={(e) => setMovieName("animation")}
                className="btn"
              >
                Animation
              </button>
            </div>
          </div>
        </div>
        <div className="col-9 right">
          <h5>Search Movie</h5>
          <div className="search-div">
            <i className="fas fa-search icon" />
            <input
              className="search-input"
              type="text"
              placeholder="Search"
              onChange={handleSearch}
              value={movieName}
            />
          </div>
          <div className="row mx-auto mb-2">
            {movies &&
              movies.map((movie, index) => (
                <MovieCard
                  index={index}
                  title={movie.Title}
                  poster={movie.Poster}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
