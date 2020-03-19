import React, { useEffect, useState } from 'react';
import Header from '../Header';
import ItemsContainer from '../ItemsContainer';
import axios from 'axios';

const storeDataNeeded = (data) =>
    data.map(({ id, title, img, price, brand, size, seller, sold }) =>
        ({ id, title, img, price, brand, size, seller, sold }));

const Shop = () => {
    const [ items, setItems ] = useState([]);
    const [ likedItems, setLikedItems ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        axios.get('https://5c78274f6810ec00148d0ff1.mockapi.io/api/v1/products')
            .then(res => {
                setItems(storeDataNeeded(res.data));
                setLoading(false);
            })
            .catch(() => {
                alert('There was an error fetching the data. Please refresh the page.')
            });
    }, []);

    const unlikeItem = (id) => setLikedItems(likedItems.filter(likedItem => likedItem.id !== id));

    const itemIsLiked = (id) => likedItems.some(likedItem => likedItem.id === id);

    const toggleLike = (id, title) => itemIsLiked(id)
        ? unlikeItem(id) : setLikedItems([ ...likedItems, { id, title } ]);

    return (
        <React.Fragment>
            <Header likedItems={likedItems} unlikeItem={unlikeItem} />
            <ItemsContainer
                items={items.map(item => ({ ...item, liked: itemIsLiked(item.id) }))}
                loading={loading}
                toggleLike={toggleLike}
            />
        </React.Fragment>
    );
}

export default Shop;
