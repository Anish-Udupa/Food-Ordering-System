import React from 'react';
import MenuHeader from './menu-header/MenuHeader';
import MenuGroup from './menu-group/MenuGroup';

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
                <MenuHeader />
                <MenuGroup />
            </>
        );
    }
}

export default MenuPage;