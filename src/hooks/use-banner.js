import { graphql, useStaticQuery } from 'gatsby';

const UseBanner = () => {

    const { image } = useStaticQuery(graphql`
        query {
            image: file(relativePath: {eq: "5.jpg" }) {
                sharp:childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        },
    `);

    return image.sharp.fluid;
}

export default UseBanner;