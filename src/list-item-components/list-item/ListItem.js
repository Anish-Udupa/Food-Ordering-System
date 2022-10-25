import "./ListItem.css";

function ListItem(props) {
    return (
        <div className="list-item">
            <p className="item-serial-number">{props.item_slno}.</p>
            <div className="name-quantity-container">
                <p className="item-name-heading">{props.item_name}</p>
                <div className="quantity-container">
                    <p className="item-quantity-heading">Quantity:</p>
                    <p className="item-quantity-value">{props.item_quantity}</p>
            </div>
        </div>
        <p className="item-cost-value"><p className="item-cost-rs">Rs.</p>{props.item_price}</p>
        </div>
    );
}

export default ListItem;