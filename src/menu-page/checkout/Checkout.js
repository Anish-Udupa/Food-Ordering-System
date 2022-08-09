import React  from "react";
import { Link } from 'react-router-dom';
var axios = require('axios');
const url = require('url');

var MongoClient = require('mongodb').MongoClient;

class Checkout extends React.Component{
    constructor(props){
        super(props);
        this.checkout = this.checkout.bind(this)
    }

    checkout(){
        let currState = this.props.store.getState()
        let obj = currState.items;

        axios.post('http://localhost:8080/order-insert', obj)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }

    render(){
        return(
            <div className="cart-container">
                <div className='checkout-button' onClick={this.checkout}><Link to='/order-successful'>PROCEED TO CHECKOUT</Link></div>
            </div>
        );
    }
}

export default Checkout;