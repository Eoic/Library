import React, { Component } from 'react';
import Books from '../components/Books/Books';

class AllBooks extends Component {
    render() {
        return (
            <main className="sidebar-content has-navbar">
                <div className='container bg-white'>
                    <Books/>
                </div>
            </main>
        );
    }
}

export default AllBooks;