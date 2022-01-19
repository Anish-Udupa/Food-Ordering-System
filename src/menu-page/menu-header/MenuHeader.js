import React from 'react';
import './menu-header-style.css';

class MenuHeader extends React.Component{
    render(){
        return(
            // Change the anchor tag to a Link of react-router-dom
            <div className="menu-header">
                <a className='header-menu-item' href='#starter-text'>Starter</a>
                <a className='header-menu-item' href='#pizza-text'>Pizza</a>
                <a className='header-menu-item' href='#sides-text'>Sides</a>
                <a className='header-menu-item' href='#beverages-text'>Beverages</a>
                <a className='header-menu-item' href='#desserts-text'>Desserts</a>
            </div>
        );
    }
}

export default MenuHeader;