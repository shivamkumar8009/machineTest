import { useState, useEffect } from "react";
import Header from "../../components/Header/Header"

function TopRated() {
  const [rated, setRated] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/top_rated?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1"
        );
        const data = await response.json();
        setRated(data.results);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);
  
  return (
    <>
    <Header/>
    <div className="cards-container">
      {rated.map((movie) => (
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


    </>
  )
}

export default TopRated