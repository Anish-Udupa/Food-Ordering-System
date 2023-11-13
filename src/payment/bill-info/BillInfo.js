import "./BillInfo.css";

function BillInfo({user, bill}) {
    return (
        <div id="bill-info-container">
            <p id="bill-info-heading">Bill Details</p>
            <div className="bill-info-sub">
                <p className="bill-info-sub-heading">Customer Name:</p>
                <p>{user.name}</p>
            </div>
            <div className="bill-info-sub">
                <p className="bill-info-sub-heading">Customer Address:</p>
                <p>{user.address}</p>
            </div>
            <div className="bill-info-sub">
                <p className="bill-info-sub-heading">Customer Mobile No:</p>
                <p>{user.phone}</p>
            </div>

            {/* <table id="bill-info-table">
                <tr id="bill-info-table-heading">
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
            </table> */}

            <div id="bill-info-table">
                <div id="bill-info-table-heading">
                    <p className="bill-info-table-item-name-p">Name</p>
                    <p>Price</p>
                    <p>Qty</p>
                    <p>Cost</p>
                </div>
                {
                    bill.items.map((item, index) => (
                        <div className="bill-info-table-items" key={index}>
                            <p className="bill-info-table-item-name-p">{item.name}</p>
                            <p>{item.price}</p>
                            <p>{item.quantity}</p>
                            <p>{item.quantity * item.price}</p>
                        </div>
                    ))
                }
            </div>
            <div className="bill-info-sub">
                <p>Total Cost:</p>
                <p>{bill.total_cost}</p>
            </div>
        </div>
    )
}

export default BillInfo;