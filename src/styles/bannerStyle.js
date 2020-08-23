import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';

export const Img = styled(BackgroundImage)`
    height: 700px;
`;

export const TextImg = styled.div`
    background-image: linear-gradient(to top, rgba(34,49,63,.50), rgba(34,49,63,.50));
    color: #fff;
    height: 100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    
    h1 {
        font-size: 4rem;
        margin: 0%;

        @media(min-width: 992px) {
            font-size: 5.8rem;
        }
    }

    p {
        font-size: 2rem;
        @media(min-width: 992px) {
            font-size: 2.5rem;
        }
    }
`;