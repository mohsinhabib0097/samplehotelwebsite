import { css } from "@emotion/core";
import styled from '@emotion/styled';
import { Link } from 'gatsby';

export const h2Style = css`
    text-align: center;
    margin: 5rem;
    font-size: 3rem;
`;

export const Button = styled(Link)`
    margin-top: 2rem;
    padding: 1rem;
    background-color: rgba(44,62,80,.85);
    color: #fff;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
`;

export const contentStyle = css`
    border: 1px solid #e1e1e1;
    margin-bottom: 2rem;
`;

export const UlStyle = styled.ul`
    max-width: 1200px;
    width:95%;
    margin: 4rem auto 0 auto;

    @media(min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr) ;
        column-gap: 3rem;
    } 

    .content-room {
        padding: 30px;
    }
`;

export const MainRoomStyle = css`
    margin:0 auto;
    margin-top: 30px;
    max-width: 1200px;
    width: 95%;  
`;

export const h1RoomStyle = css`
    text-align: center;
    margin-top: 4rem;
`;