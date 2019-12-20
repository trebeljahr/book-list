import React from 'react';

const ReadDate = ({ changeReadDates, deleteReadDate, date }) => {
    const { id } = date;

    const changeKeyValueOfDate = (key, newValue) => {
        return {
            ...date,
            [key]: newValue,
        };
    };

    const changeBeginningOfReadDate = () => {
        changeReadDates(() => changeKeyValueOfDate('beginning', new Date()), id);
    };
    const changeEndOfReadDate = () => {
        changeReadDates(() => changeKeyValueOfDate('end', new Date()), id);
    };
    const deleteDate = () => {
        deleteReadDate(id);
    };

    return (
        <div>
            <div>Beginning: {date.beginning.toString()}</div>
            <div>End: {date.end.toString()}</div>

            <button onClick={deleteDate}>Delete!</button>
            <button onClick={changeBeginningOfReadDate}>Change Beginning!</button>
            <button onClick={changeEndOfReadDate}>Change End!</button>
        </div>
    );
};

export default ReadDate;
