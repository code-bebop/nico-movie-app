import { useQuery } from "@apollo/client";
import { gql } from "graphql-tag";

const GET_MOVIES = gql`
    {
        movies{
            id
            medium_cover_image
        }
    }
`

const HomeComponent = () => {
    const { loading, error, data } = useQuery(GET_MOVIES);
    console.log(loading, error, data);
    return (
        <div>
            {loading && <p>loading</p>}
            {!loading && data.movies && 
            data.movies.map(({ id }) => <p key={id}>{id}</p>)}
        </div>   
    )
}

export default HomeComponent;