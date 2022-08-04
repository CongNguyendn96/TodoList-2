import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './form.scss';
import { useNavigate } from "react-router-dom";

Form.propTypes = {
    
};

function Form() {
        let navigate = useNavigate();
    const [formValue, setFormValue] = useState({
        title: "",
        creator: "",
        description: "",
        status: "new",
    })
    const handleChangeFile = (e) => {
        setFormValue ({
            ...formValue,
            [e.target.name]: e.target.value, 
        });
    }
    const handleChangeForm = (e) => {
        e.preventDefault();
        
        // validate field
        let txtInput1 = document.querySelector('.form-title');
        if( txtInput1.value === "title" || txtInput1.value === "") {
            txtInput1.nextElementSibling.innerHTML = "Please change your text!";
            return;
        }
        txtInput1.nextElementSibling.innerHTML = "";
        let txtInput2 = document.querySelector('.form-creator');
        if( txtInput2.value === "creator" || txtInput2.value === "") {
            txtInput2.nextElementSibling.innerHTML = "Please change your texta!";
            return;
        }
        txtInput2.nextElementSibling.innerHTML = "";
        let txtInput3 = document.querySelector('.form-desc');
        if( txtInput3.value === "description"|| txtInput3.value === "") {
            txtInput3.nextElementSibling.innerHTML = "Please change your text!";
            return;
        }
        txtInput3.nextElementSibling.innerHTML = "";
        const data =  JSON.parse(localStorage.getItem('data')) || [];
        data.push(formValue);
        localStorage.setItem('data', JSON.stringify(data));
        navigate('/');
    }
    return (
        <form action='' onSubmit={handleChangeForm}>
            <div className='form-task'>
                <div>
                    <label htmlFor=''>Title</label>
                    <div style={{display: 'block', padding: 0}}>
                        <input 
                        type="text" 
                        className='form-title'
                        placeholder='Enter Title' 
                        name = "title" 
                        value = {formValue.title} 
                        onChange={handleChangeFile}/>
                        <p style={{margin: 0, color: "red"}}></p>
                    </div>
                </div>
                <div>
                    <label htmlFor="">Creator</label>
                    <div style={{display: 'block', padding:0}}>
                        <input 
                        type="text" 
                        placeholder='Enter Name' 
                        name='creator' 
                        className='form-creator'
                        value={formValue.creator} 
                        onChange={handleChangeFile}/>
                        <p style={{margin:0, color: 'red'}}></p>
                    </div>
                </div>
                <div>
                    <label htmlFor=''>Description</label>
                    <div style={{display: 'block', padding: 0}}>
                        <input 
                        type="text"
                        placeholder='Enter description' 
                        name="description" 
                        className='form-desc'
                        value={formValue.description} 
                        onChange={handleChangeFile}>
                        </input>
                        <p style={{margin: 0, color:'red'}}></p>
                    </div>
                </div>
                <div>
                    <button type='submit'>Add</button>
                </div>
            </div>
        </form>
    );
}

export default Form;