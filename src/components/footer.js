import React, { Fragment } from 'react';
import { footerStyle } from '../styles/footerStyle';

const Footer = () => {
    return (
        <Fragment>
            <main css={footerStyle}>
                <h4> Todos los derechos reservados {new Date().getFullYear()} &copy;  </h4>
            </main>
        </Fragment>
    );
}

export default Footer;