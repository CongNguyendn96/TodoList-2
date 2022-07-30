import React from 'react';
import PropTypes from 'prop-types';
import "./styles.scss";
Sidebar.propTypes = {
    
}
function Sidebar(props) {
    return (
        <div>
            <div className="sidebar">
            <li>
              <input type="button" value="All Task" />
            </li>
            <li>
              <input type="button" value="New Task" />
            </li>
            <li>
              <input type="button" value="Doing Task" />
            </li>
            <li>
              <input type="button" value="Done Task" />
            </li>
          </div>
        </div>
    );
}

export default Sidebar;