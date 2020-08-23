import React from 'react';
import { Img, TextImg } from '../styles/bannerStyle';
import UseBanner from '../hooks/use-banner';

const Banner = () => {

    const image = UseBanner();

    return (
        <Img tag="section" fluid={image} fadeIn="soft">
            <TextImg>
                <h1>Bienvenido a Hotel Gatsby</h1>
                <p>El mejor hotel para tus vacaciones</p>
            </TextImg>
        </Img>
    );
}

export default Banner;