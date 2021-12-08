import React from 'react';
import './introduction.css';
import { Link } from 'react-router-dom';

class Introduction extends React.Component{
    constructor(props){
        super(props);
        this.onOrderButtonClicked = this.onOrderButtonClicked.bind(this);
    }
    onOrderButtonClicked(){
        // Redirect to menu-page
        
    }

    render(){
        return(
            <div id="introduction-container">
                <div className="container" id="introduction-description">
                    <h1 id="about-title">About Us</h1>
                    <h1 id="title">Authentic Italian Cuisine At India's Favourite Italian Restraunt</h1>
                    <p className="para">Over 3 Decades, Crust of Milan has pioneered Italian cuisine in India. With 50 outlets in this countries, we are India’s largest home grown italian brand bringing you a delicious menu of Pizzas, Pastas, Appetizers and much more.</p>
                    <p className="para">Italian food is simple yet sophisticated, using few ingredients to make a dish so flavourful you keep coming back for more. Inspired by Italy’s finest family chefs, we bring you the warmth and love of Italian Cuisine directly to your home.</p>
                    <Link className="introduction-link" to='/menu'>
                        <div id="order-now" className="button" onClick={this.onOrderButtonClicked}>Order Now</div>
                    </Link>
                </div>
                <div className="container" id="video-container">
                    <video autoPlay muted loop id="description-video">
                        <source src="/videos/description-video.mp4" type="video/mp4" />
                    </video>
                </div>

            </div>
        )
    }
}

export default Introduction;