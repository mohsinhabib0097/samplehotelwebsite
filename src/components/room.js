import React from 'react'
import Image from 'gatsby-image';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

import { MainRoomStyle, h1RoomStyle } from '../styles/roomStyles';

export const query = graphql`
    query ($slug: String!) {
        allDatoCmsRoom(filter: {slug: {eq: $slug} }) {
            nodes {
                title,
                content,
                image {
                    fluid(maxWidth: 1200){
                        ...GatsbyDatoCmsFluid
                    }
                }
            }
        }
    }
`;

const RoomTemplate = ({ data: { allDatoCmsRoom: { nodes } } }) => {

    const { title, content, image } = nodes[0];

    return (
        <Layout>
            <main css={MainRoomStyle}>
                <h1 css={h1RoomStyle}>{title}</h1>
                <p>{content}</p>
                <Image fluid={image.fluid} />
            </main>
        </Layout>
    );
}

export default RoomTemplate;