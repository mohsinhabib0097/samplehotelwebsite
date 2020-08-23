import { css } from "@emotion/core";
import styled from '@emotion/styled';
import { Link } from 'gatsby';


export const LinkLogo = styled(Link)`
  color: #fff;
  text-align: center;
  text-decoration: none;
`;

export const header = css`
  background-color: #333;
  padding: 1rem;
`

export const content = css`
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;


export const h1 = css`
  color: #fff;
  text-align: center;
`;
