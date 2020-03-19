import React from 'react';
import PropTypes from 'prop-types';
import Likes from '../Likes';
import logo from '../static/depop_logo.png';
import './Header.css';

const Header = (props) => {
    return (
        <div className="header">
            <img className="depop-logo" src={logo} alt="depop logo" />
            <Likes {...props}/>
        </div>
    )
};

Header.propTypes = {
    likedItems: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired
    })).isRequired,
    unlikeItem: PropTypes.func.isRequired
};

export default Header;