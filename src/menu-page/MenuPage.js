import React from 'react';
import MenuHeader from './menu-header/MenuHeader';
import MenuGroup from './menu-group/MenuGroup';
import Header from '../header/Header';

class MenuPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selected_item: this.props[0]
        }
    }

    render(){
        return(
            <>
                <Header />
                <MenuHeader />
                <MenuGroup />
            </>
        );
    }
}

export default MenuPage;