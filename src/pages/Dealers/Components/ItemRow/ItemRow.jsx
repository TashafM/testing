import React, { useEffect } from "react";
import "./itemrow.scss";
import listproduct from "../../../../assets/images/listproduct.png";
import x from "../../../../assets/images/x.svg";
import { EditItems } from "../../Dealers";
import { useContext } from "react";

const ItemRow = ({ disableDelete, pr20, popupScreen, data, removeItem,editProducts, getFromPop, setSelectedId, id, selectedId, nohover }) => {
  const currency = localStorage.getItem('currencySymbol')
  const {notEditable} = useContext(EditItems);
  

  const selectedItem = ()=>{
    const localData = JSON.parse(localStorage.getItem('popupItems'))
    // console.log(localData,'localData')
    // console.log(data,'data')

    const filtered = localData.filter((item)=>item.itemNumber==data.itemNumber)

    const initialData = JSON.stringify(filtered[0])
    localStorage.setItem('initialProductData',initialData)
    console.log('its selected item')
    console.log(filtered[0],'initialDAta')
    console.log(data.variantId,'data itemNumber')

    const filteredVariant = filtered[0].variants.filter((item)=>item.variantId == data.variantId)
    console.log(filteredVariant[0],'filteredvariant')

    const localVariant = JSON.stringify(filteredVariant[0])
    localStorage.setItem('variant', localVariant)
  }
  
  return (
    // <tr className={selectedId==id && id!=undefined ?"right-side-tr selected-tr": (nohover || notEditable?'right-side-tr no-hover':'right-side-tr')} onClick={!notEditable?()=>setSelectedId(id):null}>
    <tr className="right-side-tr" onClick={selectedItem}>
      <td
        className={
          popupScreen ? "single-product-item pl40" : "single-product-item"
        }
        onClick={() => {
          // if (!notEditable) {
          //   editProducts(data);
          //   getFromPop(data);
          // }
          editProducts(data);
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
