import { Component } from 'react';

import './search-box.style.css'
// The style is not scoped.

class SearchBox extends Component {
    render() {
        const { onChangeHandler, placeholder, className } = this.props;
        return (
            <input 
                type='search' 
                className={`search-box ${className}`}
                placeholder={placeholder}
                onChange={onChangeHandler}
            />
        )
    }
}

export default SearchBox;