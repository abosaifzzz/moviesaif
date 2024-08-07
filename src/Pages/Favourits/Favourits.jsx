import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import MyCard from "../../Components/MyCard";
import { MdDelete } from "react-icons/md";
import { removeFavorite } from "../../Redux/Actions/favouritAction"; // Remove updateFavorites if not used
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Favourits() {
    const { id } = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        axios.get(
            `https://api.themoviedb.org/3/movie/${id}?api_key=aa6fc65fcedb7431af3ac2fbe6484cd0`
        )
            .then((res) => setMovie(res.data))
            .catch((err) => console.log(err));
    }, [id]);

    const dispatch = useDispatch();
    const myFavorites = useSelector((state) => state.favoriteArr);

    const handleRemoveFavorite = (id) => {
        dispatch(removeFavorite(id));
    };

    return (
        <div className="container">
            <h2 className="mb-4">My Favorite Movies</h2>
            <div className="row row-cols-1 row-cols-4 g-4">
                {myFavorites.length === 0 ? (
                    <p>You have no favorite movies.</p>
                ) : (
                    myFavorites.map((movie) => (
                        <div key={movie.id} className="col">
                            <Button
                                variant="danger"
                                onClick={() => handleRemoveFavorite(movie.id)}
                            >
                                <MdDelete /> Remove
                            </Button>

                            <MyCard
                                width="100%"
                                image={movie.image}
                                title={movie.title}
                                overview={movie.overview}
                                votecount={movie.votecount}
                                showFavoriteButton={false}
                            />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
