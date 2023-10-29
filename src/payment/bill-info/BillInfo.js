import "./BillInfo.css";

function BillInfo({user, bill}) {
    return (
        <div id="bill-info-container">
            <p id="bill-info-heading">Bill Details</p>
            <div className="bill-info-sub">
                <p>Customer Name:</p>
                <p>{user.name}</p>
            </div>
            <div className="bill-info-sub">
                <p>Customer Address:</p>
                <p>{user.address}</p>
            </div>
            <div className="bill-info-sub">
                <p>Customer Mobile No:</p>
                <p>{user.mobile}</p>
            </div>

            <table id="bill-info-table">
                <tr>
                    <th colSpan={3}>Name</th>
                    <th colSpan={1} className="td-right">Price</th>
                    <th colSpan={1} className="td-right">Quantity</th>
                    <th colSpan={1} className="td-right">Total Cost</th>
                </tr>
                {bill.items.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td colSpan={3}>{item.name}</td>
                            <td colSpan={1} className="td-right">{item.price}</td>
                            <td colSpan={1} className="td-right">{item.quantity}</td>
                            <td colSpan={1} className="td-right">{item.quantity * item.price}</td>
                        </tr>
                    )
                })}
            </table>
            <div className="bill-info-sub">
                <p>Total Cost:</p>
                <p>{bill.total_cost}</p>
            </div>
        </div>
    )
}

export default BillInfo;