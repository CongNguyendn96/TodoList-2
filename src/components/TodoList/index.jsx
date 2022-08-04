import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from "../TodoItem";
import './styles.scss';
import Pagination from '../Pagination';
TodoList.propTypes = {
    
};

function TodoList(props) {
    // const cardList = [
    //     {
    //         id:1,
    //         title: 'Task 1',
    //         creator: "Thiên",
    //         status: "New",
    //         desc: "This is a task",
    //     },
    //     {
    //         id:2,
    //         title: 'Task 2',
    //         creator: "Trung",
    //         status: "New",
    //         desc: "This is a task",
    //     },
    //     {
    //         id:3,
    //         title: 'Task 3',
    //         creator: "Phong",
    //         status: "New",
    //         desc: "This is a task",
    //     },
    //     {
    //         id:4,
    //         title: 'Task 4',
    //         creator: "Đạt",
    //         status: "New",
    //         desc: "This is a task",
    //     },
    //     {
    //         id:5,
    //         title: 'Task 5',
    //         creator: "Hiền",
    //         status: "New",
    //         desc: "This is a task",
    //     },  
    //     {
    //         id:6,
    //         title: 'Task 6',
    //         creator: "Vân",
    //         status: "New",
    //         desc: "This is a task",
    //     }, 
    //     {
    //         id:7,
    //         title: 'Task 7',
    //         creator: "Dung",
    //         status: "New",
    //         desc: "This is a task",
    //     },
    //     {
    //         id:8,
    //         title: 'Task 8',
    //         creator: "Tâm",
    //         status: "New",
    //         desc: "This is a task",
    //     },
    // ]
    const listCard =JSON.parse(localStorage.getItem('data')) || []; 
    return (
        <div style={{marginTop: "30px", marginLeft:"20px"}}>
            <ul className='card-list'>
                {listCard && listCard.map((card,index) => (
                    <li key = {index}>
                        <TodoItem card = {card} key={card.index}/>
                    </li>
                ))}
            </ul>
            <Pagination/>
        </div>
    );
}
export default TodoList;