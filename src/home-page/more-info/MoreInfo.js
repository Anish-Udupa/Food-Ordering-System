import "./moreinfo.css";

let MoreInfo = (props) => {
    return(
        <div id="more-info">
            <img src="/images/home-page/our-promise.png" id="more-info-img" />
            <div id="more-info-container">
                <p id="more-info-title">We Value Quality over Quantity</p>
                <p id="more-info-desc">Italians love their food, they have a deep understanding of it and how it should be prepared & eaten. Inspired by traditional Italian cooking & processes we at Crust of Milan offer a menu backed by the finest Italian chefs & quality ingredients.We have our own cheese factory and source our ingredients from suppliers that offer the freshest produce, making it possible for us to serve you, the Italian way.</p>
            </div>
        </div>
    );
}

export default MoreInfo;