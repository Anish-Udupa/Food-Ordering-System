import axios from "axios";
import { useRef, useEffect, useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Signup(){
    const input_fname_ref = useRef();
    const input_lname_ref = useRef();
    const input_house_no_ref = useRef();
    const input_street_ref = useRef();
    const input_area_ref = useRef();
    const input_city_ref = useRef();
    const input_email_ref = useRef();
    const input_phone_ref = useRef();
    const input_password_ref = useRef();
    const input_confirm_password_ref = useRef();
    const navigate = useNavigate();
    const [ error_msg , setErrorMsg ] = useState(null);

    const onSubmitBtnClicked = async () => {
        let fname = input_fname_ref.current.value;
        let lname = input_lname_ref.current.value;
        let house_no = input_house_no_ref.current.value;
        let street = input_street_ref.current.value;
        let area = input_area_ref.current.value;
        let city = input_city_ref.current.value;
        let email = input_email_ref.current.value;
        let phone = input_phone_ref.current.value;
        let password = input_password_ref.current.value;
        let confirm_password = input_confirm_password_ref.current.value;

        if(fname === "" || lname === "" || house_no === "" || street === "" || area === "" || city === "" || email === "" || phone === "" || password === ""){
            setErrorMsg("Fields cant be empty");
            
        }
        else if(password === confirm_password){
            let data = {
                name: `${fname} ${lname}`,
                address: `${house_no}, ${street}, ${area}, ${city}`,
                email: email,
                phone: phone,
                password: password,
            }
            try {
                const res_data = await (await axios.post(`${process.env.REACT_APP_BACKEND_SERVER_URL}/api/signup`, data)).data;
                if(res_data.success === true) {
                    navigate("/login");
                }
            }
            catch(err) {
                setErrorMsg("Server error. Try again.")
            }
            
        }
        else {
            setErrorMsg("Password and confirm password are not matching.")
        }
    }
    return (
        <div id="signup-page-container">
            <div id="signup-container">
                <p id="signup-page-heading">Create An Account</p>
                <div>
                    <p className="signup-page-subheading">Personal Details:</p>
                    <input className="signup-input-box" type="text" ref={input_fname_ref} placeholder="First Name" required/>
                    <input className="signup-input-box" type="text" ref={input_lname_ref} placeholder="Last Name" required/>
                </div>
                <div>
                    <p className="signup-page-subheading">Address Details:</p>
                    <input className="signup-input-box" type="text" ref={input_house_no_ref} placeholder="House Number" required/>
                    <input className="signup-input-box" type="text" ref={input_street_ref} placeholder="Street" required/>
                    <br />
                    <input className="signup-input-box" type="text" ref={input_area_ref} placeholder="Area" required/>
                    <input className="signup-input-box" type="text" ref={input_city_ref} placeholder="City" required/>
                </div>
                <div>
                    <p className="signup-page-subheading">Contact Details:</p>
                    <input className="signup-input-box" type="email" ref={input_email_ref} placeholder="Email Id" required/>
                    <input className="signup-input-box" type="text" ref={input_phone_ref} placeholder="Phone Number" required/>
                </div>
                <div>
                    <p className="signup-page-subheading">Login Details:</p>
                    <input className="signup-input-box" type="password" ref={input_password_ref} placeholder="Password" required/>
                    <input className="signup-input-box" type="password" ref={input_confirm_password_ref} placeholder="Confirm Password" required/>
                </div>
                <div id="signup-btn" onClick={onSubmitBtnClicked}>SIGN UP</div>
                {error_msg && <p id="err-mgs-p">{error_msg}</p>}
            </div>
            <div id="login-page-signup-container">
                <p id="signup-page-login">Already have an account?</p><Link to="/login" id="signup-page-login-link">Login</Link>
            </div>
        </div>
    )
}

export default Signup;