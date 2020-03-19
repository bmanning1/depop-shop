import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './Item.css';

const Item = ({ id, img, title, size, price, seller, sold, brand, liked, toggleLike }) => (
  <div className="item">
    <div className="item-img-container">
      <img className="item-img" alt={title} src={img} />
      {sold && <div className="sold">SOLD</div>}
      <button className={`like-button ${liked ? 'liked' : ''}`} onClick={() => toggleLike(id, title)}>
        <FontAwesomeIcon className="heart" icon={faHeart} />
      </button>
    </div>
    <p><b>{seller}</b> {title}</p>
    <p>{brand && <span>Brand: <b>{brand}</b></span>} {size && <span>Size: <b>{size}</b></span>}</p>
    <p>Price <b>{`£${price}`}</b></p>
  </div>
);

Item.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  seller: PropTypes.string.isRequired,
  sold: PropTypes.bool.isRequired,
  size: PropTypes.string,
  brand: PropTypes.string,
  liked: PropTypes.bool.isRequired,
  toggleLike: PropTypes.func.isRequired
}

Item.defaultProps = {
  size: null,
  brand: null
}

export default Item;