import React, { useState } from 'react';
import ReadDates from './ReadDates';
import OwnedToggle from './OwnedToggle';

const Book = ({ book, changeBookInfo, deleteBook }) => {
    const { id, name, author, owned } = book;
    const changeOwned = () => {
        changeBookInfo(id, book => ({
            ...book,
            owned: !owned,
        }));
    };

    const changeName = e => {
        changeBookInfo(id, book => ({
            ...book,
            name: e.target.value,
        }));
    };

    const changeAuthor = e => {
        changeBookInfo(id, book => ({
            ...book,
            author: e.target.value,
        }));
    };

    return (
        <div>
            <h2>
                <EditableHeader value={name} changeValue={changeName} />
            </h2>
            <h3>
                by <EditableHeader value={author} changeValue={changeAuthor} />
            </h3>
            <OwnedToggle owned={owned} changeOwned={changeOwned} />
            {book.readDates.length > 0 ? <div>Read</div> : <div>Not read yet</div>}
            <ReadDates book={book} changeBookInfo={changeBookInfo} />
        </div>
    );
};

const EditableHeader = ({ value, changeValue }) => {
    const [edit, setEdit] = useState(false);
    const changeEdit = () => {
        setEdit(edit => !edit);
    };

    return (
        <>
            {edit ? <input className="textInput" value={value} onChange={changeValue} /> : value}
            <button onClick={changeEdit}>Edit</button>
        </>
    );
};

export default Book;
