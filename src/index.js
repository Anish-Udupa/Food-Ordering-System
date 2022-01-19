import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import MenuPage from './menu-page/MenuPage';
import ContactPage from './contact-page/ContactPage'
import OrderSuccessful from './order-confirm-page/OrderConfirmPage'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/menu' element={<MenuPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/order-successful' element={<OrderSuccessful />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


