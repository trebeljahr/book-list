import React, { useState } from 'react';
import ReadDates from './ReadDates';
import OwnedToggle from './OwnedToggle';

const Book = ({ book, changeBookInfo }) => {
    const { id, name, author, owned } = book;
    const [edit, setEdit] = useState(false);
    const toggleEdit = () => {
        setEdit(edit => !edit);
    };
    const changeOwned = () => {
        changeBookInfo(id, book => ({
            ...book,
            owned: owned ? false : new Date(),
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
            {!edit ? (
                <>
                    <h1>{name}</h1>
                    <h4>by {author}</h4>
                </>
            ) : (
                <>
                    <h1>
                        <EditableHeader value={name} changeValue={changeName} />
                    </h1>
                    <h4>
                        by <EditableHeader value={author} changeValue={changeAuthor} />
                    </h4>
                    <OwnedToggle owned={owned} changeOwned={changeOwned} />
                    {/* {book.readDates.length > 0 ? <div>Read</div> : <div>Not read yet</div>}
                    <ReadDates book={book} changeBookInfo={changeBookInfo} /> */}
                </>
            )}
            <button className="top right" onClick={toggleEdit}>
                {edit ? <i class="fas fa-check"></i> : <i class="fas fa-pen"></i>}
            </button>
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
            <button className="editButton" onClick={changeEdit}>
                {edit ? <i class="fas fa-check"></i> : <i class="fas fa-pen"></i>}
            </button>
        </>
    );
};

export default Book;
