import React, { useState } from 'react';
import { uuid } from '../utils';
import OwnedToggle from './OwnedToggle';

const AddBook = ({ setBooks, open, setOpen }) => {
    const openNewBookForm = () => {
        setOpen(true);
    };
    const closeNewBookForm = () => {
        setOpen(false);
    };

    const [author, setAuthor] = useState('');
    const [name, setName] = useState('');
    const [owned, setOwned] = useState(false);

    const addBook = () => {
        const newBook = {
            author,
            name,
            id: uuid(),
            readDates: [],
            owned,
        };
        setBooks(books => [...books, newBook]);
        setOpen(false);
    };

    const changeName = e => {
        setName(e.target.value);
    };
    const changeOwned = () => {
        setOwned(owned => {
            return owned ? false : new Date();
        });
    };
    const changeAuthor = e => {
        setAuthor(e.target.value);
    };

    return open ? (
        <div className="fullScreen top left center">
            <div className="addBookForm">
                <button className="top right" onClick={closeNewBookForm}>
                    Close
                </button>
                <h2>Add new book:</h2>
                <label>Name:</label>
                <input value={name} onChange={changeName} />
                <label>Author:</label>
                <input value={author} onChange={changeAuthor} />
                <OwnedToggle owned={owned} changeOwned={changeOwned} />
                <button onClick={addBook}>Add!</button>
            </div>
        </div>
    ) : (
        <button onClick={openNewBookForm}>Add new book</button>
    );
};

export default AddBook;
