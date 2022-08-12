import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import {useState} from "react";

const TodoItem = ({initialItem, handleChangeStatus}) => {
    const ALL_STATUS = ["New", "Doing", "Done"];
    // const [statusValue, setStatusValue] = useState(initialItem.status);
    // const [card, setCard] = useState(initialItem);
    const [color, setColor] = useState('green');

    function handleChangeColor(e) {
        const currentStatus = e.target.value;       
        if (currentStatus === "New") {
            setColor('green');
        }
        if(currentStatus === "Doing") {
            setColor('purple');
        }
        if (currentStatus === "Done") {
            setColor('blue');
        }
    }

    return (
        <li key={initialItem.id}>
            <div className='card-item'>
                <div className='card-item__info'>
                    <p>Title: <span>{initialItem.title}</span></p>   
                    <p>Creator: <span>{initialItem.creator}</span></p>   
                    <p style ={{color: `${color}`}}>Status: <span>{initialItem.status}</span></p>   
                    <p>Description: <span>{initialItem.description}</span></p>   
                </div>
                <div className='card-item__select'>
                    <select onChange={(e) => {handleChangeStatus(initialItem, e.target.value); handleChangeColor(e)}}>
                        {ALL_STATUS.map((item,index) => {
                              return (
                                <option key={index} value={item}>{item}</option>
                              );      
                                })}
                    </select>
                </div>
            </div>
        </li>
    );
}

export default TodoItem;