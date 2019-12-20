import React from 'react';
import ReadDates from './ReadDates';

const Book = ({ book, changeBookInfo, deleteBook }) => {
    const { id, name, purchased } = book;
    const purchase = book => {
        return {
            ...book,
            purchased: true,
        };
    };
    const unPurchase = book => {
        return {
            ...book,
            purchased: false,
        };
    };

    const buy = () => {
        changeBookInfo(id, purchase);
    };
    const unbuy = () => {
        changeBookInfo(id, unPurchase);
    };

    const deleteThisBook = () => {
        deleteBook(id);
    };

    return (
        <li className={book.readDates.length > 0 ? 'strikethrough' : ''}>
            {name}
            <button onClick={deleteThisBook}>Delete</button>

            {purchased ? (
                <button onClick={unbuy}>Unbuy</button>
            ) : (
                <button onClick={buy}>Buy</button>
            )}
            <ReadDates book={book} changeBookInfo={changeBookInfo} />
        </li>
    );
};

export default Book;
