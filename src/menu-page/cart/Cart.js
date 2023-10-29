import React, { useState } from "react";
import "./Cart.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import FullCart from "./full-cart/FullCart"

const Cart = ({store}) => {
    const [ full_cart, setFullCart ] = useState(false);
    const onCartIconClick = () => {
        setFullCart(true);
    }
    return(
        full_cart === true ? 
            <FullCart store={store} setFullCart={setFullCart}/> 
            : 
            <FontAwesomeIcon id="cart-icon" icon={faShoppingCart} size={"2x"} onClick={onCartIconClick}/>
    )
}

export default Cart;