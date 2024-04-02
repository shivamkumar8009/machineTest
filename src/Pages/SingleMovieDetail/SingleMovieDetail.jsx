import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./SingleMovieDetail.css";
import Header from "../../components/Header/Header";

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
        // Limiting cast to 7 items
        setCast(castData.cast.slice(0, 7));
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movieDetails) return <div>Loading...</div>;

  return (
    <>
      <Header />
      <div className="smovie-page">
        <div className="smovie-details">
          <div className="scard">
            <img
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              alt={movieDetails.original_title}
              className="scard-image"
            />
            <div className="scard-content">
              <p className="text-color1"><strong>{movieDetails.original_title}</strong></p>
              <br />
              <p className="text-color2">
                <strong>Rating:</strong> {movieDetails.vote_average}
              </p>
              <br />
              <p className="text-color2">
                <strong>Release Date:</strong> {movieDetails.release_date}
              </p>
              <br />
              <p className="text-color2">
                <strong>Genres:</strong>{" "}
                {movieDetails.genres.map((genre) => genre.name).join(", ")}
              </p>
              <br />
              <p className="text-color2">
                <strong>Overview : </strong>
                {movieDetails.overview}
              </p>
            </div>
          </div>
        </div>
        <div className="scast">
          <div className="scard2">
            <p className="text-cast">Cast</p>
            <div className="scast-images">
              {cast.map((actor) => (
                <div key={actor.id} className="scast-item">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                    alt={actor.name}
                    className="scast-image"
                  />
                  <div className="scast-content">
                    <h3 className="text-color3">{actor.name}</h3>
                    <p className="text-color4">Character : {actor.character}</p>
                  </div>
                  <br />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleMovieDetail;

