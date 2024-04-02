/* eslint-disable react/prop-types */
import  { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

const Cards = ({ searchTerm }) => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-
        US&page=${currentPage}`;
        if (searchTerm) {
          apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&language=
          en-US&page=${currentPage}&query=${searchTerm}`;
        }

        const response = await fetch(apiUrl);
        const data = await response.json();
        setMovies(data.results);
        setTotalPages(data.total_pages);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [currentPage, searchTerm]);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <div className="cards-container">
        {movies.map((movie) => (
          <Link className='text' key={movie.id} to={`/SingleMovieDetail/${movie.id}`}>
            <div className="card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.original_title}
                className="card-image"
              />
              <div className="card-content">
                <h3 className="card-title">{movie.original_title}</h3>
                <p className="card-rating">Rating: {movie.vote_average}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Prev
        </button>
        <span>{currentPage}</span> / <span>{totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </>
  );
};

export default Cards;
