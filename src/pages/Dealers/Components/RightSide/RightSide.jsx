import React from "react";
import "./rightside.scss";
import OrderListTable from "../OrderListTable/OrderListTable";
import { Button } from "react-bootstrap";
import { AddProducts } from "../../Dealers";
import { useContext } from "react";
import closeX from "../../../../assets/images/closeX.svg";
import { axiosInstance } from "../../../../helper/axios";
import { API } from "../../../../helper/API";

function RightSide({ setShowPanel, cartProducts, setCartProducts, addItemToCart }) {

  


  // const retainData = () => {
  //   axiosInstance.post(API.VIEW_DEALER_CART,{
  //     principalCompanyUserCode : localStorage.getItem('principalCompanyUserCode')
  //   }).then((res)=>localStorage.setItem('cartProducts',JSON.stringify(res.result[0].cartItems)))
  // }


  
  return (
    <div className="rightside">
      <div className="title-close">
        <div className="title">Order List</div>
        <img src={closeX} alt="" onClick={() => {
          setShowPanel(false);
          addItemToCart();
        }} />
      </div>
      <OrderListTable data={cartProducts} setData={setCartProducts} />
      <div className="add-to-cart">
        <Button

          onClick={addItemToCart}
        >
          Add to cart
        </Button>
      </div>
    </div>
    // </div>
  );
}

export default RightSide;
