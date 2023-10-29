import { useRef, useEffect, useState } from "react";
import "./LoginPage.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function LoginPage(props) {
    const email_input_ref = useRef();
    const passwd_input_ref = useRef();
    const [ error_msg, setErrorMsg ] = useState(null);
    const navigate = useNavigate();

    // // initial check if user is already logged in
    // useEffect(() => {
    //     if(localStorage.getItem("login-details") != null)
    //         navigate("/menu");
    // }, []);

    const handleLoginBtnClick = async () => {
        const email = email_input_ref.current.value;
        const password = passwd_input_ref.current.value;
        const creds = {
            email: email,
            password: password
        };
        try {
            const data = (await axios.post(`${process.env.REACT_APP_BACKEND_SERVER_URL}/api/login`, creds, { withCredentials: true })).data;
            console.log(data);
            if(data.success === true){
                navigate("/menu");
            }
            else {
                setErrorMsg("Invalid username or password");
            }
        }
        catch(err) {
            console.log(err);
            setErrorMsg("Server error. Please try again later");
        }
    }

    return (
        <div id="login-page-container">
            <div id="login-container">
                <p id="login-page-heading">LOGIN</p>
                <input type="email" className="login-input-box" placeholder="Email Id" ref={email_input_ref} />
                <input type="password" className="login-input-box" placeholder="Password" ref={passwd_input_ref} />
                <div id="login-btn" onClick={handleLoginBtnClick}>LOGIN</div>
                <p id="login-page-error-p">{error_msg}</p>
            </div>
            <div id="login-page-signup-container">
                <p id="login-page-signup">Dont have an account?</p><Link to="/signup" id="login-page-signup-link">Signup</Link>
            </div>
        </div>
    );
}

export default LoginPage;