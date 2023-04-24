import React from "react";
import "./rightside.scss";
import OrderListTable from "../OrderListTable/OrderListTable";
import { Button } from "react-bootstrap";
import { AddProducts } from "../../Dealers";
import { useContext } from "react";
import closeX from "../../../../assets/images/closeX.svg";
import { axiosInstance } from "../../../../helper/axios";
import { API } from "../../../../helper/API";

function RightSide({ setShowPanel, cartProducts, setCartProducts }) {

  const addItemToCart = () => {
    const sgst = localStorage.getItem("sgstPercentage");
    const igst = localStorage.getItem("igstPercentage");
    const cgst = localStorage.getItem("cgstPercentage");

    const sumOfTotal = cartProducts.reduce(
      (acc, item) => acc + item.totalPrice,
      0
    );
    const sumOfTaxes = Number(cgst) + Number(sgst) + Number(igst);
    const taxAmount = (sumOfTotal * sumOfTaxes) / 100; // this is final taxAmount
    const totalAmt = taxAmount + sumOfTotal; // this is totalAmount

    axiosInstance
      .post(API.DEALER_ADD_TO_CART, {
        principalCompanyUserCode: localStorage.getItem(
          "principalCompanyUserCode"
        ),
        cartItems: cartProducts.map((item) => ({
          variantId: item.variantId,
          quantity: item.quantity.toString(),
          grossPrice: item.grossPrice.toString(),
          productId: item.productId,
          saleDescription: item.saleDescription,
          totalPrice: item.totalPrice.toString(),
        })),
        totalAmount: totalAmt.toString(),
        taxAmount: taxAmount.toString(),
      })
      .then((res) => {
        if (res.success) {
          setShowPanel(false);
          console.log(res.result[0].cartItems,'cart items')
        }
      });
  };


  const retainData = () => {
    axiosInstance.post(API.VIEW_DEALER_CART,{
      principalCompanyUserCode : localStorage.getItem('principalCompanyUserCode')
    }).then((res)=>localStorage.setItem('cartProducts',JSON.stringify(res.result[0].cartItems)))
  }


  return (
    <div className="rightside">
      <div className="title-close">
        <div className="title">Order List</div>
        <img src={closeX} alt="" onClick={() => {
          setShowPanel(false);
          // retainData()
        }} />
      </div>
      <OrderListTable data={cartProducts} setData={setCartProducts} />
      <div className="add-to-cart">
        <Button
          // onClick={() => {
          //   setIsEmpty(false);
          //   setShowPanel(false);
          // }}
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
