import "./header.css";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";

let Header = (props) => {
    const [ login_details, setLoginDetails ] = useState(null);

    useEffect(() => {

        // TODO: This doesnt work i.e doesnt get updated when user logs in. Fix it
        console.log("Header use effect");
        let details = localStorage.getItem("login-details");
        if(details !== null || details !== undefined){
            console.log(details);
            // details = JSON.parse(details);
            // setLoginDetails({
            //     uid: details.uid,
            //     name: details.name,
            // });
            setLoginDetails(details)
        }
    })
    return (
        <div id="page-header">
            <Link to='/' className="header-link"><p id="page-title">CRUST OF MILAN</p></Link>
            <div id="navigation-pages">
                <Link to='/menu' className="header-link"><div className="page-link">Our Menu</div></Link>
                {login_details === null ? 
                    <Link to='/login' className="header-link"><div className="page-link">Login</div></Link> :
                    <div>welcome</div>}
            </div>
        </div>
    );
}

export default Header;