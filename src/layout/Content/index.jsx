import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import TodoList from '../../components/TodoList';
import Pagination from '../../components/Pagination';
Content.propTypes = {
    
};

function Content(props) {

    return (
        <div className='main-content'>
            <TodoList/>
            <Pagination/>
        </div>
    );
}

export default Content;