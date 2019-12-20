import React, { useState } from 'react';

const Book = ({ book: { name, purchased }, buyBook, unbuyBook }) => {
    return (
        <li>
            {name}
            {purchased ? (
                <button onClick={unbuyBook}>Unbuy</button>
            ) : (
                <button onClick={buyBook}>Buy</button>
            )}
        </li>
    );
};

export default Book;
