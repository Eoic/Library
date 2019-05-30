import React, { Component } from 'react';
import Layout from '../Layouts/Main';

class Shelves extends Component {
    render() {
        return (
            <Layout>
                <main className="sidebar-content has-navbar">
                    <div className='container bg-white'>
                        Shelves
                    </div>
                </main>
            </Layout>
        );
    }
}

export default Shelves;