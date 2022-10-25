import { useRef } from "react";
import "./LoginPage.css";
import axios from "axios";

function LoginPage(props) {
    const email_input_ref = useRef();
    const passwd_input_ref = useRef();

    const emailValidator = (email) => {
        const pattern = /\w+@\w+\.\w+/i;
        return pattern.test(email);
    }

    const handleLoginBtnClick = () => {
        const email = email_input_ref.current.value;
        const password = passwd_input_ref.current.value;
        const creds = {
            email: email,
            password: password
        };
        
        if(emailValidator(email)){
            axios.post(`localhost:8080/login`, creds)
        }
        console.log(email, password);
    }

    return (
        <div id="login-page-container">
            <div id="login-container">
                <p>LOGIN</p>
                <input type="email" className="login-input-box" placeholder="Email Id" ref={email_input_ref} />
                <input type="password" className="login-input-box" placeholder="Password" ref={passwd_input_ref} />
                <div id="login-btn" onClick={handleLoginBtnClick}>LOGIN</div>
            </div>
        </div>
    );
}

export default LoginPage;