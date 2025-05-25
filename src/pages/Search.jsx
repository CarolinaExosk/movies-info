import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import api from "../axios";
import { Container, Title, MoviesContainer } from "./MoviesGridStyled";

const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
    const [searchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const query = searchParams.get("q");

    useEffect(() => {
        if (!query) return;

        const getSearchedMovies = async () => {
            const res = await api.get(`/search/movie?${apiKey}&query=${query}`);
            setMovies(res.data.results);
        };

        getSearchedMovies();
    }, [query]);

    return (
        <Container>
            <Title>
                Resultados para: <span className="query-text">{query}</span>
            </Title>
            <MoviesContainer>
                {movies.length > 0 &&
                    movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </MoviesContainer>
        </Container>
    );
};

export default Search;
