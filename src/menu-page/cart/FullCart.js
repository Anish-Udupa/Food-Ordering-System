import React from "react";
import Checkout from "../checkout/Checkout";

class FullCart extends React.Component{
    render(){
        return(
            <div id="full-cart-container">
                <p id="cart-heading">CART</p>
                {/* Items */}
                {this.props.store.getState().items.map((item, index) => {
                    return (
                        <CartItemList key={index} item={item} />
                    );
                })}
                <div id="cost-and-checkout-container">
                    <p>Total Cost:</p>
                    <p>0</p>
                    {/* Proceed to checkout */}
                    <Checkout />
                </div>
            </div>
        );
    }
}

export default FullCart;