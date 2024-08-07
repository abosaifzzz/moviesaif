import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MyCard from "../../Components/MyCard";
import { FetchMovies } from "../../Redux/Reducers/FetchMovies";

function Movies() {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state.movies);
  const { language } = useSelector((state) => state.language);

  useEffect(() => {
    dispatch(FetchMovies({ language, page: 1 }));
  }, [dispatch, language]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  if (!movies || movies.length === 0) {
    return <p>No movies available</p>;
  }

  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      {movies.map((movie) => (
        <div key={movie.id} className="col">
          <MyCard
            width="100%"
            image={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            title={language === "en" ? movie.original_title : movie.title}
            overview={movie.overview}
            votecount={movie.vote_count}
            btnName="Show Details"
            url={`/details/${movie.id}`}
          />
        </div>
      ))}
    </div>
  );
}

export default Movies;
