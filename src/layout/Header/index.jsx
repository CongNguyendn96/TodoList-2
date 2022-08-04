import PropTypes from 'prop-types';
import './styles.scss';
import {Link} from "react-router-dom";
Header.propTypes = {
};

function Header(props) {

    return (
        <div>
            <div className="header">
                <Link to ="/add">
                    <input type="button" value=" Create New Task"/>
                </Link>
                <div className="header-btn">
                    <input type="text" placeholder="Type something to search" />
                    <input type="button" value="Search" />
                </div>
            </div>
        </div>
    );
}

export default Header;