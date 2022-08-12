import React from 'react';
import PropTypes from 'prop-types';
import "./sidebar.scss";
import {Link} from "react-router-dom";

function Sidebar(props) {

    return (
        <div className='sidebar'>
            <ul className="nav">
              <nav className='nav__item'>
                <Link to ="/">
                    <input type="button" value="All Task"  />
                </Link>
              </nav>
              <nav className='nav__item'>
                <input type="button" value="New Task"  />
              </nav>
              <nav className='nav__item'>
                <input type="button" value="Doing Task"  />
              </nav>
              <nav className='nav__item'>
                <input type="button" value="Done Task"  />
              </nav>
            </ul>
        </div>
    );
}

export default Sidebar;