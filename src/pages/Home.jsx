import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import api from "../axios";
import { Container, Title, MoviesContainer } from "./MoviesGridStyled";

const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
    const [topMovies, setTopMovies] = useState([]);

    const getTopRatedMovies = async () => {
        const res = await api.get(`/movie/top_rated?${apiKey}`);
        setTopMovies(res.data.results);
    };

    useEffect(() => {
        async function fetchData() {
            await getTopRatedMovies();
        }
        fetchData();
    }, []);

    return (
        <Container>
            <Title>Top Melhores Filmes:</Title>
            <MoviesContainer>
                {topMovies.length > 0 &&
                    topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </MoviesContainer>
        </Container>
    );
};

export default Home;
