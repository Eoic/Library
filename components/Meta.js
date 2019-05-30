import React, { Component } from 'react';
import Head from 'next/head'

class Meta extends Component {
    render() {
        return (
            <Head>
                <meta charSet="UTF-8" />
                <meta name='viewport' content="initial-scale=1.0, width=device-width" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <script src="/static/font-awesome.js"></script>
                <script src='/static/active-button.js'></script>
                <title> Library | Home page </title>
            </Head>
        );
    }
}

export default Meta;