import React from 'react';
import Meta from '../components/Meta';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import '../src/styles/styles.scss';

export default ({ children }) => (
    <>
        <Meta />
        <Navbar />
        <Sidebar />
        {children}
        <Footer />
    </>
);