import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import Item from '../Item';
import './ItemsContainer.css';

const Loading = () => (
    <div className="loader">
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export const FilterButton = ({ filters, filter, toggleFilter, label }) => (
    <button className={filters.includes(filter) ? 'active' : ''} onClick={() => toggleFilter(filter)}>
        {label}
    </button>
);

const ItemsContainer = ({ items, loading, toggleLike }) => {
    const [ filters, setFilters ] = useState([]);

    const filteredItems = useMemo(() => {
        return items.filter(item => !(
            (filters.includes('sold') && item.sold !== false) ||
            (filters.includes('liked') && item.liked === false)
        ));
    }, [filters, items]);

    const addFilter = (filter) => setFilters([ ...filters, filter ]);

    const removeFilter = (filterToRemove) => setFilters(filters.filter(filter => filter !== filterToRemove));

    const toggleFilter = (filter) => filters.includes(filter) ? removeFilter(filter) : addFilter(filter);

    const length = loading ? 0 : filteredItems.length;

    return (
        <div className="items-container">
            <div className="items-header">
                <h4 className="results-number">
                    {`${length} Result${length === 1 ? '' : 's'}`}
                </h4>
                <div className="filter-buttons">
                    <FilterButton
                        filters={filters}
                        filter="sold"
                        toggleFilter={toggleFilter}
                        label="Hide Sold Items"
                    />
                    <FilterButton
                        filters={filters}
                        filter="liked"
                        toggleFilter={toggleFilter}
                        label="Show Liked Items"
                    />
                </div>
            </div>
            <div className="items-body">
                {loading
                    ? <Loading />
                    : filteredItems.map(item => <Item key={item.id} toggleLike={toggleLike} {...item}/>)}
            </div>
        </div>
    )
};

ItemsContainer.propTypes = {
    items: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        brand: PropTypes.string,
        size: PropTypes.string,
        seller: PropTypes.string.isRequired,
        sold: PropTypes.bool.isRequired,
        liked: PropTypes.bool.isRequired
    })),
    loading: PropTypes.bool.isRequired,
    toggleLike: PropTypes.func.isRequired
}

ItemsContainer.defaultProps = {
    items: []
}

export default ItemsContainer;