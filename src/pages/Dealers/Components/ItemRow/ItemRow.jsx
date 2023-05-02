import React, { useEffect } from "react";
import "./itemrow.scss";
import listproduct from "../../../../assets/images/listproduct.png";
import x from "../../../../assets/images/x.svg";

const ItemRow = ({ disableDelete, pr20, popupScreen, data, removeItem,editProducts, getFromPop }) => {
  const currency = localStorage.getItem('currencySymbol')

  // const getFromPop = (product) => {
  //   const data = JSON.parse(localStorage.getItem('cart'))
  //   const flt = data.filter((itm)=>itm.itemNumber == product.itemNumber)
  //   console.log(flt,'filtered product')
  // }
  
  
  return (
    <tr className="right-side-tr">
      <td
        className={
          popupScreen ? "single-product-item pl40" : "single-product-item"
        }
        onClick={()=>{
          editProducts(data)
          getFromPop(data)
        }}
      >
        <div className="img-div">
          <img src={listproduct} alt="" />
          <div className="text-desc">
            <div className="product-name">{data.name || data.itemDescription}</div>
            <div className="description">
              {data.selectedColor || data.colorDescription} | {data.saleDescription}
            </div>
          </div>
        </div>
      </td>
      <td className="quantity">
        {data.quantity}
      </td>
      <td className={pr20 ? "price-padding" : "price"}>{currency}{data.totalPrice}</td>
      {!disableDelete && (
        <td className="remove-btn" onClick={() => removeItem(data.variantId)}>
          <img src={x} alt="" />
        </td>
      )}
    </tr>
  );
};

export default ItemRow;
