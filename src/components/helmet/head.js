import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import GlobalStyles from '../../styles/globalStyle';
import useSeo from '../../hooks/use-seo';

const Head = () => {

    const seo = useSeo();
    const { sitename, fallbackSeo: { title, description } } = seo;

    return (
        <Fragment>
            {/** Head */}
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link src="https://fonts.googleapis.com/css?family=PT+Sans:400,700|Roboto:400,700&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
            </Helmet>
            {/** Global Styles */}
            <GlobalStyles />
        </Fragment>
    )
};

export default Head;