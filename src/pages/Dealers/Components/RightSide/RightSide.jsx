import React from "react";
import "./rightside.scss";
import OrderListTable from "../OrderListTable/OrderListTable";
import { Button } from "react-bootstrap";
import { AddProducts } from "../../Dealers";
import { useContext } from "react";

function RightSide({closePanel}) {
  const {setIsEmpty} = useContext(AddProducts)
  return (
    <div className="rightside">
      <div className="title">Order List</div>
      <OrderListTable />
      <div className="add-to-cart">
        <Button onClick={()=>{
          setIsEmpty(false)
          closePanel(false)
        }}>Add to cart</Button>
      </div>
    </div>
    // </div>
  );
}

export default RightSide;
