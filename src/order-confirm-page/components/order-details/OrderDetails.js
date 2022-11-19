import "./OrderDetails.css";
import ListItemContainer from "../../../list-item-components/ListItemContainer";
import { useEffect, useState } from "react";

const OrderDetails = (props) => {

    const [ items, setItems ] = useState([]);

    useEffect(() => {
        // const data = JSON.parse(localStorage['redux-store']);
        // console.log(data)
        const items_new = props.items.map(item => {
            return {
                item_name: item.name,
                item_quantity: item.quantity,
                item_price: item.price,
            }
        })
        // console.log(items_new);
        setItems(items_new);
        
    }, [])
    

    return (
        <div id="order-details-container">
            <p id="order-details-heading">Order Details</p>
            <div id="order-details-list-item-container">
                {(items != []) && <ListItemContainer items={items} />}
            </div>
            <div id="order-details-total-cost-container">
                <p>Total cost</p>
                <p>Rs. {props.total_cost}</p>
            </div>
            <div id="order-details-total-cost-container">
                <p>Bill Number:</p>
                <p>{props.bill_no}</p>
            </div>
        </div>
    )
}

export default OrderDetails;