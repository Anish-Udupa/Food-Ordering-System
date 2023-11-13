import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import MenuPage from './menu-page/MenuPage';
import Header from './header/Header';
import HomePage from './home-page/HomePage';
import LoginPage from "./login-page/LoginPage";
import Signup from './signup/Signup';
import Payment from './payment/Payment';
import OrderStatus from './order-status/OrderStatus';

let App = (props) => {
    return(
        <div id="app-container">
            <Header />
            <div id="main-content-container">
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/menu' element={<MenuPage />} />
                <Route path="/payment" element={<Payment />} />
                <Route path='/order-status' element={<OrderStatus />} />
            </Routes>
            </div>
        </div>
    );
}

export default App;