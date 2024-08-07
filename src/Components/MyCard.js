import "./MyCard.css";
import { GrFavorite } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { useState } from "react";
import { MdOutlineFavorite } from "react-icons/md";
import { addFavorite } from "../Redux/Actions/favouritAction";

function MyCard(props) {
  const [isClicked, setIsClicked] = useState(false);

  const dispatch = useDispatch();
  const favoriteMovies = useSelector((state) => state.favoriteArr);

  function handleFavorite() {
    const movieInFavorites = favoriteMovies.find(
      (movie) => movie.id === props.id
    );

    if (movieInFavorites) {
      // Update the quantity of the existing favorite movie
      dispatch(
        addFavorite({
          ...movieInFavorites,
          quantity: movieInFavorites.quantity + 1,
        })
      );
    } else {
      // Add new favorite movie
      dispatch(addFavorite({ ...props, quantity: 1 }));
    }

    setIsClicked(true);
  }

  return (
    <div
      className="card card-bg position-relative"
      style={{ width: props.width }}
    >
      <button
        disabled={isClicked}
        onClick={handleFavorite}
        style={{
          position: "absolute",
          top: "0",
          right: "0",
          display: "inline-block",
          marginLeft: "10px",
          cursor: "pointer",
          fontSize: "22px",
          border: "none",
          background: "white",
        }}
      >
        {!isClicked ? (
          <GrFavorite />
        ) : (
          <MdOutlineFavorite style={{ fontSize: "27px", color: "red" }} />
        )}
      </button>
      <img src={props.image} className="card-img-top" alt={props.title} />
      <div className="card-body bodyy text-white ">
        {props.title && (
          <h5 className="card-name fs-4 text">
            {props.title.substring(0, 23)}
          </h5>
        )}
        {props.overview && (
          <p className="card-text">{props.overview.substring(0, 100)}</p>
        )}
        {props.url && (
          <Link to={props.url} className="btn btn-success">
            {props.btnName}
          </Link>
        )}
      </div>
    </div>
  );
}

export default MyCard;
