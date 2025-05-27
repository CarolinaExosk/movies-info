import styled, { keyframes } from "styled-components";

// Animação de rolo de filme
const filmRoll = keyframes`
    from { background-position: 0 0; }
    to { background-position: 100% 0; }
`;

export const Container = styled.div`
    padding: 2rem;
    min-height: 100vh;
    background-color: #000000;
    background-image: url("https://www.transparenttextures.com/patterns/film.png"); /* textura de rolo de filme */
    background-size: 600px auto;
    animation: ${filmRoll} 60s linear infinite;
`;

export const Title = styled.h2`
    color: #f7d354;
    font-size: 3rem;
    text-align: center;
    margin: 2rem 0 1rem;
    font-family: "Old English Text MT", serif;
    text-shadow: 2px 2px 5px #000;

    .query-text {
        color: #ffffff;
    }
`;

export const MoviesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;

    > div {
        font-family: "Baskerville Old Face", serif;
        width: 22%;
        color: #ffffff;
        margin-bottom: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: rgba(0, 0, 0, 0.85);
        padding: 1rem;
        border-radius: 12px;
        box-shadow: 0 0 20px #f7d35444;
        transition: transform 0.3s ease;

        &:hover {
            transform: scale(1.05);
        }

        img {
            max-width: 100%;
            border-radius: 8px;
            margin-bottom: 1rem;
        }

        h2 {
            margin-bottom: 0.5rem;
            color: #f7d354;
            font-size: 1.2rem;
        }

        p {
            margin-bottom: 1rem;
            font-size: 0.95rem;
            color: #cccccc;
        }

        svg {
            color: #f7d354;
        }

        a {
            font-family: "Old English Text MT", serif;
            background-color: #f7d354;
            border: 2px solid #f7d354;
            box-shadow:
                0 0 5px #f7d354,
                0 0 10px #f7d354,
                0 0 20px #f7d354;
            border-radius: 10px;
            color: #000000;
            padding: 0.8rem;
            text-align: center;
            font-weight: bold;
            font-size: larger;
            transition: 0.3s;

            &:hover {
                background-color: transparent;
                color: #ffffff;
                border: 2px solid #ffffff;
            }
        }

        @media (max-width: 1024px) {
            width: 45%;
        }

        @media (max-width: 768px) {
            width: 100%;
        }
    }
`;
