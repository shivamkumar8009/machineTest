// SingleMovieDetail.js
import  { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./SingleMovieDetail.css";

const SingleMovieDetail = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
        );
        const movieData = await movieResponse.json();
        setMovieDetails(movieData);

        const castResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
        );
        const castData = await castResponse.json();
        setCast(castData.cast);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movieDetails) return <div>Loading...</div>;

  return (
    <div className="smovie-page">
      <div className="smovie-details">
        <div className="scard">
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={movieDetails.original_title}
            className="scard-image"
          />
          <div className="scard-content">
            <h2>{movieDetails.original_title}</h2>
            <p>
              <strong>Rating:</strong> {movieDetails.vote_average}
            </p>
            <p>
              <strong>Release Date:</strong> {movieDetails.release_date}
            </p>
            <p>
              <strong>Genres:</strong>{" "}
              {movieDetails.genres.map((genre) => genre.name).join(", ")}
            </p>
            <p>{movieDetails.overview}</p>
          </div>
        </div>
      </div>
      <div className="scast">
        <div className="scard">
          <h2>Cast</h2>
          <div className="scast-images">
            {cast.map((actor) => (
              <img
                key={actor.id}
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.name}
                className="scast-image"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMovieDetail;
