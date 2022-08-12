import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TodoItem from "../TodoItem";
import './styles.scss';
import {URL} from "../../constant"
TodoList.propTypes = {
    
};

function TodoList() {
    const [listCard, setListcard] = useState([]);
    // get listCard API
    useEffect(() => {
        fetch(URL)
        .then((response) =>  response.json())
        .then((data) => {
            setListcard(data);
        })
        .catch((error) => {
            console.log(error);
        });
    },[listCard]);
    const changeItemStatus = (selectedItem, changedStatus) => {
        // call fetch API PUT update
        fetch(`${URL}/${selectedItem.id}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify({...selectedItem, status: changedStatus}),
        })
        .then((response) => response.json())
        .then(() => {
            const updatedListCard = listCard.map((obj) => {
                if(obj.id === selectedItem.currentId) {
                    obj.status = changedStatus;
                    return obj;
                }
                return obj;
            });
            setListcard(updatedListCard);
        })
        .catch((error) => {
            console.log(error);
        });
    };
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

    return (
        <div style={{marginTop: "30px", marginLeft:"20px"}}>
            <ul className='card-list'>
                {listCard.length > 0 && listCard.map((card,index) => (
                    <TodoItem initialItem = {card} key={index} handleChangeStatus = {changeItemStatus}/>
                ))}
            </ul>
        </div>
    );
}
export default TodoList;