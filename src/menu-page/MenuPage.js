import React from 'react';
import MenuHeader from './menu-header/MenuHeader';
import MenuGroup from './menu-group/MenuGroup';
import Checkout from './checkout/Checkout';
import Cart from './cart/CartIcon';
import Header from '../header/Header';
import storeFactory from '../store/StoreFactory';


class MenuPage extends React.Component{
    constructor(props){
        super(props);
        localStorage.removeItem('redux-store');
        this.store = storeFactory();
    }

    render(){
        return(
            <>
                <MenuHeader />
                <MenuGroup  store={this.store}/>
                <Checkout store={this.store} />
                <Cart store={this.store} />
            </>
        );
    }
}

export default MenuPage;