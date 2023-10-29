import React, { useEffect, useState } from 'react';
import MenuHeader from './menu-header/MenuHeader';
import MenuGroup from './menu-group/MenuGroup';
import Checkout from './checkout/Checkout';
import Cart from './cart/Cart';
import storeFactory from '../store/StoreFactory';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function MenuPage(){
    let [ store, setStore ] = useState(null);
    const navigate = useNavigate();
    const [ loggedIn, setLoggedIn ] = useState(false);
    const [ menu, setMenu ] = useState(null);

    const getMenu = async () => {
        try {
            const req = (await axios.get(`${process.env.REACT_APP_BACKEND_SERVER_URL}/api/menu`, { withCredentials: true }));
            if(req.status === 200) {
                const data = req.data;
                if(data && data.success === true && data.menu !== undefined) {
                    setLoggedIn(true);
                    localStorage.removeItem("redux-store");
                    setStore(storeFactory());
    
                    console.log(data);
                    setMenu(data.menu);
                }
                else {
                    navigate("/login");
                }
            }
            else {
                // Not authenticated
                navigate("/login");
            }
        }
        catch(err) {
            // Not authenticated or server error
            navigate("/login");
        }
    }

    useEffect(() => {
        getMenu();
    }, [])

    return(
        loggedIn && 
        (<>
            <MenuHeader />
            <MenuGroup  store={store} menu={menu} />
            <Checkout store={store} />
            <Cart store={store} />
        </>)
    );
}

export default MenuPage;