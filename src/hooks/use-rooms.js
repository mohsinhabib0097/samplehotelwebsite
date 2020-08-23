import { graphql, useStaticQuery } from 'gatsby';

const UseRooms = () => {

    const data = useStaticQuery(graphql`
        query {
            allDatoCmsRoom {
                nodes{
                        title
                        id
                        slug
                        content
                        image {
                        fluid(maxWidth:1200) {
                            ...GatsbyDatoCmsFluid
                        }
                    }
                }
            }
        }
    `);

    return data.allDatoCmsRoom.nodes.map(room => ({
        id: room.id,
        title: room.title,
        content: room.content,
        image: room.image,
        slug: room.slug
    }));
};

export default UseRooms;