import "./banner.css";
import { Link } from 'react-router-dom';

function Banner(props){
    return (
        <div id="banner">
            <img src="/images/home-page/banner-background.png" id="banner-background-image"/>
            <div id="banner-text">
                <h1 id="banner-header">Craving Authentic Italian Food?</h1>
                <p id="banner-body">Order from a wide range of Pizzas, Pastas and Appetizers!</p>
                <Link to="/menu" className="banner-link">
                    <div id="banner-button">Order Meal Now</div>
                </Link>
            </div>
        </div>
    )
}

export default Banner;