import React from "react";
import "./CartIcon.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

class CartIcon extends React.Component{
    constructor(props){
        super(props);
        this.cartExpand = this.cartExpand.bind(this);
    }

    cartExpand(){
        console.log("You clicked the cart icon.");
    }

    render(){
        return(            
            <FontAwesomeIcon id="cart-icon" icon={faShoppingCart} size={"2x"} onClick={this.cartExpand}/>
        )
    }
}

export default CartIcon;