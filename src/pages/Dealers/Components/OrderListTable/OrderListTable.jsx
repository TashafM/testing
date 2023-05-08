import React, { useContext, useEffect, useState } from "react";
import "./orderlisttable.scss";
import { Table } from "react-bootstrap";
import ItemRow from "../ItemRow/ItemRow";
import { AddProducts, EditItems } from "../../Dealers";
import { axiosInstance } from "../../../../helper/axios";
import { API } from "../../../../helper/API";
import { GlobalSidePanel } from "../../Dealers";

const OrderListTable = ({
  disableDelete,
  data,
  setData,
  editProducts,
  getFromPop,
  setSelectedId,
  selectedId,
  noHover,
}) => {
  const { editMode, setEditMode } = useContext(EditItems);
  const { setShowPanel } = useContext(GlobalSidePanel);
  const {setIsEmpty} = useContext(AddProducts)

  useEffect(() => {
    if (data.length == 0 && editMode) {
      const emptyCart = () => {
        const principalCompanyUserCode = localStorage.getItem(
          "principalCompanyUserCode"
        );
        axiosInstance
          .post(API.DEALER_CLEAR_CART, { principalCompanyUserCode })
          .then((res) => {
            if (res.success) {
              setIsEmpty(true);
              localStorage.removeItem("cartProducts");
              setShowPanel(false)
              setEditMode(false)
            }
          })

          console.log(editMode , 'causing problem..............')
          
      };
      emptyCart();
    }
  }, [data]);

  const removeItem = (val) => {
    const filtered = data.filter((item) => item.variantId !== val);
    setData(filtered);
    localStorage.setItem("cart", JSON.stringify(filtered));
    localStorage.setItem("cartProducts", JSON.stringify(filtered)); // Add this line to update local storage
  };

  return (
    <Table>
      <thead className="header">
        <tr>
          <th>Products</th>
          <th>Quantity</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody className="right-side-body">
        {data.map((item, id) => (
          <>
            <ItemRow
              id={id}
              disableDelete={disableDelete}
              data={item}
              removeItem={removeItem}
              editProducts={editProducts}
              getFromPop={getFromPop}
              setSelectedId={setSelectedId}
              selectedId={selectedId}
            />
          </>
        ))}
      </tbody>
    </Table>
  );
};

export default OrderListTable;
