import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Payment.css";
import BillInfo from "./bill-info/BillInfo";
import PaymentGateway from "./payment-gateway/PaymentGateway";
import axios from "axios";

function Payment(){
    const location = useLocation();
    const navigate = useNavigate();
    const [ bill_data, setBillData ] = useState(null);
    const [ user_data, setUserData ] = useState(null);


    const getUserData = async () => {
        try {
            const data = (await axios.get(`${process.env.REACT_APP_BACKEND_SERVER_URL}/api/user-details`, { withCredentials: true })).data;
            if(data)
                setUserData(data.user);
            else
                navigate("/menu");
        }
        catch(err) {
            navigate("/menu");
        }
    }

    useEffect(() => {
        const _bill_data = location.state;
        if(_bill_data) {
            setBillData(_bill_data);
            getUserData();
        }
        else {
            // No bill info present
            navigate("/menu");
        }
    }, []);

    return (
        bill_data && user_data && 
        <div id="payment-container">
            <PaymentGateway />
            <BillInfo user={user_data} bill={bill_data} />
        </div>
    )
}

export default Payment;