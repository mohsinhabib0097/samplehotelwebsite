import { graphql, useStaticQuery } from 'gatsby';

const UseHomeContent = () => {

    const { data } = useStaticQuery(graphql`
        query {
            data: allDatoCmsPage(filter: {slug: {eq: "inicio"} }) {
                nodes {
                        title,
                        content,
                        image {
                        fluid {
                            ...GatsbyDatoCmsFluid
                        }
                    }
                }
            }
        }
    `);

    return data.nodes[0];
}

export default UseHomeContent;