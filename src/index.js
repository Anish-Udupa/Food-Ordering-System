import React from 'react';
import ReactDOM from 'react-dom';
import MenuPage from './menu-page/MenuPage';
import FeedbackForm from './feedback-form/FeedbackForm';
import ContactPage from './contact-page/ContactPage';
import LoginPage from './login-page/LoginPage'
ReactDOM.render(
  <React.StrictMode>
    {/* Insert your code below this */}
    <MenuPage />
    <FeedbackForm/>
    <LoginPage/>
    <ContactPage/>
    {/* Insert your code above this */}
  </React.StrictMode>,
  document.getElementById('root')
);


