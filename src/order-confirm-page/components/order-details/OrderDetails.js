import "./OrderDetails.css";
import ListItemContainer from "../../../list-item-components/ListItemContainer";

const OrderDetails = () => {
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
    return (
        <div id="order-details-container">
            <p>Order Details</p>
            <div id="order-details-list-item-container">
                <ListItemContainer items={sample} />
            </div>
            <div id="order-details-total-cost-container">
                <p>Total cost</p>
                <p>Rs. 1233</p>
            </div>
        </div>
    )
}

export default OrderDetails;