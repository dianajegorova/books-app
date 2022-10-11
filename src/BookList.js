import React from 'react';
import Book from './Book';
import Quote from './Quote';

const BookList = ({books}) => {
    return (
        <section>
            <h1>Amazon Books</h1>
            <p className='quote'><Quote /></p>
            <div className='main'>
                {books.map((book) => {
                    return <Book key={book.id} {...book}></Book>;
                })}
            </div>
        </section>
    )
}

export default BookList;