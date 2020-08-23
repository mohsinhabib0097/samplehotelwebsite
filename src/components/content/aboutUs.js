import React, { Fragment } from 'react';
import Image from 'gatsby-image';
import { h2Style, MainStyle } from '../../styles/aboutUsStyle';
import UseAboutUsContent from '../../hooks/use-about-us-content';

const AboutUs = () => {

    const { title, content, image } = UseAboutUsContent();

    return (
        <Fragment>
            <h2 css={h2Style}>{title}</h2>
            <MainStyle>
                <p>
                    {content}
                </p>
                <Image fluid={image.fluid} />
            </MainStyle>
        </Fragment>
    );
}

export default AboutUs;