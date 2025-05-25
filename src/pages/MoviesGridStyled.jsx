import styled from "styled-components";

export const Container = styled.div`
    padding: 2rem;
`;

export const Title = styled.h2`
    color: rgba(0, 0, 0, 0.85);
    font-size: 2.5rem;
    text-align: center;
    margin: 2rem 0 1rem;
    font-family: "Old English Text MT";

    .query-text {
        color: #000000;
    }
`;

export const MoviesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;

    > div {
        font-family: "Baskerville Old Face", serif;
        width: 25%;
        color: #ffffff;
        margin-bottom: 2.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: rgba(0, 0, 0, 0.91);
        padding: 1rem;

        img {
            max-width: 100%;
            margin-bottom: 1rem;
        }

        p {
            margin-bottom: 1rem;
        }

        h2 {
            margin-bottom: 1.5rem;
        }

        svg {
            color: #f7d354;
        }

        a {
            font-family: "Old English Text MT";
            background-color: #f7d354;
            border: 2px solid #f7d354;
            border-radius: 4px;
            color: #000000;
            padding: 1rem 0.5rem;
            text-align: center;
            font-weight: bold;
            transition: 0.3s;

            &:hover {
                background-color: transparent;
                color: #ffffff;
            }
        }
    }
`;
