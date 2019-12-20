import React, { useState } from 'react';
import Book from './Book';
import AddBook from './AddBook';
import { getExampleBook, findAndExecute } from '../utils';
import Filters, { defaultFilters, possibleFilters } from './Filters';
import { deleteById } from './ReadDates';

const defaultBooks = [getExampleBook()];

const Booklist = () => {
    const [books, setBooks] = useState(defaultBooks);
    const [filters, setFilters] = useState(defaultFilters);

    const changeBookInfo = (id, fn) => {
        setBooks(findAndExecute(books, id, fn));
    };

    const deleteBook = bookIdToDelete => {
        setBooks(oldBooks => {
            const newBooks = deleteById(oldBooks, bookIdToDelete);
            return newBooks;
        });
    };

    const booksToRender = books.filter(book => {
        let out = true;
        filters.forEach(filter => {
            switch (filter.id) {
                case possibleFilters.purchased:
                    if (book[filter.id] !== filter.value) {
                        out = out && false;
                    }
                    break;
                default:
                    break;
            }
        });
        return out;
    });

    return (
        <div className="booklist">
            <Filters filters={filters} setFilters={setFilters} />
            <ul>
                {booksToRender.map(book => {
                    return (
                        <Book
                            key={book.id}
                            book={book}
                            changeBookInfo={changeBookInfo}
                            deleteBook={deleteBook}
                        ></Book>
                    );
                })}
            </ul>
            <AddBook books={books} setBooks={setBooks} />
        </div>
    );
};

export default Booklist;
