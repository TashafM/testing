import React, { useState } from "react";
import "./rightside.scss";
import OrderListTable from "../OrderListTable/OrderListTable";
import { Button } from "react-bootstrap";
import { AddProducts, EditItems } from "../../Dealers";
import { useContext } from "react";
import closeX from "../../../../assets/images/closeX.svg";
import noItem from "../../../../assets/images/item-not-added.png";
import { axiosInstance } from "../../../../helper/axios";
import { API } from "../../../../helper/API";
import Spinner from "react-bootstrap/Spinner";

function RightSide({
  setShowPanel,
  cartProducts,
  setCartProducts,
  addItemToCart,
  isLoading,
  editProducts,
  getFromPop,
  noHover,
}) {

  const {setNotEditable} = useContext(EditItems)
  const [selectedId, setSelectedId] = useState(-1)


  return (
    <div className="rightside">
      <div className="title-close">
        <div className="title">Order List</div>
        <img
          src={closeX}
          alt=""
          onClick={() => {
            // addItemToCart()
            {cartProducts.length==0 && setShowPanel(false)}
            {cartProducts.length != 0 && addItemToCart()}
            setNotEditable(true)
            setSelectedId(-1)
          }}
          className="close-button"
        />
      </div>
      <OrderListTable data={cartProducts} setData={setCartProducts} editProducts={editProducts} getFromPop={getFromPop} setSelectedId={setSelectedId} selectedId={selectedId} noHover={noHover}/>

      {cartProducts.length == 0 ? (
        <div className="no-item empty-cart">
          <img src={noItem} alt="" />
          <div className="no-text">No items added yet </div>
        </div>
      ) : (
        <div className="add-to-cart">
          <Button onClick={addItemToCart} disabled={isLoading} >
            {isLoading ? <Spinner animation="border" variant="light" /> : 'Add to cart'}
          </Button>
        </div>
      )}
    </div>
    // </div>
  );
}

export default RightSide;
