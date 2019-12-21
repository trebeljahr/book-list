import React from 'react';
import { uuid } from '../utils';

const ToggleFilter = ({ category, filters, changeFilter, addFilter, deleteFilter }) => {
    const filter = filters.find(filter => filter.category === category);

    const toggleOn = () => {
        if (!filter) {
            return addThisFilter(true);
        }
        changeFilter(filter.id, true);
    };
    const toggleOff = () => {
        if (!filter) {
            return addThisFilter(false);
        }
        changeFilter(filter.id, false);
    };
    const deleteThisFilter = () => {
        deleteFilter(filter.id);
    };

    const addThisFilter = (value = false) => {
        const newFilter = {
            id: uuid(),
            category,
            value,
        };
        addFilter(newFilter);
    };
    return (
        <div className="toggleFilterContainer">
            <button
                className="toggleFilterButton"
                disabled={!filter ? true : false}
                onClick={deleteThisFilter}
            >
                Show all
            </button>
            <button
                className="toggleFilterButton"
                disabled={filter ? (filter.value ? true : false) : false}
                onClick={toggleOn}
            >
                Only {category}
            </button>
            <button
                className="toggleFilterButton"
                disabled={filter ? (filter.value ? false : true) : false}
                onClick={toggleOff}
            >
                Only not {category}
            </button>
        </div>
    );
};

export default ToggleFilter;
