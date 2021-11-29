import { useQuery } from "@apollo/client";
import { gql } from "graphql-tag";
import styled from "styled-components";
import Movie from "../components/Movie";

const Header = styled.header`
    width: 100%;
    height: 45vh;
    background-color: #9E1BB2;
`;

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
            <Header />
            {loading && <p>loading</p>}
            {!loading && data?.movies?.map(({ id }) => <Movie key={id} id={id}/>)}
        </div>
    )
}

export default HomeComponent;