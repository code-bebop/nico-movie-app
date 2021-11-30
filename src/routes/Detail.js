import { useParams } from "react-router"
import { gql, useQuery } from "@apollo/client"
import styled from "styled-components"

const DetailBlock = styled.div`
    background: rgb(158,27,178);
    background: linear-gradient(90deg, rgba(158,27,178,1) 0%, rgba(107,16,156,1) 100%);
    height: 100vh;
    overflow: auto;
`;

const DetailContent = styled.div`
    height: 100vh;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    img {
        width: 25%;
        height: 60%;
    }
`;

const Column = styled.div`
    width: 50%;
    color: ${ ({ theme }) => theme.color.text.white };

    h1 {
        ${ ({ theme }) => theme.font.h1 };
        margin-bottom: 15px;
    }
    h2 {
        ${ ({ theme }) => theme.font.h2 };
        margin-bottom: 10px;
    }
    p {
        ${ ({ theme }) => theme.font.description };
    }
`;

const GET_MOVIES = gql`
        query getMovie($id: Int!) {
            movie(id: $id) {
                id
                title
                medium_cover_image
                description_intro
                language
                rating
            }
        }
    `

const Detail = () => {
    const {id} = useParams();

    const {loading, data} = useQuery(GET_MOVIES, {variables: {id: +id}});
    
    

    return (
        <DetailBlock>
            {loading && <p>loading</p>} 
            {data?.movie && 
                <DetailContent>
                    <Column>
                        <h1>{data?.movie?.title}</h1>
                        <h2>{data?.movie?.rating} / {data?.movie?.language}</h2>
                        <p>{data?.movie?.description_intro}</p>
                    </Column>
                    <img src={data?.movie?.medium_cover_image} alt={data?.movie?.medium_cover_image}/>
                </DetailContent>
            }
        </DetailBlock>
    )
}

export default Detail;