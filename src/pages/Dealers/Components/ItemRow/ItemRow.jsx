import React from "react";
import "./itemrow.scss";
import listproduct from "../../../../assets/images/listproduct.png";
import x from "../../../../assets/images/x.svg";

const ItemRow = ({ disableDelete, pr20, popupScreen, data}) => {
  console.log(data,'from item row')
  return (
    <tr className="right-side-tr">
      <td
        className={
          popupScreen ? "single-product-item pl40" : "single-product-item"
        }
      >
        <div className="img-div">
          <img src={listproduct} alt="" />
          <div className="text-desc">
            <div className="product-name">
              {data.name}
            </div>
            <div className="description">
              {data.selectedColor} | {data.saleDescription}
            </div>
          </div>
        </div>
      </td>
      <td className="quantity">{data.quantity}</td>
      <td className={pr20 ? "price-padding" : "price"}>{data.totalPrice}</td>
      {!disableDelete && (
        <td className="remove-btn">
          <img src={x} alt="" />
        </td>
      )}
    </tr>
  );
};

export default ItemRow;
