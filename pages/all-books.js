import React, { Component } from 'react';
import Layout from '../Layouts/Main';
import Books from '../components/Books/Books';

class AllBooks extends Component {
    render() {
        return (
            <Layout>
                <main className="sidebar-content has-navbar">
                    <div className='container bg-white'>
                        <Books/>
                    </div>
                </main>
            </Layout>
        );
    }
}

export default AllBooks;