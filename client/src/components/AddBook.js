import React, { useState } from 'react';
import { uuid } from '../utils';
import OwnedToggle from './OwnedToggle';

const AddBook = ({ setBooks }) => {
    const [author, setAuthor] = useState('');
    const [name, setName] = useState('');
    const [purchased, setPurchased] = useState(false);

    const addBook = () => {
        const newBook = {
            author,
            name,
            id: uuid(),
            readDates: [],
            purchased,
        };
        setBooks(books => [...books, newBook]);
    };

    const changeName = e => {
        setName(e.target.value);
    };
    const changePurchased = () => {
        setPurchased(purchased => !purchased);
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
                <OwnedToggle purchased={purchased} changePurchased={changePurchased} />
                <button onClick={addBook}>Add!</button>
            </div>
        </div>
    );
};

export default AddBook;
