import React from 'react';
import { uuid } from '../utils';
import ReadDate from './ReadDate';
import { findAndExecute } from './Booklist';

const ReadDates = ({ changeBookInfo, book }) => {
    const { id } = book;

    const addReadDateToBook = () => {
        const newReadDate = {
            id: uuid(),
            beginning: new Date(),
            end: new Date(),
        };
        const newBook = {
            ...book,
            readDates: [...book.readDates, newReadDate],
        };
        return newBook;
    };

    const addReadDate = () => {
        changeBookInfo(id, addReadDateToBook);
    };

    const changeReadDates = (fn, readDateId) => {
        const changeReadDate = () => {
            const readDates = findAndExecute(book.readDates, readDateId, fn);
            return {
                ...book,
                readDates,
            };
        };
        changeBookInfo(id, changeReadDate);
    };

    const deleteReadDate = readDateId => {
        const deleteSingleDate = () => {
            const readDates = deleteById(book.readDates, readDateId);
            return {
                ...book,
                readDates,
            };
        };

        changeBookInfo(id, deleteSingleDate);
    };

    return (
        <div>
            {book.readDates.map(date => {
                return (
                    <ReadDate
                        date={date}
                        changeReadDates={changeReadDates}
                        deleteReadDate={deleteReadDate}
                        key={date.id}
                    />
                );
            })}
            <button onClick={addReadDate}>Add another read date</button>
        </div>
    );
};

export const deleteById = (elements, idToSearchFor) => {
    const i = elements.findIndex(elem => idToSearchFor === elem.id);
    const newElements = [...elements.slice(0, i), ...elements.slice(i + 1, elements.length)];
    return newElements;
};

export default ReadDates;
