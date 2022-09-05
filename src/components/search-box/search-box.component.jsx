// import { Component } from 'react';

import './search-box.style.css'
// The style is not scoped.

const SearchBox = (props) => {
        const { onChangeHandler, placeholder, className } = props;
        return (
            <input 
                type='search' 
                className={`search-box ${className}`}
                placeholder={placeholder}
                onChange={onChangeHandler}
            />
        )
    }

export default SearchBox;