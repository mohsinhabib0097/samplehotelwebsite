import { css } from '@emotion/core';
import styled from '@emotion/styled';

export const h2Style = css`
    margin-top: 4rem;
    text-align: center;
    font-size: 4rem;
`;

export const MainStyle = styled.main`
    padding-top: 4rem;
    max-width: 100%;
    width: 95%;
    margin: 0 auto;

    @media(min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2rem;
    }

    p {
        line-height: 2;
    }
`;