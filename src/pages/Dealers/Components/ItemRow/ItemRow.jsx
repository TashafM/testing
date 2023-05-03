import React, { useEffect } from "react";
import "./itemrow.scss";
import listproduct from "../../../../assets/images/listproduct.png";
import x from "../../../../assets/images/x.svg";
import { EditItems } from "../../Dealers";
import { useContext } from "react";

const ItemRow = ({ disableDelete, pr20, popupScreen, data, removeItem,editProducts, getFromPop, setSelectedId, id, selectedId, nohover }) => {
  const currency = localStorage.getItem('currencySymbol')
  const {notEditable} = useContext(EditItems);
  console.log(nohover,'8888888888888888888')
  console.log(notEditable,'99999999999')

  // const getFromPop = (product) => {
  //   const data = JSON.parse(localStorage.getItem('cart'))
  //   const flt = data.filter((itm)=>itm.itemNumber == product.itemNumber)
  //   console.log(flt,'filtered product')
  // }
  
  return (
    <tr className={selectedId==id && id!=undefined ?"right-side-tr selected-tr": (nohover || notEditable?'right-side-tr no-hover':'right-side-tr')} onClick={!notEditable?()=>setSelectedId(id):null}>
      <td
        className={
          popupScreen ? "single-product-item pl40" : "single-product-item"
        }
        onClick={() => {
          if (!notEditable) {
            editProducts(data);
            getFromPop(data);
          }
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
