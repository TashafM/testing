import React, { useState } from "react";
import "./orderlisttable.scss";
import { Table } from "react-bootstrap";
import ItemRow from "../ItemRow/ItemRow";

const OrderListTable = ({ disableDelete, data, setData, editProducts, getFromPop, setSelectedId, selectedId, noHover }) => {



  const del = (val) => {
    const filtered = data.filter((item) => item.variantId !== val);
    setData(filtered);
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
              removeItem={del}
              editProducts={editProducts}
              getFromPop={getFromPop}
              setSelectedId={setSelectedId}
              selectedId={selectedId}
            /></>
          ))}
      </tbody>
    </Table>
  );
};

export default OrderListTable;
