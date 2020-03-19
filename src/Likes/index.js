import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Likes.css';

export const LikesList = ({ likedItems, unlikeItem }) => (
    <ul className="likes-list">
        {likedItems.map(({ id, title }) => (
            <li key={id}>
                <b>{title}</b> <button onClick={() => unlikeItem(id)}>X</button>
            </li>
        ))}
    </ul>
);

export const LikeCount = ({ likes, onClick }) => (
    <button className="likes-count" disabled={likes === 0} onClick={onClick}>
        {`${likes} Like${likes === 1 ? '' : 's'}`}
    </button>
);

const Likes = ({ likedItems, unlikeItem }) => {
    const [showList, setShowList] = useState(false);

    useEffect(() => {
        likedItems.length === 0 && setShowList(false)
    }, [likedItems]);

    return (
        <div className="likes">
            <LikeCount likes={likedItems.length} onClick={() => setShowList(!showList)} />
            {showList && likedItems.length !== 0 &&
                <LikesList likedItems={likedItems} unlikeItem={unlikeItem} />}
        </div>
    )
};

Likes.propTypes = {
    likedItems: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired
    })).isRequired,
    unlikeItem: PropTypes.func.isRequired
};

export default Likes;