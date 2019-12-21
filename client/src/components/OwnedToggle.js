import React from 'react';

const OwnedToggle = ({ purchased, changePurchased }) => {
    return (
        <div>
            <label className="switch">
                <input
                    type="checkbox"
                    checked={purchased ? true : false}
                    onChange={changePurchased}
                />
                <span className="slider round" />
            </label>
            {purchased ? 'Owned' : 'Not owned'}
        </div>
    );
};

export default OwnedToggle;
