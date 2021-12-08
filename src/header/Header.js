import "./header.css";
import { Link } from 'react-router-dom';

let Header = (props) => {
    return (
        <div id="page-header">
            <p id="page-title">CRUST OF MILAN</p>
            <div id="navigation-pages">
                <Link to='/menu' className="header-link"><div className="page-link">Our Menu</div></Link>
                <Link to='/contact' className="header-link"><div className="page-link">Contact</div></Link>
            </div>
        </div>
    );
}

export default Header;