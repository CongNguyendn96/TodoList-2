import React from 'react';
import PropTypes from 'prop-types';
import {useState} from "react";
import './styles.scss';
TodoItem.propTypes = {
    card: PropTypes.object.isRequired,
};

function TodoItem({card}) {
    const [statusValue, setStatusValue] = useState('New');
    const [color, setColor] = useState('green');
    function handleChangeStatus(e) {
        setStatusValue(e.target.value);        
        if (e.target.value === "New") {
            setColor('green');
        }
        if(e.target.value === "Doing") {
            setColor('purple');
        }
        if (e.target.value === "Done") {
            setColor('blue');
        }
    }
    return (
        <div className='card-item'>
             <p>Title: <span>{card.title}</span></p>   
             <p>Creator: <span>{card.creator}</span></p>   
             <p style={{color: `${color}`}}>Status: <span>{statusValue}</span></p>   
             <p>Description: <span>{card.desc}</span></p>   
             <div>
                <select onChange={handleChangeStatus}>
                    <option value="New">New</option>
                    <option value="Doing" >Doing</option>
                    <option value="Done" >Done</option>
                </select>
             </div>
        </div>
    );
}

export default TodoItem;