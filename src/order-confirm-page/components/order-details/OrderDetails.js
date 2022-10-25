import "./OrderDetails.css";
import ListItemContainer from "../../../list-item-components/ListItemContainer";

const OrderDetails = () => {
    const sample = [
        {item_name: "Margerita", item_quantity: 2, item_price: 200},
        {item_name: "Pasta", item_quantity: 4, item_price: 50000},
        {item_name: "Pepsi", item_quantity: 1, item_price: 50},
        {item_name: "Pepsi", item_quantity: 1, item_price: 50},
        {item_name: "Pepsi", item_quantity: 1, item_price: 50},
        {item_name: "Pepsi", item_quantity: 1, item_price: 50},
        {item_name: "Pepsi", item_quantity: 1, item_price: 50},
        {item_name: "Pepsi", item_quantity: 1, item_price: 50},
        {item_name: "Pepsi", item_quantity: 1, item_price: 50},
        {item_name: "Pepsi", item_quantity: 1, item_price: 50},
    ]
    return (
        <ListItemContainer items={sample} />
    )
}

export default OrderDetails;