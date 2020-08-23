import React, { Fragment } from 'react';
import Image from 'gatsby-image';
import { TextHomeStyle, h2Style } from '../../styles/homeStyle';

import UseHomeContent from '../../hooks/use-home-content';

const HomeContent = () => {

    const { title, content, image } = UseHomeContent();

    return (
        <Fragment>
            <h2 css={h2Style}>{title}</h2>
            <TextHomeStyle>
                <p>{content}</p>
                <Image fluid={image.fluid} alt={title} />
            </TextHomeStyle>
        </Fragment>
    );
}

export default HomeContent;