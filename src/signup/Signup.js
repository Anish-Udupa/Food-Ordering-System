import axios from "axios";
import { useRef } from "react";
import "./Signup.css";

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

    const onSubmitBtnClicked = () => {
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

        if(password === confirm_password){
            let data = {
                fname: fname,
                lname: lname,
                house_no: house_no,
                street: street,
                area: area,
                city: city,
                email: email,
                phone: phone,
                password: password,
            }
            axios.post("localhost:8080/signup",data)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
        }
    }
    return (
        <div id="signup-page-container">
            <div id="signup-container">
                <div>
                    <p>Personal Details:</p>
                    <input className="signup-input-box" type="text" ref={input_fname_ref} placeholder="First Name" required/>
                    <input className="signup-input-box" type="text" ref={input_lname_ref} placeholder="Last Name" required/>
                </div>
                <div>
                    <p>Address Details:</p>
                    <input className="signup-input-box" type="text" ref={input_house_no_ref} placeholder="House Number" required/>
                    <input className="signup-input-box" type="text" ref={input_street_ref} placeholder="Street" required/>
                    <br />
                    <input className="signup-input-box" type="text" ref={input_area_ref} placeholder="Area" required/>
                    <input className="signup-input-box" type="text" ref={input_city_ref} placeholder="City" required/>
                </div>
                <div>
                    <p>Conatct Details:</p>
                    <input className="signup-input-box" type="email" ref={input_email_ref} placeholder="Email Id" required/>
                    <input className="signup-input-box" type="text" ref={input_phone_ref} placeholder="Phone Number" required/>
                </div>
                <div>
                    <p>Login Details:</p>
                    <input className="signup-input-box" type="password" ref={input_password_ref} placeholder="Password" required/>
                    <input className="signup-input-box" type="password" ref={input_confirm_password_ref} placeholder="Confirm Password" required/>
                </div>
                <div id="signup-btn" onClick={onSubmitBtnClicked}>SUBMIT</div>
            </div>
        </div>
    )
}

export default Signup;