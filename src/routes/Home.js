import { useQuery } from "@apollo/client";
import { gql } from "graphql-tag";
import styled from "styled-components";
import Movie from "../components/Movie";

const CardWrapper = styled.div`
    width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    position: relative;
    top: -50px;
    overflow-wrap: break-word;
    & > p {
        ${ ({ theme }) => theme.font.h1 }
    }
`;

const Header = styled.header`
    width: 100%;
    height: 45vh;
    background-color: ${ ({ theme }) => theme.color.primary.default };
    color: ${ ({ theme }) => theme.color.text.white };
    ${ ({ theme }) => theme.font.h1 };
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
`;

const GET_MOVIES = gql`
    {
        movies{
            id
            medium_cover_image
            title
            rating
        }
    }
`;

const Home = () => {
    const { loading, data } = useQuery(GET_MOVIES);
    return (
        <div>
            <Header>영?화</Header>
            <CardWrapper>
                {loading && <p>loading</p>}
                {!loading && data?.movies?.map(({ id, medium_cover_image }) => <Movie key={id} id={id} medium_cover_image={medium_cover_image} />)}
            </CardWrapper>
        </div>
    )
}

export default Home;