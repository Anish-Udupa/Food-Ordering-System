import "./PaymentGateway.css";

const PaymentGateway = () => {
    return (
        <div id="payment-gateway-container">
            <p id="payment-gateway-heading">Payment Gateway</p>
            <input type="text" placeholder="Credit Card Number" />
            <div id="payment-gateway-row">
                <input type="text" placeholder="MM/YY" />
                <input type="text" placeholder="CVV" />
            </div>
            <div id="payment-gateway-pay-btn">PAY NOW</div>
        </div>
    )
}

export default PaymentGateway;