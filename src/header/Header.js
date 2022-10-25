import "./header.css";
import { Link } from 'react-router-dom';

let Header = (props) => {
    return (
        <div id="page-header">
            <Link to='/' className="header-link"><p id="page-title">CRUST OF MILAN</p></Link>
            <div id="navigation-pages">
                <Link to='/menu' className="header-link"><div className="page-link">Our Menu</div></Link>
                <Link to='/login' className="header-link"><div className="page-link">Login</div></Link>
            </div>
        </div>
    );
}

export default Header;