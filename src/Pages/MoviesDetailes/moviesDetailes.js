import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MyCard from "../../Components/MyCard";
import SweetSpinner from "../Spinner/Spinner";
import { useSelector } from "react-redux";

function MoviesDetails() {
  const { id } = useParams();
  const { language } = useSelector((state) => state.language);
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=aa6fc65fcedb7431af3ac2fbe6484cd0&language=${language}`
      )
      .then((res) => {
        console.log(res.data); // Log the response data
        setMovie(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id, language]);

  if (loading) return <SweetSpinner />;

  console.log(movie); // Log the movie state

  return (
    <div className="container d-flex justify-content-center align-items-center">
      {movie && movie.backdrop_path ? (
        <MyCard
          width="50%"
          image={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          title={language === "en" ? movie.original_title : movie.title}
          overview={movie.overview}
          votecount={movie.vote_count}
        />
      ) : (
        <p>Movie details not available</p>
      )}
    </div>
  );
}

export default MoviesDetails;
