import React from 'react';
import ReadDates from './ReadDates';
import OwnedToggle from './OwnedToggle';

const Book = ({ book, changeBookInfo, deleteBook }) => {
    const { id, name, author, purchased } = book;

    const changePurchased = () => {
        changeBookInfo(id, book => ({
            ...book,
            purchased: !purchased,
        }));
    };
    const changeAuthor = e => {
        changeBookInfo(id, book => ({
            ...book,
            author: e.target.value,
        }));
    };

    const changeName = e => {
        changeBookInfo(id, book => ({
            ...book,
            name: e.target.value,
        }));
    };

    const deleteThisBook = () => {
        deleteBook(id);
    };

    return (
        <div>
            <input
                className={book.readDates.length > 0 ? 'strikethrough' : ''}
                value={name}
                onChange={changeName}
            />
            <input value={author} onChange={changeAuthor} />
            <button onClick={deleteThisBook}>Delete</button>
            <OwnedToggle purchased={purchased} changePurchased={changePurchased} />
            {book.readDates.length > 0 ? <div>Read</div> : <div>Not read yet</div>}
            <ReadDates book={book} changeBookInfo={changeBookInfo} />
        </div>
    );
};

export default Book;
