import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div className='text-center' style={{ padding: 15 }} >
                <input className='search-input v-middle' placeholder='Search...' type='text'></input>
                <i className='fas fa-search fa-2x v-middle input-extension'></i>
            </div>
        );
    }
}

export default Search;