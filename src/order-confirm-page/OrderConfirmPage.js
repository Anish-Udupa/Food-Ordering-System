import "./OrderConfirmPage.css";
import OrderMap from "./components/order-map/OrderMap";
import OrderStage from "./components/order-stage/OrderStage";
import OrderDetails from "./components/order-details/OrderDetails";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function OrderConfirmPage(props){
    const navigate = useNavigate();
    const [ itemsPresent, setItemPresent ] = useState(false);

    // Initially check if any items are selected. If not, redirect to menu
    useEffect(() => {
        const items = localStorage.getItem("redux-store");
        const login = localStorage.getItem("login-details");

        if(items === undefined || items === null){
            alert("Your cart is empty. Please add some items.");
            navigate("/menu");
        }
        else if(login === undefined || login === null){
            alert("Please login to continue");
            navigate("/login");
        }
        else
            setItemPresent(true);
    }, [])
    return (
        itemsPresent &&
        (<div id="order-confirm-container">
            <OrderMap />
            
            <div id="order-confirm-area-container">
                <OrderStage />
                <OrderDetails />
            </div>
        </div>)
    );
}

export default OrderConfirmPage;