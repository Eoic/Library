import React, { Component } from 'react';

const List = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

class Books extends Component {
    render() {
        return (
            <div className='books-grid'>
                {List.map(number => {
                    return (<div className='book-wrapper'>
                        {number}
                    </div>)
                })}
            </div> 
        );
    }
}

export default Books;