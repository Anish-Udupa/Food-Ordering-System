import React from 'react';
import './menu-item-style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { faMinusSquare } from '@fortawesome/free-solid-svg-icons';
import Header from '../../header/Header';


class MenuItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            quantity: 1,
            price: this.props.price
        };
        this.handleIncrementButton = this.handleIncrementButton.bind(this);
        this.handleDecrementButton = this.handleDecrementButton.bind(this);
        this.handleAddToCart = this.handleAddToCart.bind(this);
    }

    handleIncrementButton(){
        this.setState(
            (state) => ({
                quantity: state.quantity + 1,
                price: state.price + this.props.price
            })
        );
    }

    handleDecrementButton(){
        if (this.state.quantity > 1){
            this.setState(
                (state) => ({
                    quantity: state.quantity - 1,
                    price: state.price - this.props.price
                })
            );
        }
    }

    handleAddToCart(){
        {/* Add the item to the database */}
    }

    render(){
        return (
            <div className="menu-item">
                <p className="title">{this.props.title}</p>
                <img src={this.props.imgsrc} alt={this.props.imgalt} />
                <p className="desc">{this.props.desc}</p>
                <div className="price-quantity">
                    <div className="price">
                        <p>Total Price:</p>
                        <p>Rs. {this.state.price}</p>
                    </div>
                    <div className="quantity">
                        <p>Quantity:{this.state.quantity}</p>
                        <div className="increment-button" onClick={this.handleIncrementButton}><FontAwesomeIcon icon={faPlusSquare} fixedWidth/></div>
                        <div className="decrement-button" onClick={this.handleDecrementButton}><FontAwesomeIcon icon={faMinusSquare} fixedWidth/></div>
                    </div>
                </div>
                <div className="add-to-cart-button" onCLick={this.handleAddToCart}>Add To Cart</div>
            </div>
        );
    }
}

export default MenuItem;