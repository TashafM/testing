import React from "react";
import "./rightside.scss";
import OrderListTable from "../OrderListTable/OrderListTable";
import { Button } from "react-bootstrap";
import { AddProducts } from "../../Dealers";
import { useContext } from "react";
import closeX from '../../../../assets/images/closeX.svg'

function RightSide({ setShowPanel }) {
  const { setIsEmpty } = useContext(AddProducts);
  return (
    <div className="rightside">
      <div className="title-close">
        <div className="title">Order List</div>
        <img src={closeX} alt="" onClick={()=>setShowPanel(false)}/>
      </div>
      <OrderListTable />
      <div className="add-to-cart">
        <Button
          onClick={() => {
            setIsEmpty(false);
            setShowPanel(false);
          }}
        >
          Add to cart
        </Button>
      </div>
    </div>
    // </div>
  );
}

export default RightSide;
