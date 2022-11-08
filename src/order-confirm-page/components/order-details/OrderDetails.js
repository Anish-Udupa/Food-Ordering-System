import "./OrderDetails.css";
import ListItemContainer from "../../../list-item-components/ListItemContainer";
import { useEffect, useState } from "react";

const OrderDetails = (props) => {
    const sample = [
        {item_name: "Margerita", item_quantity: 2, item_price: 200},
        {item_name: "Pasta", item_quantity: 4, item_price: 50000},
        {item_name: "Pepsi", item_quantity: 1, item_price: 50},
        {item_name: "Pepsi", item_quantity: 1, item_price: 50},
        // {item_name: "Pepsi", item_quantity: 1, item_price: 50},
        // {item_name: "Pepsi", item_quantity: 1, item_price: 50},
        // {item_name: "Pepsi", item_quantity: 1, item_price: 50},
        // {item_name: "Pepsi", item_quantity: 1, item_price: 50},
        // {item_name: "Pepsi", item_quantity: 1, item_price: 50},
        // {item_name: "Pepsi", item_quantity: 1, item_price: 50},
    ]

    const [ items, setItems ] = useState([]);
    const [ total_cost, setTotalCost ] = useState(0);
    
    useEffect(() => {
        const data = JSON.parse(localStorage['redux-store']);
        // console.log(data)
        const items_new = data.items.map(item => {
            return {
                item_name: item.name,
                item_quantity: item.quantity,
                item_price: item.price,
            }
        })
        // console.log(items_new);
        setItems(items_new);

        setTotalCost(data.total_cost);
    }, [])
    

    return (
        <div id="order-details-container">
            <p id="order-details-heading">Order Details</p>
            <div id="order-details-list-item-container">
                {(items != []) && <ListItemContainer items={items} />}
            </div>
            <div id="order-details-total-cost-container">
                <p>Total cost</p>
                <p>Rs. {total_cost}</p>
            </div>
            <div id="order-details-total-cost-container">
                <p>Transaction Id</p>
                <p>fff</p>
            </div>
        </div>
    )
}

export default OrderDetails;