import "./CartItemList.css";

const CartItemList = ({name, price, quantity, total_price, heading}) => {
    return (
        <div className={heading === true ? "cart-item-list-item-heading" : "cart-item-list-item"}>
            <p className="cart-item-list-item-name">{name}</p>
            <p className="cart-item-list-item-price">{price}</p>
            <p className="cart-item-list-item-quantity">{quantity}</p>
            <p className="cart-item-list-item-total-price">{total_price}</p>
        </div>
    )
}

export default CartItemList;