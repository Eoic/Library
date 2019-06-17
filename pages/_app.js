import React from 'react';
import App, { Container } from 'next/app';
import Alert from '../components/Alert';
import Meta from '../components/Meta';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import '../src/styles/styles.scss';

class LibraryApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps)
            pageProps = await Component.getInitialProps(ctx);

        return { pageProps }
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <Container>
                <Meta />
                <Navbar />
                <Sidebar />
                <Component {...pageProps} />
                <Footer />
            </Container>
        );
    }
}

export default LibraryApp;