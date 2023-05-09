import React, { useEffect } from "react";
import "./itemrow.scss";
import listproduct from "../../../../assets/images/listproduct.png";
import x from "../../../../assets/images/x.svg";
import { AddProducts, EditItems } from "../../Dealers";
import { useContext } from "react";

const ItemRow = ({
  disableDelete,
  pr20,
  popupScreen,
  data,
  removeItem,
  editProducts,
  getFromPop,
  setSelectedId,
  id,
  selectedId,
  nohover,
  unique,
}) => {
  const currency = localStorage.getItem("currencySymbol");
  const { notEditable, setIndexNo, indexNo, editMode } = useContext(EditItems);
  const { cartOpen, setCartOpen} = useContext(AddProducts)


  console.log(cartOpen, 'cart status')

  useEffect(() => {
    if (editMode) {
      fetchOnEdit();
    }
  }, []);

  const fetchOnEdit = () => {
    const firstData = JSON.parse(localStorage.getItem("cart"));
    const {
      bpCatalogNumber,
      colorCode,
      colorDescription,
      grossPrice,
      packingCode,
      packingDescription,
      saleDescription,
      variantId,
      _id,
      ...rest
    } = firstData[0];
    const data = {
      bpCatalogNumber,
      colorCode,
      colorDescription,
      grossPrice,
      packingCode,
      packingDescription,
      saleDescription,
      variantId,
      _id,
    };
    localStorage.setItem("variant", JSON.stringify(data));
  };

  const selectedItem = () => {
    const localData = JSON.parse(localStorage.getItem("popupItems"));
    const filtered = localData.filter(
      (item) => item.itemNumber == data.itemNumber
    );

    const initialData = JSON.stringify(filtered[0]);
    localStorage.setItem("initialProductData", initialData);

    const filteredVariant = filtered[0].variants.filter(
      (item) => item.variantId == data.variantId
    );
    console.log(filteredVariant[0], "filteredvariant");

    const localVariant = JSON.stringify(filteredVariant[0]);

    const test = JSON.parse(localStorage.getItem("cart"));
    const qty = test.filter(
      (item) => item.variantId == filteredVariant[0].variantId
    );
    console.log(qty[0].quantity,'&&&&&&&&&&&&&&&&')
    // localStorage.setItem("quantity", qty[0].quantity);
  };



  return (
    // <tr className={selectedId==id && id!=undefined ?"right-side-tr selected-tr": (nohover || notEditable?'right-side-tr no-hover':'right-side-tr')} onClick={!notEditable?()=>setSelectedId(id):null}>
    // <tr className="right-side-tr" onClick={selectedItem}>
    //   <td
    //     className={
    //       popupScreen ? "single-product-item pl40" : "single-product-item"
    //     }
    //     onClick={() => {
    //       editProducts(data, id);
    //       getFromPop(data);
    //       setIndexNo(id);
    //     }}
    //   >
    //     <div className="img-div">
    //       <img src={listproduct} alt="" />
    //       <div className="text-desc">
    //         <div className="product-name">
    //           {data.name || data.itemDescription}
    //         </div>
    //         <div className="description">
    //           {data.selectedColor || data.colorDescription} |{" "}
    //           {data.saleDescription}
    //         </div>
    //       </div>
    //     </div>
    //   </td>
    //   <td className="quantity">{data.quantity}</td>
    //   <td className={pr20 ? "price-padding" : "price"}>
    //     {currency}
    //     {data.totalPrice}
    //   </td>
    //   {!disableDelete && (
    //     <td className="remove-btn" onClick={() => removeItem(data.variantId)}>
    //       <img src={x} alt="" />
    //     </td>
    //   )}
    // </tr>
    <tr className={cartOpen && indexNo==id? "right-side-tr selected-tr": "right-side-tr no-hover" } onClick={selectedItem}>
      <td
        className={
          popupScreen ? "single-product-item pl40" : "single-product-item"
        }
        onClick={() => {
          if(cartOpen){
          editProducts(data, id);
          getFromPop(data);
          setIndexNo(id);
          }
        }}
      >
        <div className="img-div">
          <img src={listproduct} alt="" />
          <div className="text-desc">
            <div className="product-name">
              {data.name || data.itemDescription}
            </div>
            <div className="description">
              {data.selectedColor || data.colorDescription} |{" "}
              {data.saleDescription}
            </div>
          </div>
        </div>
      </td>
      <td className="quantity">{data.quantity}</td>
      <td className={pr20 ? "price-padding" : "price"}>
        {currency}
        {data.totalPrice}
      </td>
      {!disableDelete && (
        <td
          className="remove-btn"
          onClick={(event) => {
            event.stopPropagation();
            removeItem(data.variantId);
          }}
        >
          <img src={x} alt="" />
        </td>
      )}
    </tr>
  );
};

export default ItemRow;
