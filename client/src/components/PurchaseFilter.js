import React from 'react';
import { possibleFilters } from './Filters';

const PurchaseFilter = ({ purchaseFilter, changeFilter, addFilter, deleteFilter }) => {
    const togglePurchasedFilter = () => {
        changeFilter(possibleFilters.purchased, !purchaseFilter.value);
    };
    const deletePurchasedFilter = () => {
        deleteFilter(possibleFilters.purchased);
    };
    const addPurchasedFilter = () => {
        addFilter(possibleFilters.purchased, false);
    };

    if (!purchaseFilter) return <button onClick={addPurchasedFilter}>Add purchase filter</button>;
    return (
        <div>
            <button
                className={purchaseFilter.value ? 'green' : 'red'}
                onClick={togglePurchasedFilter}
            >
                {purchaseFilter.value ? 'Showing owned' : 'Showing not owned'}{' '}
            </button>
            <button
                className={purchaseFilter.value ? 'green' : 'red'}
                onClick={deletePurchasedFilter}
            >
                Delete!
            </button>
        </div>
    );
};

export default PurchaseFilter;
