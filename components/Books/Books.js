import React, { Component } from 'react';
import Search from '../Search';

const List = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

class Books extends Component {
  render() {
    return (
      <>
        <Search />
        <hr/>
        <div className='books-grid'>
          {List.map((number, index) => {
            return (<div className='book-wrapper' key={index}>
              {number}
            </div>)
          })}
        </div>
      </>
    );
  }
}

export default Books;