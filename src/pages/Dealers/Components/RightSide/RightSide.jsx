import React, { useEffect, useState } from "react";
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
  const { setNotEditable, setEditMode,setIndexNo,indexNo, editMode } = useContext(EditItems);
  const { setCartOpen} = useContext(AddProducts)
  const [selectedId, setSelectedId] = useState(-1);
  const [count, setCount] = useState(0)

  useEffect(()=>{
    if(localStorage.getItem('cart')){
      const data = JSON.parse(localStorage.getItem('cart'))
      setCount(data.length)
    }
  },[localStorage.getItem('cart')])

  return (
    <div className="rightside">
      <div className="title-close">
        <div className="title">Order List <span className="count-rightside">({count})</span></div>
        <img
          src={closeX}
          alt=""
          onClick={() => {
            // addItemToCart()
            {
              cartProducts.length == 0 && setShowPanel(false);
            }
            {
              cartProducts.length != 0 && addItemToCart();
            }
            setNotEditable(true);
            setCartOpen(false)
            setSelectedId(-1);
            localStorage.removeItem("variant");
            setEditMode(false);
            setIndexNo(0)
          }}
          className="close-button"
        />
      </div>
      {console.log(indexNo, 'index number')}
      <OrderListTable
        data={cartProducts}
        setData={setCartProducts}
        editProducts={editProducts}
        getFromPop={getFromPop}
        setSelectedId={setSelectedId}
        selectedId={selectedId}
        noHover={noHover}
      />

      {cartProducts.length == 0 ? (
        <div className="no-item empty-cart">
          <img src={noItem} alt="" />
          <div className="no-text">No items added yet </div>
        </div>
      ) : (
        <div className="add-to-cart">
          <Button onClick={addItemToCart} disabled={isLoading}>
            {isLoading ? (
              <Spinner animation="border" variant="light" />
            ) : (
              editMode ? 'Update Cart' : "Add to cart"
            )}
          </Button>
        </div>
      )}
    </div>
    // </div>
  );
}

export default RightSide;
