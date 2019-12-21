import React, { useState, useEffect } from 'react';
import { uuid } from '../utils';

const StringFilter = ({ category, filters, changeFilter, addFilter, deleteFilter }) => {
    const filter = filters.find(filter => filter.category === category);
    const addThisFilter = () => {
        const newFilter = {
            id: uuid(),
            category,
            value: '',
        };
        addFilter(newFilter);
    };

    if (!filter) return <button onClick={addThisFilter}>Add {category} filter</button>;
    return (
        <ActualFilter
            filter={filter}
            category={category}
            changeFilter={changeFilter}
            deleteFilter={deleteFilter}
        />
    );
};

const ActualFilter = ({ filter, category, changeFilter, deleteFilter }) => {
    const [value, setValue] = useState('');
    const toggle = () => {
        changeFilter(filter.id, value);
    };
    const deleteThisFilter = () => {
        deleteFilter(filter.id);
    };

    const writeValue = e => {
        setValue(e.target.value);
    };
    useEffect(toggle, [value]);
    return (
        <div>
            {category}: <input value={value} onChange={writeValue} />
            <button onClick={deleteThisFilter}>Delete!</button>
        </div>
    );
};
export default StringFilter;
