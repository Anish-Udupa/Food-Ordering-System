import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./OrderProgress.css";
import { faCheck, faDotCircle } from "@fortawesome/free-solid-svg-icons";

function OrderProgressItem({text, completed, current}) {
    return (
        <div className={`order-progress-item-container ${current ? "order-progress-current-item" : ""}`}>
            {completed ? <FontAwesomeIcon icon={faCheck} size="xl" /> : <FontAwesomeIcon icon={faDotCircle} size="xl" beat={current} />}
            {text}
        </div>
    )
}

export default OrderProgressItem;