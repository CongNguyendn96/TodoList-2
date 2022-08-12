import React from 'react';
import PropTypes from 'prop-types';
import "./searchform.scss";
SearchForm.propTypes = {
    
};

function SearchForm(props) {
    return (
        <div>
            <div className="header-search">
                <input type="text" placeholder="Type something to search" />
                <input type="button" value="Search" />
            </div>
        </div>
    );
}

export default SearchForm;