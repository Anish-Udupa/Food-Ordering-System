import React, { useEffect, useState } from 'react';
import MenuHeader from './menu-header/MenuHeader';
import MenuGroup from './menu-group/MenuGroup';
import Checkout from './checkout/Checkout';
import Cart from './cart/CartIcon';
import storeFactory from '../store/StoreFactory';
import { useNavigate } from "react-router-dom";

// class MenuPage extends React.Component{
//     constructor(props){
//         super(props);
//         localStorage.removeItem('redux-store');
//         this.store = storeFactory();
//         this.navigate = useNavigate();
//     }

//     render(){
//         return(
//             <>
//                 <MenuHeader />
//                 <MenuGroup  store={this.store}/>
//                 <Checkout store={this.store} />
//                 <Cart store={this.store} />
//             </>
//         );
//     }
// }

function MenuPage(){
    let [ store, setStore ] = useState(null);
    const navigate = useNavigate();
    const [ loggedIn, setLoggedIn ] = useState(false);

    useEffect(() => {
        const login_details = localStorage.getItem("login-details");
        if(login_details === null || login_details === undefined){
            alert("Please login to continue.");
            navigate("/login");
        }
        else{
            setLoggedIn(true);
        }
        localStorage.removeItem("redux-store");
        setStore(storeFactory());
    }, []);

    return(
        loggedIn && 
        (<>
            <MenuHeader />
            <MenuGroup  store={store}/>
            <Checkout store={store} />
            <Cart store={store} />
        </>)
    );
}

export default MenuPage;