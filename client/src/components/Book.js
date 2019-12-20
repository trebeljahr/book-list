import React from 'react';
import ReadDates from './ReadDates';

const Book = ({ book, changeBookInfo, setBooks }) => {
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

    return (
        <li className={book.readDates.length > 0 ? 'green' : 'red'}>
            {name}
            {purchased ? (
                <button onClick={unbuy}>Unbuy</button>
            ) : (
                <button onClick={buy}>Buy</button>
            )}
            <ReadDates book={book} changeBookInfo={changeBookInfo} setBooks={setBooks} />
        </li>
    );
};

export default Book;
