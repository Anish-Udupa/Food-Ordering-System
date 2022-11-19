import React  from "react";
import { Link } from 'react-router-dom';
import "./Checkout.css";
// var axios = require('axios');
import axios from "axios";

class Checkout extends React.Component{
    constructor(props){
        super(props);
        this.checkout = this.checkout.bind(this)
    }

    checkout(){
        // let currState = this.props.store.getState();
        // const uid = JSON.parse(localStorage.getItem("login-details")).uid;
        // let obj = {
        //     uid: uid,
        //     total_cost: currState.total_cost,
        //     items: currState.items,
        // };
        // console.log(obj)

        // axios.post('http://localhost:8080/place-order', obj)
        // .then((res) => console.log(res))
        // .catch((err) => console.log(err));
    }

    render(){
        return(
            <div id="checkout-container">
                <div id='checkout-button' onClick={this.checkout}><Link to='/order-successful' id="checkout-button-text">PROCEED TO CHECKOUT</Link></div>
            </div>
        );
    }
}

export default Checkout;