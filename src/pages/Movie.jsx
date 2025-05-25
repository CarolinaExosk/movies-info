import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../axios";

const Movie = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    const getMovie = async () => {
        const res = await api.get(`/movie/${id}?${import.meta.env.VITE_API_KEY}`);
        setMovie(res.data);
    };

    useEffect(() => {
        getMovie();
    }, [id]);

    if (!movie) return <p>Carregando...</p>;

    const { title, poster_path, overview, budget, revenue, tagline } = movie;

    return (
        <div>
            <h1>{title}</h1>
            <p>{tagline}</p>
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
            <p>{overview}</p>
            <p>Orçamento: ${budget}</p>
            <p>Receita: ${revenue}</p>
        </div>
    );
};

export default Movie;
