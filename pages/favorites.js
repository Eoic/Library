import React, { Component } from 'react';
import Layout from '../Layouts/Main';

class Favorites extends Component {
    render() {
        return (
            <Layout>
                <main className="sidebar-content has-navbar">
                    <div className='container bg-white'>
                        Favorites
                    </div>
                </main>
            </Layout>
        );
    }
}

export default Favorites;