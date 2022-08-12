import PropTypes from 'prop-types';
import './styles.scss';
import {Link} from "react-router-dom";
import SearchForm from '../../components/SearchForm';
Header.propTypes = {
};

function Header(props) {

    return (
        <div>
            <div className="header">
                <Link to ="/add">
                    <input type="button" value=" Create New Task"/>
                </Link>
                <SearchForm/>
            </div>
        </div>
    );
}

export default Header;