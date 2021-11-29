import { Link } from "react-router-dom";

const Movie = ({ id }) => {
    return <Link to={`/${id}`}>{id}</Link>
}

export default Movie;