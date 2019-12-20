import React from 'react';
import { getExampleBook } from '../utils';

const AddBook = ({ setBooks }) => {
    const addBook = () => {
        const newBook = getExampleBook();
        setBooks(books => [...books, newBook]);
    };
    return (
        <div>
            <button onClick={addBook}>Add book </button>
        </div>
    );
};

export default AddBook;
