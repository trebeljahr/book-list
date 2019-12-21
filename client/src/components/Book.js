import React, { useState } from 'react';
import { OwnedToggle, ReadToggle } from './Toggles';

const Book = ({ book, changeBookInfo }) => {
    const { id, name, author, owned, read } = book;
    const changeOwned = () => {
        changeBookInfo(id, book => ({
            ...book,
            owned: owned ? false : new Date(),
        }));
    };
    const changeRead = () => {
        changeBookInfo(id, book => ({
            ...book,
            read: read ? false : new Date(),
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
        <div className="bookListing">
            <OwnedToggle owned={owned} changeOwned={changeOwned} />
            <ReadToggle read={read} changeRead={changeRead} />
            <div>
                <h1>
                    <EditableHeader value={name} changeValue={changeName} />
                </h1>
                <h4>
                    <EditableHeader value={author} additional="by" changeValue={changeAuthor} />
                </h4>
                {/* {book.readDates.length > 0 ? <div>Read</div> : <div>Not read yet</div>}
                    <ReadDates book={book} changeBookInfo={changeBookInfo} /> */}
            </div>
        </div>
    );
};

const EditableHeader = ({ value, changeValue, additional }) => {
    const [edit, setEdit] = useState(false);
    const changeEdit = () => {
        setEdit(edit => !edit);
    };
    return (
        <>
            {edit ? (
                <>
                    <button className="editButton" onClick={changeEdit}>
                        <i className="fas fa-check"></i>
                    </button>
                    {additional && <p className="textInput">{additional}</p>}
                    <input className="textInput" value={value} onChange={changeValue} />
                </>
            ) : (
                <>
                    <button className="editButton" onClick={changeEdit}>
                        <i className="fas fa-pen"></i>
                    </button>
                    {additional && <p className="textInput">{additional}</p>}
                    <p className="textInput">{value}</p>
                </>
            )}
        </>
    );
};

export default Book;
