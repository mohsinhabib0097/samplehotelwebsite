import { graphql, useStaticQuery } from 'gatsby';

const UseAboutUsContent = () => {

    const { data } = useStaticQuery(graphql`
        query {
            data: allDatoCmsPage(filter: {slug: {eq: "about-us"} }) {
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

export default UseAboutUsContent;