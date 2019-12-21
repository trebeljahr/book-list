import React from 'react';

const OwnedToggle = ({ owned, changeOwned }) => {
    return (
        <div className="toggleContainer">
            <label className="switch">
                <input type="checkbox" checked={owned ? true : false} onChange={changeOwned} />
                <span className="slider round" />
            </label>
            <div>{owned ? 'Owned' : 'Not owned'}</div>
        </div>
    );
};

export default OwnedToggle;
