import React from 'react';
import './menu-group-style.css';
import MenuItem from '../menu-item/MenuItem';

var foodObj = {
    starter: [
        
    ],
    pizza: [
        {
            title: "Classic Margerita",
            desc: "A bubbly crust pizza with crushed San Marzano tomato sauce, fresh mozzarella and basil, a drizzle of olive oil, and a sprinkle of salt",
            imgsrc: "images/menu-page/classic_margerita.png",
            imgalt: "Image of a Classic Margerita",
            price: 100 
        },
        {
            title: "Veggie Paradise",
            desc: "A delicious pizza topped with fresh chopped tomatoes, onion, capsicum, babycorn, olives and finally sprinkled with cheddar cheese",
            imgsrc: 'images/menu-page/veggie_paradise.png',
            imgalt: "Image of a Veggie Paradise",
            price: 200
        },
        {
            title: "Peppy Paneer",
            desc: "A medium crust pizza topped with fresh cubes of paneer, hot red chilli, a few bits of sliced capsicum and finally sprinkled with mozzarella",
            imgsrc: 'images/menu-page/peppy_paneer.png',
            imgalt: "Image of a Peppy Paneer",
            price: 150
        },
        {
            title: "Classic Corn Pizza",
            desc: "A medium crust pizza topped with corn and sprinkled with cheddar",
            imgsrc: 'images/menu-page/cheese_and_corn.png',
            imgalt: "Image of a Classic Corn And Onion",
            price: 100
        },
        {
            title: "Veggie Feast",
            desc: "A medium crust pizza topped with sliced onion, tomatoes, olives, paneer, jalapeno and babycorn and finally sprinkled with mozzarella",
            imgsrc: 'images/menu-page/veggie_feast.png',
            imgalt: "Image of a Veggie Feast",
            price: 250
        },
        {
            title: "Double Cheese Margherita",
            desc: "A bubbly crust, plain pizza sprinkled with layers of cheddar and mozzarella",
            imgsrc: 'images/menu-page/double_cheese_margherita.png',
            imgalt: "Image of a Double Cheese Margherita",
            price: 125
        },
        {
            title: "Classic Tomato Pizza",
            desc: "A medium crust pizza topped with blocks of tomatoes and finally sprinkled with cheddar",
            imgsrc: 'images/menu-page/cheese_and_tomato.png',
            imgalt: "Image of a Classic Tomato Pizza",
            price: 100
        },
        {
            title: "Classic Paneer And Capsicum ",
            desc: "A medium crust pizza topped with paneer and fresh capsicum and finally sprinkled with cheddar",
            imgsrc: 'images/menu-page/paneer_and_capsicum.png',
            imgalt: "Image of a Classic Capsicum And Onion",
            price: 100
        },
        {
            title: "The 'X' Pizza",
            desc: "Pizza: Veg. Ingredients: Unknown. Taste: Insane!",
            imgsrc: 'images/menu-page/the_x_pizza.png',
            imgalt: "Image of The 'X' Pizza",
            price: 250
        }
    ],
    sides: [
        {
            title: "Garlic Bread",
            desc: "A bread topped with garlic and butter and then roasted to bring out the flavour. Comes in pieces of 10",
            imgsrc: '#',
            imgalt: "Image of a Garlic Bread",
            price: 50
        },
        {
            title: "Cheese Garlic Bread",
            desc: "A bread topped with garlic, butter and cheese and then roasted to bring out the flavour. Comes in pieces of 10.",
            imgsrc: '#',
            imgalt: "Image of a Cheese Garlic Bread",
            price: 75
        },
        {
            title: "Chilli Cheese Garlic Bread",
            desc: "A bread topped with garlic, butter, chilli, some herbs and cheese and then roasted to bring out the flavour. Comes in pieces of 10",
            imgsrc: '#',
            imgalt: "Image of a Chilli Cheese Garlic Bread",
            price: 100
        },
        {
            title: "Veggie Roll",
            desc: "A roll spread with San Marzano tomato sauceon the inside and then filled with cabbage, carrots, and a few other vegetables.",
            imgsrc: '#',
            imgalt: "Image of a Veggie Roll",
            price: 75
        },
        {
            title: "French Fries",
            desc: "Y'all know what this is- the best snack in the world!",
            imgsrc: '#',
            imgalt: "Image of a French Fries",
            price: 50
        }
    ],
    beverages: [
        {
            title: "Pepsi",
            desc: "Comes in cans of 100ml, or bottles of 200ml, 500ml and 1l",
            imgsrc: '#',
            imgalt: "Image of a Pepsi",
            price: [50, 100, 150]
        },
        {
            title: "Coca Cola",
            desc: "Comes in cans of 100ml, or bottles of 200ml, 500ml and 1l",
            imgsrc: '#',
            imgalt: "Image of a Coca Cola",
            price: [50, 100, 150]
        },
        {
            title: "Sprite",
            desc: "Comes in cans of 100ml, or bottles of 200ml, 500ml and 1l",
            imgsrc: '#',
            imgalt: "Image of a Sprite",
            price: [50, 100, 150]
        },
        {
            title: "Thumbs Up",
            desc: "Comes in cans of 100ml, or bottles of 200ml, 500ml and 1l",
            imgsrc: '#',
            imgalt: "Image of a Thumbs Up",
            price: [50, 100, 150]
        },
        {
            title: "7 Up",
            desc: "Comes in cans of 100ml, or bottles of 200ml, 500ml and 1l",
            imgsrc: '#',
            imgalt: "Image of a 7 Up",
            price: [50, 100, 150]
        },
        {
            title: "Mirinda",
            desc: "Comes in cans of 100ml, or bottles of 200ml, 500ml and 1l",
            imgsrc: '#',
            imgalt: "Image of a Mirinda",
            price: [50, 100, 150]
        }
    ],
    desserts: []
}

class MenuGroup extends React.Component{
    render(){
        return (
            <div className="menu-group">
                {foodObj.pizza.map((item) => {
                    return <MenuItem {...item} />
                })}
            </div>
        );
    }
}

export default MenuGroup;