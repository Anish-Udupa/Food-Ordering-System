import React from 'react';
import './menu-header-style.css'

class MenuHeader extends React.Component{
    render(){
        return(
            <div className="menu-header">
                <div className='header-menu-item'>Starter</div>
                <div className='header-menu-item'>Pizza</div>
                <div className='header-menu-item'>Sides</div>
                <div className='header-menu-item'>Beverages</div>
                <div className='header-menu-item'>Desserts</div>
                <div className='header-menu-item'>Meals</div>
            </div>
        );
    }
}

export default MenuHeader;