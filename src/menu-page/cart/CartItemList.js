import React from 'react';

class CartItemList extends React.Component {
    render(){
        return (
            <div>
                <p id="cart-item-name">{this.props.item.}</p>
            </div>
        );
    }
}