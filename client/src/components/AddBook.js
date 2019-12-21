import React, { useState } from 'react';
import { uuid } from '../utils';
import OwnedToggle from './OwnedToggle';

const AddBook = ({ setBooks }) => {
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
    };

    const changeName = e => {
        setName(e.target.value);
    };
    const changeOwned = () => {
        setOwned(owned => !owned);
    };
    const changeAuthor = e => {
        setAuthor(e.target.value);
    };

    return (
        <div>
            Add new book:
            <div>
                Name: <input value={name} onChange={changeName} />
                Author: <input value={author} onChange={changeAuthor} />
                <OwnedToggle owned={owned} changeOwned={changeOwned} />
                <button onClick={addBook}>Add!</button>
            </div>
        </div>
    );
};

export default AddBook;
