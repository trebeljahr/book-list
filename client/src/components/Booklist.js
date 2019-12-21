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
    const [open, setOpen] = useState(false);

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
            switch (filter.category) {
                case possibleFilters.owned:
                    if (filter.value && !book.owned) {
                        out = out && false;
                    }
                    if (!filter.value && book.owned) {
                        out = out && false;
                    }
                    break;
                case possibleFilters.author:
                case possibleFilters.name:
                    const bookname = book[filter.category].toLowerCase();
                    const foundSubstring = bookname.search(filter.value.toLowerCase()) !== -1;
                    if (!foundSubstring) {
                        out = out && false;
                    }
                    break;
                case possibleFilters.read:
                    if (filter.value && !book.read) {
                        out = out && false;
                    }
                    if (!filter.value && book.read) {
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
            {!open && <Filters filters={filters} setFilters={setFilters} />}
            {!open &&
                (booksToRender.length > 0
                    ? booksToRender.map(book => {
                          return (
                              <Book
                                  key={book.id}
                                  book={book}
                                  changeBookInfo={changeBookInfo}
                                  deleteBook={deleteBook}
                              ></Book>
                          );
                      })
                    : 'It seems like you have no books matching these criteria.')}
            <AddBook books={books} setBooks={setBooks} open={open} setOpen={setOpen} />
        </div>
    );
};

export default Booklist;
