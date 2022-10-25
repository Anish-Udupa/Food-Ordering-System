import ListItem from "./list-item/ListItem"
import "./ListItemContainer.css";

function ListItemContainer(props) {
    return (
        <div className="list-item-container">
            {props.items.map((item, index) => <ListItem item_slno={index+1} {...item} />)}
        </div>
    )
}

export default ListItemContainer;