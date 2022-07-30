import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
Header.propTypes = {
};

function Header(props) {
    const [display, setDisplay] = useState('none');
    function openModal() {
        setDisplay("flex");
    }
    function closeModal() {
        setDisplay("none");
    }
    return (
        <div>
            <div className="header">
                <input type="button" value=" Create New Task" onClick={openModal}/>
                <div className="header-btn">
                    <input type="text" placeholder="Type something to search" />
                    <input type="button" value="Search" />
                </div>
            </div>
            <div className='form' style={{display}}>
                <div className='form-task'>
                    <div>
                        <label htmlFor=''>Title</label>
                        <input type="text" placeholder='Enter Title'/>
                    </div>
                    <div>
                        <label htmlFor="">Creator</label>
                        <input type="text" placeholder='Enter Name'/>
                    </div>
                    <div>
                        <label htmlFor=''>Description</label>
                        <textarea name="" id="" cols="35" rows="8" placeholder='Enter description'></textarea>
                    </div>
                    <div>
                        <button onClick={closeModal}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;