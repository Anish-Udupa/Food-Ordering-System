import { useRef } from "react";
import "./Signup.css";

function Signup(){
    const input_fname_ref = useRef();
    const onSubmitBtnClicked = () => {
        alert("Btn clicked")
    }
    return (
        <div id="signup-page-container">
            <div id="signup-container">
                <div>
                    <p>Personal Details:</p>
                    <input className="signup-input-box" type="text" placeholder="First Name" required/>
                    <input className="signup-input-box" type="text" placeholder="Last Name" required/>
                </div>
                <div>
                    <p>Address Details:</p>
                    <input className="signup-input-box" type="text" placeholder="House Number" required/>
                    <input className="signup-input-box" type="text" placeholder="Street" required/>
                    <br />
                    <input className="signup-input-box" type="text" placeholder="Area" required/>
                    <input className="signup-input-box" type="text" placeholder="City" required/>
                </div>
                <div>
                    <p>Conatct Details:</p>
                    <input className="signup-input-box" type="email" placeholder="Email Id" required/>
                    <input className="signup-input-box" type="text" placeholder="Phone Number" required/>
                </div>
                <div>
                    <p>Login Details:</p>
                    <input className="signup-input-box" type="password" placeholder="Password" required/>
                    <input className="signup-input-box" type="password" placeholder="Confirm Password" required/>
                </div>
                <div id="signup-btn" onClick={onSubmitBtnClicked}>SUBMIT</div>
            </div>
        </div>
    )
}

export default Signup;