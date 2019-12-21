import React from 'react';
import { uuid } from '../utils';

const ToggleFilter = ({ category, filters, changeFilter, addFilter, deleteFilter }) => {
    const filter = filters.find(filter => filter.category === category);
    const toggle = () => {
        changeFilter(filter.id, !filter.value);
    };
    const deleteThisFilter = () => {
        deleteFilter(filter.id);
    };
    const addThisFilter = () => {
        const newFilter = {
            id: uuid(),
            category,
            value: false,
        };
        addFilter(newFilter);
    };
    return (
        <div>
            {category}:{' '}
            {!filter ? (
                <button onClick={addThisFilter}>ON</button>
            ) : (
                <>
                    <button onClick={toggle}>
                        {filter.value ? 'Showing Owned' : 'Showing Unowned'}
                    </button>
                    <button onClick={deleteThisFilter}>OFF</button>
                </>
            )}
        </div>
    );
};

export default ToggleFilter;
