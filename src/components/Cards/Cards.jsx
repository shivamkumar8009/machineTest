// import { useState, useEffect } from "react";
// import "./Cards.css";

// const Cards = () => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1"
//         );
//         const data = await response.json();
//         setMovies(data.results);
//       } catch (error) {
//         console.error("Error fetching data: ", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="cards-container">
//       {movies.map((movie) => (
//         <div key={movie.id} className="card">
//           <img
//             src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//             alt={movie.original_title}
//             className="card-image"
//           />
//           <div className="card-content">
//             <h3 className="card-title">{movie.original_title}</h3>
//             <p className="card-rating">Rating: {movie.vote_average}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Cards;

import React, { useState, useEffect } from "react";
import "./Cards.css";

const Cards = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=${currentPage}`
        );
        const data = await response.json();
        setMovies(data.results);
        setTotalPages(data.total_pages);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [currentPage]);

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
          <div key={movie.id} className="card">
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
}

export default Cards;
