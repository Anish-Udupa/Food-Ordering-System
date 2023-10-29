import { Link, useNavigate } from 'react-router-dom';
import "./Checkout.css";

const Checkout = ({store}) => {
    const navigate = useNavigate();
    const onCheckoutBtnClick = () => {
        const bill_data = store.getState()
        navigate("/payment", { state: bill_data });
    }
    return(
        <div id="checkout-container">
            <div id='checkout-button' onClick={onCheckoutBtnClick}>PROCEED TO CHECKOUT</div>
        </div>
    );
}

export default Checkout;