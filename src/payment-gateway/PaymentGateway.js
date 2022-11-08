function PaymentGateway(props){
    return (
        <div id="payment-gateway-container">
            <div className="payment-gateway-subcontainer" id="payment-gateway-method-container">
                <p id="paymet-gateway-mode-heading">Select Mode of Payment</p>
                <p>Debit Card</p>
                <p>Credit Card</p>
                <p>Net Banking</p>
                <p>UPI</p>
            </div>
            <div className="payment-gateway-subcontainer">
                
            </div>
        </div>
    )
}

export default PaymentGateway;