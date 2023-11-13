import "./OrderStatus.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import BillInfo from "../payment/bill-info/BillInfo";
import OrderProgress from "./order-progress/OrderProgress";

function OrderStatus() {
    const [ bill_data, setBillData ] = useState(null);
    const [ user_data, setUserData ] = useState(null);
    const [ err_msg, setErrMsg ] = useState(null);

    const [ searchParams ] = useSearchParams();
    const bill_id = searchParams.get("bill_id");

    const getBillInfo = async () => {
        try {
            const data = (await axios.get(`${process.env.REACT_APP_BACKEND_SERVER_URL}/api/order-status?bill_id=${bill_id}`, { withCredentials: true })).data;
            if(data && data.success === true) {
                setBillData(data.bill_data);
                setUserData(data.user_data);
            }
            else {
                setErrMsg("Order not found");
            }
        }
        catch(err) {
            console.log(err);
            setErrMsg("Server error. Try again");
        }
    }
    useEffect(() => {
        getBillInfo();
    }, [])
    return (
        <>
            {bill_data && user_data &&
            <div id="order-status-container">
                <div id="order-status-left-container">
                    <OrderProgress order_status={bill_data.order_status} />
                </div>
                <BillInfo user={user_data} bill={bill_data} />
            </div>}
            {err_msg && <p>{err_msg}</p>}
        </>
    )
}

export default OrderStatus;