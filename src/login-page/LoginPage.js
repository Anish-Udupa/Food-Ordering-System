import { useRef, useEffect } from "react";
import "./LoginPage.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function LoginPage(props) {
    const email_input_ref = useRef();
    const passwd_input_ref = useRef();
    const navigate = useNavigate();

    // initial check if user is already logged in
    useEffect(() => {
        if(localStorage.getItem("login-details") != null)
            navigate("/menu");
    }, []);

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
            axios.post(`http://localhost:8080/login`, creds)
            .then(res => {
                let data = res.data;
                // console.log(data);
                if(data.status === true && data.name != null){
                    // Storing creds in localstorage
                    localStorage.setItem("login-details", `{name: ${data.name}}`)
                    navigate("/menu");
                }
                else {
                    alert("Incorrect Email or Password")
                }
            })
            .catch(err => {
                console.log(err);
            })
        }
        console.log(email, password);
    }

    return (
        <div id="login-page-container">
            <div id="login-container">
                <p id="login-page-heading">LOGIN</p>
                <input type="email" className="login-input-box" placeholder="Email Id" ref={email_input_ref} />
                <input type="password" className="login-input-box" placeholder="Password" ref={passwd_input_ref} />
                <div id="login-btn" onClick={handleLoginBtnClick}>LOGIN</div>
            </div>
            <div id="login-page-signup-container">
                <p id="login-page-signup">Dont have an account?</p><Link to="/signup" id="login-page-signup-link">Signup</Link>
            </div>
        </div>
    );
}

export default LoginPage;