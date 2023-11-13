import { useRef, useState } from "react";
import "./PaymentGateway.css";
import axios from "axios";
import { useNavigate } from "react-router";

const PaymentGateway = ({bill}) => {
    const cardRef = useRef();
    const expRef = useRef();
    const cvvRef = useRef();
    const navigate = useNavigate();
    const [ error_msg, setErrorMsg ] = useState(null);

    const onPayBtnClick = async () => {
        const data = {
            card: {
                card_no: cardRef.current.value,
                expiry: expRef.current.value,
                cvv: cvvRef.current.value,
            },
            bill: bill,
        }

        try {
            const res_data = (await axios.post(`${process.env.REACT_APP_BACKEND_SERVER_URL}/api/payment`, data, { withCredentials: true })).data;
            if(res_data.success === true) {
                const bill_id = res_data.bill_id;
                navigate(`/order-status?bill_id=${bill_id}`);
            }
            else {
                setErrorMsg("Invalid card details");
            }
        }
        catch(err) {
            console.log(err);
            setErrorMsg("A server error occured. Try again.")
        }
    }
    return (
        <div id="payment-gateway-container">
            <p id="payment-gateway-heading">Payment Gateway</p>
            <input type="text" placeholder="Credit Card Number" ref={cardRef} />
            <div id="payment-gateway-row">
                <input type="text" placeholder="Expiry: MM/YY" ref={expRef} />
                <input type="password" placeholder="CVV" ref={cvvRef} />
            </div>
            <div id="payment-gateway-pay-btn" onClick={onPayBtnClick}>PAY NOW</div>
            {error_msg && <p id="payment-gateway-err-msg">{error_msg}</p>}
        </div>
    )
}

export default PaymentGateway;