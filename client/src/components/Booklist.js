import React, { useState } from 'react';
import Book from './Book';
import AddBook from './AddBook';
import { uuid, getExampleBook } from '../utils';

const defaultBooks = [getExampleBook(), getExampleBook()];

const defaultFilters = {
    purchased: 'false',
};

const Booklist = () => {
    const [books, setBooks] = useState(defaultBooks);
    const [filters, setFilters] = useState(defaultFilters);

    const changeBookInfo = (id, fn) => {
        setBooks(findAndExecute(books, id, fn));
    };

    return (
        <div className="booklist">
            <ul>
                {books.map(book => (
                    <Book key={book.id} book={book} changeBookInfo={changeBookInfo}></Book>
                ))}
            </ul>
            <AddBook books={books} setBooks={setBooks} />
        </div>
    );
};

export function findAndExecute(elements, id, fn) {
    return elements.map(element => {
        if (element.id === id) {
            const newElement = fn(element);
            if (newElement) {
                return newElement;
            }
            return;
        }
        return element;
    });
}

export default Booklist;
