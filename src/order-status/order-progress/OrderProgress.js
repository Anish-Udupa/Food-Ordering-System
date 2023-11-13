import OrderProgressItem from "./OrderProgressItem";
import "./OrderProgress.css";

const OrderProgress = ({order_status}) => {
    const options = [
        "Order accepted",
        "Order being prepared",
        "Order dispatched",
        "Order delivered",
    ];

    return (
        <div id="order-progress-container">
            <p id="order-progress-heading">Order Progress</p>
            { options.map((option, index) => <OrderProgressItem key={index} completed={order_status > index} current={order_status == index} text={option} />) }
        </div>
    )
}

export default OrderProgress;