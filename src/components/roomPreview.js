import React from 'react';
import Image from 'gatsby-image';
import { Button, contentStyle } from '../styles/roomStyles';


const RoomPreview = ({ room }) => {

    const { title, content, image, slug } = room;

    return (
        <div css={contentStyle}>
            <Image fluid={image.fluid} />
            <div className="content-room">
                <h3>{title}</h3>
                <hr />
                <p>
                    {content}
                </p>
                <hr />
                <Button to={slug}> Ver Habitación </Button>
            </div>
        </div>
    )
};

export default RoomPreview;