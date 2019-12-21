import React from 'react';
import bookIcon from '../assets/book-person.svg';
import bookEyeIcon from '../assets/book-eye.svg';

export const OwnedToggle = ({ owned, changeOwned }) => {
    return (
        <button className="center ownedToggle" onClick={changeOwned}>
            <img
                className={'top left smallIcon ' + (!owned ? 'opaque' : '')}
                src={bookIcon}
                alt="ownedBookIcon"
            />
        </button>
    );
};

export const ReadToggle = ({ read, changeRead }) => {
    return (
        <button className="center readToggle" onClick={changeRead}>
            <img
                className={'top left smallIcon ' + (read ? '' : 'opaque')}
                src={bookEyeIcon}
                alt="ownedBookIcon"
            />
        </button>
    );
};
