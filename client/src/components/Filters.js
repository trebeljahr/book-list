import React from 'react';
import { findAndExecute } from '../utils';
import { deleteById } from './ReadDates';
import ToggleFilter from './ToggleFilter';
import StringFilter from './StringFilter';

export const possibleFilters = {
    name: 'name',
    author: 'author',
    purchased: 'purchased',
    read: 'read',
};

export const defaultFilters = [];

const Filters = ({ filters, setFilters }) => {
    const deleteFilter = filterIdToDelete => {
        setFilters(oldFilters => {
            const newFilters = deleteById(oldFilters, filterIdToDelete);
            return newFilters;
        });
    };

    const changeFilter = (id, value) => {
        const changeFilterValue = filter => {
            return {
                ...filter,
                value,
            };
        };
        setFilters(findAndExecute(filters, id, changeFilterValue));
    };

    const addFilter = newFilter => {
        setFilters(oldFilters => {
            if (!oldFilters.find(filter => filter.id === newFilter.id)) {
                return [...oldFilters, newFilter];
            } else {
                return oldFilters;
            }
        });
    };

    return (
        <div className="filters">
            <ToggleFilter
                filters={filters}
                category={possibleFilters.purchased}
                changeFilter={changeFilter}
                deleteFilter={deleteFilter}
                addFilter={addFilter}
            />
            <StringFilter
                filters={filters}
                category={possibleFilters.name}
                changeFilter={changeFilter}
                deleteFilter={deleteFilter}
                addFilter={addFilter}
            />
            <StringFilter
                filters={filters}
                category={possibleFilters.author}
                changeFilter={changeFilter}
                deleteFilter={deleteFilter}
                addFilter={addFilter}
            />
        </div>
    );
};

export default Filters;
