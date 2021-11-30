import React from 'react';
import './menu-group-style.css';
import MenuItem from '../menu-item/MenuItem';

var foodObj = {
    starter: [
        {
            title: "Pasta Masala Mafia",
            desc: "Spicy succulent sauce with red/yellow capsicum, tomato cubes, onion, chilli, garlic cooked to perfection, tossed with fresh cream and parsely.",
            imgsrc: '/images/menu-page/pasta_masala_mafia.png',
            imgalt: "Image of a Pasta Masala Mafia",
            price: 200
        },
        {
            title: "Pummorola",
            desc: "Fresh tomato sauce, fresh basil and parmesan cheese.",
            imgsrc: '/images/menu-page/pummorola.png',
            imgalt: "Image of a Pummorola",
            price: 150
        },
        {
            title: "Pasta Bolognese",
            desc: "Spaghetti served with sauce made of fresh tomato and soya mince.",
            imgsrc: '/images/menu-page/pasta_bolognese.png',
            imgalt: "Image of a Pasta Bolognese",
            price: 150
        },
        {
            title: "Jalapeno Poppers",
            desc: "Melted cheese nuggets with jalapenos deep fried and served with mayonnaise dip.",
            imgsrc: '/images/menu-page/jalapeno_poppers.jpg',
            imgalt: "Image of a Jalapeno Poppers",
            price: 100
        },
        {
            title: "Jalapeno Salsa",
            desc: "Jalapeno tossed in creamy sauce, served with thin crispy toast.",
            imgsrc: '/images/menu-page/jalapeno_salsa.jpg',
            imgalt: "Image of a Jalapeno Salsa",
            price: 200
        },
        {
            title: "Cheese Fondue",
            desc: "Melted cheese in white wine with italian herbs, served with croutons and exotic vegetables.",
            imgsrc: '/images/menu-page/cheese_fondue.jpg',
            imgalt: "Image of a Cheese Fondue",
            price: 300
        }
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
            imgsrc: '/images/menu-page/garlic_bread.png',
            imgalt: "Image of a Garlic Bread",
            price: 50
        },
        {
            title: "Cheese Garlic Bread",
            desc: "A bread topped with garlic, butter and cheese and then roasted to bring out the flavour. Comes in pieces of 10.",
            imgsrc: '/images/menu-page/cheese_garlic_bread.jpg',
            imgalt: "Image of a Cheese Garlic Bread",
            price: 75
        },
        {
            title: "Chilli Cheese Garlic Bread",
            desc: "A bread topped with garlic, butter, chilli, some herbs and cheese and then roasted to bring out the flavour. Comes in pieces of 10",
            imgsrc: '/images/menu-page/chilli_cheese_garlic_bread.png',
            imgalt: "Image of a Chilli Cheese Garlic Bread",
            price: 100
        },
        {
            title: "Veggie Roll",
            desc: "A roll spread with San Marzano tomato sauceon the inside and then filled with cabbage, carrots, and a few other vegetables.",
            imgsrc: '/images/menu-page/veggie_roll.jpg',
            imgalt: "Image of a Veggie Roll",
            price: 75
        },
        {
            title: "French Fries",
            desc: "Y'all know what this is- the best snack in the world!",
            imgsrc: '/images/menu-page/french_fries.jpg',
            imgalt: "Image of a French Fries",
            price: 50
        },
        {
            title: "Special Crostini",
            desc: "Special farmer's bread grilled and topped with exotic vegetables - red and yellow capsicum, zucchini sun-dried tomatoes, roasted aubergine and cheese.",
            imgsrc: '/images/menu-page/special_crostini.png',
            imgalt: "Image of a Special Crostini",
            price: 200
        }
    ],
    beverages: [
        {
            title: "Pepsi",
            desc: "Comes in bottles of 500ml",
            imgsrc: '/images/menu-page/pepsi.jpg',
            imgalt: "Image of a Pepsi",
            price: 100
        },
        {
            title: "7 Up",
            desc: "Comes in bottles of 500ml",
            imgsrc: '/images/menu-page/7up.png',
            imgalt: "Image of a 7 Up",
            price: 100
        },
        {
            title: "Mirinda",
            desc: "Comes in bottles of 500ml",
            imgsrc: '/images/menu-page/mirinda.png',
            imgalt: "Image of a Mirinda",
            price: 100
        }
    ],
    desserts: [
        {
            title: "Cream Caramel",
            desc: "A sweet baked custard dripping with golden caramel",
            imgsrc: '/images/menu-page/cream_caramel.png',
            imgalt: "Image of a Cream Caramel",
            price: 200
        },
        {
            title: "Choco Lava Cake",
            desc: "A home made italian classic sponge cake soaked in rum and chocolate, sprinkled with chocolate powder, served cold.",
            imgsrc: '/images/menu-page/choco_lava_cake.png',
            imgalt: "Image of a Choco Lava Cake",
            price: 400
        },
        {
            title: "Chocolate Avalanche",
            desc: "Scoop of chocolate mousse, mocha, chocolate ice cream and fudge, topped with chocolate sauce.",
            imgsrc: '/images/menu-page/chocolate_avalanche.png',
            imgalt: "Image of a Chocolate Avalanche",
            price: 200
        }
    ]
}

class MenuGroup extends React.Component{
    render(){
        return (
            <div className="menu-group">
                <p className='menu-group-text'>starter</p>
                <div className="menu-subgroup">
                    {foodObj.starter.map((item) => {
                        return <MenuItem {...item} />
                    })}
                </div>
                <p className='menu-group-text'>pizza</p>
                <div className="menu-subgroup">
                    {foodObj.pizza.map((item) => {
                        return <MenuItem {...item} />
                    })}
                </div>
                <p className='menu-group-text'>sides</p>
                <div className="menu-subgroup">
                    {foodObj.sides.map((item) => {
                        return <MenuItem {...item} />
                    })}
                </div>
                <p className='menu-group-text'>beverages</p>
                <div className="menu-subgroup">
                    {foodObj.beverages.map((item) => {
                        return <MenuItem {...item} />
                    })}
                </div>
                <p className='menu-group-text'>desserts</p>
                <div className="menu-subgroup">
                    {foodObj.desserts.map((item) => {
                        return <MenuItem {...item} />
                    })}
                </div>
            </div>
        );
    }
}

export default MenuGroup;