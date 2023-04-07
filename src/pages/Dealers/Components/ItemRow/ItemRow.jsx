import React from "react";
import "./itemrow.scss";
import listproduct from "../../../../assets/images/listproduct.png";
import x from "../../../../assets/images/x.svg";

const ItemRow = ({ disableDelete, pr20, popupScreen }) => {
  return (
    <tr className="right-side-tr">
      <td className={popupScreen  ? 'single-product-item pl40' : "single-product-item"}>
        <div className="img-div">
          <img src={listproduct} alt="" />
          <div className="text-desc">
            <div className="product-name">Konica Chrome</div>
            <div className="description">Magenta | 1 L. | RNB</div>
          </div>
        </div>
      </td>
      <td className="quantity">1</td>
      <td className={pr20 ? 'price-padding' : 'price'}>₹ 433</td>
      {!disableDelete && (
        <td className="remove-btn">
          <img src={x} alt="" />
        </td>
      )}
    </tr>
  );
};

export default ItemRow;
