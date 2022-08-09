import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import MenuPage from './menu-page/MenuPage';
import ContactPage from './contact-page/ContactPage'
import OrderConfirmPage from './order-confirm-page/OrderConfirmPage'
import Header from './header/Header';
import HomePage from './home-page/HomePage';

let App = (props) => {
    return(
        <div id="app-container">
            <Header />
            <div id="main-content-container">
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/menu' element={<MenuPage />} />
                <Route path='/contact' element={<ContactPage />} />
                <Route path='/order-successful' element={<OrderConfirmPage />} />
            </Routes>
            </div>
        </div>
    );
}

export default App;