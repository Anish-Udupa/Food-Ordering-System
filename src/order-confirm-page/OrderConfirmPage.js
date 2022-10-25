import "./OrderConfirmPage.css";
import OrderMap from "./components/order-map/OrderMap";
import OrderStage from "./components/order-stage/OrderStage";
import OrderDetails from "./components/order-details/OrderDetails";

function OrderConfirmPage(props){
    return (
        <div id="order-confirm-container">
            <OrderMap />
            
            <div id="order-confirm-area-container">
                <OrderStage />
                <OrderDetails />
            </div>
        </div>
    );
}

export default OrderConfirmPage;