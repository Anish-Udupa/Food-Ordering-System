import React from 'react';
import './menu-item-style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { faMinusSquare } from '@fortawesome/free-solid-svg-icons';
import Header from '../../header/Header';
import { types } from '../../store/ActionTypes';


class MenuItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cart_text: "Add To Cart",
            added_to_cart: false,
            quantity: 1,
            price: this.props.price
        };
        
        this.cartRef = React.createRef();
        this.handleIncrementButton = this.handleIncrementButton.bind(this);
        this.handleDecrementButton = this.handleDecrementButton.bind(this);
        this.handleAddToCart = this.handleAddToCart.bind(this);
    }

    handleIncrementButton(){
        if (!this.state.added_to_cart){
            this.handleAddToCart();
        }
            let obj = {
                id: this.props.item_id,
                name: this.props.title, 
                quantity: this.state.quantity + 1,
                price:  this.props.price
            }
            let action = {
                type: types.INCREMENT_QUANTITY,
                obj: obj
            }
            this.props.store.dispatch(action);

            this.setState(
                (state) => ({
                    quantity: state.quantity + 1,
                    price: state.price + this.props.price,
                    added_to_cart: (state.added_to_cart),
                    cart_text: state.cart_text
                })
            );
    }

    handleDecrementButton(){
        if (this.state.quantity > 1){
            let obj = {
                id: this.props.item_id,
                name: this.props.title, 
                quantity: this.state.quantity - 1,
                price:  this.props.price
            }
            let action = {
                type: types.DECREMENT_QUANTITY,
                obj: obj
            }
            this.props.store.dispatch(action);

            this.setState(
                (state) => ({
                    quantity: state.quantity - 1,
                    price: state.price - this.props.price,
                    added_to_cart: (state.added_to_cart),
                    cart_text: state.cart_text
                })
            );
        }
    }

    handleAddToCart(){
        {/* Add the item to the redux store */}
        let obj = {
            id: this.props.item_id,
            name: this.props.title, 
            quantity: this.state.quantity,
            price:  this.props.price
        }

        if (!this.state.added_to_cart){
            let action = {
                type: types.ADD_TO_CART,
                obj: obj
            }
            this.props.store.dispatch(action);
            this.cartRef.current.className = 'remove-from-cart-button';
            this.setState(
                (state) => ({
                    quantity: state.quantity,
                    price: state.price,
                    added_to_cart: !(state.added_to_cart),
                    cart_text: 'Remove From Cart'
                })
            );
        }
        else{
            let action = {
                type: types.REMOVE_FROM_CART,
                obj: obj
            }
            this.props.store.dispatch(action);
            this.cartRef.current.className = 'add-to-cart-button'
            this.setState(
                (state) => ({
                    quantity: 1,
                    price: this.props.price,
                    added_to_cart: !(state.added_to_cart),
                    cart_text: 'Add to Cart'
                })
            );
        }
        

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
                <div ref={this.cartRef} className="add-to-cart-button" onClick={this.handleAddToCart}>{this.state.cart_text}</div>
            </div>
        );
    }
}

export default MenuItem;