import React from "react";
import "./rightside.scss";
import OrderListTable from "../OrderListTable/OrderListTable";
import { Button } from "react-bootstrap";

function RightSide() {
  return (
    <div className="rightside">
      <div className="title">Order List</div>
      <OrderListTable />
      <div className="add-to-cart">
        <Button>Add to cart</Button>
      </div>
    </div>
    // </div>
  );
}

export default RightSide;
