import React from 'react';
import { findAndExecute } from '../utils';
import { deleteById } from './ReadDates';
import PurchaseFilter from './PurchaseFilter';

export const possibleFilters = {
    name: 'name',
    author: 'author',
    purchased: 'purchased',
    read: 'read',
};

export const defaultFilters = [
    { id: possibleFilters.purchased, value: false },
    { id: possibleFilters.name, value: 'Harry Potter' },
];

const Filters = ({ filters, setFilters }) => {
    const purchaseFilter = filters.find(filter => filter.id === possibleFilters.purchased);

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
    const addFilter = (id, value) => {
        const newFilter = {
            id,
            value,
        };
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
            <PurchaseFilter
                purchaseFilter={purchaseFilter}
                changeFilter={changeFilter}
                deleteFilter={deleteFilter}
                addFilter={addFilter}
            />
        </div>
    );
};

export default Filters;
