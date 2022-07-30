import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./styles.scss";
Pagination.propTypes = {
    
};

function Pagination(props) {
    return (
        <div>
            <div className="footer">
              <span>
                <FontAwesomeIcon icon={faAngleLeft} />
              </span>
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <span>
                <FontAwesomeIcon icon={faAngleRight} />
              </span>
            </div>
        </div>
    );
}

export default Pagination;