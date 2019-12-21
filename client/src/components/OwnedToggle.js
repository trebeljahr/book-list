import React from 'react';

const OwnedToggle = ({ owned, changeOwned }) => {
    return (
        <div>
            <label className="switch">
                <input type="checkbox" checked={owned ? true : false} onChange={changeOwned} />
                <span className="slider round" />
            </label>
            {owned ? 'Owned' : 'Not owned'}
        </div>
    );
};

export default OwnedToggle;
