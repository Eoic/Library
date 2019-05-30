import React, { Component } from 'react';
import Layout from '../Layouts/Main';

class AllBooks extends Component {
    render() {
        return (
            <Layout>
                <main className="sidebar-content">
                    <div className='container bg-white'>
                        All books page 
                    </div>
                </main>
            </Layout>
        );
    }
}

export default AllBooks;