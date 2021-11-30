import { Link } from "react-router-dom";
import styled from "styled-components";

const MovieCardLink = styled(Link)`
    
`;

const MovieCardBlock = styled.div`
    user-select: none;
    img {
        width: 100%;
        border-radius: 10px;
        box-shadow: 0px 4px 4px 0px hsla(0, 0%, 0%, 0.35);
    }
`;

const MovieCard = ({ medium_cover_image }) => {
    return (
        <MovieCardBlock>
            <img src={medium_cover_image} alt={medium_cover_image}/>
        </MovieCardBlock>
    )
}

const Movie = ({ id, medium_cover_image }) => {
    return (
        <MovieCardLink to={`/${id}`}>
            <MovieCard medium_cover_image={medium_cover_image}/>
        </MovieCardLink>
    )
}

export default Movie;