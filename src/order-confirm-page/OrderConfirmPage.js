import "./OrderConfirmPage.css";
import OrderMap from "./components/order-map/OrderMap";
import OrderStage from "./components/order-stage/OrderStage";
import OrderDetails from "./components/order-details/OrderDetails";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function OrderConfirmPage(props){
    const navigate = useNavigate();
    const [ itemsPresent, setItemPresent ] = useState(false);
    const [ transactionData, setTransactionData ] = useState(null);

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
        else{
            const uid = JSON.parse(login).uid;
            let obj = {
                uid: uid,
                total_cost: JSON.parse(items).total_cost,
                items: JSON.parse(items).items,
            };
            console.log(obj)

            axios.post('http://localhost:8080/place-order', obj)
            .then((res) => {
                const data = res.body;
                if(data.status === false){
                    alert("Something went wrong while processing your transaction. Please try again.");
                    navigate("/menu");
                }
                else{
                    setTransactionData(data);
                    setItemPresent(true);
                }
            })
            .catch((err) => {
                console.log(err)
                alert("Something went wrong while processing your transaction. Please try again.");
                navigate("/menu")
            });
            
        }
    }, [])
    return (
        itemsPresent &&
        (<div id="order-confirm-container">
            <OrderMap />
            
            <div id="order-confirm-area-container">
                <OrderStage />
                <OrderDetails items={transactionData.order_data.items} bill_no={transactionData.bill_no} total_cost={transactionData.order_data.total_cost} />
            </div>
        </div>)
    );
}

export default OrderConfirmPage;