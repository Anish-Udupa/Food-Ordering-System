import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Checkout from "../../checkout/Checkout";
import CartItemList from "../cart-item-list/CartItemList";
import "./FullCart.css";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const FullCart = ({store, setFullCart }) => {
    const onCloseBtnClick = () => {
        setFullCart(false);
    }
    return(
        <div id="full-cart-container">
            <div id="full-cart-details-container">
                <FontAwesomeIcon icon={faTimes} id="full-cart-close-icon" onClick={onCloseBtnClick}/>
                <p id="full-cart-heading">CART</p>
                <div id="full-cart-item-container">
                    <CartItemList name={"Name"} price={"Price"} quantity={"Qty"} total_price={"Total"} heading={true}/>
                    {store.getState().items.length > 0 ? store.getState().items.map((item, index) => {
                        return (
                            <CartItemList key={index} name={item.name} price={item.price} quantity={item.quantity} total_price={item.quantity * item.price} />
                        );
                    }) : <p id="full-cart-item-empty-p">Your cart is empty</p>}
                </div>
                <div id="cost-and-checkout-container">
                    <div id="cost-container">
                        <p>Total Cost:</p>
                        <p>{store.getState().total_cost}</p>
                    </div>
                    <Checkout store={store}/>
                </div>
            </div>
        </div>
    );
}

export default FullCart;