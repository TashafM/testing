import React from "react";
import { orderDetailColumn, orderDetailRow } from "../../../About/data/data";
import DealersTable from "./component/tables/DealersTable";

function DealerOrderDetails() {
  return (
    <div className="dealers-order-main-container">
      <div style={{ height: "100px" }}>address card container</div>
      <DealersTable column={orderDetailColumn} row={orderDetailRow} />
    </div>
  );
}

export default DealerOrderDetails;
