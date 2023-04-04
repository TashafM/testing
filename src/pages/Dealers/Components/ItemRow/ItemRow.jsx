import React from "react";
import "./itemrow.scss";
import listproduct from "../../../../assets/images/listproduct.png";
import x from "../../../../assets/images/x.svg";

const ItemRow = () => {
  return (
    <tr className="right-side-tr">
      <td className="single-product-item">
        <div className="img-div">
          <img src={listproduct} alt="" />
          <div className="text-desc">
            <div className="product-name">Konica Chrome</div>
            <div className="description">Magenta | 1 L. | RNB</div>
          </div>
        </div>
      </td>
      <td className="quantity">1</td>
      <td className="price">₹ 433</td>
      <td className="remove-btn">
        <img src={x} alt="" />
      </td>
    </tr>
  );
};

export default ItemRow;
