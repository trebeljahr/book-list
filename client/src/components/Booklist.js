import React, { useState } from 'react';
import Book from './Book';

const defaultBooks = {
    'Harry Potter': {
        name: 'Harry Potter',
        readDates: [
            {
                beginning: new Date(),
                end: null,
            },
        ],
        purchased: false,
    },
};

const defaultFilters = {
    purchased: 'false',
};

const Booklist = () => {
    const [books, setBooks] = useState(defaultBooks);
    const [filters, setFilters] = useState(defaultFilters);

    const buyBook = name => {
        setBooks({ ...books, [name]: { ...books[name], purchased: true } });
    };
    const unbuyBook = name => {
        setBooks({ ...books, [name]: { ...books[name], purchased: false } });
    };

    const addBook = () => {
        console.log('Adding book!');
    };
    return (
        <div className="booklist">
            <ul>
                {Object.keys(books).map(name => (
                    <Book
                        key={name}
                        book={books[name]}
                        unbuyBook={() => unbuyBook(name)}
                        buyBook={() => buyBook(name)}
                    ></Book>
                ))}
            </ul>
            <button onClick={addBook}>Add book </button>
        </div>
    );
};

export default Booklist;
