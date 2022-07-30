import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from "../TodoItem";
import './styles.scss';
TodoList.propTypes = {
    
};

function TodoList(props) {
    const cardList = [
        {
            id:1,
            title: 'Task 1',
            creator: "Thiên",
            status: "New",
            desc: "This is a task",
        },
        {
            id:2,
            title: 'Task 2',
            creator: "Trung",
            status: "New",
            desc: "This is a task",
        },
        {
            id:3,
            title: 'Task 3',
            creator: "Phong",
            status: "New",
            desc: "This is a task",
        },
        {
            id:4,
            title: 'Task 4',
            creator: "Đạt",
            status: "New",
            desc: "This is a task",
        },
        {
            id:5,
            title: 'Task 5',
            creator: "Hiền",
            status: "New",
            desc: "This is a task",
        },  
        {
            id:6,
            title: 'Task 6',
            creator: "Vân",
            status: "New",
            desc: "This is a task",
        }, 
        {
            id:7,
            title: 'Task 7',
            creator: "Dung",
            status: "New",
            desc: "This is a task",
        },
        {
            id:8,
            title: 'Task 8',
            creator: "Tâm",
            status: "New",
            desc: "This is a task",
        },
    ]
    return (
        <ul className='card-list'>
            {cardList.map(card => (
                <li key={card.id}>
                    <TodoItem card = {card}/>
                </li>
            ))}
        </ul>
    );
}
export default TodoList;